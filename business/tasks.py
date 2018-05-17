from celery import shared_task
from django.utils.crypto import get_random_string

from business.models import RegularUser, LoginLink, User, AuthInvitation
from messaging.models import Email


@shared_task
def process_auth_invitation(token):
    invitation = AuthInvitation.load(token)

    if invitation.state not in (
            AuthInvitation.State.PENDING,
            AuthInvitation.State.IN_PROGRESS
    ):
        return

    invitation.state = AuthInvitation.State.IN_PROGRESS
    invitation.save()

    if User.objects.filter(email=invitation.email).exists():
        subject = "Reset Password"

        email = Email.objects.create(
            user=invitation.login_link.og_users,
            template='messaging/%s.html' % invitation.type,
            context={
                'subject': subject,
                'login_link': invitation.login_link
            }
        )

        invitation.state = AuthInvitation.State.SUCCESS
        invitation.save()
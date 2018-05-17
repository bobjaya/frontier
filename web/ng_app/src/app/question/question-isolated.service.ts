import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class QuestionIsolatedService {

  private dataSource = new Subject<string>();
  public data$ = this.dataSource.asObservable();

  private progress = new Subject<number>();
  public progress$ = this.progress.asObservable();

  public publish(data: any) {
    this.dataSource.next(data);
  }

  public announceProgress(progress: number) {
    this.progress.next(progress);
  }
}
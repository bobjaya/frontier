import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SharedService {

  private dataSource = new Subject<string>();
  public data$ = this.dataSource.asObservable();

  public publish(data: any) {
    this.dataSource.next(data);
  }
}
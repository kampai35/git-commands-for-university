import { Component, OnInit, OnDestroy } from '@angular/core';

import { map, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  public clockText: string = '';

  private subs: Subscription = new Subscription;

  constructor() { }

  ngOnInit(): void {
    this.initClock();
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  private initClock(): void {
    this.subs = timer(0, 1000).pipe(
      map(() => new Date())
    ).subscribe(time => {
      this.clockText = `${time.getHours()}:${time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes()}:${time.getSeconds() < 10 ? '0'+time.getSeconds() : time.getSeconds()}`;
    });
  }


}

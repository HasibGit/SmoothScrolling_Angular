import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SmoothScroll';

  name = 'Angular ' + VERSION.major;

  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/']);
  }

  goDown1() {
    this.scroller.scrollToAnchor('targetRed');
  }

  goDown2() {
    //this.scroller.scrollToAnchor("targetGreen");
    document.getElementById('targetGreen').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  goDown3() {
    this.router.navigate([], { fragment: 'targetBlue' });
  }
}

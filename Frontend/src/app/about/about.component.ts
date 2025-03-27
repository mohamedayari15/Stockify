import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor() { }

  scrollToTop() {
  let currentScroll = document.documentElement.scrollTop;
  console.log(currentScroll)

  if (currentScroll > 0) {
    window.requestAnimationFrame(this.scrollToTop.bind(this));
    window.scrollTo(0, currentScroll - currentScroll / 10);
  }
}

}

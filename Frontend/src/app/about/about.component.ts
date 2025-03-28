import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private router: Router) { }

  ngOnInit(){
    this.scrollToTop()
  }

  scrollToTop() {
  let currentScroll = document.documentElement.scrollTop;
  console.log(currentScroll)

  if (currentScroll > 0) {
    window.requestAnimationFrame(this.scrollToTop.bind(this));
    window.scrollTo(0, currentScroll - currentScroll / 15);
  }
}

  goToHome() {
  this.router.navigate(['/home']);
  this.scrollToTop();
}

}

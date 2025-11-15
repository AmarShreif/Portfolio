import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  @ViewChild('typing') typingElement!: ElementRef;

  texts = [' Front-End Developer', ' Web Designer', ' Angular Developer'];

  index = 0;
  charIndex = 0;
  isDeleting = false;
  speed = 100;

  ngAfterViewInit(): void {
    this.typeEffect();
  }

  typeEffect() {
    const currentText = this.texts[this.index];
    const el = this.typingElement.nativeElement;

    if (!this.isDeleting) {
      el.textContent = currentText.slice(0, this.charIndex++);
    } else {
      el.textContent = currentText.slice(0, this.charIndex--);
    }

    if (!this.isDeleting && this.charIndex === currentText.length + 1) {
      this.isDeleting = true;
      setTimeout(() => this.typeEffect(), 1000);
      return;
    }

    if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.index = (this.index + 1) % this.texts.length;
    }

    setTimeout(() => this.typeEffect(), this.isDeleting ? 50 : this.speed);
  }
}

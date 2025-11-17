import { Component, HostBinding, signal, WritableSignal } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  ngOnInit(): void {
    initFlowbite();
  }
  // darkMode = signal<boolean>(false);
  // darkMode: WritableSignal<boolean> = signal(false);

  // @HostBinding('class.dark') get mode() {
  //   return this.darkMode();
  // }
}

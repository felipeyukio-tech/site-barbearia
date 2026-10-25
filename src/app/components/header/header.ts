import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @Output() navegar = new EventEmitter<string>();

  irPara(aba: string) {
    this.navegar.emit(aba);
  }
}
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  @Output() navegar = new EventEmitter<string>();

  irPara(aba: string) {
    this.navegar.emit(aba);
  }
}
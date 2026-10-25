import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { Admin } from './components/admin/admin'; // <-- Importar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, Hero, Services, Contact, Admin], // <-- Registar
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  abaAtual = signal('inicio');

  mudarAba(aba: string) {
    this.abaAtual.set(aba);
  }
}
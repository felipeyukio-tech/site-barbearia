import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Agendamento {
  id: number;
  nome: string;
  telefone: string;
  servico: string;
  data: string;
  horario: string;
  status: 'Pendente' | 'Concluído';
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  senhaDigitada = '';
  isAdminLogado = false;
  erroSenha = false;

  agendamentos = signal<Agendamento[]>([
    { id: 1, nome: 'Carlos Silva', telefone: '(11) 98765-4321', servico: 'Combo Kings (Cabelo + Barba)', data: '2026-10-26', horario: '14:00', status: 'Pendente' }
  ]);

  fazerLogin(event: Event) {
    event.preventDefault();
    if (this.senhaDigitada === 'admin123') {
      this.isAdminLogado = true;
      this.erroSenha = false;
    } else {
      this.erroSenha = true;
    }
  }

  concluirCorte(id: number) {
    this.agendamentos.update(lista =>
      lista.map(item => item.id === id ? { ...item, status: 'Concluído' as const } : item)
    );
  }

  excluirAgendamento(id: number) {
    if (confirm('Tens a certeza que pretendes excluir este agendamento?')) {
      this.agendamentos.update(lista => lista.filter(item => item.id !== id));
    }
  }

  limparTudo() {
    if (confirm('Tens a certeza que pretendes limpar todos os agendamentos e começar do zero?')) {
      this.agendamentos.set([]);
    }
  }
}
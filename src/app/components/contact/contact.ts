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
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  nomeCliente = '';
  telefoneCliente = '';
  servicoSelecionado = 'Corte Cabelo - R$ 45';
  dataSelecionada = '';
  horarioSelecionado = '10:00';

  agendamentos = signal<Agendamento[]>([
    { id: 1, nome: 'Carlos Silva', telefone: '(11) 98765-4321', servico: 'Combo Kings (Cabelo + Barba)', data: '2026-10-26', horario: '14:00', status: 'Pendente' }
  ]);

  mostrarModalAdm = false;
  senhaDigitada = '';
  isAdminLogado = false;
  erroSenha = false;

  agendar(event: Event) {
    event.preventDefault();
    if (!this.nomeCliente || !this.telefoneCliente || !this.dataSelecionada) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    const novoAgendamento: Agendamento = {
      id: Date.now(),
      nome: this.nomeCliente,
      telefone: this.telefoneCliente,
      servico: this.servicoSelecionado,
      data: this.dataSelecionada,
      horario: this.horarioSelecionado,
      status: 'Pendente'
    };

    this.agendamentos.update(lista => [novoAgendamento, ...lista]);
    alert(`Agendamento realizado com sucesso, ${this.nomeCliente}! Esperamos-te na Kings Barber.`);
    
    this.nomeCliente = '';
    this.telefoneCliente = '';
    this.dataSelecionada = '';
  }

  fazerLoginAdm(event: Event) {
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

  fecharAdm() {
    this.mostrarModalAdm = false;
    this.isAdminLogado = false;
    this.senhaDigitada = '';
    this.erroSenha = false;
  }
}
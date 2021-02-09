import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  msg: string[] = ['Você é mais forte do que pensa e será mais feliz do que imagina.',
                   'Tenha orgulho do quanto você já andou. Tenha fé em Quão longe você pode chegar.',
                   'Com determinação e foco no sucesso todos os sonhos vão se realizar.',
                   'Seja o motivo da motivação de alguém.',
                   'Só com a força de Deus você terá a coragem necessária para vencer qualquer desafio.',
                   'Toda manhã você ganha uma nova chance para começar e tentar viver diferente.',
                   'O sucesso é a soma de pequenos esforços repetidos dia após dia.'];

  constructor() { }

  getMensagem(){

    return this.msg[Math.floor(Math.random() * this.msg.length)];
  }
}


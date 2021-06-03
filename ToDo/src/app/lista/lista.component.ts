import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  Lista: string[] = [];
  Concluidos: string[] = [];
  AdicionarLista: string = ''

Adicionar() {
this.Lista.push(this.AdicionarLista);
console.log(this.Lista)
}

DoItem(index: number) {
this.Concluidos.push(this.Lista[index]);
this.Lista.splice(index, 1);
}

ExcluirConcluido(){
this.Concluidos.shift()  
}

ExcluirLista(){
this.Lista.shift()  
}


}

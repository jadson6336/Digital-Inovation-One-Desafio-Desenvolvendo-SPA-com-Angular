import { Component, Inject, OnInit } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HomeService } from './home.service';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg: string;
  constructor(public dialog: MatDialog, private homeService: HomeService) { 
    
  }

  ngOnInit(): void {
  }

  mostraMsg(){
    this.msg =  this.homeService.getMensagem();
    this.dialog.open(CaixaDeDialogo, {
      data: {
        msg: this.msg
      }
    });
  }
}

@Component({
  selector:'caixa-de-dialogo',
  templateUrl:'caixa-de-dialogo.html',
})

export class CaixaDeDialogo{
  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
}

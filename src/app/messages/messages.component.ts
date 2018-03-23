import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
 // messages : string[] =[];
  constructor(public _messageService:MessageService) { }

  ngOnInit() {
     // this.messages = this._messageService.messages;
  }
  // ClearMessage(){
  //   this.messages = [];
  // }

}

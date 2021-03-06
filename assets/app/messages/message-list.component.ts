import { Component, OnInit } from '@angular/core';
import { Message } from '../messages/message.model';
import { MessageService } from './message.service';
//import { MessageService } from './message.service';

@Component({
  selector : 'app-message-list',
  template : `<div class="col-md-8 col-md-offset-2">
                <app-message *ngFor="let message of messages" [message]="message" (editClicked)="message.content=$event"></app-message>
              </div>
            `
  
})
export class MessageListComponent implements OnInit {
  
   messages:Message[];
  
  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }

  constructor(private messageService:MessageService){}
 
  
 
  
}
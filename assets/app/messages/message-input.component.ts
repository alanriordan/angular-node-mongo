import { MessageService } from './message.service';
import { Component } from '@angular/core';
import { Message} from './message.model';
import { NgForm } from '@angular/forms';
@Component({
  selector : 'app-message-input',
  templateUrl : './message-input.component.html' 
 
})
export class MessageInputComponent{
  
  constructor(private messageService:MessageService){}
  
  onSubmit(form:NgForm){
    const message = new Message(form.value.content, 'Alan Riordan');
    this.messageService.addMessage(message).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    form.resetForm();
    //console.log(value);
  }
  
}
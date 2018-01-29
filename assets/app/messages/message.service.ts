import {Message} from './message.model';
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class MessageService {
  message: Message[] = [];

  constructor(private http: Http) {}

  addMessage(message: Message) {
    this.message.push(message);
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://localhost:3000/message', body, {headers:headers})
      .map((res: Response) => console.log(res.json()))
  }

  getMessages(): Message[] {
    return this.message;
  }

  deleteMessage(message: Message) {
    this.message.splice(this.message.indexOf(message), 1);
  }
}
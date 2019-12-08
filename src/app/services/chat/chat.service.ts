import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient'

import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from 'src/app/front/models/message.model';


@Injectable({
  providedIn: 'root'
})
export class ChatService {


  token = environment.dialogFlow.accessToken;
  client = new ApiAiClient({ accessToken: this.token });

  private conversationSubject = new Subject<Message[]>();
  private conversation: Message[] = [];
  private greetMessage = "Hi! It's Lacasa's Chatbot. Lacasa's assistant. How may I help you?";

  constructor() {
  }

  setConversation(con: Message[]) {
    this.conversationSubject.next(con);
  }

  getConversation(): Observable<Message[]> {
    return this.conversationSubject.asObservable();
  }

  addMessageToConversation(msg: Message) {
    this.conversation.push(msg);
    this.setConversation(this.conversation);
  }

  sendMessageToBot(messageToSend: string) {

    let msgFromHuman: Message = {
      content: messageToSend,
      sentBy: 'human'
    }

    this.addMessageToConversation(msgFromHuman);

    this.client.textRequest(messageToSend).then(response => {
      let replyFromBot: Message = {
        content: response.result.fulfillment.speech,
        sentBy: 'bot'
      }
      this.addMessageToConversation(replyFromBot);
    });
  }

  init() {

    this.getConversation().subscribe((conv: Message[]) => {
      this.conversation = conv;
    });

    let greeting: Message = {
      content: this.greetMessage,
      sentBy: 'bot'
    };

    this.setConversation([greeting]);
  }

}

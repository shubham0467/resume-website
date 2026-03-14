import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css',
})
export class ChatbotComponent {

messages: ChatMessage[] = [];
userInput = "";
isOpen = false;
isTyping = false;

@ViewChild('chatMessages') chatMessages!: ElementRef;

constructor(
  private http: HttpClient,
  private elementRef: ElementRef
) {}

toggleChat() {
  this.isOpen = !this.isOpen;
}

@HostListener('document:click', ['$event'])
clickOutside(event: Event) {

  if (!this.isOpen) return;

  const clickedInside = this.elementRef.nativeElement.contains(event.target);

  if (!clickedInside) {
    this.isOpen = false;
  }
}

scrollToBottom() {
  setTimeout(() => {
    if (this.chatMessages) {
      this.chatMessages.nativeElement.scrollTop =
        this.chatMessages.nativeElement.scrollHeight;
    }
  }, 50);
}

sendMessage() {

  const question = this.userInput.trim();
  if (!question) return;

  this.messages.push({
    sender: 'user',
    text: question
  });

  this.userInput = "";
  this.isTyping = true;

  this.scrollToBottom();

  this.http.post<any>("http://localhost:3000/chat", {
    message: question
  }).subscribe({

    next: (data) => {

      this.isTyping = false;

      this.messages.push({
        sender: 'bot',
        text: data.reply || "I couldn't understand that."
      });

      this.scrollToBottom();
    },

    error: (error) => {

      console.error(error);

      this.isTyping = false;

      this.messages.push({
        sender: 'bot',
        text: "Server error. Please try again later."
      });

      this.scrollToBottom();
    }

  });
}
}
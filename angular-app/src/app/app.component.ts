import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-app';
  items = {
    key1: 'Default Route',
    key2: 'Post Route',
    key3: 'Name Route'
  }
  text = "No Response"
  inputText = ""

  getData(key: String) {
    switch(key) {
      case "key1":
        this.text = "Hello"
        break;
      case "key3":
        this.text = this.inputText
        break;
      default:
        this.text = "No Response"
    }
  }

  determinePostReq(key: String) {
    return key === "key3"
  }

  onInputChange(newValue: string) {
    this.inputText = newValue
  }
}

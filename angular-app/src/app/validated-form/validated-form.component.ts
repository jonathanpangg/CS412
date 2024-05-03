import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ValidatedFormComponent',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './validated-form.component.html',
  styleUrl: './validated-form.component.css'
})

export class ValidatedFormComponent {
  query: string = ""
  @Output() dataEmit = new EventEmitter<string>()

  onInputChange() {
    this.dataEmit.emit(this.query)
  }
}

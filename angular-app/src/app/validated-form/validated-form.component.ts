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
  @Input() initalData: string | undefined
  @Output() dataEmit = new EventEmitter<string>()

  emitData(event: any) {
    this.initalData = event.target.value
    this.dataEmit.emit(this.initalData)
  }
}

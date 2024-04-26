import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ResponseComponent',
  standalone: true,
  imports: [],
  templateUrl: './response.component.html',
  styleUrl: './response.component.css'
})

export class ResponseComponent {
  @Input() responseData: string | undefined
  @Output() responseEmit = new EventEmitter<string>()

  emitResponse() {
    this.responseEmit.emit(this.responseData)
  }
}

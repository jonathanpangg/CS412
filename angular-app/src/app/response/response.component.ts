import { Component, Input } from '@angular/core';

@Component({
  selector: 'ResponseComponent',
  standalone: true,
  imports: [],
  templateUrl: './response.component.html',
  styleUrl: './response.component.css'
})

export class ResponseComponent {
  @Input() responseData: string | undefined
}

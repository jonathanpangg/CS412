import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidatedFormComponent } from './validated-form/validated-form.component';
import { ResponseComponent } from './response/response.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    FormsModule,
    ValidatedFormComponent,
    ResponseComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-app';
  query = ""

  onInputChange(event: any) {
    this.query = event.target.value;
    console.log(this.query)
  }
}

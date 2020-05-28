import { Component } from '@angular/core';
import { ExampleService } from './core/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string;
  timeStamp: string;

  constructor(private exampleService: ExampleService) { }
  ngOnInit() {
    this.exampleService.getExampleMessage().subscribe((result) => {
      this.message = result.message;
      this.timeStamp = result.timeStamp;
    });
  }
}
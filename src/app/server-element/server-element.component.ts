import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string, model: string, registration: string, region: string};
 // @Input() anotherElement: {type: string, registration: number, model: string};

  constructor() { }

  ngOnInit() {
  }

}

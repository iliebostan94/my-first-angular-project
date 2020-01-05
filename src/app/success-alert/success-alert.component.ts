import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-success-alert',
  template: '<app-sub-file-to-success></app-sub-file-to-success><app-sub-file-to-success></app-sub-file-to-success>',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



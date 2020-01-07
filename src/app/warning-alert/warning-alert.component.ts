import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  userName = 'ilie';
  displayText = false;
  log = [];

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.displayText = !this.displayText;
    this.log.push(this.log.length + 1);
  }

}

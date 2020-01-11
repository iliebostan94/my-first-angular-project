import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string,
     serverRegistration: string, serverModel: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string,
     serverRegistration: string, serverModel: string}>();
  newServerName = '';
  newServerContent = '';
  newServerRegistration = '';
  newServerModel = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent,
     serverRegistration: this.newServerRegistration, serverModel: this.newServerModel});
  }

  onAddBlueprint() {
  this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent,
    serverRegistration: this.newServerRegistration, serverModel: this.newServerModel});
  }

}

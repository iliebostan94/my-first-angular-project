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
    serverModel: string, serverRegistration: string, serverRegion: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string,
    serverModel: string, serverRegistration: string, serverRegion: string}>();
  newServerName = '';
  newServerContent = '';
  newServerRegistration = '';
  newServerModel = '';
  newServerRegion = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent,
    serverModel: this.newServerModel, serverRegistration: this.newServerRegistration, serverRegion: this.newServerRegion});
  }

  onAddBlueprint() {
  this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent,
    serverModel: this.newServerModel, serverRegistration: this.newServerRegistration, serverRegion: this.newServerRegion});
  }

}

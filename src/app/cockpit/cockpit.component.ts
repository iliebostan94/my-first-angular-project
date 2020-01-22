import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
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
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  newServerRegistration = '';
  newServerModel = '';
  newServerRegion = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput.value),
    console.log(this.serverContentInput);
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value,
     serverModel: this.newServerModel, serverRegistration: this.newServerRegistration, serverRegion: this.newServerRegion});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
  this.blueprintCreated.emit({ serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value,
    serverModel: this.newServerModel, serverRegistration: this.newServerRegistration, serverRegion: this.newServerRegion});
  }

}

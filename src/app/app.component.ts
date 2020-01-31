import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [ ' h1{ color: red;}  ' ]
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!', registration: '573', model: 'BMW', region: 'Moldova'}];
   // regDetails = [{type: 'server', registration: 'GWF573', model: 'BMW'}];
   oddNumbers: number[] = [];
   evenNumbers: number[] = [];


   onServerAdded(serverData: {serverName: string, serverContent: string, serverRegistration: string,
     serverModel: string, serverRegion: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      registration: serverData.serverRegistration,
      model: serverData.serverModel,
      region: serverData.serverRegion
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string, serverRegistration: string,
     serverModel: string, serverRegion: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      registration: blueprintData.serverRegistration,
      model: blueprintData.serverModel,
      region: blueprintData.serverRegion
    });
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }

  onIntervalFired(firedNumber: number) {
    // console.log(firedNumber);
    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }


}


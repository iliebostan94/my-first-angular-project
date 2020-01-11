import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [ ' h1{ color: red;}  ' ]
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!', registration: '573', model: 'BMW'}];
   // regDetails = [{type: 'server', registration: 'GWF573', model: 'BMW'}];

   onServerAdded(serverData: {serverName: string, serverContent: string, serverRegistr: string, serverModel: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
      registration: serverData.serverRegistr,
      model: serverData.serverModel
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string, serverRegistr: string, serverModel: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
      registration: blueprintData.serverRegistr,
      model: blueprintData.serverModel
    });
  }


}


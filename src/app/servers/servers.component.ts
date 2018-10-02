import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers', //works like css Selector
  // selector: '[app-servers]',
  selector: 'app-servers', 
  templateUrl: './servers.component.html',
  // template: ` 
  //   <app-server></app-server>
  //   <app-server></app-server>`, // We can write HTML here if we doesn't have too much tags
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: Boolean = false;

  servers: Array<String> = ['Mahmoud', 'Mustafa', 'Lotfy'];

  serverCreationStatus: String = 'No server was created yet!';

  serverName: String = 'TestServer';
  serverCreated: Boolean = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true; 
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created successfully. Name is ' + this.serverName ;
  }
  
  onUpdateServerName(event: Event) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

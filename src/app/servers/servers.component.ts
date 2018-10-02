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

  constructor() { }

  ngOnInit() {
  }

}

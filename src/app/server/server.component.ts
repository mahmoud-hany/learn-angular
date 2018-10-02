import { Component } from '@angular/core';

//6 Define angular component tell angular that this class is a special class [Angular component]
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`     
        p{
            border-radius: 5px;
            padding: 10px;
            color: white
        }
        .offline{
            color: #424242;
            font-weight: bold;
        }
    `]
})

export class ServerComponent {
    serverStatus: string = 'offline';
    serverID: number = 10;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : '#EEE'
    }
}
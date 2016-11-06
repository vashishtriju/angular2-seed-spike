import {Component} from '@angular/core';

@Component({
selector:"ss-app",
template:`
<h1 class="component">{{pageTitle}}</h1>
`
})
export class AppComponent{
 pageTitle: string = "Sample Angular 2 Spike Seed Project"
}
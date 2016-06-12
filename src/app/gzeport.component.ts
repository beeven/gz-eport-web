import { Component } from '@angular/core';
import { PlatformComponent } from './+platform';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'gzeport-app',
  templateUrl: 'gzeport.component.html',
  styleUrls: ['gzeport.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/platform', component: PlatformComponent}
])
export class GzeportAppComponent {
  title = 'gzeport works!';
}

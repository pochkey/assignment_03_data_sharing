import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-principle',
  templateUrl: './principle.component.html',
  styleUrls: ['./principle.component.css']
})
export class PrincipleComponent {
  @Input ('prncplVarShrng') pvs : any;

}

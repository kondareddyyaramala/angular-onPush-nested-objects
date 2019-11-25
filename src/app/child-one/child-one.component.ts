import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Address  } from '../user';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildOneComponent {
  @Input() address: Address;

 ngOnChanges(changes){
    console.log("child comp " + changes.address.currentValue);
  }
}
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'hello',
  template: `<app-child-one></app-child-one>`,
  styles: [`h1 { font-family: Lato; }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent  {
  @Input() user: User;

  ngOnChanges(changes){
    console.log(changes.user.currentValue);
  }
}

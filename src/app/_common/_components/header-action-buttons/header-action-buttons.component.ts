import {Component, Input, ElementRef} from '@angular/core';
import appConstant from 'src/app/app.constant';
import {HeaderActionButton} from '../../_interfaces';

@Component({
  selector: 'pe-header-action-buttons[headerActionButtons]',
  templateUrl: './header-action-buttons.component.html',
  styleUrls: ['./header-action-buttons.component.scss']
})
export class HeaderActionButtonsComponent {
  appConstant = appConstant;
  elementSelector: string;

  showMoreHeaderActionButtons: boolean;

  @Input() headerActionButtons: HeaderActionButton[];

  constructor(private _elementRef: ElementRef) {
    this.elementSelector = _elementRef.nativeElement.tagName.toLowerCase();
  }
}
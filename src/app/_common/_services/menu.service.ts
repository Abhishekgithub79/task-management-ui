import {Injectable} from '@angular/core';

@Injectable()
export class MenuService {
  showmenu = true;
  
  constructor() {}

  onToggle() {
    this.showmenu = !this.showmenu;
  }

  menuStatus() {
    return this.showmenu;
  }
}

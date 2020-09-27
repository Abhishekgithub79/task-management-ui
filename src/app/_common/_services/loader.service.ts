import { LoaderComponent } from './../_components/loader/loader.component';
import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
  private loader: LoaderComponent ;
  private loaderCount = 0;

  constructor() {
  }

  registerLoader(loaderCmp: LoaderComponent): void {
    this.loader = loaderCmp;
  }

  show(): void {
     this.loader.show = true;
     this.loaderCount++;
  }

  hide(): void {
    this.loaderCount--;
    if (this.loaderCount <= 0) {
      this.loaderCount = 0;
      this.loader.show = false;
    }
  }
}

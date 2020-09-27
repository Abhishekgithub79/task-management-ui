import { LoaderService } from './../../_services/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']}
  )
export class LoaderComponent implements OnInit {
  show = false;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.registerLoader(this);
  }
}
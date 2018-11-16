import { Component, OnInit } from '@angular/core';
import { DynamicTitleService } from '../dynamic-title.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private _dynamicService: DynamicTitleService,
  ) { }

  ngOnInit() {
    this._dynamicService.setTitle("About")
  }

}

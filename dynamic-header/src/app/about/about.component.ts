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
  button: boolean = false;
  ngOnInit() {
    this._dynamicService.setTitle("About")
  }
  show(index) {
    this.button = index+1;
  };

  dataList = [
    { "name": "Anu", "rank": [1, 2, 3] },
    { "name": "Amu", "rank": [4, 5, 6] },
    { "name": "Manu", "rank": [7, 8, 9] }
  ];

}

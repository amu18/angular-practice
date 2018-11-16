import { Component, OnInit } from '@angular/core';
import { DynamicTitleService } from '../dynamic-title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private _dynamicService: DynamicTitleService,
  ) { }

  ngOnInit() {
    this._dynamicService.setTitle("Contact")
  }

}

import { Component } from '@angular/core';
import { DynamicTitleService } from './dynamic-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';

  constructor(
    public _dynamicService: DynamicTitleService,
  ) { }

  ngOnInit() {
    this._dynamicService.title.subscribe(title => {
      this.title = title;
    })

  }
}

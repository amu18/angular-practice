import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Promises vs Observables';



  constructor(@Inject(DOCUMENT) private document: any) {

    // Single value vs multiple values
    const numberPromise = new Promise((resolve) => {
      resolve(5);
      resolve(10);
    });

    numberPromise.then(value => document.write("<b>Promise call: </b>", value, "<br>"));


    const numberObservable = new Observable((observer) => {
      observer.next(5);
      observer.next(10);
    });

    numberObservable.subscribe(value => document.write("<b>Observable call: </b>", value, "<br>"));



    }

}

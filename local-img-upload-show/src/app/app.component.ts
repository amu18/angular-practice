import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Img upload and show example';
  url = '';
  onSelectFile(event) {
    
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event :Event) => { // called once readAsDataURL is completed

        console.log(event)
        this.url = reader.result;
      }
    }
  }
}

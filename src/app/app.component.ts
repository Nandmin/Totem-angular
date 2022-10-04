import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})

export class AppComponent {
  title = 'Totem-angular';
  model: string = 'Hamburger';
  myDate: any = new Date();
  // myTime: any = new Date();
  today: number = Date.now();

  constructor (private datePipe: DatePipe){

    //this.myTime = this.datePipe.transform(this.myDate, 'hh:mm:ss');
    // this.myDate = this.datePipe.transform(this.myDate, 'dd.MM.yyyy');
    // console.log(this.myDate)
  }
  
  ngOnInit(): void {
    setInterval(() => {
      this.today = Date.now();
      // console.log(this.today);
    }, 1000);
  }
}

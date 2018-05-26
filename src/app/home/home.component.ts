import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gif: string;

  constructor() {
    this.gif = "../../assets/img/Kris_Sara_gif_static.gif";
  }

  ngOnInit() {
  }

  public gifOnHover() {
    this.gif = "../../assets/img/Kris_Sara_gif.gif"
  }

  public gifOffHover() {
    this.gif = "../../assets/img/Kris_Sara_gif_static.gif"
  }
  
}

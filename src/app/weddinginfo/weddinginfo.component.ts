import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-subroute',
  templateUrl: './weddinginfo.component.html',
  styleUrls: ['./weddinginfo.component.css']
})
export class WeddingInfoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
     this.route.fragment.subscribe(f => {
         const element = document.querySelector('#' + f);
         if (element) {
			 const bodyRect = document.body.getBoundingClientRect().top;
			 const elementRect = element.getBoundingClientRect().top;
			 const elementPosition = elementRect - bodyRect;
		     window.scrollTo({top: elementPosition - 75,
		          			  left: 0,
		          			  behavior: "smooth"
		     });
         }
         else {
         	 window.scrollTo({top: 0, 
         	 				  left: 0, 
         	 				  behavior: "smooth"});
         }
    });
  }

}

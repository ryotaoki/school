import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public isCollapsed = false;
  
  constructor(private router: Router) { }

  goTo(link){
    this.router.navigate([link]);

  }

  ngOnInit(): void {
  }

}

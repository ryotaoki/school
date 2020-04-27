import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  speaker= {title: '', price: '', description: '', quantity: null}

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): {
    this.speaker.title = this.route.snapshot.params['t'];
    this.speaker.price = this.route.snapshot.params['p'];
    this.speaker.description= this.route.snapshot.params['d'];
    this.speaker.quantity = this.route.snapshot.params['q'];
  }

}

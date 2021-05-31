import { Component, OnInit } from '@angular/core';
import { Path } from '../../config'
@Component({
  selector: 'app-header-promo',
  templateUrl: './header-promo.component.html',
  styleUrls: ['./header-promo.component.css']
})
export class HeaderPromoComponent implements OnInit {
  assets_url: String = Path.url;
  banner_img: String = this.assets_url + 'img/banner/top/header-promotion.jpg'
  
  

  constructor() { }

  ngOnInit() {
  }

}

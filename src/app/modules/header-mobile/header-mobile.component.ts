import { Component, OnInit } from '@angular/core';
import { Path } from '../../config'
@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {
  assets_url: String = Path.url;

  constructor() { }

  ngOnInit() {
  }

}

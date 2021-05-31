import { Component, OnInit } from '@angular/core';
import { Path } from '../../config'
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  assets_url: String = Path.url;

  constructor() { }

  ngOnInit() {
  }

}

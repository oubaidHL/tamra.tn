import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-v',
  templateUrl: './home-v.component.html',
  styleUrls: ['./home-v.component.scss']
})
export class HomeVComponent implements OnInit {

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor() { }

  ngOnInit(): void {
  }

}

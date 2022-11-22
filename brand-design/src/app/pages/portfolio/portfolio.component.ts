import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToPage(pageName:string): void {
    this.router.navigate([`${pageName}`]);
  }

}

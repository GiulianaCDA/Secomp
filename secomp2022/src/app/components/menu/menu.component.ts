import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  page: string = ' '

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.page = this.CurrentPage
    console.log(this.page)
  }
  
  get CurrentPage(){
    return this.router.url
  }
}

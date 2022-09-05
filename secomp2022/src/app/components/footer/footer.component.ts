import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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

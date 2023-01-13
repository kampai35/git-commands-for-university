import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { MenuItems } from 'src/app/enums/menu-items.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public readonly MenuItem = MenuItems;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public redirectTo(menuItem: MenuItems): void {
    this.router.navigate([menuItem]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENUITEMS } from 'src/app/layout/sidebar-menu';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  menuItems = MENUITEMS;
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  onClickSubmenu(event: any){
    this.router.navigate([`/${event.path}`]);
  }

  onClickMenu(event: any) {
    this.router.navigate([`/${event.path}`]);
  }
}

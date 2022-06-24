import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  selectedCat: string = "";
  flagConsole : boolean = false;
  flagGames: boolean = false;
  flagAccesserios: boolean = false;

  categories = ["Console", "Games", "Accesserios"];

  showConsole() {
    this.selectedCat = this.categories[0];
    this.flagConsole = true;
    this.flagGames = false;
    this.flagAccesserios = false
  }
  showGames() {
    this.selectedCat = this.categories[1];
    this.flagConsole = false;
    this.flagGames = true;
    this.flagAccesserios = false
  }
  showAccesserios() {
    this.selectedCat = this.categories[2];
    this.flagConsole = false;
    this.flagGames = false;
    this.flagAccesserios = true;
  }




  constructor() { }


  ngOnInit(): void {
  }

}

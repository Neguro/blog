import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.scss']
})
export class PostlistitemComponent implements OnInit {
  @Input() titre: string;
  @Input() contenu: string;
  loveIts: number;
  date: Date;

  constructor() 
  {
    this.titre = "";
    this.contenu = "";
    this.loveIts = 0;
    this.date = new Date();
   }

  ngOnInit(): void {
  }

  getLoveIt()
  {
    return this.loveIts;
  }
  
  clickLoveIt()
  {
    this.loveIts++;
  }
  clickDontLoveIt()
  {
    this.loveIts--;
  }
}

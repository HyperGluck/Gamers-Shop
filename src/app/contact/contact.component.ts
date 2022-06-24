import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name1 = "Karim Kablan";
  profession1 = "Software";
  email1 = "kareem9245@gmail.com";
  phone1="0542587909"

  name2 = "Yonathan Simhon";
  profession2 = "Software";
  email2 = "Yonisimhon@gmail.com";
  phone2 = "0526674766"

}

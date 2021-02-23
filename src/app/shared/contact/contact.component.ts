import { Component, OnInit } from '@angular/core';
import { CONTACT_INFO } from 'src/app/core/app.constant';
import { ContactInfoType } from 'src/app/core/app.types';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactInfo:ContactInfoType[] = CONTACT_INFO;
  constructor() { }

  ngOnInit(): void {
  }

}

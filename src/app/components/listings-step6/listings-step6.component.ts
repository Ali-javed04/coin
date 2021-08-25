import { Component, OnInit } from '@angular/core';
import { FileHandle } from 'src/app/file-handle';

@Component({
  selector: 'app-listings-step6',
  templateUrl: './listings-step6.component.html',
  styleUrls: ['./listings-step6.component.scss']
})
export class ListingsStep6Component implements OnInit {
  uploadedFiles: FileHandle[];
  listofCheckboxes = [
    {
      label:'Smoke Alarm',
      value:true
    },
    {
      label:'Carbon Monoxide Alarm',
      value:true
    },
    {
      label:'Extinguisher',
      value:true
    },
    {
      label:'Security Alarm',
      value:true
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }
  filesDropped(files: FileHandle[]) {
    this.uploadedFiles = files;
}
}

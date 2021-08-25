import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-detail-page',
  templateUrl: './video-detail-page.component.html',
  styleUrls: ['./video-detail-page.component.scss']
})
export class VideoDetailPageComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: ElementRef;
  tags = [
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer'
    },
    {
      name:'Disahwer condaitioner'
    },
    {
      name:'Disahwer condaitioner'
    },
    {
      name:'Disahwer condaitioner'
    },
    {
      name:'Disahwer condaitioner'
    },

  ]
  videoSource = 'https://www.youtube.com/watch?v=_iLUpu5CZVo'
    constructor() { }

  ngOnInit(): void {
  }
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
}

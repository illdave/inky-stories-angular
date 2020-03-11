import { Component,  ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-comic-story',
  templateUrl: './comic-story.component.html',
  styleUrls: ['./comic-story.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComicStoryComponent implements OnInit {
  name = 'Inky Stories Comic';
  constructor() { }
  ngOnInit(): void {
  }
}

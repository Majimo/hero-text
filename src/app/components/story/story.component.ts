import { Component, OnInit, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  stories: any;

  constructor(private _storyService: DataService, private router: Router) { }

  ngOnInit() {
    this._storyService.getStory().subscribe(storyData => this.stories = storyData);
  }

  headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

  goTo(id) {
    this.router.navigate(['/next', id]);
  }

}

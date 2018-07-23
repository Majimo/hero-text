import { Component, OnInit, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
@Injectable()
export class MainComponent implements OnInit {

  story: any;

  constructor(private _storyService: DataService, private router: Router) { }

  ngOnInit() {
    this._storyService.getStory().subscribe(storyData => this.story = storyData);
  }

  headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

  goTo(id) {
    this._storyService.getNextPage(id).subscribe(storyData => this.story = storyData);
  }
}

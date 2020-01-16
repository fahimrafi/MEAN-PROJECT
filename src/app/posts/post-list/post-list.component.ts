import { Component, Input, OnInit  } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts:Post[] =[];
  // posts = [
  //   {title: 'First Post', content:'This is the first post\'s content '},
  //   {title: 'Second Post', content:'This is the second post\'s content '},
  //   {title: 'Third Post', content:'This is the third post\'s content '}
  // ];

  constructor() { }
  ngOnInit() {
  }

}

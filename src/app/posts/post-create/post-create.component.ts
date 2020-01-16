import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  // public newPost2 = '';
  // public newPost3 = '';
   enteredContent = "";
   enteredTitle = "";
   @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }


  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postCreated.emit(post);
  }

}

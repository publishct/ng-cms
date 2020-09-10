import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article';

//1. import router so that we can redirect after a delete.
import { Router } from '@angular/router';
@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService, 
    private router: Router,
  ) { }
  
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getArticle(id);
  }

  getArticle(id): void {
    this.articlesService.getArticle(id).subscribe(
      (response:any) => {
        this.article = response.article
      }
    );
  }
  //3. Implement the deleteArticle() method
deleteArticle(id: string): void {
  if(confirm("Are you sure to delete " + this.article.title)) {
    this.articlesService.deleteArticle(id).subscribe(
      ()=>{this.router.navigate(['/articles'])}
    );
  }
}
}

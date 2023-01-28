import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public articles: any[] = [];

  constructor(
    private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.articleService.getArticlesByCategory().subscribe({
      next: (data) => {
        this.articles = data.articles; 
        console.log(this.articles)
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  // public getArticlesByCategory(): void {
  //   this.articleService.getArticlesByCategory().subscribe({
  //     next: (data) => {
  //       this.articles = data.articles; 
  //       console.log(this.articles)
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     }
  //   })
  // }

}

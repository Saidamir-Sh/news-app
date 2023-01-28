import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: any[] = [];

  constructor(
    private articleService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.getArticlesByCategory()
  }

  public getArticlesByCategory(): void {
    this.articleService.getArticlesByCategory().subscribe({
      next: (data) => {
        this.articles = data; 
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}

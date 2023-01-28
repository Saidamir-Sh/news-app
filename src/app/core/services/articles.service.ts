import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private categoryURL = 'category=entertainment' 

  constructor(private request: RequestService) { }

  public getArticlesByCategory(): Observable<any> {
   return this.request.get(this.categoryURL) 
  }
}

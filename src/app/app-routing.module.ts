import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './features/articles/articles.component';

const routes: Routes = [
    { path: '', redirectTo: 'articles', pathMatch: 'full' },
    { path: 'articles', component: ArticlesComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxTweetModule } from "ngx-tweet";

import {
	SharedModule,
	FooterComponent,
	HeaderComponent,
} from './shared';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { ComicStoryComponent } from './comic-story/comic-story.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { StoreComponent } from './store/store.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutTestComponent } from './about-test/about-test.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        ArticleComponent,
        ComicStoryComponent,
        ComicListComponent,
        StoreComponent,
        PageNotFoundComponent,
        AboutTestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        SharedModule,
		    NgxTweetModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import { GithubFollowersService } from './github-followers/services/github-followers.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        GithubFollowersComponent,
                        HomeComponent,
                        NavbarComponent
                    ],
                    imports: [
                        BrowserModule,
                        HttpModule,
                        RouterModule.forRoot([
                            { path: '', component: HomeComponent },
                            { path: 'followers', component: GithubFollowersComponent }
                        ])
                    ],
                    providers: [GithubFollowersService],
                    bootstrap: [AppComponent]
                },] },
    ];
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map
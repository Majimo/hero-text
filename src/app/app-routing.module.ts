import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { ErrorComponent } from './components/error/error.component';
import { StoryComponent } from './components/story/story.component';

const StoryRoutes: Routes = [
    { path: 'home', component: MainComponent },
    { path: 'next/:id', component: StoryComponent },
    { path: '', component: MainComponent },
    { path: '**', component: ErrorComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(StoryRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
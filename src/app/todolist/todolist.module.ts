import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CompletedFilterPipe, TodolistComponent, TodoComponent } from './index';

@NgModule({
    declarations: [
        CompletedFilterPipe,
        TodolistComponent,
        TodoComponent,
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    exports: [
        CompletedFilterPipe,
        TodolistComponent
    ]
})
export class TodolistModule {
}

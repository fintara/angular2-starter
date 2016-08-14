import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'as-todo',
    templateUrl: 'app/todolist/todo.html'
})
export class TodoComponent implements OnInit {

    @Input() todo;

    constructor() {
        // no
     }

    ngOnInit() {
        // 
    }

}

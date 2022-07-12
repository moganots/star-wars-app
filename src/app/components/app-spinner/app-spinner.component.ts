import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-spinner',
    templateUrl: './app-spinner.component.html',
    styleUrls: ['./app-spinner.component.css']
})
export class AppSpinnerComponent implements OnInit {
    @Input() public message = '';

    constructor(){}

    ngOnInit(): void{}
}

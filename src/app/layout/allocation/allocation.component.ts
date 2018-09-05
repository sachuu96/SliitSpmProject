import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-allocation',
    templateUrl: './allocation.component.html',
    styleUrls: ['./allocation.component.scss'],
    animations: [routerTransition()]
})
export class AllocationComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllocationRoutingModule } from './allocation-routing.module';
import { AllocationComponent } from './allocation.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [CommonModule, AllocationRoutingModule, PageHeaderModule],
    declarations: [AllocationComponent]
})
export class AllocationModule {}

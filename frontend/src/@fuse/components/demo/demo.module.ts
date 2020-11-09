import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { FuseDemoContentComponent } from './demo-content/demo-content.component';
import {FuseRequirementsContentComponent} from'./demo-content/requirements-content.component';
import { FuseDemoSidebarComponent } from './demo-sidebar/demo-sidebar.component';
import { from } from 'rxjs';

@NgModule({
    declarations: [
        FuseDemoContentComponent,
        FuseRequirementsContentComponent,
        FuseDemoSidebarComponent
    ],
    imports     : [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports     : [
        FuseDemoContentComponent,
        FuseRequirementsContentComponent,
        FuseDemoSidebarComponent
    ]
})
export class FuseDemoModule
{
}

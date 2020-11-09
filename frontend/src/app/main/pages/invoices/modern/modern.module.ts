import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { InvoiceService } from 'app/main/pages/invoices/invoice.service';
import { InvoiceModernComponent } from 'app/main/pages/invoices/modern/modern.component';
import {MatTabsModule} from '@angular/material/tabs';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { createanewproject } from './compose/newproject.component';
import { addnewwidget } from './addwidget/addwidget.component';
import { addnewstaging } from './addstaging/addstaging.component';
import { createanewtask } from './newtask/newtask.component';
import { MailNgrxComposeDialogComponent3 } from './compose2/compose2.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { mockupmodal } from './mockup-modal/mockup-modal.component';
import { FuseHighlightModule } from '@fuse/components';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { mailnotification } from './mail-notification/mailnot.component';
import { addnewmockup } from './addmockup/addmockup.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { savetasktemplate } from './savetemplate/savetemplate.component';









const routes = [
    {
        path     : 'invoices/modern',
        component: InvoiceModernComponent,
        resolve  : {
            search: InvoiceService
        }
    }
];

@NgModule({
    declarations: [
        InvoiceModernComponent,
        createanewproject,
        createanewtask,
        mockupmodal,
        addnewwidget,
        mailnotification,
        MailNgrxComposeDialogComponent3,
        addnewmockup,
        addnewstaging,
        savetasktemplate
        
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatTabsModule,
        MatButtonModule,
        DragDropModule,
        FuseSharedModule,
        MatIconModule,
        MatMenuModule,
        MatDividerModule,
        MatExpansionModule,
        MatTooltipModule,
        MatProgressBarModule,
        MatTableModule,
        MatGridListModule,
        MatFormFieldModule,
        MatSelectModule,
        MatBadgeModule,
        MatInputModule,
        MatToolbarModule,
        MatDatepickerModule,
        MatCardModule,
        MatGridListModule,
        FuseHighlightModule,
        MatCheckboxModule,
        MatPaginatorModule
        
    ],
    providers   : [
        InvoiceService
    ]
})
export class InvoiceModernModule
{


}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { InvoiceService } from 'app/main/pages/invoices/invoice.service';
import { InvoiceCompactComponent } from 'app/main/pages/invoices/compact/compact.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';

const routes = [
    {
        path     : 'invoices/compact',
        component: InvoiceCompactComponent,
        resolve  : {
            search: InvoiceService
        }
    }
];

@NgModule({
    declarations: [
        InvoiceCompactComponent
        
    ],
    imports     : [
        RouterModule.forChild(routes),

        FuseSharedModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatTabsModule

    ],
    providers   : [
        InvoiceService
    ]
})
export class InvoiceCompactModule
{
}
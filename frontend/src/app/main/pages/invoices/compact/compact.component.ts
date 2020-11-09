import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { InvoiceService } from 'app/main/pages/invoices/invoice.service';

export interface PeriodicElement {
    performance: string;
    reportType: string;
    desiredPerformance: string;
    priority: string;
    actionrequired: string;
    interested: string;
}

  const ELEMENT_DATA: PeriodicElement[] = [
    {reportType: 'PageSpeed Insights by Google', performance: '20/100', desiredPerformance: '90/100', actionrequired: 'Yes', priority: 'High', interested: "I'm Interested"},
    {reportType: 'Mobile Friendliness', performance: '20/100', desiredPerformance: '90/100', actionrequired: 'Yes', priority: 'High', interested: "I'm Interested"},
    {reportType: 'Site Audit (Errors & Warnings)', performance: '20/100', desiredPerformance: '90/100', actionrequired: 'Yes', priority: 'Medium', interested: "I'm Interested"},
    {reportType: 'Spanish-Language Opportunity', performance: '20/100', desiredPerformance: '90/100', actionrequired: 'Yes', priority: 'Medium', interested: "I'm Interested"},
    {reportType: 'Content Development for Your Website', performance: '20/100', desiredPerformance: '90/100', actionrequired: 'Yes', priority: 'Low', interested: "I'm Interested"},
    {reportType: 'Content Development for Your Website 2', performance: '90/100', desiredPerformance: '100/100', actionrequired: 'No', priority: 'Ok', interested: '-'} 
  ];
  
@Component({
    selector     : 'invoice-compact',
    templateUrl  : './compact.component.html',
    styleUrls    : ['./compact.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class InvoiceCompactComponent implements OnInit, OnDestroy
{

    displayedColumns: string[] = ['reportType', 'performance', 'desiredPerformance', 'actionrequired', 'priority', 'interested' ];
    dataSource = ELEMENT_DATA;

    invoice: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _invoiceService: InvoiceService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        this._invoiceService.invoiceOnChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((invoice) => {
                this.invoice = invoice;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

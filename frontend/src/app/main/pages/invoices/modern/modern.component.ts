import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';



import { InvoiceService } from 'app/main/pages/invoices/invoice.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';
import { createanewproject } from 'app/main/pages/invoices/modern/compose/newproject.component';
import { createanewtask } from 'app/main/pages/invoices/modern/newtask/newtask.component';
import { mockupmodal } from 'app/main/pages/invoices/modern/mockup-modal/mockup-modal.component';
import { mailnotification } from 'app/main/pages/invoices/modern/mail-notification/mailnot.component';
import { MailNgrxComposeDialogComponent3 } from './compose2/compose2.component';
import { addnewwidget } from './addwidget/addwidget.component';
import { savetasktemplate } from './savetemplate/savetemplate.component';
import { addnewmockup } from './addmockup/addmockup.component';
import { addnewstaging } from './addstaging/addstaging.component';
import { MatAccordion } from '@angular/material/expansion';



@Component({
    selector     : 'invoice-modern',
    templateUrl  : './modern.component.html',
    styleUrls    : ['./modern.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class InvoiceModernComponent implements OnInit, OnDestroy
{


    panelOpenState = true;


    tasks = [
        '1.1 Create the profile page in English',
        '1.2 Create the profile page in Spanish',
        '1.3 Run pages with Wikipedia editor before submission',
        '1.4 Submit pages for publishing consideration',
        '1.5 Identifying other theme-based wiki pages where we can add backlinks to Dr Badia wiki pages'
      ];
    
      drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
      }



  


    invoice: any;
    dialogRef: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {InvoiceService} _invoiceService
     */
    constructor(        private _matDialog: MatDialog,

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

    composeDialog(): void
    {
        this.dialogRef = this._matDialog.open(createanewproject, {
            panelClass: 'create-new-project'
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Send
                     */
                    case 'send':
                        console.log('new Mail', formData.getRawValue());
                        break;
                    /**
                     * Delete
                     */
                    case 'delete':
                        console.log('delete Mail');
                        break;
                }
            });
    }


    newtaskDialog(): void
    {
        this.dialogRef = this._matDialog.open(createanewtask, {
            panelClass: 'create-new-task'
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Send
                     */
                    case 'send':
                        console.log('new Mail', formData.getRawValue());
                        break;
                    /**
                     * Delete
                     */
                    case 'delete':
                        console.log('delete Mail');
                        break;
                }
            });
    }
    @ViewChild('firstAccordion') firstAccordion: MatAccordion;

    
    addwidgetDialog(): void
    {
        this.dialogRef = this._matDialog.open(addnewwidget, {
            panelClass: 'addnewwidget'
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Send
                     */
                    case 'send':
                        console.log('new Mail', formData.getRawValue());
                        break;
                    /**
                     * Delete
                     */
                    case 'delete':
                        console.log('delete Mail');
                        break;
                }
            });
    }



    savetemplateDialog(): void
    {
        this.dialogRef = this._matDialog.open(savetasktemplate, {
            panelClass: 'savetasktemplate'
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Send
                     */
                    case 'send':
                        console.log('new Mail', formData.getRawValue());
                        break;
                    /**
                     * Delete
                     */
                    case 'delete':
                        console.log('delete Mail');
                        break;
                }
            });
    }


    addstagingDialog(): void
    {
        this.dialogRef = this._matDialog.open(addnewstaging, {
            panelClass: 'addnewstaging'
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Send
                     */
                    case 'send':
                        console.log('new Mail', formData.getRawValue());
                        break;
                    /**
                     * Delete
                     */
                    case 'delete':
                        console.log('delete Mail');
                        break;
                }
            });
    }



    mockupDialog(): void
    {
        this.dialogRef = this._matDialog.open(mockupmodal, {
            panelClass: 'mockupmodal'
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Send
                     */
                    case 'send':
                        console.log('new Mail', formData.getRawValue());
                        break;
                    /**
                     * Delete
                     */
                    case 'delete':
                        console.log('delete Mail');
                        break;
                }
            });
    }


    notificationDialog(): void
    {
        this.dialogRef = this._matDialog.open(mailnotification, {
            panelClass: 'mailnotification'
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Send
                     */
                    case 'send':
                        console.log('new Mail', formData.getRawValue());
                        break;
                    /**
                     * Delete
                     */
                    case 'delete':
                        console.log('delete Mail');
                        break;
                }
            });
    }


    addmockupDialog(): void
    {
        this.dialogRef = this._matDialog.open(addnewmockup, {
            panelClass: 'addnewmockup'
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Send
                     */
                    case 'send':
                        console.log('new Mail', formData.getRawValue());
                        break;
                    /**
                     * Delete
                     */
                    case 'delete':
                        console.log('delete Mail');
                        break;
                }
            });
    }


    composeDialog2(): void
    {
        this.dialogRef = this._matDialog.open(MailNgrxComposeDialogComponent3, {
            panelClass: 'mail-ngrx-compose-dialog3'
        });

        this.dialogRef.afterClosed()
            .subscribe(response => {
                if ( !response )
                {
                    return;
                }
                const actionType: string = response[0];
                const formData: FormGroup = response[1];
                switch ( actionType )
                {
                    /**
                     * Send
                     */
                    case 'send':
                        console.log('new Mail', formData.getRawValue());
                        break;
                    /**
                     * Delete
                     */
                    case 'delete':
                        console.log('delete Mail');
                        break;
                }
            });
    }

}

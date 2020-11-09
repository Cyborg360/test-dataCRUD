import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
    selector     : 'addnew-staging',
    templateUrl  : './addstaging.component.html',
    styleUrls    : ['./addstaging.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class addnewstaging
{
    composeForm: FormGroup;

    /**
     * Constructor
     *
     * @param {MatDialogRef<addnewstaging>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<addnewstaging>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.composeForm = this.createComposeForm();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create compose form
     *
     * @returns {FormGroup}
     */
    createComposeForm(): FormGroup
    {
        return this._formBuilder.group({
            from   : {
                value   : ['johndoe@creapond.com'],
                disabled: [true]
            },
            to     : [''],
            cc     : [''],
            bcc    : [''],
            subject: [''],
            message: ['']
        });

    }

}

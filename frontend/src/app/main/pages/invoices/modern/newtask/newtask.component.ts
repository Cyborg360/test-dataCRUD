import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
    selector     : 'create-new-task',
    templateUrl  : './newtask.component.html',
    styleUrls    : ['./newtask.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class createanewtask
{

    userstask = new FormControl();
    userstaskList: string[] = ['Team User 1', 'Team User 2', 'Team User 3', 'Team User 4', 'Team User 5', 'Team User 6'];

    composeForm: FormGroup;

    /**
     * Constructor
     *
     * @param {MatDialogRef<createanewtask>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<createanewtask>,
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

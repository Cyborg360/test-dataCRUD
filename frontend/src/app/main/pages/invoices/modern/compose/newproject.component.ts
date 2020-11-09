import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector     : 'create-new-project',
    templateUrl  : './newproject.component.html',
    styleUrls    : ['./newproject.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class createanewproject
{
    composeForm: FormGroup;

    /**
     * Constructor
     *
     * @param {MatDialogRef<createanewproject>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<createanewproject>,
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

    movies = [
        'Opcional',
        'Opcional',
        'Opcional',
      ];
    
      drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
      }
}

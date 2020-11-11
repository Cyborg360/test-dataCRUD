import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { User } from 'app/main/apps/users/user.model';

@Component({
    selector     : 'users-user-form-dialog',
    templateUrl  : './user-form.component.html',
    styleUrls    : ['./user-form.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class UsersUserFormDialogComponent
{
    action: string;
    user: User;
    userForm: FormGroup;
    dialogTitle: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<UsersUserFormDialogComponent>} matDialogRef
     * @param _data
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<UsersUserFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.action = _data.action;

        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Actualizar Usuario';
            this.user = _data.user;
        }
        else
        {
            this.dialogTitle = 'Nuevo Usuario';
            this.user = new User({});
        }

        this.userForm = this.createUserForm();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create user form
     *
     * @returns {FormGroup}
     */
    createUserForm(): FormGroup
    {
        return this._formBuilder.group({
            id      : [this.user.id],
            name    : [this.user.name],
            email   : [this.user.email],
            password: [this.user.password],
            phone   : [this.user.phone],
            address : [this.user.address],
            created_at: [this.user.created_at],
        });
    }
}

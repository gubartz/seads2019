import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class ErrorDialogService {

    constructor(public dialog: MatDialog) { }
    openDialog(data2): void {
        const dialogRef = this.dialog.open(ErrorDialogComponent, {
            width: '300px',
            data: data2
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            let animal;
            animal = result;
        });
    }
}

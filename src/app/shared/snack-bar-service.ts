import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { config } from 'rxjs';

@Injectable()
export class SnackBarService {

  config: MatSnackBarConfig = {
    duration: 4000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  };

  constructor(private snackBar: MatSnackBar) { }

  success(message) {
    this.config.panelClass = 'success-message';
    this.snackBar.open(message, 'X', this.config);
  }

  error(message) {
    this.config.panelClass = 'error-message';
    this.snackBar.open(message, 'X', this.config);
  }
}

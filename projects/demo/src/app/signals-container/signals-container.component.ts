import { ChangeDetectionStrategy, ChangeDetectorRef, Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { toObservable } from '@angular/core/rxjs-interop';
import { User } from '@shared/lib/signal-inputs/users';
import { debounceTime } from 'rxjs';
import { SignalInputsComponent } from '@shared/lib/signal-inputs/signal-inputs.component';

@Component({
  selector: 'app-signals-container',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, SignalInputsComponent],
  templateUrl: './signals-container.component.html',
  styleUrl: './signals-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsContainerComponent {
  flagComp = false;
  userQuery = signal('');
  userQuery$ = toObservable(this.userQuery);
  userQueryDebounced = '';
  users = signal<User[]>([{ firstName: 'Axel', lastName: 'Salmeron' }, { firstName: 'John', lastName: 'Doe' }]);
  usersArray: User[] = [{ firstName: 'Axel', lastName: 'Salmeron' }, { firstName: 'John', lastName: 'Doe' }];
  usersArrayMutable: User[] = [{ firstName: 'James', lastName: 'Hetfield' }, { firstName: 'Jack', lastName: 'Black' }];
  userForm = new FormGroup({
    firstName: new FormControl('', { nonNullable: true, validators: Validators.required }),
    lastName: new FormControl('', { nonNullable: true, validators: Validators.required }),
  });

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.userQuery$
      .pipe(
        debounceTime(1000),
      )
      .subscribe((searchTerm) => {
        this.userQueryDebounced = searchTerm;
        this.changeDetectorRef.detectChanges();
      });
  }

  addUser() {
    const formValues = this.userForm.value;
    if (this.userForm.valid) {
      this.users.update(users => [...users, { firstName: formValues.firstName || '', lastName: formValues.lastName || '' }]);
    }
  }

  updateUserQuery(event: Event) {
    this.userQuery.set((event.target as HTMLInputElement).value);
  }
}

import { ChangeDetectionStrategy, Component, Input, OnInit, computed, input } from '@angular/core';
import { User, ComputedUser } from './users';

@Component({
  selector: 'lib-signal-inputs',
  standalone: true,
  imports: [],
  templateUrl: './signal-inputs.component.html',
  styleUrl: './signal-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalInputsComponent implements OnInit {
  users = input.required({
    transform: this.getUserFullName
  });

  @Input() usersMutable: User[] = [];

  public filteredUsers = computed(
    () => this.users()
      .filter(({ fullName: fullname }) => fullname.toLocaleLowerCase().startsWith(this.query()))
  );

  query = input('', {
    transform: (query: string) => {
      return query.toLocaleLowerCase()
    }
  });

  ngOnInit() {
    this.users().push({ firstName: 'Added in', lastName: 'child component', fullName: 'Added in child component'});
    this.usersMutable.push({ firstName: 'Added in', lastName: 'child component'});
  }

  getUserFullName(users: User[]): ComputedUser[] {
    return users.map(user => ({
      ...user,
      fullName: `${user.firstName} - ${user.lastName}`
    }));
  }

  
}

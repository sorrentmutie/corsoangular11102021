import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Result } from '../../models/randomuser';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'app-random-users-page',
  templateUrl: './random-users-page.component.html',
  styleUrls: ['./random-users-page.component.css']
})
export class RandomUsersPageComponent implements OnDestroy {

  subscription: Subscription | undefined = undefined;
  users: Result[] = [];
  constructor(public service: RandomUserService) {
    this.subscription = this.service.getRandomUserResponse().subscribe(
      randoUserResponse => {
        this.users = randoUserResponse.results
      });
   }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}

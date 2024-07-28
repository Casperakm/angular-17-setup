import { Route } from '@angular/router';
import { ProfileDetailComponent } from './profile-detail.component';

export const PROFILE_ROUTES: Route[] = [
  {
    path: '',
    children: [
      { path: '', component: ProfileDetailComponent },
    ]
  },
];


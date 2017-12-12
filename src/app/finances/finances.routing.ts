import { Routes } from '@angular/router';

import { LilabilitiesComponent } from './lilabilities/lilabilities.component';
import { AssetsComponent } from './assets/assets.component';

export const FinancesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lilabilities',
        component: LilabilitiesComponent
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'assets',
        component: AssetsComponent
      }
    ]
  }
];

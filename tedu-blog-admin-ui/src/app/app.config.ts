import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';

import { DropdownModule, SidebarModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';
import { ADMIN_API_BASE_URL, AdminApiAuthApiClient } from './api/admin-api.service.generated';
import { environment } from '../environments/environment';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AlertService } from './shared/services/alert.service';
import { HttpClientModule } from '@angular/common/http';
import { TokenStorageService } from './shared/services/token-storage.service'

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ADMIN_API_BASE_URL, useValue: environment.API_URL },
    MessageService, AlertService, AdminApiAuthApiClient, TokenStorageService,
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      withHashLocation()
    ),
    importProvidersFrom(SidebarModule, DropdownModule, HttpClientModule),
    IconSetService, ToastModule,
    provideAnimations()
  ]
};

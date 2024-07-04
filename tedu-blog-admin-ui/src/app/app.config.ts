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
import { ADMIN_API_BASE_URL, AdminApiAuthApiClient, AdminApiRoleApiClient, AdminApiTestApiClient, AdminApiTokenApiClient } from './api/admin-api.service.generated';
import { environment } from '../environments/environment';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AlertService } from './shared/services/alert.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenStorageService } from './shared/services/token-storage.service'
import { AuthGuard } from './shared/auth.guard';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { GlobalHttpInterceptorService } from './shared/interceptors/error-handler.interceptor';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { UtilityService } from './shared/services/utility.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


export const appConfig: ApplicationConfig = {
  providers: [
    { provide: ADMIN_API_BASE_URL, useValue: environment.API_URL },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: GlobalHttpInterceptorService, multi: true },
    MessageService, AlertService, AdminApiAuthApiClient, TokenStorageService, AuthGuard,
    AdminApiTestApiClient, AdminApiTokenApiClient, AdminApiRoleApiClient, DialogService,
    ConfirmationService, UtilityService,
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
    IconSetService, ToastModule, ConfirmDialogModule, DynamicDialogModule,
    provideAnimations()
  ]
};

import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-root',
  template: `
  <p-toast position="top-center" />
  <p-confirmDialog header="Xác nhận" acceptLabel="Có" rejectLabel="Không" icon="pi pi-exclamation-triangle" />
  <router-outlet />
  `,
  standalone: true,
  imports: [RouterOutlet, ToastModule, ConfirmDialogModule]
})
export class AppComponent implements OnInit {
  title = 'Tedu Blog Admin Ui';

  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    this.titleService.setTitle(this.title);
    // iconSet singleton
    this.iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}

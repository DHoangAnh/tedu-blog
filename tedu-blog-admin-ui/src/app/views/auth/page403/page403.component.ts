import { Component } from '@angular/core';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';

@Component({
    selector: 'app-page404',
    templateUrl: './page403.component.html',
    styleUrls: ['./page403.component.scss'],
    standalone: true,
    imports: [Page403Component, ContainerComponent, RowComponent, ColComponent, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective]
})
export class Page403Component {

  constructor() { }

}

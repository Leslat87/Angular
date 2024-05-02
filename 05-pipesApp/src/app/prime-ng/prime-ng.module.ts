import { NgModule } from '@angular/core';

//import {MenuModule} from 'primeng/menu';

import { AvatarGroupModule } from 'primeng/avatargroup';
import { AvatarModule } from 'primeng/avatar';
import { CardModule} from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    // MenuModule,
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    TableModule,
    ToolbarModule,
    PanelModule,
  ]


})
export class PrimeNgModule { }

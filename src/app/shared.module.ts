import { RouterModule } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from "primeng/confirmdialog"
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

import { LoaderService } from './_common/_services/loader.service';
import { TaskService } from './_common/_services/task.service';
import { SessionService } from './_common/_services/session.service';
import { LoginService } from './_common/_services/login.service';
import { HeaderComponent } from './_common/_components/header/header.component';
import { HeaderActionButtonsComponent } from './_common/_components/header-action-buttons/header-action-buttons.component';
import { MenuService } from './_common/_services/menu.service';
import { CommonLayoutComponent } from './layouts/common-layout/common-layout.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './_common/_components/loader/loader.component';

@NgModule({
    imports: [CommonModule,
        RouterModule,
        HttpClientModule, 
        FormsModule,
        MessagesModule,
        ConfirmDialogModule,
        ToastModule,
        ProgressSpinnerModule,
        BlockUIModule
    ],
    declarations: [CommonLayoutComponent, 
        HeaderComponent, 
        LoaderComponent,
        HeaderActionButtonsComponent
    ],
    exports: [HttpClientModule, 
        FormsModule, 
        CommonLayoutComponent, 
        CommonModule,
        HeaderComponent,
        LoaderComponent,
        MessagesModule,
        ConfirmDialogModule,
        ToastModule,
        HeaderActionButtonsComponent
    ],
    providers: [MenuService, 
        LoginService, 
        SessionService, 
        TaskService, 
        LoaderService,
        MessageService,
        ConfirmationService
    ]
})
export class SharedModule {}
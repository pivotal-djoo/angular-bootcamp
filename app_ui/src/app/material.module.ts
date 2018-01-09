import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material'
import {NgModule} from '@angular/core'

@NgModule({
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule
    ],
})
export class MaterialModule {}
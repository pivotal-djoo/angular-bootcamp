import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatToolbarModule} from '@angular/material'
import {NgModule} from '@angular/core'

@NgModule({
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule
    ],
})
export class MaterialModule {}
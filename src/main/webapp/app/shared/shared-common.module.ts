import { NgModule } from '@angular/core';

import { TaskApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [TaskApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [TaskApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TaskApplicationSharedCommonModule {}

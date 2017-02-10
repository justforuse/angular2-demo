import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactComponent }   from './contact.component';
import { ContactService } from './contact.service';
import { HighlightDirective} from './highlight.directive';
import {AwesomePipe} from './awesome.pipe';
@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [ContactComponent],
    declarations: [ContactComponent,
    HighlightDirective,
    AwesomePipe],
    providers: [ContactService],
})
export class ContactModule { }

import { DropdownNavigationModule } from './../dropdown-navigation/dropdownNavigation.module';
import { DropdownNavigationDirective } from './../dropdown-navigation/dropdownNavigation.directive';
import { AdvancedSearchBoxMultiInputComponent } from './advancedSearchBoxMultiInput.component';
import { CommonModule } from '@angular/common';
import { AdvancedSearchBoxTemplateDirective } from './advancedSearchBoxTemplate.directive';
import { AdvancedSearchBoxOperatorsComponent } from './advancedSearchBoxOperators.component';
import { AdvancedSearchBoxInputComponent } from './advancedSearchBoxInput.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdvancedSearchBoxComponent } from './advancedSearchBox.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AdvancedSearchBoxComponent,
        AdvancedSearchBoxInputComponent,
        AdvancedSearchBoxMultiInputComponent,
        AdvancedSearchBoxOperatorsComponent,
        AdvancedSearchBoxTemplateDirective
    ],
    imports: [
        NgbModule,
        CommonModule,
        FormsModule,
        DropdownNavigationModule
    ],
    exports: [
        AdvancedSearchBoxComponent,
        AdvancedSearchBoxInputComponent,
        AdvancedSearchBoxOperatorsComponent,
        AdvancedSearchBoxTemplateDirective,
        AdvancedSearchBoxMultiInputComponent
    ]
})
export class AdvancedSearchBoxModule {}

import { Component, forwardRef } from "@angular/core";
import { AsComponent } from "../as.component";
import { Renderer2, ElementRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AsConfigService } from "../asConfig.service";
import { AsInputAbstract } from "./asInput.abstract";
import { AsBoxFilterAbstract } from "../asFilter.abstract";
import { Subject } from "rxjs";
import { AsInputComponent } from "../asInput.component";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { AsInputWithOperatorsComponent } from "../asInputWithOperators.component";

@Component({
    selector:'as-simple-input-with-operators-mask',
    template: `<input type="text"
            [(ngModel)]="filter.viewModel.value.value"
            (change)="_onChange(this.filter.viewModel.value);filter.onChange()"
            (focus)="filter.focusInput$.next()"
            (keydown)="advancedSearchBox.keydown($event,filter.viewModel)" 
            AutoSizeInput 
            [placeholder]="filter.viewModel.label"
            [mask]="filter.viewModel.mask.mask"
            [specialCharacters]="filter.viewModel.mask.specialCharacters"
            [patterns]="filter.viewModel.mask.patterns"
            [dropSpecialCharacters]="filter.viewModel.mask.dropSpecialCharacters"
            [clearIfNotMatch]="filter.viewModel.mask.clearIfNotMatch"
            #inputRef
            />`,
    styles:[`
        input{
            height:100%;
        }
    `],
    providers:[
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AsSimpleInputWithOperatorsMaskComponent),
            multi: true
        }
    ]
    
})
export class AsSimpleInputWithOperatorsMaskComponent extends AsInputAbstract{
    
    constructor(
        public advancedSearchBox: AsComponent,
        protected _http: HttpClient,
        protected _config: AsConfigService,
        public _element: ElementRef,
        public filter:AsInputWithOperatorsComponent
    ) {
        super(advancedSearchBox, _http, _config, _element);
    }
}
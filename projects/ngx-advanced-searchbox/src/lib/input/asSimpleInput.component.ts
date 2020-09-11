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

@Component({
    selector:'as-simple-input',
    template: `<input type="text"
            [(ngModel)]="filter.viewModel.value"
            (change)="filter.onChange()"
            (focus)="filter.focusInput$.next()"
            (keydown)="advancedSearchBox.keydown($event, filter.viewModel)" 
            AutoSizeInput 
            [placeholder]="filter.viewModel.label"
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
            useExisting: forwardRef(() => AsSimpleInputComponent),
            multi: true
        }
    ]
    
})
export class AsSimpleInputComponent extends AsInputAbstract{
    
    constructor(
        public advancedSearchBox: AsComponent,
        protected _http: HttpClient,
        protected _config: AsConfigService,
        public _element: ElementRef,
        public filter:AsInputComponent
    ) {
        super(advancedSearchBox, _http, _config, _element);
    }
}
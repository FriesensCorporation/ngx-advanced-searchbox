import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'range',
    template: `
    <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
    </advanced-searchbox>
    <br/>
    <div>
      <h5>Model</h5>
      <code>
        {{model | json}}
      </code>
      <br/>
      <br/>
      <h5>Code</h5>
      <ngb-tabset>
        <ngb-tab title="Ts">
          <ng-template ngbTabContent>
            <pre><code highlight [code]="codeJs"></code></pre>
          </ng-template>
        </ngb-tab>
        <ngb-tab title="Html">
          <ng-template ngbTabContent>
            <pre><code highlight [code]="codeHtml"></code></pre>
          </ng-template>
        </ngb-tab>
      </ngb-tabset>
    </div>
    `,
    styles: [
        `
           .overflow-box {
               widht: 300px;
               padding: 5px;
               height: 100px;
               border: 1px solid #999;
               overflow: hidden;
           }
        `
    ]
})

export class ComponentsRangeComponent {
  
  public model = {};
  public template = {};
  public codeHtml;
  public codeJs;

  constructor(){
    this.model = { "isEnabled": [{"label": "Yes", "value": true }]};
    this.template = [
      {
        'model' : 'birth.from',
        'type' : 'OPERATORS',
        'label' : 'Birth from',
        'operators' : [ 'ge','gt','eq'],
        'multiple' : false,
        'mask':{
          mask:'99-99-9999'
        }
      },
      {
        'model' : 'birth.to',
        'type' : 'OPERATORS',
        'label' : 'Birth to',
        'operators' : [ 'le', 'lt'],
        'multiple' : false,
        'mask':{
          mask:'99-99-9999'
        }
      }
    ];
    this.codeJs = `
      public model = {};
      public template = {};

      constructor(_config:AsConfigService){
        this.model = { "isEnabled": [ { "label": "Yes", "value": true } ]};
        this.template = [
          {
            'model' : 'birth.from',
            'type' : 'OPERATORS',
            'label' : 'Birth from',
            'operators' : [ 'ge','gt','eq'],
            'multiple' : false,
            'mask':{
              mask:'99-99-9999'
            }
          },
          {
            'model' : 'birth.to',
            'type' : 'OPERATORS',
            'label' : 'Birth to',
            'operators' : [ 'le', 'lt'],
            'multiple' : false,
            'mask':{
              mask:'99-99-9999'
            }
          }
        ];
        this.formatModelValue = {
            'birth.to':function(val){
                const newVal = Object.assign({},val);
                const daySplitted = val.value.split('-');
                newVal.value = new Date(
                  parseInt(daySplitted[2]),
                  parseInt(daySplitted[1])-1,
                  parseInt(daySplitted[0])
                  ,12);
                return newVal;
            },
            'birth.from':function(val){
                const newVal = Object.assign({},val);
                const daySplitted = val.value.split('-');
                newVal.value = new Date(
                  parseInt(daySplitted[2]),
                  parseInt(daySplitted[1])-1,
                  parseInt(daySplitted[0]),
                  12);
                return newVal;
            }
        };

        this.formatModelViewValue = {
            'birth.to':function(val){
                const newVal = Object.assign({},val);
                newVal.value = new Date(val.value);
                newVal.value = newVal.value.getDate()  
                               + "-" 
                               + (newVal.value.getMonth()+1) 
                               + "-" 
                               + newVal.value.getFullYear();
                return newVal;
            },
            'birth.from':function(val){
                const newVal = Object.assign({},val);
                newVal.value = new Date(val.value);
                newVal.value = newVal.value.getDate()  
                               + "-" 
                               + (newVal.value.getMonth()+1) 
                               + "-" 
                               + newVal.value.getFullYear();
                return newVal;
            }
        };
      }`;

    this.codeHtml = `
      <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
      </advanced-searchbox>
    `;
  }
}
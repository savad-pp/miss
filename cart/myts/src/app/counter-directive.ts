import { Directive, OnChanges, ViewContainerRef, TemplateRef, SimpleChanges, Input } from '@angular/core';

@Directive({
    selector:"counter"
})

export class CounterDirective implements OnChanges{

    ngOnChanges(changes: SimpleChanges):void{
        this.container.clear();
        for (let i = 0; i < this.counter; i++) {            
           this.container.createEmbeddedView(this.template,
                new CounterDirectiveContext(i + 1));    
} }         
    constructor(private container: ViewContainerRef, 
        private template: TemplateRef<Object>) {
                
    }
                        
       @Input("counterOf")
        counter: number;
    
    
                        
    
                        
    }
                        
    class CounterDirectiveContext {
        constructor(public $implicit: any) { }
    
    
    
}


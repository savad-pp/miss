import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appAppnot]'
})
export class AppnotDirective {

  constructor(private templateRef:TemplateRef<any>,
    private viewContainer:ViewContainerRef) { }

    @Input() set appAppnot(condition:boolean){
      if(!condition){
        this.viewContainer.createEmbeddedView(this.templateRef)
      }
      else{
        
        this.viewContainer.clear();
      }
    }

}

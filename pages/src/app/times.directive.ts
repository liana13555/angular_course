import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {
// Внедрение в директиву
// this.viewContainerRef это ссылка на HTML-элемент директивы, к-рый можно получить с помощью свойства this.templateRef
  constructor(
    private viewContainer: ViewContainerRef,  
    private templateRef: TemplateRef<any>
  ) { }

  @Input('appTimes') set render(times: number) {
    this.viewContainer.clear()

    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i
      })
    }
  }
}

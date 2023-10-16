import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[gxdNavBar]'
})
export class NavBarDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('document:scroll', ['$event']) onScroll(e:any){
    const scrollPosition = window.scrollY;
    const element = this.el.nativeElement;
    const maxScrollY = element.ownerDocument.body.scrollHeight - window.innerHeight - 1 ;
    
    scrollPosition < maxScrollY
    ? this.renderer.addClass(element, 'elevated')
    : this.renderer.removeClass(element, 'elevated')
  }
}

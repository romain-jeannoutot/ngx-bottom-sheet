import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-bottom-sheet',
  template: `
    <div class="element" #element>
      <div class="handle"></div>
      <div class="content" #content>
        <h4>Hello Ngx Bottom Sheet World!</h4>
      </div>
    </div>
  `,
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements AfterViewInit {

  @ViewChild('element') element: ElementRef;
  @ViewChild('content') content: ElementRef;

  private currentY = 0;

  constructor() { }

  ngAfterViewInit(): void {
    this.currentY = window.innerHeight - 40;
    this.move();
  }

  private move(): void {
    this.element.nativeElement.style.transform = `translate3d(0px, ${this.currentY}px, 0)`;
  }

}

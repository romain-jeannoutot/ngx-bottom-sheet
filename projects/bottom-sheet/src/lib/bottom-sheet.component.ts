import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-bottom-sheet',
  template: `
    <div (mousedown)="onDragStart($event)"
         (touchstart)="onDragStart($event)"
         (mousemove)="onDragProgress($event)"
         (touchmove)="onDragProgress($event)"
         (mouseup)="onDragEnd($event)"
         (touchend)="onDragEnd($event)"
         class="element"
         #element>
      <div class="handle"></div>
      <div class="content" #content>
        <h4>Hello Ngx Bottom Sheet World!</h4>
      </div>
    </div>
  `,
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements AfterViewInit {

  private readonly bottomOffset = 40;
  private readonly topOffset = 60;

  @ViewChild('element') element: ElementRef;
  @ViewChild('content') content: ElementRef;

  private active: boolean;

  private initialY = 0;
  private currentY = 0;
  private offsetY = 0;

  private lastPos = 0;

  constructor() { }

  ngAfterViewInit(): void {
    this.currentY = window.innerHeight - this.bottomOffset;
    this.offsetY = this.currentY;
    this.move();
  }

  onDragStart(event: MouseEvent | TouchEvent): void {
    this.active = true;

    if (event instanceof MouseEvent) {
      this.initialY = event.clientY - this.offsetY;
      this.lastPos = event.clientY;
    }
    if (event instanceof TouchEvent) {
      this.initialY = event.touches[0].clientY - this.offsetY;
      this.lastPos = event.touches[0].clientY;
    }
  }

  onDragProgress(event: MouseEvent | TouchEvent): void {
    if (this.active) {
      event.preventDefault();

      if (event instanceof MouseEvent) {
        this.currentY = event.clientY - this.initialY;
      }
      if (event instanceof TouchEvent) {
        this.currentY = event.touches[0].clientY - this.initialY;
      }

      this.offsetY = this.currentY;

      this.move();
    }
  }

  onDragEnd(event: MouseEvent | TouchEvent): void {
    this.active = false;

    let pos: number;
    if (event instanceof MouseEvent) {
      if (this.lastPos < event.clientY) {
        // bottom position
        pos = window.innerHeight - this.bottomOffset;
      } else {
        // top position
        pos = window.innerHeight - this.content.nativeElement.clientHeight - this.topOffset;
      }
    }
    if (event instanceof TouchEvent) {
      if (this.lastPos < event.changedTouches[0].clientY) {
        // bottom position
        pos = window.innerHeight - this.bottomOffset;
      } else {
        // top position
        pos = window.innerHeight - this.content.nativeElement.clientHeight - this.topOffset;
      }
    }

    this.currentY = pos;
    this.offsetY = this.currentY;
    this.move();

    this.initialY = this.currentY;

    if (event instanceof MouseEvent) {
      this.lastPos = event.clientY;
    }
    if (event instanceof TouchEvent) {
      this.lastPos = event.changedTouches[0].clientY;
    }
  }

  private move(): void {
    this.element.nativeElement.style.transform = `translate3d(0px, ${this.currentY}px, 0)`;
  }

}

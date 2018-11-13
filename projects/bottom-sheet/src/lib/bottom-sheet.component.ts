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

  constructor() { }

  ngAfterViewInit(): void { }

}

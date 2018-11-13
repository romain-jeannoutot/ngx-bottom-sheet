import { Component } from '@angular/core';

@Component({
  selector: 'ngx-bottom-sheet',
  template: `
    <div class="element">
      <div class="handle"></div>
      <div class="content">
        <h4>Hello Ngx Bottom Sheet World!</h4>
      </div>
    </div>
  `,
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent { }

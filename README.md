# Ngx Bottom Sheet

A basic Angular module to display bottom sheet.

See a demo at: https://ngx-bottom-sheet.ranout.xyz

Table of contents
=================

  * [Install](#install)
  * [Usage](#usage)
  * [Component](#component)

## Install

Install the module via npm:

    npm i --save @ranout/ngx-bottom-sheet

## Usage

##### Step 1: Import the BottomSheetModule:

```js
import { BottomSheetModule } from '@ranout/ngx-bottom-sheet';

@NgModule({
  imports: [BottomSheetModule]
})
export class AppModule { }
```

##### Step 2: Place the ngx-bottom-sheet component in your page:

	<ngx-bottom-sheet>
	  <!-- place your bottom sheet content here -->
	</ngx-bottom-sheet>

Enjoy :)

## Component

##### Offset

You can define the `offset` attribute on `<ngx-bottom-sheet>` component to shift up the bottom sheet of number pixels you want.
	
	<ngx-bottom-sheet offset="20"> ... </ngx-bottom-sheet>

import { Directive, Input, ElementRef} from '@angular/core';


@Directive({
  selector: '[board-value]',
  host: {
    '(click)': 'writeMove()'
  }
})


export class BoardValue {

  @Input() value: string;

  constructor(public elementRef: ElementRef) { }

  writeMove() {
    if (this.elementRef.nativeElement.innerHTML.length < 1)
      this.elementRef.nativeElement.innerHTML = this.value;
  }
}

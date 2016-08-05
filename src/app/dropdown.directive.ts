import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  private _isOpen = false;

  @HostBinding('class.open') get opened() {
    return this._isOpen;
  }
  @HostListener('click') open() {
    this._isOpen = true;
  }
  @HostListener('mouseleave') close() {
    this._isOpen = false;
  }
}

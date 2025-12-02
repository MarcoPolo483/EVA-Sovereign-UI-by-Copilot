import { Directive, ElementRef, HostListener, forwardRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Base directive for form control web components
 * Implements ControlValueAccessor for Angular forms integration
 */
@Directive()
export abstract class BaseFormControlDirective implements ControlValueAccessor {
  protected onChange: (value: any) => void = () => {};
  protected onTouched: () => void = () => {};

  constructor(
    protected elementRef: ElementRef,
    protected renderer: Renderer2
  ) {}

  writeValue(value: any): void {
    const element = this.elementRef.nativeElement;
    this.renderer.setProperty(element, 'value', value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    const element = this.elementRef.nativeElement;
    this.renderer.setProperty(element, 'disabled', isDisabled);
  }

  @HostListener('input', ['$event'])
  handleInput(event: Event): void {
    const element = event.target as any;
    this.onChange(element.value);
  }

  @HostListener('blur')
  handleBlur(): void {
    this.onTouched();
  }
}

// EVA Input Directive
@Directive({
  selector: 'eva-input[formControlName],eva-input[formControl],eva-input[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EVAInputDirective),
      multi: true
    }
  ],
  standalone: true
})
export class EVAInputDirective extends BaseFormControlDirective {}

// EVA Textarea Directive
@Directive({
  selector: 'eva-textarea[formControlName],eva-textarea[formControl],eva-textarea[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EVATextareaDirective),
      multi: true
    }
  ],
  standalone: true
})
export class EVATextareaDirective extends BaseFormControlDirective {}

// EVA Checkbox Directive
@Directive({
  selector: 'eva-checkbox[formControlName],eva-checkbox[formControl],eva-checkbox[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EVACheckboxDirective),
      multi: true
    }
  ],
  standalone: true
})
export class EVACheckboxDirective extends BaseFormControlDirective {
  @HostListener('change', ['$event'])
  override handleInput(event: Event): void {
    const element = event.target as any;
    this.onChange(element.checked);
  }

  override writeValue(value: any): void {
    const element = this.elementRef.nativeElement;
    this.renderer.setProperty(element, 'checked', value);
  }
}

// EVA Switch Directive
@Directive({
  selector: 'eva-switch[formControlName],eva-switch[formControl],eva-switch[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EVASwitchDirective),
      multi: true
    }
  ],
  standalone: true
})
export class EVASwitchDirective extends BaseFormControlDirective {
  @HostListener('change', ['$event'])
  override handleInput(event: Event): void {
    const element = event.target as any;
    this.onChange(element.checked);
  }

  override writeValue(value: any): void {
    const element = this.elementRef.nativeElement;
    this.renderer.setProperty(element, 'checked', value);
  }
}

// EVA Select Directive
@Directive({
  selector: 'eva-select[formControlName],eva-select[formControl],eva-select[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EVASelectDirective),
      multi: true
    }
  ],
  standalone: true
})
export class EVASelectDirective extends BaseFormControlDirective {
  @HostListener('change', ['$event'])
  override handleInput(event: Event): void {
    const element = event.target as any;
    this.onChange(element.value);
  }
}

// EVA Radio Group Directive
@Directive({
  selector: 'eva-radio-group[formControlName],eva-radio-group[formControl],eva-radio-group[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EVARadioGroupDirective),
      multi: true
    }
  ],
  standalone: true
})
export class EVARadioGroupDirective extends BaseFormControlDirective {
  @HostListener('change', ['$event'])
  override handleInput(event: Event): void {
    const element = event.target as any;
    this.onChange(element.value);
  }
}

// EVA Slider Directive
@Directive({
  selector: 'eva-slider[formControlName],eva-slider[formControl],eva-slider[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EVASliderDirective),
      multi: true
    }
  ],
  standalone: true
})
export class EVASliderDirective extends BaseFormControlDirective {
  @HostListener('change', ['$event'])
  override handleInput(event: Event): void {
    const element = event.target as any;
    this.onChange(element.value);
  }
}

// EVA Input OTP Directive
@Directive({
  selector: 'eva-input-otp[formControlName],eva-input-otp[formControl],eva-input-otp[ngModel]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EVAInputOTPDirective),
      multi: true
    }
  ],
  standalone: true
})
export class EVAInputOTPDirective extends BaseFormControlDirective {}

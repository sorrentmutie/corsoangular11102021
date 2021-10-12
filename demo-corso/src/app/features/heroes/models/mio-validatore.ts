import { AbstractControl } from "@angular/forms";

export function MioValidatore(control: AbstractControl) {

  const valore = control.value as string;

  if(!valore.startsWith('s')){
    return { mioValidatore: true }
  };

  return null;
}


import { AbstractControl } from "@angular/forms"; '@angular/forms';

export class MyValidators {

    static isPriceValid(contol: AbstractControl){
        const value = contol.value;
        console.log(value);
        if(value  > 10000){
            return {price_invalid: true};
        }
        return null;
    }
}
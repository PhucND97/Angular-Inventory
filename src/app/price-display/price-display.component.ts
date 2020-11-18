import { Component, Input } from '@angular/core';

@Component({
    selector: 'price-display',
    template: `<div class="price-display"> {{price|currency}} </div>`
})
export class PriceDisplayComponent {
    @Input() price: number;
}
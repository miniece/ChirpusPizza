import { Component } from '@angular/core';
import { Menu } from 'src/menu';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'ChirpusPizza';
}

let pepperoni: Menu = { name: 'Pepperoni', category: 'Toppings', price: 3 };
let bacon: Menu = { name: 'Bacon', category: 'Toppings', price: 5 };
let pepsi: Menu = { name: 'Pepsi', category: 'Drinks', price: 3 };
let sprite: Menu = { name: 'Sprite', category: 'Drinks', price: 3 };
let small: Menu = { name: 'Small', category: 'Party Type', price: 20 };
let large: Menu = { name: 'Large', category: 'Party Type', price: 50 };

let items: Menu[] = [ pepperoni, bacon, pepsi, sprite, small, large ];

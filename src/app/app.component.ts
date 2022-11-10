import { Component } from '@angular/core';
import { Menu } from 'src/menu';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	names: Menu[] = [
		{ name: 'Pepperoni', category: 'Toppings', price: 2 },
		{ name: 'Bacon', category: 'Toppings', price: 5 },
		{ name: 'Pepsi', category: 'Drinks', price: 3 },
		{ name: 'Sprite', category: 'Drinks', price: 3 },
		{ name: 'Small', category: 'Party Type', price: 20 },
		{ name: 'Large', category: 'Party Type', price: 50 }
	];
	heading: string = 'Menu';
	title = 'ChirpusPizza';

	getByCategory(): Menu[] {
		//To refer to something in the same class in a JS object
		//You MUST use the this keyword
		//This rule applieds to both properties and methods defined as part of the class
		//local vars are still okay
		this.heading = (<HTMLInputElement>document.getElementById('cat')).value;
		let output: Menu[] = [];
		for (let i: number = 0; i < this.names.length; i++) {
			let m: Menu = this.names[i];
			if (m.category.includes(this.heading)) {
				output.push(m);
			}
		}
		this.names = output;
		return output;
	}
	reset(): void {
		this.heading = 'Menu';
		this.names = [
			{ name: 'Pepperoni', category: 'Toppings', price: 2 },
			{ name: 'Bacon', category: 'Toppings', price: 5 },
			{ name: 'Pepsi', category: 'Drinks', price: 3 },
			{ name: 'Sprite', category: 'Drinks', price: 3 },
			{ name: 'Small', category: 'Party Type', price: 20 },
			{ name: 'Large', category: 'Party Type', price: 50 }
		];
	}
}

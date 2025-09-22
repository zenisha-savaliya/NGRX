import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartActions } from '../state/cart.actions';
import { selectProducts } from '../state/cart.selectors';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products$!: Observable<ReadonlyArray<Product>>;
  private store = inject(Store);

  constructor() {}

  ngOnInit(): void {
    this.store.dispatch(CartActions.loadProducts()); // Dispatch load products action
    this.products$ = this.store.select(selectProducts); // Select products from the store
  }

  onAddToCart(product: Product) {
    this.store.dispatch(CartActions.addProduct({ product }));
  }
}

import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CartActions, CartApiActions } from './cart.actions';
import { ProductService } from '../services/product.service';

@Injectable()
export class CartEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CartActions.loadProducts),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => CartApiActions.loadProductsSuccess({ products })),
          catchError((error) =>
            of(CartApiActions.loadProductsFailure({ error }))
          )
        )
      )
    );
  });
}

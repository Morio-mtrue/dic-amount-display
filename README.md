# dic-amount-display

JavaScript Basic Grammar series assignment - Amount Display Program.

The coffee bean order page from the JavaScript Basic Grammar series, reworked so
that the product name is shown in the pop-up.

## What changed

- Product data (id, name, price) is no longer held in the HTML. It lives in a
  `products` array in `javascripts/sale.js`, and the HTML `<option>` elements
  only carry the product `id`.
- `add()` reads the selected id, looks the product up in `products`, and stores
  `{ product, number }` in the `purchases` array. Adding the same product twice
  increases its quantity instead of creating a second entry.
- `display()` returns one line per product containing the product name, the unit
  price and the quantity.
- `calc()` shows those lines together with the subtotal, the shipping cost and
  the total.

## Shipping

| Subtotal | Shipping |
| --- | --- |
| under 2,000 yen | 500 yen |
| 2,000 yen or more | 250 yen |
| 3,000 yen or more | free |

## Files

```
sale.html
css/normalize.css
css/sale.css
javascripts/sale.js
images/
```

Open `sale.html` in a browser to run it.

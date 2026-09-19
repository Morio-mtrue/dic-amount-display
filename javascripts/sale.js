// Product data is managed here, not in the HTML file.
// The HTML only holds each product's id (the value attribute of <option>).
const products = [
  {
    id: 1,
    name: "Original blend 200g",
    price: 500,
  },
  {
    id: 2,
    name: "Original blend 500g",
    price: 900,
  },
  {
    id: 3,
    name: "Special Blend 200g",
    price: 700,
  },
  {
    id: 4,
    name: "Special Blend 500g",
    price: 1200,
  },
];

const productElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

// Look up a product in the product data from the id held in the HTML.
function findProduct(id) {
  return products.find((product) => product.id === id);
}

function add() {
  const targetId = parseInt(productElement.value, 10);
  const number = parseInt(numberElement.value, 10);
  const product = findProduct(targetId);

  // Nothing selected yet, or no quantity entered.
  if (!product || !number) {
    window.alert("Please select a product and a quantity.");
    return;
  }

  const purchase = {
    product: product,
    number: number,
  };

  // If the same product has already been added, add to its quantity instead
  // of pushing a second entry for it.
  const index = purchases.findIndex((item) => item.product.id === purchase.product.id);
  if (purchases.length < 1 || index === -1) {
    purchases.push(purchase);
  } else {
    purchases[index].number += purchase.number;
  }

  window.alert(`${display()}\nSubtotal is ${subtotal()} yen.`);
  productElement.value = "";
  numberElement.value = "";
}

// One line per added product: product name, unit price and quantity.
function display() {
  return purchases
    .map((purchase) => {
      return `${purchase.product.name} ${purchase.product.price} yen : ${purchase.number} pieces`;
    })
    .join("\n");
}

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.product.price * purchase.number;
  }, 0);
}

// Less than 2,000 yen: 500 yen. 2,000 yen or more: 250 yen. 3,000 yen or more: free.
function calcPostageFromPurchase(sum) {
  if (sum === 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(
    `${display()}\n\nSubtotal is ${sum} yen, shipping is ${postage} yen. Total is ${sum + postage} yen.`
  );
  purchases = [];
  productElement.value = "";
  numberElement.value = "";
}

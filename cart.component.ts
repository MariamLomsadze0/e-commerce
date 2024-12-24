import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems = [
    {
      id: 1,
      name: 'Blue Flower Print Crop Top',
      color: 'Yellow',
      size: 'M',
      price: 29,
      quantity: 1,
      shipping: 'FREE',
      subtotal: 29,
      image: 'assets/blue-top.jpg',
    },
    {
      id: 2,
      name: 'Lavender Hoodie',
      color: 'Lavender',
      size: 'XXL',
      price: 119,
      quantity: 2,
      shipping: 'FREE',
      subtotal: 238,
      image: 'assets/lavender-hoodie.jpg',
    },
  ];

  get subTotal() {
    return this.cartItems.reduce((acc, item) => acc + item.subtotal, 0);
  }

  get shippingTotal() {
    return this.cartItems.reduce((acc, item) => {
      const shippingCost = item.shipping === 'FREE' ? 0 : Number(item.shipping);
      return acc + shippingCost;
    }, 0);
  }

  get grandTotal() {
    return this.subTotal + this.shippingTotal;
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.subtotal = item.quantity * item.price;
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
    item.subtotal = item.quantity * item.price;
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter((i) => i !== item);
  }

  applyCoupon() {
    alert('Coupon applied!');
  }

  proceedToCheckout() {
    alert('Proceeding to checkout!');
  }

  addItem(newItem: any) {
    const existingItem = this.cartItems.find((item) => item.id === newItem.id);
    if (existingItem) {
      existingItem.quantity += newItem.quantity;
      existingItem.subtotal = existingItem.quantity * existingItem.price;
    } else {
      newItem.subtotal = newItem.quantity * newItem.price;
      this.cartItems.push(newItem);
    }
  }
}

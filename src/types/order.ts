export interface Item {
  name: string,
  quantity: number,
  price: number,
  "toppings_price": number,
  "total_price": number,
}

export interface Voucher {
  name: string,
  discount: number,
}

export interface Cart {
  "delivery_fee": 2,
  items: Item[], // todo
  total: number,
  vouchers: Voucher[] | null,
}

export default interface Order {
  address: string,
  cart: Cart,
  "restaurant_name": string,
  "created_at": string,
}
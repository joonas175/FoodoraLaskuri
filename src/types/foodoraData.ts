import type Order from "./order";

export default interface FoodoraData {
  profile: never,
  emails: never,
  orders: Order[],
  addresses: never,
}
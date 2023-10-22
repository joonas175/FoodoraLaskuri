<script lang="ts">
  import type FoodoraData from "./types/foodoraData";

  export let foodoraData : FoodoraData;

  $: total = foodoraData.orders.map((o) => o.cart.total).reduce((t, c) => { return c + t });
  $: totalPerYear = foodoraData.orders.reduce((acc, order) => {
    const orderDate = new Date(order.created_at);
    const year = orderDate.getFullYear();
    if(!acc[year]) {
      acc[year] = order.cart.total;
    } else {
      acc[year] = acc[year] + order.cart.total;
    }

    return acc;
  }, {})
</script>

<main>
  <p>
    Yhteensä: { total.toFixed(2) }€
  </p>
  <p>
    {#each Object.keys(totalPerYear) as key}
      <div>{ key }: { totalPerYear[key].toFixed(2) }€</div>
    {/each}
  </p>
</main>

<style>

</style>

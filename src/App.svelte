<script lang="ts">
  import FoodoraStats from "./FoodoraStats.svelte";
  import type FoodoraData from "./types/foodoraData";

  let foodoraJson: FoodoraData | null = null;

  const reader = new FileReader();

  reader.onload = (e: ProgressEvent<FileReader>) => {
    foodoraJson = JSON.parse(e.target.result.toString());
  };

  interface FormEventHandler<T> {
    target: EventTarget | null;
  }

  const onFileInput = (e: FormEventHandler<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if(target.files.length === 1) {
      reader.readAsText(target.files[0]);
    }
  }
</script>

<main>
  <div class="file-input-container">
    <p>Lataa tietosi Foodora-tililtäsi JSON-muodossa: <a href="https://www.foodora.fi/account">foodora.fi/account</a></p>
    <p>
      Valitse ladattu tiedosto alta. <br>
      Tietoja käsitellään selaimessa, eikä tallenneta koskaan. <a href="https://github.com/joonas175/FoodoraLaskuri">Lähdekoodi.</a>
    </p>
    <input type="file" id="foodora-json-input" name="jsonInput" accept="application/json" on:input={onFileInput}/>
  </div>
  <div class="stats-container">
    {#if foodoraJson !== null}
      <FoodoraStats foodoraData={foodoraJson}></FoodoraStats>
    {/if}
  </div>
</main>

<style>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

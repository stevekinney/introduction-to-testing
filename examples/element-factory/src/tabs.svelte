<script>
  import { onMount } from 'svelte';

  export let tabs = [];

  let tabbedContent = null;
  let activeIndex = 0;

  const isSelected = (index) => index === activeIndex;
  const getTabIndex = (index) => (isSelected(index) ? 0 : -1);
</script>

<section bind:this={tabbedContent}>
  <div role="tablist">
    {#each tabs as tab, i}
      {@const id = tab.id || i}
      {@const selected = i === activeIndex}
      <button
        role="tab"
        id="tab-{id}"
        aria-controls="panel-{id}"
        aria-selected={selected}
        tabindex={selected ? 0 : -1}
        on:click={() => (activeIndex = i)}
      >
        {tab.title}
      </button>
    {/each}
  </div>

  {#each tabs as tab, i}
    <div role="tabpanel" id="panel-{tab.id || i}" hidden={i !== activeIndex}>
      <p>{tab.content}</p>
    </div>
  {/each}
</section>

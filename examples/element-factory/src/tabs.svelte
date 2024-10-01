<script>
  import { onMount } from 'svelte';

  export let tabs = [];

  let tabbedContent = null;

  const selectTab = (event) => {
    const tab = event.target;
    const panel = tabbedContent.querySelector(
      `#${tab.getAttribute('aria-controls')}`,
    );

    tabbedContent.querySelectorAll('[role="tab"]').forEach((t) => {
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
    });

    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');

    tabbedContent.querySelectorAll('[role="tabpanel"]').forEach((p) => {
      p.hidden = true;
    });

    panel.hidden = false;
  };
</script>

<section bind:this={tabbedContent}>
  <div role="tablist">
    {#each tabs as tab, i}
      {@const tabId = tab.id || i}
      <button
        role="tab"
        id="tab-{tabId}"
        aria-controls="panel-{tabId}"
        aria-selected="false"
        tabindex="-1"
        on:click={selectTab}
      >
        {tab.title}
      </button>
    {/each}
  </div>

  {#each tabs as tab, i}
    {@const tabId = tab.id || i}
    <div role="tabpanel" id="panel-{tabId}" hidden>
      <p>{tab.content}</p>
    </div>
  {/each}
</section>

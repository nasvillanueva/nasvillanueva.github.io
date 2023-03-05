<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let value = '';
  export let options: string[] = [];
  export let emptyValueLabel = 'All';

  const dispatch = createEventDispatcher<{
    change: string;
  }>();
</script>

{#if options != null && options.length > 0}
  <select
    class={`border-0 border-b-2 border-zinc-500 text-zinc-500 focus:border-zinc-700 focus:ring-0 ${$$restProps.class}`}
    on:change={(e) => dispatch('change', e.currentTarget?.value ?? '')}
    bind:value
  >
    <option value="">{emptyValueLabel}</option>
    {#each options as option, index (index)}
      <option value={option}>{option}</option>
    {/each}
  </select>
{/if}

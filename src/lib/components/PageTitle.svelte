<script lang="ts">
  export let title: string;
  export let subTitle: string | null = null;
</script>

<div>
  <h1 class="mb-5 font-serif text-4xl font-medium text-zinc-700 max-sm:text-2xl">
    {title}
    <slot name="subtitle" />
    {#if subTitle != null && subTitle !== ''}
      <span class="text-zinc-500">| {subTitle}</span>
    {/if}
  </h1>
  <div class="w-12 border-b-[2px]" />
</div>

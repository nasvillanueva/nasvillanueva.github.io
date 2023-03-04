<script lang="ts">
  export let tags: string[] = [];
  export let linkPrefix = '';
</script>

{#if tags.length > 0}
  <div class="inline-flex flex-wrap">
    {#each tags as tag}
      <a
        href={`${linkPrefix}?tag=${tag}`}
        class="tag custom-link rounded-sm bg-zinc-100 px-1 py-0.5 text-[0.7rem] text-zinc-400 hover:text-zinc-500"
        >{tag}</a
      >
    {/each}
  </div>
{/if}

<style lang="scss">
  .tag {
    &:not(:last-child) {
      @apply mr-1;
    }
  }
</style>

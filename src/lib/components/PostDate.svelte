<script lang="ts">
  export let date: Date | null = null;

  $: formattedDate = date == null ? null : new Intl.DateTimeFormat().format(date);
</script>

{#if formattedDate != null}
  <span class="text-[0.7rem] text-zinc-400">{formattedDate}</span>
{/if}

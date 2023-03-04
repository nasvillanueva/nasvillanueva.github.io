<script lang="ts">
  export let title: string | null = null;

  const siteTitle = 'nandemonas';
  const formattedTitle = title == null ? siteTitle : `${siteTitle} | ${title}`;
</script>

<svelte:head>
  <title>{formattedTitle}</title>

  <meta property="og:site_name" content={siteTitle} />
  {#if title != null}
    <meta property="og:title" content={title} />
  {/if}
</svelte:head>

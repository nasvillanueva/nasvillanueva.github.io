<script lang="ts">
  export let title: string | null = null;

  const siteTitle = 'nandemonas';
  const description = 'Personal website of Nas Villanueva.';
  const formattedTitle = title == null ? siteTitle : `${siteTitle} | ${title}`;
</script>

<svelte:head>
  <title>{formattedTitle}</title>

  <meta property="og:site_name" content={siteTitle} />
  <meta name="title" property="og:title" content={title ?? siteTitle} />
  <meta name="description" property="og:description" content={description} />
</svelte:head>

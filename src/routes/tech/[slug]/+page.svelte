<script lang="ts">
  import { page } from '$app/stores';
  import PageHead from '$lib/components/PageHead.svelte';
  import PostTags from '$lib/components/PostTags.svelte';
  import PostDate from '$lib/components/PostDate.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';

  $: ({ title, tags, date } = $page.data.frontmatter);
</script>

<PageHead {title} />

<PageTitle title="Tech" />

<div class="mt-5 mb-10">
  <a href="/tech">Back to all Tech</a>
</div>

<h1 class="mb-2 text-3xl font-semibold text-nxs-blue">{title}</h1>
<div class="mb-5">
  <PostDate {date} />
  <span class="text-zinc-200">|</span>
  <PostTags {tags} linkPrefix="/tech" />
</div>

<div class="prose prose-zinc max-w-none max-sm:prose-sm">
  <svelte:component this={$page.data.component} />
</div>

<style lang="scss">
  :global(:target) {
    scroll-margin-top: 5rem;
  }
</style>

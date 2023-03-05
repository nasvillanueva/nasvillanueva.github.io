<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import PageHead from '$lib/components/PageHead.svelte';
  import PostTags from '$lib/components/PostTags.svelte';
  import PostDate from '$lib/components/PostDate.svelte';
  import type { ChangeEventHandler } from 'svelte/elements';

  let currentTag = $page.url.searchParams.get('tag') ?? '';

  const updateQueryParams = (queryParams: URLSearchParams) => {
    void goto(`?${queryParams.toString()}`);
  };

  const updateTagFilter: ChangeEventHandler<HTMLSelectElement> = (event) => {
    if (event.currentTarget == null) {
      return;
    }

    const tag = event.currentTarget.value;

    const updatedQueryParams = new URLSearchParams($page.url.searchParams.toString());

    if (tag === '') {
      updatedQueryParams.delete('tag');
    } else {
      updatedQueryParams.set('tag', tag);
    }

    updateQueryParams(updatedQueryParams);
  };
</script>

<PageHead title="Tech" />

<div class="mb-10 flex items-center justify-between">
  <div>
    <h1 class="mb-5 font-serif text-4xl font-medium text-zinc-700">
      Tech
      {#if currentTag !== ''}
        <span class="text-zinc-500">| {currentTag}</span>
      {/if}
    </h1>
    <div class="w-12 border-b-[2px]" />
  </div>

  <select
    class="mt-0 mb-5 border-0 border-b-2 border-zinc-500 text-zinc-500 focus:border-zinc-700 focus:ring-0"
    on:change={updateTagFilter}
    bind:value={currentTag}
  >
    <option value="">All Tags</option>
    {#each $page.data.tags as tag, index (index)}
      <option value={tag} class="text-inherit">{tag}</option>
    {/each}
  </select>
</div>

{#each $page.data.posts as { slug, title, tags, date } (slug)}
  <div class="mb-10">
    <a href={slug} class="mb-2 block text-3xl font-semibold">{title}</a>
    <PostDate {date} />
    <span class="text-zinc-200">|</span>
    <PostTags {tags} linkPrefix="/tech" />
  </div>
{/each}

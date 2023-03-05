<script lang="ts">
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import PageHead from '$lib/components/PageHead.svelte';
  import PostTags from '$lib/components/PostTags.svelte';
  import PostDate from '$lib/components/PostDate.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import SelectInput from '$lib/components/SelectInput.svelte';

  let currentTag = $page.data.tag;

  const updateQueryParams = (queryParams: URLSearchParams) => {
    void goto(`?${queryParams.toString()}`);
  };

  const updateTagFilter = (tag: string) => {
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
  <PageTitle title="Tech" bind:subTitle={currentTag} />

  <SelectInput
    class="mb-5"
    bind:value={currentTag}
    options={$page.data.tags}
    on:change={(e) => updateTagFilter(e.detail)}
    emptyValueLabel="All Tags"
  />
</div>

{#each $page.data.posts as { slug, title, tags, date } (slug)}
  <div class="mb-10">
    <a href={slug} class="mb-2 block text-3xl font-semibold">{title}</a>
    <PostDate {date} />
    <span class="text-zinc-200">|</span>
    <PostTags {tags} linkPrefix="/tech" />
  </div>
{/each}

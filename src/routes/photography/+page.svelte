<script lang="ts">
  import PageHead from '$lib/components/PageHead.svelte';
  import PageTitle from '$lib/components/PageTitle.svelte';
  import { page } from '$app/stores';
  import SelectInput from '$lib/components/SelectInput.svelte';
  import { goto } from '$app/navigation';
  import type { Image } from '$lib/types/image';
  import { ImageOrientation } from '$lib/types/image';
  import { chunk, interleave } from '$lib/utils/collection';

  let currentCategory = $page.data.category;

  const buildImageRows = (images: typeof $page.data.images) => {
    const imagesByOrientation = images.reduce(
      (acc: Record<ImageOrientation, Image[]>, image: Image) => {
        acc[image.orientation].push(image);

        return acc;
      },
      {
        [ImageOrientation.LANDSCAPE]: [],
        [ImageOrientation.PORTRAIT]: [],
        [ImageOrientation.SQUARE]: [],
      }
    );

    return interleave(
      chunk(imagesByOrientation[ImageOrientation.LANDSCAPE]),
      chunk(imagesByOrientation[ImageOrientation.PORTRAIT], 2),
      chunk(imagesByOrientation[ImageOrientation.SQUARE])
    );
  };

  const updateQueryParams = (queryParams: URLSearchParams) => {
    void goto(`?${queryParams.toString()}`);
  };

  const updateCategoryFilter = (category: string) => {
    const updatedQueryParams = new URLSearchParams($page.url.searchParams.toString());

    if (category === '') {
      updatedQueryParams.delete('category');
    } else {
      updatedQueryParams.set('category', category);
    }

    updateQueryParams(updatedQueryParams);
  };

  $: imageRows = buildImageRows($page.data.images);
</script>

<PageHead title="Photography" />

<div class="mb-10 flex items-center justify-between">
  <PageTitle title="Photography" bind:subTitle={currentCategory} />

  <SelectInput
    class="mb-5"
    bind:value={currentCategory}
    options={$page.data.categories}
    on:change={(e) => updateCategoryFilter(e.detail)}
    emptyValueLabel="All Categories"
  />
</div>

<div class="flex flex-wrap gap-8">
  {#each imageRows as imageRow}
    <div class="flex gap-8 max-sm:flex-wrap">
      {#each imageRow as { srcset, alt, orientation } (alt)}
        <div class={`${orientation === 'portrait' ? 'aspect-[4/5]' : 'aspect-[16/9]'}`}>
          <img
            {srcset}
            {alt}
            loading="lazy"
            class={`object-cover shadow-[0_10px_20px_-4px_rgb(0,0,0,0.6)] ${
              orientation === 'portrait' ? 'aspect-[4/5]' : 'aspect-[16/9]'
            }`}
          />
        </div>
      {/each}
    </div>
  {/each}
</div>

<script lang="ts">
  import { fade } from 'svelte/transition';
  import { swipe } from 'svelte-gestures';
  import { onMount } from 'svelte';

  const IMAGE_CHANGE_INTERVAL = 10000;

  export let images: { srcset: string; alt: string }[] = [];

  let activeIndex = 0;
  let intervalId = -1;

  const getNextIndex = () => {
    return activeIndex + 1 >= images.length ? 0 : activeIndex + 1;
  };

  const getPrevIndex = () => {
    return activeIndex === 0 ? images.length - 1 : activeIndex - 1;
  };

  const next = () => {
    activeIndex = getNextIndex();
  };

  const setActiveIndex = (index: number) => {
    activeIndex = index;

    clearInterval(intervalId);
    intervalId = setInterval(next, IMAGE_CHANGE_INTERVAL);
  };

  const switchImageBySwipe = (
    event: CustomEvent<{
      direction: 'right' | 'left';
    }>
  ) => {
    setActiveIndex(event.detail.direction === 'right' ? getPrevIndex() : getNextIndex());
  };

  onMount(() => {
    intervalId = setInterval(next, IMAGE_CHANGE_INTERVAL);

    return () => {
      clearInterval(intervalId);
    };
  });
</script>

<div
  class="relative aspect-[16/9] w-full max-md:aspect-[4/5]"
  use:swipe={{ timeframe: 300, minSwipeDistance: 100, touchAction: 'pan-y' }}
  on:swipe={switchImageBySwipe}
>
  {#each images as { srcset, alt }, index (index)}
    {#if index === activeIndex}
      <img
        {srcset}
        {alt}
        class="absolute top-0 left-0 aspect-[16/9] w-full object-cover max-md:aspect-[4/5]"
        transition:fade
      />
    {/if}
  {/each}

  <div class="relative flex h-full w-full items-center max-md:justify-center">
    <slot />
  </div>

  <div class="absolute bottom-16 w-full">
    <div class="flex justify-center">
      {#each images as { alt }, index}
        <button
          on:click={() => setActiveIndex(index)}
          class="mr-5 h-3 w-3 rounded-full bg-zinc-700 opacity-80 drop-shadow last:mr-0"
          class:bg-zinc-400={activeIndex !== index}
          class:bg-zinc-700={activeIndex === index}
          aria-label={alt}
        />
      {/each}
    </div>
  </div>
</div>

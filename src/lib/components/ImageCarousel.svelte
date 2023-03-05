<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  export let images: { src: string; alt: string }[] = [];

  let activeIndex = 0;
  let intervalId = -1;

  const next = () => {
    activeIndex = activeIndex + 1 >= images.length ? 0 : activeIndex + 1;
  };

  onMount(() => {
    intervalId = setInterval(next, 10000);

    return () => {
      clearInterval(intervalId);
    };
  });
</script>

<div class="relative aspect-[16/9] w-full max-md:aspect-[4/5]">
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
          on:click={() => (activeIndex = index)}
          class="mr-5 h-3 w-3 rounded-full bg-zinc-700 opacity-80 drop-shadow last:mr-0"
          class:bg-zinc-400={activeIndex !== index}
          class:bg-zinc-700={activeIndex === index}
          aria-label={alt}
        />
      {/each}
    </div>
  </div>
</div>

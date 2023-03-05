<script lang="ts">
  import { page } from '$app/stores';
  import ImageCarousel from '$lib/components/ImageCarousel.svelte';
  import PageHead from '$lib/components/PageHead.svelte';

  $: images = $page.data.carouselImages ?? [];
</script>

<PageHead />

<ImageCarousel {images}>
  <div class="max-md:text-center">
    <p class="ml-20 font-serif text-2xl font-bold text-white max-md:ml-0">なんでも</p>
    <p class="ml-20 text-lg font-light text-white max-md:ml-0">
      <span class="italic">nandemo</span> means <span class="italic">anything</span>.
    </p>
  </div>
</ImageCarousel>

<div class="container mx-auto px-5">
  <section class="prose my-24 max-w-none text-center text-xl">
    <h1 class="font-serif text-4xl font-light">Hi, I'm Nas.</h1>

    <p>
      From the Philippines, living in Tokyo, Japan. Makes <a
        class="no-underline"
        href="https://www.remetis.jp/">cool stuff</a
      >
      at <a class="no-underline" href="https://www.restar-inc.com/">RESTAR</a> as a Software Engineer.
    </p>

    <p>
      On my free time, I do <a class="no-underline" href="https://instagram.com/nasvillanueva"
        >photography</a
      >
      and <a class="no-underline" href="https://youtube.com/@nasvillanueva">vlogging</a>. Please
      checkout my stuff!
    </p>
  </section>

  <hr />
</div>

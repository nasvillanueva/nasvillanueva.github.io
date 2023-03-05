<script lang="ts">
  import '$lib/app.scss';
  import 'prismjs/themes/prism-tomorrow.css';
  import '@fortawesome/fontawesome-free/js/regular';
  import '@fortawesome/fontawesome-free/js/solid';
  import '@fortawesome/fontawesome-free/js/brands';
  import '@fortawesome/fontawesome-free/js/fontawesome';

  import { page } from '$app/stores';
  import PageNav from '$lib/components/PageNav.svelte';
  import PageFooter from '$lib/components/PageFooter.svelte';
</script>

<div class={`flex h-full flex-col ${$page.url.pathname === '/' ? 'pt-0' : 'pt-52'}`}>
  <PageNav />
  <main class="mb-20 grow">
    <slot />
  </main>
  <PageFooter />
</div>

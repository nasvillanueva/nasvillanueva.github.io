<script lang="ts">
  import { page } from '$app/stores';

  let scrollY = 0;
  $: isTopPosition = scrollY === 0;

  $: navLinks = [
    // {
    //   link: '/photography',
    //   label: 'Photography',
    //   active: $page.url.pathname.startsWith('/photography'),
    // },
    {
      link: '/tech',
      label: 'Tech',
      active: $page.url.pathname.startsWith('/tech'),
    },
    // {
    //   link: '/food',
    //   label: 'Food',
    //   active: $page.url.pathname.startsWith('/food'),
    // },
  ];

  $: overlayMode = $page.url.pathname === '/';
  $: transparentMode = isTopPosition && overlayMode;
</script>

<svelte:window bind:scrollY />

<div
  class={`transition-[box-shadow, background-color] fixed top-0 z-10 w-full duration-300 ease-in-out ${
    transparentMode ? 'bg-transparent' : 'bg-white'
  } ${isTopPosition ? 'shadow-none' : 'shadow-lg shadow-slate-500/5'}`}
>
  <header
    class={`flex justify-between transition-[padding] duration-[450ms] ease-in-out ${
      isTopPosition ? 'p-14 max-md:p-5' : 'px-10 max-md:px-0'
    }`}
  >
    <div class="px-4 py-3">
      <a href="/" class="custom-link flex items-center text-2xl">
        <img
          class="mr-2 h-8 w-8 animate-[logoSpin_5s_ease-in-out_infinite_both] transition-all"
          class:brightness-0={transparentMode}
          class:invert={transparentMode}
          class:drop-shadow={transparentMode}
          src="/icon.png"
          alt="nandemonas logo"
        />
        <span
          class="w-full overflow-x-hidden transition-[width] ease-in-out max-sm:w-0"
          class:drop-shadow={transparentMode}
        >
          <span class="text-nxs-blue transition-colors" class:text-white={transparentMode}
            >nandemo</span
          ><span class="text-nxs-red transition-colors" class:text-white={transparentMode}>nas</span
          >
        </span>
      </a>
    </div>
    <nav class="flex items-center">
      {#each navLinks as { label, active, link } (`${label}-${active}`)}
        <a
          href={link}
          class={`nav-link custom-link ${isTopPosition && overlayMode ? 'text-white' : ''}`}
          class:nav-link-active={active}
          data-nav-label={label}>{label}</a
        >
      {/each}
    </nav>
  </header>
</div>

<style lang="scss">
  .nav-link {
    @apply px-4 py-3 text-center text-lg font-light transition-colors ease-in-out hover:text-nxs-red;

    &::before {
      // Hack to prevent UI shift due to font-weight
      display: block;
      content: attr(data-nav-label);
      font-weight: 700;
      overflow: hidden;
      visibility: hidden;
      height: 0;
    }

    &.nav-link-active {
      @apply font-bold text-nxs-blue;
    }
  }
</style>

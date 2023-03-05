<script lang="ts">
  const links = [
    {
      href: 'https://instagram.com/nandemonas',
      iconClass: 'fa-instagram',
    },
    {
      href: 'https://youtube.com/@nasvillanueva',
      iconClass: 'fa-youtube',
    },
    {
      href: 'https://github.com/nasvillanueva',
      iconClass: 'fa-github',
    },
    {
      href: 'https://linkedin.com/in/nasvillanueva',
      iconClass: 'fa-linkedin-in',
    },
  ] as const;
</script>

<footer class="flex items-center justify-between bg-zinc-800 p-14 text-xl text-white max-md:p-8">
  <div class="links">
    {#each links as { href, iconClass }, index}
      <a {href} class="custom-link hover:text-nxs-red" class:ml-3={index !== 0} aria-label={href}
        ><i class={`fa-brands ${iconClass}`} /></a
      >
    {/each}
  </div>
  <div class="text-xs">&#169; {new Date().getFullYear()} Jonas Villanueva</div>
</footer>

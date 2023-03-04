<footer
  class="flex items-center justify-between bg-zinc-800 p-14 text-xl text-white max-md:p-5 max-md:text-sm"
>
  <div class="links">
    <a href="https://instagram.com/nandemonas" class="custom-link"
      ><i class="fa-brands fa-instagram" /></a
    >
    <a href="https://youtube.com/@nasvillanueva" class="custom-link"
      ><i class="fa-brands fa-youtube" /></a
    >
    <a href="https://github.com/nasvillanueva" class="custom-link"
      ><i class="fa-brands fa-github" /></a
    >
    <a href="https://linkedin.com/in/nasvillanueva" class="custom-link"
      ><i class="fa-brands fa-linkedin-in" /></a
    >
  </div>
  <div class="text-xs">&#169; {new Date().getFullYear()} Jonas Villanueva</div>
</footer>

<style lang="scss">
  .links {
    > a {
      @apply hover:text-nxs-red;

      &:not(:first-child) {
        @apply ml-1;
      }
    }
  }
</style>

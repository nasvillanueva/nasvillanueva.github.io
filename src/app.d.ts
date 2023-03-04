// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}

    interface Frontmatter {
      date: string;
      title: string;
      tags: string[];
    }

    interface MdsvexFile {
      default: import('svelte/internal').SvelteComponent;
      metadata: Record<string, string>;
    }

    type MdsvexResolver = () => Promise<MdsvexFile>;

    interface BlogPost {
      slug: string;
      title: string;
      date: string;
      tags: string[];
    }
  }
}

export {};

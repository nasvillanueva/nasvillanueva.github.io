import "prism-themes/themes/prism-nord.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "./src/styles/main.scss";

export function shouldUpdateScroll() {
  window.scrollTo(0, 0);
  window.document.body.scrollTop = 0;

  return false;
}

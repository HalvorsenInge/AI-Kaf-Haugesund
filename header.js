async function loadHeader() {
  const placeholder = document.querySelector("[data-header]");
  if (!placeholder) return;

  const root = document.body.dataset.root || "";
  const currentPage = document.body.dataset.page;
  const response = await fetch(`${root}components/header.html`);
  if (!response.ok) {
    throw new Error(`Kunne ikke laste toppmeny: ${response.status}`);
  }

  placeholder.outerHTML = (await response.text()).replaceAll("__ROOT__", root);
  const activeLink = document.querySelector(`[data-page="${currentPage}"]`);
  activeLink?.classList.add("active");
}

loadHeader().catch((error) => {
  console.error(error);
});

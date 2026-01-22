import games from "./cards-data.js";

function normalizePath(path) {
  if (!path) return "#";
  // If it's an absolute URL (http/https), leave it as-is
  if (/^https?:\/\//i.test(path)) return path;
  // Otherwise strip leading "./" or "/" for local paths
  return path.replace(/^\.\//, "").replace(/^\//, "");
}

function createCard(game) {
  const { name, href, imgSrc } = game;

  const card = document.createElement("a");
  card.className = "card";

  // For local paths, point from repo root; for full URLs, use as-is
  const normalizedHref = normalizePath(href);
  card.href = /^https?:\/\//i.test(href)
    ? href
    : "./" + normalizedHref; // e.g. "./html/Game Name/index.html"

  const img = document.createElement("img");
  const normalizedImg = normalizePath(imgSrc);
  img.src = /^https?:\/\//i.test(imgSrc)
    ? imgSrc
    : "./" + normalizedImg; // e.g. "./img/Game Name.webp"
  img.alt = name || "Game";
  card.appendChild(img);

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = name || "Untitled Game";
  card.appendChild(figcaption);

  return card;
}

function renderGames(filterText = "") {
  const container = document.getElementById("cardContainer");
  if (!container) return;

  container.innerHTML = "";

  const text = filterText.trim().toLowerCase();

  games
    .filter((game) => {
      if (!text) return true;
      const name = (game.name || "").toLowerCase();
      return name.includes(text);
    })
    .forEach((game) => {
      const card = createCard(game);
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderGames(searchInput.value);
    });
  }

  renderGames();
});

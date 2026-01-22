// List of all games that live under /html/<Game Name>/index.html
// and use /html/<Game Name>/game/ for their files.
const games = [
  { name: "18 Wheeler Cargo Simulator", folder: "18 Wheeler Cargo Simulator" },
  { name: "8 Ball Billards Classic", folder: "8 Ball Billards Classic" },
  { name: "A dance of fire and ice", folder: "A dance of fire and ice" },
  { name: "American Football Game", folder: "American Football Game" },
  { name: "Baseball Bros", folder: "Baseball Bros" },
  { name: "Blacktop Police Chase", folder: "Blacktop Police Chase" },
  { name: "Boxing Random", folder: "Boxing Random" },
  { name: "Buckshot Roulette", folder: "Buckshot Roulette" },
  { name: "Buildnow.gg", folder: "Buildnow.gg" },
  { name: "Burnin rubber", folder: "Burnin rubber" },
  { name: "Capybara clicker", folder: "Capybara clicker" },
  { name: "Case Clicker 2", folder: "Case Clicker 2" },
  { name: "Cat Ninja", folder: "Cat Ninja" },
  { name: "Choppy Orc", folder: "Choppy Orc" },
  { name: "City Car Driving Stunt Master", folder: "City Car Driving Stunt Master" },
  { name: "Cryzen.io", folder: "Cryzen.io" },
  { name: "DOOM", folder: "DOOM" },
  { name: "Drift Hunters", folder: "Drift Hunters" },
  { name: "Drive Mad 200 Levels", folder: "Drive Mad 200 Levels" },
  { name: "Escaping the prison", folder: "Escaping the prison" },
  { name: "Fabled Conquerors", folder: "Fabled Conquerors" },
  { name: "Geometry Dash Lite", folder: "Geometry Dash Lite" },
  { name: "Golf Orbit", folder: "Golf Orbit" },
  { name: "Granny", folder: "Granny" },
  { name: "Greedy Mimic", folder: "Greedy Mimic" },
  { name: "Grow a Garden", folder: "Grow a Garden" },
  { name: "Happy Wheels", folder: "Happy Wheels" },
  { name: "Hasty shaman", folder: "Hasty shaman" },
  { name: "Hollow knight degraded", folder: "Hollow knight degraded" },
  { name: "Indian truck simulator", folder: "Indian truck simulator" },
  { name: "Island Clash", folder: "Island Clash" },
  { name: "Jelly Bots", folder: "Jelly Bots" },
  { name: "Jolly world", folder: "Jolly world" },
  { name: "Killer", folder: "Killer" },
  { name: "Last Breath", folder: "Last Breath" },
  { name: "Like a king", folder: "Like a king" },
  { name: "One trick mage", folder: "One trick mage" },
  { name: "Orcs vs elves", folder: "Orcs vs elves" },
  { name: "Ragdoll Archers", folder: "Ragdoll Archers" },
  { name: "Road of the dead", folder: "Road of the dead" },
  { name: "Rodha", folder: "Rodha" },
  { name: "Rubix", folder: "Rubix" },
  { name: "SSF2", folder: "SSF2" },
  { name: "Sandboxels", folder: "Sandboxels" },
  { name: "Scary Teacher 3D", folder: "Scary Teacher 3D" },
  { name: "Sleepy knight", folder: "Sleepy knight" },
  { name: "Slow roads", folder: "Slow roads" },
  { name: "Snow Rider 3d", folder: "Snow Rider 3d" },
  { name: "Solar Smash", folder: "Solar Smash" },
  { name: "Sonic Revert", folder: "Sonic Revert" },
  { name: "Spades", folder: "Spades" },
  { name: "Speed Stars", folder: "Speed Stars" },
  { name: "Steal a Brainrot", folder: "Steal a Brainrot" },
  { name: "Stickman Clash", folder: "Stickman Clash" },
  { name: "Sticky Sorcerer", folder: "Sticky Sorcerer" },
  { name: "Supermarioplay", folder: "Supermarioplay" },
  { name: "Survival Race", folder: "Survival Race" },
  { name: "Swords and sandals 2", folder: "Swords and sandals 2" },
  { name: "Swords and sandals", folder: "Swords and sandals" },
  { name: "Tag", folder: "Tag" },
  { name: "Thats not my neighbor", folder: "Thats not my neighbor" },
  { name: "Thelast.io", folder: "Thelast.io" },
  { name: "Tomb of the mask", folder: "Tomb of the mask" },
  { name: "Trukking", folder: "Trukking" },
  { name: "Volley Random", folder: "Volley Random" },
  { name: "clash royale", folder: "clash royale" },
  { name: "ruffle", folder: "ruffle" },
];

function getImageSrc(game) {
  // If you later add per-game images, put them in ./img and set game.image
  if (game.image) {
    return `./img/${game.image}`;
  }
  // Default shared icon for now
  return "./img/strongdog.webp";
}

function createCard(game) {
  const card = document.createElement("a");
  card.className = "card";
  card.href = `./html/${game.folder}/index.html`;

  const img = document.createElement("img");
  img.src = getImageSrc(game);
  img.alt = game.name;
  card.appendChild(img);

  const figcaption = document.createElement("figcaption");
  figcaption.textContent = game.name;
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
      return game.name.toLowerCase().includes(text);
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

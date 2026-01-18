const games = [
    {
        name: "GTA V",
        image: "images/gta.jpg",
        link: "shortner.cc/cP6u",
        category: "أكشن"
    },
    {
        name: "FIFA 23",
        image: "images/fifa.jpg",
        link: "https://example.com",
        category: "رياضة"
    },
];

const gamesList = document.getElementById("gamesList");
const searchInput = document.getElementById("searchInput");

function displayGames(gameArray) {
    gamesList.innerHTML = "";
    gameArray.forEach(game => {
        gamesList.innerHTML += `
            <div class="game-card">
                <img src="${game.image}">
                <h3>${game.name}</h3>
                <p>${game.category}</p>
                <a href="${game.link}" target="_blank">تحميل اللعبة</a>
            </div>
        `;
    });
}

// عرض جميع الألعاب عند فتح الموقع
displayGames(games);

// البحث
if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const value = searchInput.value.toLowerCase();
        const filtered = games.filter(game =>
            game.name.toLowerCase().includes(value)
        );
        displayGames(filtered);
    });
}

// فلترة حسب التصنيف
function filterCategory(cat) {
    if (cat === "الكل") {
        displayGames(games);
    } else {
        const filtered = games.filter(game => game.category === cat);
        displayGames(filtered);
    }

}

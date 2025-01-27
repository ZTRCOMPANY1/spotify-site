// Função para registrar um novo usuário
document.getElementById("register-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (newPassword !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    // Armazenar as credenciais no localStorage
    const creationDate = new Date().toLocaleDateString();
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);
    localStorage.setItem("creationDate", creationDate);
    localStorage.setItem("history", JSON.stringify([])); // Histórico vazio inicialmente
    localStorage.setItem("playlist", JSON.stringify([])); // Playlist vazia inicialmente

    window.location.href = "index.html";
});

// Função para fazer login
document.getElementById("login-form")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        window.location.href = "music.html";
    } else {
        alert("Usuário ou senha incorretos.");
    }
});

// Exibir o nome de usuário na página de músicas
if (document.getElementById("user-name")) {
    document.getElementById("user-name").textContent = localStorage.getItem("username");
}

// Função para carregar categorias e músicas em destaque
if (document.getElementById("categories")) {
    const categories = [
        { name: "Pop", img: "assets/sla.png" },
        { name: "Rock", img: "assets/rock.jpg" },
        { name: "Jazz", img: "assets/jazz.jpg" },
        { name: "Hip Hop", img: "assets/hiphop.jpg" }
    ];

    const categoriesElement = document.getElementById("categories");

    categories.forEach(category => {
        const categoryItem = document.createElement("div");
        categoryItem.classList.add("category-item");
        categoryItem.innerHTML = `
            <img src="${category.img}" alt="${category.name}">
            <p>${category.name}</p>
        `;
        categoryItem.addEventListener("click", () => {
            window.location.href = `category.html?category=${category.name}`;
        });
        categoriesElement.appendChild(categoryItem);
    });
}

// Música de exemplo (em destaque)
const musicList = [
    { title: "Música 1", category: "Pop", img: "assets/sla.png", file: "assets/music1.mp3" },
    { title: "Música 2", category: "Rock", img: "assets/music2.jpg", file: "assets/music2.mp3" },
    { title: "Música 3", category: "Jazz", img: "assets/music3.jpg", file: "assets/music3.mp3" },
    { title: "Música 4", category: "Hip Hop", img: "assets/music4.jpg", file: "assets/music4.mp3" }
];


// Função para carregar músicas de uma categoria específica
function loadMusicByCategory(category) {
    const musicListElement = document.getElementById("music-list");
    musicListElement.innerHTML = ""; // Limpar a lista antes de adicionar novas músicas

    const filteredMusic = musicList.filter(music => music.category === category);
    filteredMusic.forEach(music => {
        const musicItem = document.createElement("div");
        musicItem.classList.add("music-item");
        musicItem.innerHTML = `
            <img src="${music.img}" alt="${music.title}" class="music-img">
            <p>${music.title}</p>
            <audio controls>
                <source src="${music.file}" type="audio/mp3">
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <button onclick="addToPlaylist('${music.title}')">Adicionar à Playlist</button>
        `;
        musicListElement.appendChild(musicItem);
    });
}




// Função para adicionar música à playlist
function addToPlaylist(songTitle) {
    const playlist = JSON.parse(localStorage.getItem("playlist"));
    if (!playlist.includes(songTitle)) {
        playlist.push(songTitle);
        localStorage.setItem("playlist", JSON.stringify(playlist));
        alert("Música adicionada à playlist!");
    } else {
        alert("Música já está na sua playlist.");
    }
}


// Redirecionamento da categoria para a página de músicas dessa categoria
const categoryParam = new URLSearchParams(window.location.search).get("category");
if (categoryParam) {
    loadMusicByCategory(categoryParam);
}

// Função para carregar as últimas atualizações com imagens
function loadLatestUpdates() {
    const latestUpdates = document.getElementById("latest-updates");
    latestUpdates.innerHTML = ""; // Limpar as atualizações antes de adicionar novas

    const updates = [
        { text: "Música 'Música 1' adicionada à categoria Pop.", img: "assets/sla.png" },
        { text: "Novo álbum 'Músicas 2025' disponível em Jazz.", img: "assets/jazz-icon.jpg" },
        { text: "Música 'Música 2' lançada no Rock.", img: "assets/rock-icon.jpg" }
    ];

    updates.forEach(update => {
        const updateItem = document.createElement("li");
        
        updateItem.innerHTML = `
            <img src="${update.img}" alt="Ícone de categoria" class="update-img">
            <span>${update.text}</span>
        `;
        
        latestUpdates.appendChild(updateItem);
    });
}

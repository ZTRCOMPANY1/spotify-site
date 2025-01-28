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
        { name: "Mega Funk", img: "assets/categorias/categoriamegafunk.png" },
        { name: "trinta", img: "assets/categorias/categoriamegafunk.png" },
        { name: "Trap", img: "assets/categorias/categoriatrap.png" },
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
    { title: "Mega Funk Digo IDG", category: "Mega Funk", img: "assets/categorias/megafunk/musicas/mega_funk_digoidg/megafunkdigoidg.png", file: "assets/categorias/megafunk/musicas/mega_funk_digoidg/megafunkdigoidg.mp3" },
    { title: "Música 2", category: "Rock", img: "assets/music2.jpg", file: "assets/music2.mp3" },
    { title: "Música 3", category: "Jazz", img: "assets/music3.jpg", file: "assets/music3.mp3" },
    { title: "Música 3", category: "trinta", img: "assets/music3.jpg", file: "assets/music3.mp3" },
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
           
        `;
        musicListElement.appendChild(musicItem);
    });
}






// Redirecionamento da categoria para a página de músicas dessa categoria
const categoryParam = new URLSearchParams(window.location.search).get("category");
if (categoryParam) {
    loadMusicByCategory(categoryParam);
}

// Redirecionamento da categoria para a página de músicas dessa categoria
const gravadoraParam = new URLSearchParams(window.location.search).get("gravadora");
if (gravadoraParam) {
    loadMusicBygravadora(gravadoraParam);
}


// categoria das gtrinta
if (document.getElementById("trinta")) {
    const trinta = [
        { name: "trinta", img: "" },
    ];

    const trintaElement = document.getElementById("trinta");

    trinta.forEach(trinta => {
        const trintaItem = document.createElement("div");
        trintaItem.classList.add("trinta-item");
        trintaItem.innerHTML = `
            <img src="${trinta.img}" alt="${trinta.name}">
            <p>${trinta.name}</p>
        `;
        trintaItem.addEventListener("click", () => {
            window.location.href = `trinta.html?trinta=${trinta.name}`;
        });
        trintaElement.appendChild(trintaItem);
    });
}



// categoria das gtrinta
if (document.getElementById("trinta2")) {
    const trinta2 = [
        { name: "trinta2", img: "" },
    ];

    const trinta2Element = document.getElementById("trinta2");

    trinta2.forEach(trinta2 => {
        const trinta2Item = document.createElement("div");
        trinta2Item.classList.add("trinta2-item");
        trinta2Item.innerHTML = `
            <img src="${trinta2.img}" alt="${trinta2.name}">
            <p>${trinta2.name}</p>
        `;
        trinta2Item.addEventListener("click", () => {
            window.location.href = `trinta2.html?trinta2=${trinta2.name}`;
        });
        trinta2Element.appendChild(trinta2Item);
    });
}



// categoria das gravadoras
if (document.getElementById("gravadora")) {
    const gravadora = [
        { name: "gravadora", img: "gravadoras/trinta/categoria.png" },
    ];



    const gravadoraElement = document.getElementById("gravadora");

    gravadora.forEach(gravadora => {
        const gravadoraItem = document.createElement("div");
        gravadoraItem.classList.add("gravadora-item");
        gravadoraItem.innerHTML = `
            <img src="${gravadora.img}" alt="${gravadora.name}">
            <p>${gravadora.name}</p>
        `;
        gravadoraItem.addEventListener("click", () => {
            window.location.href = `gravadora.html?gravadora=${gravadora.name}`;
        });
        gravadoraElement.appendChild(gravadoraItem);
    });
}
/* ------------------------------------------------------------ */

/*na pagina trinta.html gravadora 30praum */

// Músicas da 30praum
const trintaList = [
    { title: "musica1", category: "trinta", img: "assets/categorias/megafunk/musicas/mega_funk_digoidg/megafunkdigoidg.png", file: "assets/categorias/megafunk/musicas/mega_funk_digoidg/megafunkdigoidg.mp3" },
    { title: "Música 2", category: "trinta", img: "assets/music2.jpg", file: "assets/music2.mp3" },
    { title: "Música 3", category: "trinta", img: "gravadoras/trinta/categoria.png", file: "" },
];


function loadMusicByCategory(category) {
    const musicListElement = document.getElementById("trinta-list");
    musicListElement.innerHTML = ""; // Limpar a lista antes de adicionar novas músicas

    const filteredMusic = trintaList.filter(music => music.category === category);
    filteredMusic.forEach(music => {
        const musicItem = document.createElement("div");
        musicItem.classList.add("music-item");
        musicItem.innerHTML = `
            <img src="${music.img}" alt="${music.title}" class="trinta-img">
            <p>${music.title}</p>
            <audio controls>
                <source src="${music.file}" type="audio/mp3">
                Seu navegador não suporta o elemento de áudio.
            </audio>
           
        `;
        musicListElement.appendChild(musicItem);
    });
}
// Redirecionamento da categoria para a página de músicas dessa categoria
const trintaParam = new URLSearchParams(window.location.search).get("trinta");
if (trintaParam) {
    loadMusicByCategory(trintaParam);
}

/* ------------------------------------------------------------ */
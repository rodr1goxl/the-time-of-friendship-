const startDate = new Date("August 23, 2024 22:25:00");

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("counter").textContent = 
        `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}
setInterval(updateCounter, 1000);

function goToPage2() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
}

function goToPage3() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
}

function moveNoButton() {
    const noButton = document.getElementById("noButton");
    const container = document.getElementById("page2");

    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width - 20;
    const maxY = containerRect.height - buttonRect.height - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}

function toggleImage() {
    const image = document.getElementById("image");
    const button = document.getElementById("toggleButton");

    if (image.style.display === "none" || !image.style.display) {
        image.style.display = "block"; // Exibe a imagem
        button.textContent = "–😻 + (–🌹)"; // Altera o texto do botão
    } else {
        image.style.display = "none"; // Esconde a imagem
        button.textContent = "😻 + 🌹"; // Restaura o texto do botão
    }
}
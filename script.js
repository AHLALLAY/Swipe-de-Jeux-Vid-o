const cards =  document.querySelectorAll(".game-card");
const likedArea = document.querySelector(".like-area");
const dislikedArea = document.querySelector(".dislike-area");
const likedCardsContainer = document.querySelector(".card-store");
// Ajouter l'evennement du glissement
cards.forEach(card => {
    card.addEventListener("dragStart", dragStart);
});
function dragStart(event){
    //essayant de definir l'Id de la carte glissée comme Data transfereée
    event.dataTransfer.setData("text/plain", event.target.id);
}
//Pour autoriser le glissement (inside)
likedArea.addEventListener("dragover", dragOver);
dislikedArea.addEventListener("dragover", dragOver);

function dragOver(event){
    event.preventDefault();
}
// Fonction qui permet le drop en annulant le comportement par défaut
function allowDrop(event) {
    event.preventDefault();
  }
// Gestion des areas de liked et disliked
likedArea.addEventListener("drop", dropToLikedArea);
dislikedArea.addEventListener("drop", dropToDislikedArea);

function dropToLikedArea(event){
    event.preventDefault();
    const cardId = event.dataTransfer.getData("text/plain");
    const card = document.getElementById(cardId);
    // ajouter une bordure à la contenaires des likedcards
    likedCardsContainer.style.border = "1px dashed rgb(183, 190, 1)"
    // placer la carte liked vers l'emplacement des cartes aimés:
    likedCardsContainer.appendChild(card);
    card.style.transform = "scale(0.9)";
    card.classList.add("liked-game-card");
}

function dropToDislikedArea(event){
    event.preventDefault();
    const cardId = event.dataTransfer.getData("text/plain");
    const card = document.getElementById(cardId);
    //supprimer la carte pour ne pas etre affiché tant qu'elle est disliké
    card.style.transition = "opacity 0.5s";
    card.style.opacity = "0";
    setTimeout(() => {
        card.remove();
    }, 500); //supprimer la carte apres 500 ms (temps de disparition : opacity vers zero)
}
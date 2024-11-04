const cards =  document.querySelectorAll(".game-card");
const likedArea = document.querySelector(".like-area");
const dislikeedArea = document.querySelector(".dislike-area");
const likedCardsContainer = document.querySelector(".card-store");
// Ajouter l'evennement du glissement
cards.forEach(card => {
    card.addEventListener("dragStart", dragStart);
});
function dragStart(event){
    //essayant de definir l'Id de la carte glissée comme Data transfereée
    event.dataTransfer.setData("text/plain", event.target.id);
}
//Pour autoriser le glissement
likedArea.addEventListener("dragover", dragOver);
dislikeedArea.addEventListener("dragover", dragOver);

function dragOver(event){
    event.preventDefault();
}
// --- To be continued, I'm So Tired

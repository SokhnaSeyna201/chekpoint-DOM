// Sélection des éléments nécessaires
const totalPriceElement = document.querySelector(".total");
const products = document.querySelectorAll(".card");

// Ajout des événements DOM pour chaque produit
products.forEach(product => {
    const plusButton = product.querySelector(".fa-plus-circle");
    const minusButton = product.querySelector(".fa-minus-circle");
    const deleteButton = product.querySelector(".fa-trash-alt");
    const likeButton = product.querySelector(".fa-heart");
    const quantityElement = product.querySelector(".quantity");

    // Événement pour augmenter la quantité
    plusButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    });

    // Événement pour diminuer la quantité
    minusButton.addEventListener("click", () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    });

    // Événement pour supprimer un produit
    deleteButton.addEventListener("click", () => {
        product.remove();
        updateTotalPrice();
    });

    // Événement pour aimer un produit
    likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("liked");
        likeButton.style.color = likeButton.classList.contains("liked") ? "red" : "black";
    });
});

// Fonction pour mettre à jour le prix total
function updateTotalPrice() {
    let totalPrice = 0;
    products.forEach(product => {
        const quantity = parseInt(product.querySelector(".quantity").textContent);
        const unitPrice = parseInt(product.querySelector(".unit-price").textContent.replace(" $", ""));
        totalPrice += quantity * unitPrice;
    });
    totalPriceElement.textContent = `${totalPrice} $`;
}



// Initialisation du prix total
updateTotalPrice();
const roll_up = document.querySelector(".roll-up");
const header = document.getElementById("header");
const addProduct = document.getElementById("addProduct");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showBtn() {
    if (window.scrollY > 40) {
        roll_up.style.display = "block";
    } else {
        roll_up.style.display = "none";
    }
}
addEventListener("scroll", showBtn);

function scrollProducts(direction) {
    const container = document.querySelector(".Products");
    const scrollAmount = 200;
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
let ImgURl;
document.getElementById("product-image").addEventListener("change", function(event) {
    const preview = document.getElementById("image-preview");
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            ImgURl = reader.result;
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    } else {
        preview.style.display = "none";
    }
});

function data() {
    fetch('phons.json')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('Products');
            console.log(data);
            data.forEach(phone => {
                const card = document.createElement('div');
                card.className = 'product';
                card.innerHTML = `
          <img src="${phone.place}" alt="${phone.name}">
          <h2>${phone.name}</h2>
          <p>${phone.price} EGP</p>
          <button>Buy Now</button>
        `;
                container.appendChild(card);
            });
        }).catch(error => console.log('Error loading data:', error));
    dataFromLocalStorage();
}

function dataFromLocalStorage() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const container = document.getElementById('Products');
    container.innerHTML = "";
    products.forEach(phone => {
        const productCard = document.createElement("div");
        productCard.className = "product";

        productCard.innerHTML = `
          <img src="${phone.place}" alt="${phone.name}">
          <h2>${phone.name}</h2>
          <p>${phone.price} EGP</p>
          <button>Buy Now</button>
        `;

        container.appendChild(productCard);
    });
}
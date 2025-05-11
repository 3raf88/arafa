function addProduct() {
    const name = document.getElementById('product-name').value.trim();
    const price = document.getElementById('product-price').value.trim();
    const fileInput = document.getElementById('product-image');
    const file = fileInput.files[0];

    if (!name || !price || !file) {
        alert("Please fill all the product fields including image");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        const product = {
            name: name,
            price: price,
            place: e.target.result
        };

        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));

        alert("Product added successfully");
        location.href = "index.html";
    };

    reader.readAsDataURL(file);
}
const imagePreview = document.getElementById('image-preview');

document.getElementById('product-image').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            imagePreview.src = reader.result;
            imagePreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});
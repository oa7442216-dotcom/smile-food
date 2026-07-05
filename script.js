let products = JSON.parse(localStorage.getItem("products")) || [];

function saveProducts() {
    localStorage.setItem("products", JSON.stringify(products));
}

function addProduct(name, price) {
    products.push({
        id: Date.now(),
        name: name,
        price: price
    });
    saveProducts();
    alert("تمت إضافة المنتج");
}

function deleteProduct(id) {
    products = products.filter(product => product.id !== id);
    saveProducts();
    alert("تم حذف المنتج");
}

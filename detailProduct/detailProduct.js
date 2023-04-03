async function getProduct() {
    const data = await fetch("../products.json");
    const json = await data.json();
    const product = structuredClone(json);
    const dbproduct = product;
    
    const prodottoTrovato = getProductTitle("White Gold Plated Princess");
    function getProductTitle(title) {
        return dbproduct.find(dataCard => dataCard.title === title)
    }                        
    
    let titleProduct = document.querySelector("#titleProduct");
    titleProduct.textContent = prodottoTrovato.title
    let titleProductImg = document.querySelector("#titleProductImg");
    titleProductImg.textContent = prodottoTrovato.title
    let productImg = document.querySelector("#productImg");
    productImg.src = prodottoTrovato.image
    let productCount = document.querySelector("#productCount");
    productCount.textContent = `${prodottoTrovato.rating.count}°`
    let categoryProduct = document.querySelector("#categoryProduct");
    categoryProduct.textContent = prodottoTrovato.category
    let productRate = document.querySelector("#productRate");
    productRate.style.fontStyle = "italic";
    productRate.textContent = `rate: ${prodottoTrovato.rating.rate}/5`
    let descrProduct = document.querySelector("#descrProduct");
    descrProduct.textContent = prodottoTrovato.description
    let productPrice = document.querySelector("#productPrice");
    productPrice.textContent = `${prodottoTrovato.price}€`
    let bgImg = document.querySelector("#bgImg");
    bgImg.style.background =  `url("${prodottoTrovato.image}")`;
    bgImg.style.backgroundSize = "auto";
    bgImg.style.backgroundPosition = "center";
    bgImg.style.backgroundRepeat = "no-repeat";            
}
getProduct()        
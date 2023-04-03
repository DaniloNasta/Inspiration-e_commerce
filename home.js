fetch("./products.json")
.then((response) => response.json())
.then((json) => {
    const jsonClone = structuredClone(json)     
    
    let contentShop = jsonClone.map((product) => {
        return [product.image, product.title, product.category, product.rating, product.price]        
    }).sort((a,b) => b[3].rate - a[3].rate).slice(0,4)
    let shopWrapper = document.querySelector('#shopWrapper');
    contentShop.forEach((dataCard) => {
        let div = document.createElement('div')
        div.classList.add('col-12', 'col-md-3', 'mb-5')
        div.innerHTML = `
        <div class="product-card h-100">
            <div class="logo-cart">
                <img class="w-100" src="${dataCard[0]}" alt="logo">
            </div>
            <div class="cardDetails">
                <span class="cardTitle font-s tx-t">${dataCard[1].substring(0,18)}...</span>
                <div>
                    <p class="font-p">${dataCard[2]}</p>
                    <span class="font-s"><em>Rate: ${dataCard[3].rate}/5</em> <i class="bi bi-star-fill text-warning"></i></span>                    
                </div>
            </div>
            <div class="colorPrice">
                <p class="priceNum ms-auto font-s">${dataCard[4]}€</p>
            </div>
            <div class="button">
                <div class="button-layer"></div>
                <button onclick="location.href='../detailProduct/detailProduct.html'" class="tx-acc font-s">Go to the product</button>
            </div>
        </div>
        `;
        shopWrapper.appendChild(div)
    })

    
    let totaleCat =[]
    let totCat = jsonClone.forEach((cat) => {
        totaleCat.push(cat.category)
    })
    totalCategories = Array.from(new Set(totaleCat))

    let showCat = document.querySelector('#showCat');
    totalCategories.forEach((cat) =>{
        let option = document.createElement('option')
        option.innerHTML = `
        <option value="1" class="font-s">${cat}</option>
        `
        showCat.appendChild(option)
    })
    
    
    
});

let deadline = new Date("Dec 31, 2023 23:59:59").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.querySelector("#countDown").innerHTML = days + `days ` 
    + hours + `hours ` + minutes + `minutes ` + seconds + `seconds `;
    if (t < 0) {
        clearInterval(x);
        document.querySelector("#countDown").innerHTML = "EXPIRED";
    }
}, 1000);
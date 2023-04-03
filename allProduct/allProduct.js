fetch("../products.json")
.then((response) => response.json())
.then((json) => {
    const jsonClone = structuredClone(json)    
    console.log(jsonClone)  
    
    let cardWrapper = document.querySelector("#cardWrapper");
    let categoryWrapper = document.querySelector("#categoryWrapper");
    
        
    let categories = Array.from(new Set(jsonClone.map(el => el.category).flat()))
    categories.forEach((cat) => {
        let option = document.createElement('option')
        option.setAttribute("value", cat)
        option.setAttribute("id", cat)
        option.dataset.cat = "cat"
        option.innerHTML = `${cat}`
        categoryWrapper.appendChild(option)
    })


    let dataCategory = document.querySelectorAll('[data-cat]')
    dataCategory.forEach((option) => {
        option.addEventListener('click', () => {
           showWrapper(filterByCategory(jsonClone, option.id))
        })
    })


    let allReset = document.querySelectorAll('[data-reset]')
    allReset.forEach((option) => {
        option.addEventListener('click', () =>{
        showWrapper(json)
        })
    })

    
    let searchElement = document.querySelector('#searchElement')
    function filterByWord(array, word) {
        return array.filter((product) => {
            return product.title.match(new RegExp(word, 'gi'))
        })
    }
    searchElement.addEventListener('input', () => {
        showWrapper(filterByWord(jsonClone, searchElement.value))
    })


    let Az = document.querySelector('#Az')
    function sortingByAz(array) {
        return array.sort((a,b) => a.title > b.title)
    }
    Az.addEventListener('click', () => {
        showWrapper(sortingByAz(jsonClone))
    })


    let Za = document.querySelector('#Za')
    function sortingByZa(array) {
        return array.sort((b,a) => a.title > b.title)
    }
    Za.addEventListener('click', () => {
        showWrapper(sortingByZa(jsonClone))
    })


    let piuCostoso = document.querySelector('#piuCostoso')
    function sortingBypiuCostoso(array) {
        return array.sort((a,b) => b.price - a.price)
    }
    piuCostoso.addEventListener('click', () => {
        showWrapper(sortingBypiuCostoso(jsonClone))
    })


    let menoCostoso = document.querySelector('#menoCostoso')
    function sortingBymenoCostoso(array) {
        return array.sort((b,a) => b.price - a.price)
    }
    menoCostoso.addEventListener('click', () => {
        showWrapper(sortingBymenoCostoso(jsonClone))
    })


    let piuVotato = document.querySelector('#piuVotato')
    function sortingBypiuVotato(array) {
        return array.sort((a,b) => b.rating.rate - a.rating.rate)
    }
    piuVotato.addEventListener('click', () => {
        showWrapper(sortingBypiuVotato(jsonClone))
    })

    
    let menoVotato = document.querySelector('#menoVotato')
    function sortingBymenoVotato(array) {
        return array.sort((b,a) => b.rating.rate - a.rating.rate)
    }
    menoVotato.addEventListener('click', () => {
        showWrapper(sortingBymenoVotato(jsonClone))
    })


    function filterByCategory(array, value) {
        return array.filter(el => el.category == value)
    }

    showWrapper(jsonClone)
    
    
    function showWrapper(array) {
        cardWrapper.innerHTML ="";
    array.forEach((product) => {
        let div = document.createElement('div')
        div.classList.add('col-12', 'col-md-3', 'mb-5')
        div.innerHTML = `
        <div class="product-card mx-auto">
            <div class="logo-cart">
                <img class="w-100 mb-3" src="${product.image}" alt="logo">
                <div class="cardTitle font-s tx-t">${product.title.substring(0,35)}...</div>
            </div>
            <img class="scorriGiu" src="../media/scorri.png" alt="">
            <div class="cardBody">
                <div class="cardDetails">
                    <p class="font-p">${product.category}</p>
                    <span class="font-s"><em>Rate: ${product.rating.rate}/5</em> <i class="bi bi-star-fill text-warning"></i></span>                    
                </div>
                <div class="colorPrice">
                    <p class="priceNum ms-auto font-s">${product.price}€</p>
                </div>
            </div>
            <div class="button">
                <div class="button-layer"></div>
                <button onclick="location.href='../detailProduct/detailProduct.html'" class="tx-acc font-s">Go to the product</button>
            </div>
        </div>
        `
        cardWrapper.appendChild(div)
    });
}                                                                                
});            
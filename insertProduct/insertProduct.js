let btnCrea = document.querySelector("#btnCrea")        
btnCrea.addEventListener(("click"), () => {
    let nome = document.querySelector("#nome")
    let categoria = document.querySelector("#categoria")
    let prezzo = document.querySelector("#prezzo")
    let descrizione = document.querySelector("#descrizione")
    let immagine = document.querySelector("#immagine")
    let div = document.querySelector("#showCard")
    div.classList.add("newCard")
    div.innerHTML =`
    <div class="col-12 col-md-4 productBcg rounded-start d-flex align-items-center">
        <img class="d-block mx-auto" id="productImg" src="" alt="insert product image">
    </div>
    <div class="col-12 col-md-6 mx-auto pt-5">
        <div class="pb-5">
            <h2 id="titleProduct" class="font-s tx-t">${nome.value}</h2>
            <h3 id="categoryProduct" class="mb-3 small font-p">${categoria.value}</h3>
            <div class="d-flex justify-content-between">
                <div class="rating rating2">
                    <a href="#5" title="Give 5 stars">★</a>
                    <a href="#4" title="Give 4 stars">★</a>
                    <a href="#3" title="Give 3 stars">★</a>
                    <a href="#2" title="Give 2 stars">★</a>
                    <a href="#1" title="Give 1 star">★</a>
                </div>
            </div>
        </div>
        <h5 class="font-s tx-t mt-3">Description:</h5>
        <p id="descrProduct" class="font-s tx-t">${descrizione.value}</p>
        <p id="productPrice" class="text-end py-3 priceNum">${prezzo.value}€</p>
        <div class="mt-5"> 
            <button class="d-block mx-auto btnLog mb-3 font-s tx-acc">Check ad</button>
        </div>  
    </div>
    `            
    btnCrea.disabled = 'true'
})
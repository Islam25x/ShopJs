let products = JSON.parse(window.localStorage.getItem('products'))
let main = document.getElementById('con')
let total = document.querySelector('h3 span')
let TotalPrice = JSON.parse(window.localStorage.getItem('total'))
let favProduct = JSON.parse(window.localStorage.getItem('fav')) 
let favSection = document.getElementById('confav')
const logout = document.getElementById('logout');

logout.addEventListener('click',()=>{
    window.location.href = 'login.html'
})
function renderProducts(products) {
    main.innerHTML = ''; // Clear current products
    products.forEach(item => {
        let card = document.createElement('div');
        let photo = document.createElement('img');
        let card_des = document.createElement('div');
        let product = document.createElement('h6');
        let product_name = document.createElement('span');
        let itemCount = document.createElement('span')
        let price = document.createElement('h6');
        let price_con = document.createElement('span');
        let divCon = document.createElement('div');
        let plus = document.createElement('button')
        let minas = document.createElement('button')
        let pdiv = document.createElement('div');
        let btDiv = document.createElement('div');
        let p = document.createElement('p')
        let cat = document.createElement('h6');
        let cat_con = document.createElement('span');
        let card_bottom = document.createElement('div');
        let btn = document.createElement('button');
        let fav = document.createElement('img');
        let count = 1
        // Classes
        card.classList.add('card');
        card_des.classList.add('card_des');
        card_bottom.classList.add('card_bottom', 'd-flex', 'justify-content-between');
        fav.classList.add('gray');
        pdiv.classList.add('p-con')
        divCon.classList.add('d-flex')
        itemCount.classList.add('count','ms-2')

        // Content
        photo.src = item.image;
        product.textContent = 'product name: ';
        product_name.textContent = item.title;
        price.textContent = 'price: ';
        price_con.textContent = item.price + '$';
        cat.textContent = 'category: ';
        cat_con.textContent = item.category;
        btn.textContent = 'Remove frome cart';
        btn.style.backgroundColor = 'red'
        total.textContent = TotalPrice;
        fav.src = 'imgs/heart-solid-gray.svg';
        plus.textContent = '+'
        minas.textContent = '-'
        itemCount.textContent = count

        // Append
        main.appendChild(card);
        card.appendChild(photo);
        card.appendChild(card_des);
        card_des.appendChild(product);
        product.appendChild(product_name);
        product_name.appendChild(itemCount);
        card_des.appendChild(pdiv);
        divCon.appendChild(price)
        divCon.appendChild(price_con)
        pdiv.appendChild(divCon)
        pdiv.appendChild(btDiv);
        btDiv.appendChild(plus);
        btDiv.appendChild(minas);
        card_des.appendChild(p)
        card_des.appendChild(cat);
        cat.appendChild(cat_con);
        card.appendChild(card_bottom);
        card_bottom.appendChild(btn);
        card_bottom.appendChild(fav);
        console.log(typeof+(itemCount));
        
        if(favProduct.includes(item.image)){
            fav.classList.remove('gray')
            fav.src = "imgs/heart-solid-red.svg";
        }
        minas.disabled = true
        minas.style.backgroundColor = '#0000009e'
        plus.addEventListener('click',()=>{
            count++
            itemCount.textContent = count
            minas.disabled = false
            minas.style.backgroundColor = 'black'
            parseInt(itemCount)

            TotalPrice += parseInt(item.price)
            total.textContent = `${TotalPrice}$`
            
        })
        minas.addEventListener('click',()=>{
            if(count > 1){
                minas.disabled = false
                minas.style.backgroundColor = 'black'
                count--
                itemCount.textContent = count
                
            }
            else{
                minas.disabled = true
                minas.style.backgroundColor = '#0000009e'
            }
            TotalPrice -= parseInt(item.price)
            total.innerHTML = `${TotalPrice}$`

        })
        // Event listeners for the button and favorite icon
        btn.addEventListener('click', () => {
            card.style.display = 'none'
            TotalPrice -= parseInt(item.price)
            total.innerHTML = `${TotalPrice}$`
            window.localStorage.setItem('total', JSON.stringify(TotalPrice));
            products = products.filter(items => items !== item);
            window.localStorage.setItem('products', JSON.stringify(products));
        });
        fav.addEventListener('click', () => {
            if (fav.classList.contains('gray')) {
                fav.src = "imgs/heart-solid-red.svg";
                fav.classList.remove('gray');
                favProduct.push(item)
                window.localStorage.setItem('fav', JSON.stringify(favProduct));

            } else {
                fav.src = "imgs/heart-solid-gray.svg";
                fav.classList.add('gray');
                favProduct = favProduct.filter(items => items !== item);
                window.localStorage.setItem('fav', JSON.stringify(favProduct));
            }
        });
    });
}

function renderFavProducts(favProducts) {
    main.innerHTML = ''; // Clear current products
    favProducts.forEach(item => {
        let card = document.createElement('div');
        let photo = document.createElement('img');
        let card_des = document.createElement('div');
        let product = document.createElement('h6');
        let product_name = document.createElement('span');
        let price = document.createElement('h6');
        let price_con = document.createElement('span');
        let cat = document.createElement('h6');
        let cat_con = document.createElement('span');
        let card_bottom = document.createElement('div');
        let fav = document.createElement('img');

        // Classes
        card.classList.add('card');
        fav.classList.add('favItem')
        card_des.classList.add('card_des');
        card_bottom.classList.add('card_bottom', 'd-flex', 'justify-content-between');
        fav.classList.add('gray');

        // Content
        photo.src = item.image;
        product.textContent = 'product name: ';
        product_name.textContent = item.title;
        price.textContent = 'price: ';
        price_con.textContent = item.price + '$';
        cat.textContent = 'category: ';
        cat_con.textContent = item.category;
        total.textContent = TotalPrice;
        fav.src = 'imgs/heart-solid-gray.svg';

        // Append
        favSection.appendChild(card);
        card.appendChild(photo);
        card.appendChild(card_des);
        card_des.appendChild(product);
        product.appendChild(product_name);
        card_des.appendChild(price);
        price.appendChild(price_con);
        card_des.appendChild(cat);
        cat.appendChild(cat_con);
        card.appendChild(card_bottom);
        card_bottom.appendChild(fav);
        if(fav.classList.contains('favItem')){
            fav.src = "imgs/heart-solid-red.svg";
        }
        fav.addEventListener('click', () => {
                fav.src = "imgs/heart-solid-gray.svg";
                fav.classList.remove('favItem')
                fav.classList.add('gray');
                favProduct = favProduct.filter(items => items !== item);
                window.localStorage.setItem('fav', JSON.stringify(favProduct));
        });
    });
}
renderFavProducts(favProduct)
renderProducts(products)
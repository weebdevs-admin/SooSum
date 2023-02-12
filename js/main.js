let elOrder = document.querySelector('.order')
let localLong = window.localStorage.getItem('local')
let str = `lan${localLong}`


elOrder.innerHTML = ` <div class="box">
<h2 class="box__title">${Data.order[0][str]}</h2>
<p class="box__desc">${Data.order[1][str]}</p>
<input type="text" class="box__input b-inp" placeholder="${Data.order[2][str]}">
<input type="number" class="box__input" placeholder="+998">
<button class="box__btn">${Data.order[3][str]}</button>
</div>
<div class="chegirma">
<h3 class="box__h3">${Data.order[4][str]}</h3>
<h2 class="box__h2">1199 000</h2>
<h3 class="box__h1"><span class="colorRed">${Data.order[5][str]}</span> 200 000</h3>
</div>`

let BoxTitle = document.querySelector('.box__title')
let BoxDesc = document.querySelector('.box__desc')
let BoxInput = document.querySelector('.b-inp')
let BoxBtn = document.querySelector('.box__btn')
let BoxH3 = document.querySelector('.box__h3')
let BoxH1 = document.querySelector('.box__h1')


let elNavbarList = document.querySelector('.navbar__list')
let hero = document.querySelector('.hero')
elNavbarList.innerHTML = `
<li class="navbar__item sel1"><a href="">${Data.navbar[0][str]}</a></li>
<li class="navbar__item sel2"><a href="">${Data.navbar[1][str]}</a></li>
<li class="navbar__item sel3"><a href="">${Data.navbar[2][str]}</a></li>
<li class="navbar__item ">
<select name="" class="select">
<option class="lan__opt" value="UZ">UZ</option>
<option class="lan__opt" value="RU">RU</option>
<option class="lan__opt" value="EN">EN</option>
</select>
</li>
<li class="navbar__item sel4"><a href="" class="btn">${Data.navbar[3][str]}</a></li>`

hero.innerHTML= `<b class="hero__desc">${Data.hero[0][str]}</b>
<h2 class="hero__title">
${Data.hero[1][str]}
</h2>
<a href="" class="btn hero__btn">${Data.hero[2][str]}</a>`


let heroDesc = document.querySelector('.hero__desc')
let heroTitle = document.querySelector('.hero__title')
let heroBtn = document.querySelector('.hero__btn')

let navLang = document.querySelector('.navbar__item')
let Sel1 =document.querySelector(".sel1")
let Sel2 =document.querySelector(".sel2")
let Sel3 =document.querySelector(".sel3")
let Sel4 =document.querySelector(".sel4")
let elSelect = document.querySelector('.select')
let colorRed = document.querySelector('.colorRed')
    // Sel1.textContent = Data.navbar[0].a
    // Sel2.textContent = Data.navbar[1].a
    // Sel3.textContent = Data.navbar[2].a
    // Sel4.textContent = Data.navbar[3].a
    // Sel4.classList.add('btn')


function mapper(){

    
elSelect.addEventListener('change', (e) => {
    e.preventDefault()
    window.localStorage.setItem('local', elSelect.value)


    if(elSelect.value == "RU"){
        BoxTitle.textContent = Data.order[0].lanRU
        BoxDesc.textContent = Data.order[1].lanRU
        BoxInput.placeholder = Data.order[2].lanRU
        BoxBtn.textContent = Data.order[3].lanRU
        BoxH3.textContent = Data.order[4].lanRU
        BoxH1.textContent = Data.order[5].lanRU+ " 200 000"
        colorRed.classList='colorRed'
    // ----------------------------------------------------------
        heroDesc.textContent = Data.hero[0].lanRU
        heroTitle.textContent = Data.hero[1].lanRU
        heroBtn.textContent = Data.hero[2].lanRU
        Sel1.textContent = Data.navbar[0].lanRU
        Sel2.textContent = Data.navbar[1].lanRU
        Sel3.textContent = Data.navbar[2].lanRU
        Sel4.value = Data.navbar[3].lanRU
        Sel4.classList.add('btn')
    }else if(elSelect.value == "UZ"){
        BoxTitle.textContent = Data.order[0].lanUZ
        BoxDesc.textContent = Data.order[1].lanUZ
        BoxInput.placeholder = Data.order[2].lanUZ
        BoxBtn.textContent = Data.order[3].lanUZ
        BoxH3.textContent = Data.order[4].lanUZ
        BoxH1.textContent = Data.order[5].lanUZ+ " 200 000"
        colorRed.classList='colorRed'
        heroDesc.textContent = Data.hero[0].lanUZ
        heroTitle.textContent = Data.hero[1].lanUZ
        heroBtn.textContent = Data.hero[2].lanUZ
        Sel1.textContent = Data.navbar[0].lanUZ
        Sel2.textContent = Data.navbar[1].lanUZ
        Sel3.textContent = Data.navbar[2].lanUZ
        Sel4.textContent = Data.navbar[3].lanUZ
        Sel4.classList.add('btn')
        }
    else if(elSelect.value == "EN"){
        BoxTitle.textContent = Data.order[0].lanEN
        BoxDesc.textContent = Data.order[1].lanEN
        BoxInput.placeholder = Data.order[2].lanEN
        BoxBtn.textContent = Data.order[3].lanEN
        BoxH3.textContent = Data.order[4].lanEN
        BoxH1.textContent = Data.order[5].lanEN+ " 200 000"
        colorRed.classList='colorRed'

        heroDesc.textContent = Data.hero[0].lanEN
        heroTitle.textContent = Data.hero[1].lanEN
        heroBtn.textContent = Data.hero[2].lanEN
        Sel1.textContent = Data.navbar[0].lanEN
        Sel2.textContent = Data.navbar[1].lanEN
        Sel3.textContent = Data.navbar[2].lanEN
        Sel4.textContent = Data.navbar[3].lanEN
        Sel4.classList.add('btn')
        }
    
        else{
            Sel1.textContent = Data.navbar[0].lanUZ
            Sel2.textContent = Data.navbar[1].lanUZ
            Sel3.textContent = Data.navbar[2].lanUZ
            Sel4.textContent = Data.navbar[3].lanUZ
            Sel4.classList.add('btn')
        }
    })
}

let LanOpt = document.querySelectorAll('.lan__opt')
LanOpt.forEach((item)=>{
    if(localLong == item.value){
        item.setAttribute('selected', true)
    }
})


mapper()

    



 
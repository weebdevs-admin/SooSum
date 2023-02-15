let elOrder = document.querySelector('.order')
let localLong = window.localStorage.getItem('local')
let str = ""
if(localLong == 'UZ'||localLong == 'EN'|| localLong == 'RU'){
    str = `lan${localLong}`

}
else{
    str = "lanUZ"
}
let mAbaut = document.querySelector('.m_about')




let Fakt = document.querySelector('.fakt')
Fakt.innerHTML = `
<div class="container">
<div>
<h3 class="F_TITLEF item1">${Data.fakt[0][str]}</h3>
<img class="f_image" src="./img/Group 52 (1).png" alt="" />
</div>
<div class="f_p11">
<p class="faktitem item2">
  <span>100</span> ${Data.fakt[1][str]}
</p>
</div>
<div class="f_p22">
<p class="faktitem item1 ">
  <span> 1.3 mlrd </span>${Data.fakt[2][str]}
</p>
</div>
<div class="f_33">
<p class="faktitem">
  <span>100</span>${Data.fakt[2][str]}
</p>
</div>`

let faktItem1 = document.querySelector('.item2')
let fTitle = document.querySelector('.F_TITLEF')



mAbaut.innerHTML = `
<div class="container">
  <div class="about">
    <p class="a_text1">
      ${Data.about[0][str]}
    </p>
    <img class="m_jen" src="./img/image 18.png" alt="" />
    <p class="a_text2">${Data.about[0][str]}
    </p>
    <img class="m_jen2" src="./img/image 18 (1).png" alt="" />
  </div>
</div>`
let aText1 = document.querySelector('.a_text1')
let aText2 = document.querySelector('.a_text2')
let Abaut2 = document.querySelector('.about2')
Abaut2.innerHTML=`
<div class="about2">
  <div class="container">
  <img class="a_img1" src="./img/Frame 15.png" alt="" />
  <p class="global__text">${Data.footer2[1][str]}
  </p>
</div>
</div>`


let globalText = document.querySelector('.global__text')
let main2 = document.querySelector('.main_2')
main2.innerHTML = `
<div class="container">
<div class="main_bg">
  <img class="main_img1" src="./img/iconhous.png" alt="" />
  <img class="main_img2" src="./img/iconhous.png" alt="" />
</div>
<p class="m_p1">${Data.main[0][str]}</p>
<p class="m_p2">${Data.main[1][str]}</p>
</div>
</div>`

let mP1 = document.querySelector('.m_p1')
let mP2 = document.querySelector('.m_p2')



let abaut3 = document.querySelector('.about3')
abaut3.innerHTML= `<div class="container">
<div class="about3">
  <img class="imgqasr" src="./img/Group 55.png" alt="" />
  <h2 class="komp">${Data.about2[0][str]}</h2>
  
  <p class="soosum">${Data.about2[1][str]}
  </p>
</div>
</div>`

let Komp = document.querySelector('.komp')
let soosumText = document.querySelector('.soosum')

let FooterSec = document.querySelector('.footer')


let Footer3 = document.querySelector('.footer3')

Footer3.innerHTML= `
<div>
<p class="footer__text str1">${Data.footer3[0][str]}</p>
</div>
<div class="foter_ps">
<p class="str2">${Data.footer3[1][str]}</p>
<p class="str3">${Data.footer3[2][str]}</p>
<p class="str4   ">${Data.footer3[3][str]}</p>
</div>
<div class="footer_inps">
<h2 class="footerh2 str5">${Data.footer3[4][str]}</h2><br>
<input class="inp" type="text" placeholder="username"><br><br>
<input class="inp" type="number" placeholder="+998"><br>
<button class="footerbtn str6">${Data.footer3[5][str]}</button>
</div>`


let Str1 = document.querySelector('.str1')
let Str2 = document.querySelector('.str2')
let Str3 = document.querySelector('.str3')
let Str4 = document.querySelector('.str4')
let Str5 = document.querySelector('.str5')
let Str6 = document.querySelector('.str6')


FooterSec.innerHTML= `
<div class="container">
<div class="footer">
<img class="f_img" src="./img/Group 54.png" alt="" />
<h2 class="f_text">${Data.footer[0][str]}
</h2>
<div class="f_p">
  <p class="class__1">${Data.footer[1][str]}
  </p>
  <p  class="class__2">${Data.footer[2][str]}
  </p>
  <p class="class__3">${Data.footer[3][str]}
  </p>
  <p class="class__4">${Data.footer[4][str]}
  </p>
</div>
<div class="f_p2">
</p>
  <p class="class__6">${Data.footer[6][str]}
  </p>
<p class="class__5">${Data.footer[5][str]}
  <p class="class__7">${Data.footer[7][str]}
  </p>
</div>
</div>
</div>`
let FText = document.querySelector('.f_text')
let Class1 = document.querySelector('.class__1')
let Class2 = document.querySelector('.class__2')
let Class3 = document.querySelector('.class__3')
let Class4 = document.querySelector('.class__4')
let Class5 = document.querySelector('.class__5')
let Class6 = document.querySelector('.class__6')
let Class7 = document.querySelector('.class__7')
let FooterNew = document.querySelector('.footer2')
FooterNew.innerHTML= `
<div class="container">
<div class="footer_about">
<img class="f_immg" src="./img/Group 53.png" alt="" />
<h2 class="f_tite">${Data.footer2[0][str]}
</h2>
<p class="textFoter">${Data.footer2[1][str]}
</p>
</div>
</div>`

let Ftitle = document.querySelector('.f_tite')
let Ftitle2 = document.querySelector('.textFoter')







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
        Str1.textContent = Data.footer3[0].lanRU
        Str2.textContent = Data.footer3[1].lanRU
        Str3.textContent = Data.footer3[2].lanRU
        Str4.textContent = Data.footer3[3].lanRU
        Str5.textContent = Data.footer3[4].lanRU
        Str6.textContent = Data.footer3[5].lanRU
        BoxTitle.textContent = Data.order[0].lanRU
        BoxDesc.textContent = Data.order[1].lanRU
        BoxInput.placeholder = Data.order[2].lanRU
        BoxBtn.textContent = Data.order[3].lanRU
        BoxH3.textContent = Data.order[4].lanRU
        mP1.textContent =  Data.main[0].lanRU
        mP2.textContent =  Data.main[1].lanRU
        Komp.textContent = Data.about2[0].lanRU
        Ftitle.textContent = Data.fakt[0].lanRU
        Ftitle.textContent = Data.footer2[0].lanRU
        Ftitle2.textContent = Data.footer2[1].lanRU
        soosumText.textContent = Data.about2[1].lanRU
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
        aText1.textContent = Data.about[0].lanRU
        aText2.textContent = Data.about[0].lanRU
        globalText.textContent = Data.footer2[1].lanRU
        FText.textContent = Data.footer[0].lanRU
        Class1.textContent = Data.footer[0].lanRU
        Class2.textContent = Data.footer[1].lanRU
        Class3.textContent = Data.footer[2].lanRU
        Class4.textContent = Data.footer[3].lanRU
        Class5.textContent = Data.footer[4].lanRU
        Class6.textContent = Data.footer[5].lanRU
        Class7.textContent = Data.footer[6].lanRU
        
        Sel4.classList.add('btn')
    }else if(elSelect.value == "UZ"){
        BoxTitle.textContent = Data.order[0].lanUZ
        Str1.textContent = Data.footer3[0].lanUZ
        Str2.textContent = Data.footer3[1].lanUZ
        Str3.textContent = Data.footer3[2].lanUZ
        Str4.textContent = Data.footer3[3].lanUZ
        Str5.textContent = Data.footer3[4].lanUZ
        Str6.textContent = Data.footer3[5].lanUZ
        BoxDesc.textContent = Data.order[1].lanUZ
        BoxInput.placeholder = Data.order[2].lanUZ
        BoxBtn.textContent = Data.order[3].lanUZ
        FText.textContent = Data.footer[0].lanUZ

        BoxH3.textContent = Data.order[4].lanUZ
        BoxH1.textContent = Data.order[5].lanUZ+ " 200 000"
        colorRed.classList='colorRed'
        heroDesc.textContent = Data.hero[0].lanUZ
        heroTitle.textContent = Data.hero[1].lanUZ
        heroBtn.textContent = Data.hero[2].lanUZ
        Sel1.textContent = Data.navbar[0].lanUZ
        Sel2.textContent = Data.navbar[1].lanUZ
        Ftitle.textContent = Data.fakt[0].lanUZ
        Sel3.textContent = Data.navbar[2].lanUZ
        Sel4.textContent = Data.navbar[3].lanUZ
        aText1.textContent = Data.about[0].lanUZ
        aText2.textContent = Data.about[0].lanUZ
        globalText.textContent = Data.footer2[1].lanUZ
        mP1.textContent =  Data.main[0].lanUZ
        mP2.textContent =  Data.main[1].lanUZ
        Ftitle.textContent = Data.footer2[0].lanUZ
        Ftitle2.textContent = Data.footer2[1].lanUZ
        Komp.textContent = Data.about2[0].lanUZ
        soosumText.textContent = Data.about2[1].lanUZ
        Class1.textContent = Data.footer[0].lanUZ
        Class2.textContent = Data.footer[1].lanUZ
        Class3.textContent = Data.footer[2].lanUZ
        Class4.textContent = Data.footer[3].lanUZ
        Class5.textContent = Data.footer[4].lanUZ
        Class6.textContent = Data.footer[5].lanUZ
        Class7.textContent = Data.footer[6].lanUZ

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
        globalText.textContent = Data.footer2[1].lanEN
        Komp.textContent = Data.about2[0].lanEN
        soosumText.textContent = Data.about2[1].lanEN
        heroDesc.textContent = Data.hero[0].lanEN
        heroTitle.textContent = Data.hero[1].lanEN
        Ftitle.textContent = Data.fakt[0].lanEN

        heroBtn.textContent = Data.hero[2].lanEN
        Sel1.textContent = Data.navbar[0].lanEN
        Sel2.textContent = Data.navbar[1].lanEN
        FText.textContent = Data.footer[0].lanEN

        Sel3.textContent = Data.navbar[2].lanEN
        Sel4.textContent = Data.navbar[3].lanEN
        aText1.textContent = Data.about[0].lanEN
        aText2.textContent = Data.about[0].lanEN
        mP1.textContent =  Data.main[0].lanEN
        mP2.textContent =  Data.main[1].lanEN
        Class1.textContent = Data.footer[0].lanEN
        Class2.textContent = Data.footer[1].lanEN
        Class3.textContent = Data.footer[2].lanEN
        Str1.textContent = Data.footer3[0].lanEN
        Str2.textContent = Data.footer3[1].lanEN
        Str3.textContent = Data.footer3[2].lanEN
        Str4.textContent = Data.footer3[3].lanEN
        Str5.textContent = Data.footer3[4].lanEN
        Str6.textContent = Data.footer3[5].lanEN
        Class4.textContent = Data.footer[3].lanEN
        Class5.textContent = Data.footer[4].lanEN
        Class6.textContent = Data.footer[5].lanEN
        Class7.textContent = Data.footer[6].lanEN
        Ftitle.textContent = Data.footer2[0].lanEN
        Ftitle2.textContent = Data.footer2[1].lanEN
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

    



 
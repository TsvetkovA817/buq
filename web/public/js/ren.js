
async function renHeader(pElHeader) {

 const s= `
    <div class="header__logo"  onclick="openInThisTab('index.html');">
    <img class="header__bookopen_img" src="./img/book_open.svg"
        alt="BookOpen">
    <span>BOOKSTORE</span>
</div>
<div class="header__right">
    <img class="header__user_img" src="./img/user1.svg"
        alt="user">
    <img class="header__fav_img" src="./img/book_mark.svg" alt="BookMark">
    <img class="header__cart_img" src="./img/cart1.svg"
        alt="Cart">
</div>
`;
   await renHeaderHtml(pElHeader,s);
}  
function renHeaderHtml(pElHeader,s) {
    pElHeader.innerHTML=s;  
}


function renFooter(pElFooter) {

    const s= `
    <div class="footer_line">
    <span>&nbsp;</span>
</div>
<footer class="footer">

    <div class="footer_left">
        <img src="./img/book_open.svg" alt="book">
        <span>BOUQINIST</span>
    </div>
    <div class="footer_center">
        <div class="footer_social1">
            <img class="footer_social1_img" src="./img/telegram.svg" alt="telegram">
        </div>
        <div class="footer_social2">
            <img class="footer_social2_img" src="./img/git.svg" alt="git">
        </div>
        <div class="footer_social3">
            <img class="footer_social3_img" src="./img/email.svg" alt="email">
        </div>

    </div>
    <div class="footer_right">
        <span>by Bouqinist Team</span>
    </div>
</footer>
`;
   pElFooter.innerHTML=s;
   }  
   

const elHeader=document.querySelector('.header');
if (elHeader){
  renHeader(elHeader);
};    

const elFooter=document.querySelector('.footer_wrap');
if (elFooter){
  renFooter(elFooter);
}   

console.log('ren');


console.log('evn');
const elHeaderUserBtn = document.querySelector('.header__user_img');
if(elHeaderUserBtn){
  elHeaderUserBtn.addEventListener('click', showLgn);
}

const elHeaderCartBtn = document.querySelector('.header__cart_img');
if(elHeaderCartBtn){
  elHeaderCartBtn.addEventListener('click', showCart);
}

const elHeaderFavBtn = document.querySelector('.header__fav_img');
if(elHeaderFavBtn){
  elHeaderFavBtn.addEventListener('click', showFav);
}

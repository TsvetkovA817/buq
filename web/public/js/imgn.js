let mSlider1Napr=-1;
const mSlider1MinOp=0.3;
const mSlider1koef=0.1;
let mSlider1NumPic=1;
const mSlider1TimeFade=200;
const mSlider1Time1=1000;
let mSlider1TimeSwch=false;
const arrTitles=[
    'Какую книгу вы ищете?',
    'Все книги здесь!',
    'Лучший выбор!',
];

function Slider1() {
    elImgHero=document.querySelector('.hero_right_img');
    let mTekOp = Number(elImgHero.style["opacity"]); 
    if (mTekOp>mSlider1MinOp && mTekOp<=1) {
        mTekOp = mTekOp + (mSlider1Napr)*mSlider1koef;
        elImgHero.style["opacity"]=mTekOp;
    }
    else if(mSlider1Napr<mSlider1MinOp){
       mSlider1Napr=1;
       elImgHero.style["opacity"]=mSlider1MinOp+mSlider1koef;
       mSlider1NumPic=mSlider1NumPic+1;
       if(mSlider1NumPic>3) mSlider1NumPic=1;
       elImgHero["src"]=`./img/banner_${mSlider1NumPic}.jpg`;
       elHeroH1=document.querySelector('.hero_title_h1');
       if(elHeroH1 && mSlider1NumPic>0){
        elHeroH1.innerHTML=arrTitles[mSlider1NumPic-1];
       }
    }
    else if(mSlider1Napr>mSlider1MinOp){
        mSlider1Napr=-1;
        elImgHero.style["opacity"]=1;
     }

     if(mTekOp>=1 && !mSlider1TimeSwch){
        clearInterval(mSlider1Interval);  
        mSlider1Interval=setInterval(Slider1, mSlider1Time1);
        mSlider1TimeSwch=true;
     }
     else if (mTekOp<1 && mSlider1TimeSwch ){
        mSlider1TimeSwch=false;
        clearInterval(mSlider1Interval);  
        mSlider1Interval=setInterval(Slider1, mSlider1TimeFade);
     }
}

let mSlider1Interval=null;
elImgHero=document.querySelector('.hero_right_img');
if (elImgHero){
    mSlider1Interval=setInterval(Slider1, mSlider1TimeFade);
}

var TxtRotate = function(el, toRotate, period,col) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.col=col;
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];
    const elH=document.querySelector('.txt-rotate');
    const elP=document.querySelector('.popular_cards');
    
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    let that = this;
    let delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      if(elH) elH.style.color=this.col[i];
      if(elP) elP.style.borderColor=this.col[i];
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    let elements = document.getElementsByClassName('txt-rotate');
    for (let i=0; i<elements.length; i++) {
      let toRotate = elements[i].getAttribute('data-rotate');
      let period = elements[i].getAttribute('data-period');
      let col = elements[i].getAttribute('data-color');
      if (toRotate) {
        arrCol=JSON.parse(col);
        new TxtRotate(elements[i], JSON.parse(toRotate), period, arrCol);
      }
    }
    
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  
  };

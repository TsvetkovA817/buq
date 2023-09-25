    const arrDtP=[
        { id: 'ИД', name: 'Ник', email:'Емаил', fname:'Имя',adr:'Адрес' },
        { id: 'ro', name: 'rw', email:'rw',  fname:'rw', adr:'rw' },
        { id: '*', name: '*', email:'*', fname:'', adr:'' },

    ];
    let arrKey=[];
    let arrZn=[];
    let kolFields=0;

async function profileData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "GET", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded; charset=utf-8',
        'Accept': '*/*',
        'Authorization': 'Bearer ' + gToken,
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
    });
    return await response.json(); 
}
  
function getProfile(){
  profileData(routes.profile, {}).then((data) => {
    
    let elArr=Object.keys(data.user);
    kolFields=elArr.length; 
    
    for (let key in arrDtP[0]) {
        const hasKey = elArr.includes(key); 
        if(hasKey){
         arrKey.push(key);
         arrZn.push(data.user[key]);
        }
    }

    kolFields=arrKey.length;

    const elF=document.querySelector('.lk_usrs_form');

    if (elF){
    let s='<form onsubmit="event.preventDefault();updProfile();" autocomplete="off">';
    let ob=false;
    let s1='';
    let s2='';
    let s3='';
    let s4='';
     for (let index = 0; index < kolFields; index++) {
         const key = arrKey[index];
         let lbl = '';
         if(arrDtP[2][key]=='*'){ ob=true; lbl = arrDtP[0][key]+'*';}
         else { lbl = arrDtP[0][key]; ob=false;}
    
         s1=`
         <div>
          <label>${lbl}</label> `;
        if (ob){
            s2=`<label class="lk_usrs_validation_error lk_usrs_hide" id="lk_usrs_${key}ValidationError">Обязательно заполнить</label>`;
        } 
        else{
            s2='';
        }

        if(arrDtP[1][key]=='ro'){
            s3=`<input type="text" name="${key}" id="lk_usrs_${key}" class="lk_usrs_inp" readonly>
            </div> `;
           }
        else {
            s3=`<input type="text" name="${key}" id="lk_usrs_${key}" class="lk_usrs_inp">
            </div> `;
           }
   
        s=s+s1+s2+s3;   
    
     } 
     s4=`
     <div  class="lk_usrs_form_action_buttons">
         <input type="submit" value="Сохранить" class="lk_usrs_btn">
     </div> `;
    s=s+s4;
    s=s+'</form>';
    
    elF.innerHTML=s;

    s1='';
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        const zn = arrZn[index];
        s1='lk_usrs_'+key;
        document.getElementById(s1).value = "";
        document.getElementById(s1).value = zn;
    }  

    }

  });
}

const elProfilePage=document.querySelector('.profile_page');
if (elProfilePage){
    getProfile();
}    


async function postProfile1(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", 
      mode: "no-cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
        'Accept': '*/*',
        'Authorization': 'Bearer ' + gToken,
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: data,
    });
    return response; 
}
  
function updProfile(){
    let formData = {};
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        formData[key] = document.getElementById("lk_usrs_"+key).value;    
    }  
   console.log(formData);

if (crud1Validate()) {
    processUpdProfile(formData);
}

}


function processUpdProfile(formData) {
    
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
            const data=`email=${formData.email}&adr=${formData.adr}&name=${formData.name}&fname=${formData.fname}`;
            xmlHttp.open("POST", routes.updprofile, false);
            xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
            xmlHttp.setRequestHeader('Accept', '*/*');
            xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            if (gToken) {
                xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
            }   
            xmlHttp.onreadystatechange = handleSrvResUpdProfile;
            xmlHttp.withCredentials = true;
            xmlHttp.send(data);
    }
    else{
            //
    }
}

function handleSrvResUpdProfile() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
        }
        else {
            //
        }
    }
}

function crud1Validate() {
    let isValid = true;
    let s1='';
    let s2='';
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        s1='lk_usrs_'+key;
        s2=`lk_usrs_${key}ValidationError`;
         
        const el=document.getElementById(s2);
        if(el){
            if (document.getElementById(s1).value == "") {
                isValid = false;
                document.getElementById(s2).classList.remove("lk_usrs_hide");
            } else {
                if (!document.getElementById(s2).classList.contains("lk_usrs_hide"))
                    document.getElementById(s2).classList.add("lk_usrs_hide");
            }
        }
    }  
    return isValid;
}


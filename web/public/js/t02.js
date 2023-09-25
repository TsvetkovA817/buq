let arrT02post = [];

const elF=document.getElementById('t02form1');

if (elF){

    const elF1=document.getElementById('t02s1');
    if(elF1) {
        elF1.value=arrT02[0].zn;
        document.getElementById('t02s1_lbl').innerText=arrT02[0].title;
    }   

    const elF2=document.getElementById('t02s2');
    if(elF2) {
        elF2.value=arrT02[1].zn;
        document.getElementById('t02s2_lbl').innerText=arrT02[1].title;
    }    

    const elF3=document.getElementById('t02s3');
    if(elF3) {
        elF3.value=arrT02[2].zn;
        document.getElementById('t02s3_lbl').innerText=arrT02[2].title;
    }    

}


function processUpdT02(pData) {
    
    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {

            
            const data=`t02s=${JSON.stringify(pData)}`;
            xmlHttp.open("POST", routes.updset, false);
            xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
            xmlHttp.setRequestHeader('Accept', '*/*');
            xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            if (gToken) {
                xmlHttp.setRequestHeader('Authorization', 'Bearer ' + gToken);
            }   
            xmlHttp.onreadystatechange = handleSrvResUpdT02;
            xmlHttp.withCredentials = true;
            xmlHttp.send(data);
    }
    else{
        //
    }
}

function handleSrvResUpdT02() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
            gSettingsStatus='upd';
        }
        else {
            //
        }
    }
}


function t02OnForm1Submit(){
    
    arrT02post.length=0;
    let znt='';
    let znp='';
    //1
    znt=String(t02s1.value).trim();
    znp=String(arrT02[0].zn).trim();
    if(znt!=znp){
        arrT02post.push({id:1, zn: znt });       
    }
    //2
    znt=String(t02s2.value).trim();
    znp=String(arrT02[1].zn).trim();
    if(znt!=znp){
        arrT02post.push({id:2, zn: znt });       
    }
    //3
    znt=String(t02s3.value).trim();
    znp=String(arrT02[2].zn).trim();
    if(znt!=znp){
        arrT02post.push({id:3, zn: znt });       
    }
    

    if(arrT02post.length>0){
      processUpdT02(arrT02post);
    }
    else{
        gSettingsStatus='ok';
        console.log('Настройки не изменились');
    }  
    
}
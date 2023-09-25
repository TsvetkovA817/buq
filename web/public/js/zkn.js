let arrT05post = [];
let elT05 = null;
let elT05smz = null;
let arrT03u=[];

let arrKey = ['id','title','cnt','price','sm'];
let kolFields = 5;

const xmlHttp2 = new XMLHttpRequest();

function renderT05e_form() {
    const elF = document.getElementById('t05e_form');

    if (elF && elT05) {

        const elF1 = document.getElementById('t05e_id');
        if (elF1 && elT05['idz']) {
            elF1.value = elT05.idz;
        }
        else if(elF1 && !elT05['idz']){
            elF1.value = 'Новый';
        }

        const elF2 = document.getElementById('t05e_dtz');
        if (elF2 && elT05['dtz']) {
            elF2.value = elT05.dtz;
        }
        else if(elF2 && !elT05['dtz']){
            elF2.value = new Date().toLocaleDateString();
        }

        const elF3 = document.getElementById('t05e_fname');
        if (elF3) {
            elF3.value = elT05.fname;
        }
        const elF4 = document.getElementById('t05e_email');
        if (elF4) {
            elF4.value = elT05.email;
        }

        const elF5 = document.getElementById('t05e_adr');
        if (elF5) {
            elF5.value = elT05.adr;
        }

    }
}


function renderT05smz_form() {
    const elF = document.getElementById('t05e_form');

    if (elF && elT05smz) {

        const elF1 = document.getElementById('t05e_smz');
        if (elF1) {
            elF1.value = elT05smz;
        }

    }
}



function processGetElUserT05() {
    let data = null;
    let p1 = null;
    data = p1;
    gParamProcessT = {
        method: "GET",
        data: data,
        route: routes.profile,
        f1: handlerPr1GetElUserT05,
        f2: handlerPr2GetElUserT05
    }
    processT(gParamProcessT);
}

function handlerPr1GetElUserT05(pData) {
    console.log('Данные заказчика', pData);
    if (pData['user']) {
        elT05 = pData.user;
        renderT05e_form();
    }
}
function handlerPr2GetElUserT05() {
    console.log('Нет данных заказчика');
}


const processGetT03uT05 = function(url, cb) {
    
    if (xmlHttp2.readyState == 4 || xmlHttp2.readyState == 0) {
        let data = null;
        let p1 = '';
        if (gUId) {
            p1 = '?idu=' + gUId;
        }
        else {
            p1 = '?idu=0';
        }
        data = p1;
        xmlHttp2.open("GET", routes.getucart + data, true);

        xmlHttp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
        xmlHttp2.setRequestHeader('Accept', '*/*');
        xmlHttp2.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        if (gToken) {
            xmlHttp2.setRequestHeader('Authorization', 'Bearer ' + gToken);
        }

        xmlHttp2.onreadystatechange = handleSrvResT03uT05;
        xmlHttp2.withCredentials = true;
        xmlHttp2.send(data);
    }
    else {
        //
    }
}
  
function handleSrvResT03uT05() {
    if (xmlHttp2.readyState == 4) {
        if (xmlHttp2.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp2.response);
            console.log('Данные корзины');
            console.log(xmlResponse);
            console.dir(xmlHttp2.getAllResponseHeaders());
            cart.length = 0;
            cart.push(...xmlResponse.data);
            arrT03u.push(...xmlResponse.data);
            if (cart.length > 0) {
                let smz=0;
                for (let index = 0; index < cart.length; index++) {
                    const el = cart[index];
                    smz=smz+Number(el.price)*Number(el.cnt);
                }
                elT05smz=smz;
                renderT05smz_form();
                putArrToTable();
            }
        }
        else {
            //
        }
    }
}


function insertNewRecord(data) {
    let table = document.getElementById("lk_usrs_tbl").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    for (let index = 0; index < kolFields; index++) {
        const key = arrKey[index];
        let cell1 = newRow.insertCell(index);
        cell1.innerHTML = data[key];
        if(key=='sm'){
           cell1.innerHTML = Math.round(data['price']*data['cnt']*100)/100;
        }
    }
}

function resetList() {
    let table = document.getElementById("lk_usrs_tbl").getElementsByTagName('tbody')[0];
    table.innerHTML = '';
}

function putArrToTable() {
    for (let index = 0; index < arrT03u.length; index++) {
        const el = arrT03u[index];
        insertNewRecord(el);
    }
}


function processUpdT02(pData) {

    if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
        const data = `t02s=${JSON.stringify(pData)}`;
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
    else {
        //
    }
}

function handleSrvResUpdT02() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {
            const xmlResponse = JSON.parse(xmlHttp.response);
            console.log(xmlResponse);
            console.dir(xmlHttp.getAllResponseHeaders());
            gSettingsStatus = 'upd';
        }
        else {
            //
        }
    }
}


function t02OnForm1Submit() {

    arrT02post.length = 0;
    let znt = '';
    let znp = '';
    //1
    znt = String(t02s1.value).trim();
    znp = String(arrT02[0].zn).trim();
    if (znt != znp) {
        arrT02post.push({ id: 1, zn: znt });
    }
    //2
    znt = String(t02s2.value).trim();
    znp = String(arrT02[1].zn).trim();
    if (znt != znp) {
        arrT02post.push({ id: 2, zn: znt });
    }
    //3
    znt = String(t02s3.value).trim();
    znp = String(arrT02[2].zn).trim();
    if (znt != znp) {
        arrT02post.push({ id: 3, zn: znt });
    }
    if (arrT02post.length > 0) {
        processUpdT02(arrT02post);
    }
    else {
        gSettingsStatus = 'ok';
        console.log('Настройки не изменились');
    }
}

processGetElUserT05();
processGetT03uT05();

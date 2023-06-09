document.getElementById('postbt').addEventListener('click', postSend);
document.getElementById('putbt').addEventListener('click', putSend);
document.getElementById('getbt').addEventListener('click', getSend);
document.getElementById('delbt').addEventListener('click', delSend);

const date = document.getElementById('date');
date.value = new Date();

async function postSend(){
        let form = document.getElementById('myform');
        let method = "post";
        let endpoint = "https://httpbin.org/post";
        let data = new FormData(form);

        let request = await fetch(endpoint, {
        method : method,
        body : data
    }  );

    let jsonPretty = JSON.stringify(JSON.parse(await request.text()),null,2);
    document.getElementById('response').innerHTML = jsonPretty;
}

async function putSend(){
        let form = document.getElementById('myform');
        let method = "put";
        let endpoint = "https://httpbin.org/put";
        let data = new FormData(form);

        let request = await fetch(endpoint, {
        method : method,
        body : data
    });

    let jsonPretty = JSON.stringify(JSON.parse(await request.text()),null,2);
    document.getElementById('response').innerHTML = jsonPretty;
}


async function getSend(){
        let form = document.getElementById('myform');
        let method = "get";
        let endpoint = "https://httpbin.org/get";
            
        let request = await fetch(endpoint, {
        method : method   
    });

        let jsonPretty = JSON.stringify(JSON.parse(await request.text()),null,2);
        document.getElementById('response').innerHTML = jsonPretty;
}


async function delSend(){
        let form = document.getElementById('myform');
        let method = "delete";
        let endpoint = "https://httpbin.org/delete";
        let data = null;

        let request = await fetch(endpoint, {
        method : method,
        body : data
    });
        let jsonPretty = JSON.stringify(JSON.parse(await request.text()),null,2);
        document.getElementById('response').innerHTML = jsonPretty;
}
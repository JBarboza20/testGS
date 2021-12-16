function testGS(){
    
    const url =  "https://script.google.com/macros/s/AKfycbzzEniFpO--XFyG6VRtbdZdxah9bQ_t_Go9T_G3ZVUtUXeA7yULJlH02AeTc3Ib-P1o/exec";

    fetch(url)
        .then(d => d.json())
        .then(d =>{

            document.getElementById("app").textContent =  d[0].status;

        })

}

document.getElementById("btn").addEventListener("click", testGS);
document.getElementById("btn2").addEventListener("click", addGS);


// https://script.google.com/macros/s/AKfycbzzEniFpO--XFyG6VRtbdZdxah9bQ_t_Go9T_G3ZVUtUXeA7yULJlH02AeTc3Ib-P1o/exec

function addGS(){
    
    const url =  "https://script.google.com/macros/s/AKfycbzzEniFpO--XFyG6VRtbdZdxah9bQ_t_Go9T_G3ZVUtUXeA7yULJlH02AeTc3Ib-P1o/exec";
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        //referrerPolicy: 'no-referrer',
        body: JSON.stringify({name:"Olivia"})
    });
        

}

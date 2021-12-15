function testGS(){
    
    const url = "https://script.google.com/macros/s/AKfycbyx2ADQa3bqaxOMf8IcmRQw09gwUVX56zH55fG3XrPH86cCc0cDBf0-2wr1l-LmurK_/exec";

    fetch(url)
        .then(d => d.json())
        .then(d =>{

            document.getElementById("app").textContent =  d[0].status;

        })

}

document.getElementById("btn").addEventListener("click", testGS);

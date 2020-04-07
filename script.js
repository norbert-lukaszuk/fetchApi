document.getElementById('getText').addEventListener('click',getText);
document.getElementById('getJSON').addEventListener('click',getJSON);
document.getElementById('getApi').addEventListener('click',getApi);
const output = document.getElementById('output');

function getText() {
    fetch('sample.txt')
    .then(res=> res.text()) //response from which 
    .then(text => {
        output.innerHTML +=`<h4>Fetch from text file</h4>`;
        output.innerHTML +=`<p class="output__paragraph">${text}</p>`;
        console.log(text)})
        .catch(err=>console.log(err))
    } 
    function getJSON() {
        fetch('manifest.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const arr = Object.entries(data);
            console.log(arr);    
        output.innerHTML +=`<h4>Fetch from JSON file</h4>`;
        arr.forEach(e => {
            if(e[0]!='icons'){ // icons is an array & it's to long
            output.innerHTML +=`<p class="output__paragraph">${e[0]} : ${e[1]}</p>`
        }
    });
})
.catch(err=>console.log(err))
}

function getApi() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>{
        output.innerHTML +=`<h4>Fetch data from API</h4>`;
        console.log(data);
        data.forEach(e=>{
            output.innerHTML +=`<h5>Post: ${e.id} - ${e.title}</h5>`;
            output.innerHTML +=`<p class="output__paragraph">${e.body}</p><hr>`

            console.log(e.body);
        })
    })
    .catch(err=>console.log(err))
}
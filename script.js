document.getElementById('getText').addEventListener('click',getJSON);

function getText() {
    fetch('sample.txt')
    .then(res=> res.text()) //response from which 
    .then(text => console.log(text))
    .catch(err=>console.log(err))
} 
function getJSON() {
    fetch('manifest.json')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}
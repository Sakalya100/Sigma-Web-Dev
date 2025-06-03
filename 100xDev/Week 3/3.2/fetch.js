function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
}

async function getDataAsync(){
const response = await fetch('https://jsonplaceholder.typicode.com/users');
const finalData = await response.json();
console.log(finalData);
document.getElementById("container").innerHTML = JSON.stringify(finalData);
}
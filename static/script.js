function calculate(){

let tuning = [

document.getElementById("s1").value.toUpperCase(),
document.getElementById("s2").value.toUpperCase(),
document.getElementById("s3").value.toUpperCase(),
document.getElementById("s4").value.toUpperCase(),
document.getElementById("s5").value.toUpperCase(),
document.getElementById("s6").value.toUpperCase()

]

fetch("/calculate",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({tuning:tuning})

})

.then(response => response.json())

.then(data => {

let output = ""

for(let i=0;i<data.length;i++){

output += `
<div class="result-line">
Tune <b>String ${data[i].string}</b> (${data[i].note})
by playing <span class="fret">fret ${data[i].fret}</span>
on the previous string.
</div>
`

}

document.getElementById("result").innerHTML = output

})

}
console.log("coucou")
const btn = document.getElementById("ramdonBtn");
const result = document.getElementById("result");
btn.addEventListener("click",async ()=>{
    const res = await fetch("https://laroulette-u8y4.onrender.com/api/v1/random")
    const data = await res.json()

    result.testContent=data.roulette.name
})
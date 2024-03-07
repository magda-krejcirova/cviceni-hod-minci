const padlOrel = Math.random() < 0.5;
const vysledek = document.querySelector(".vysledek")
const mince = document.querySelector(".mince")

console.log(padlOrel)

if (padlOrel) {
    vysledek.textContent = "Padl orel"
    //mince.classList.remove("mince__panna")
    mince.classList.add("mince--orel")
} else {
    vysledek.textContent = "Padla panna"
    mince.classList.add("mince--panna")
    //mince.classList.remove("mince__panna")
}

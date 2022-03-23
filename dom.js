const div = document.createElement("div");
div.classList.add("wrapper");
const body = document.querySelector("body");
document.body.append(div)
const header = document.createElement("h1");
header.textContent = "DOM (Document Object Model)";
div.insertAdjacentElement("beforebegin", header);
const ul = `
        <ul>
        <li>Один</li>
        <li>Два</li>
        <li>Три</li>
        <li>Четыре</li>
        </ul>
`;
div.innerHTML = ul;
const img = document.createElement("img");
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQTaQt0mzYMYt3V5GpqaTfDjjvbuhmODGBw&usqp=CAU"
img.width = 250;
img.classList.add("super");
img.alt = "super man"
div.appendChild(img)
const elemHTML = `
    <div class="pDiv">
    <p>Параграф 1</p>
    <p>Параграф 2</p>
       </div>
`;

const ulList = document.querySelector("ul");
ulList.insertAdjacentHTML("beforebegin", elemHTML);
const pDiv = document.querySelector(".pDiv");
pDiv.children[1].classList.add("text");
pDiv.firstElementChild.remove();

const autoCar = (brand, calor, year) => {
       const courDate = new Date()
    const courYear  = courDate.getFullYear();

    return `
    <div class="car">
    <h2>${brand.toUpperCase()}, ${year} </h2>
    <p>Автомобиль ${brand.toUpperCase()}-${year} года. Возраст авто - ${courYear - year} лет.</p>
    <p>Цвет: ${calor}</p>
    <button type="button" class="btn">Удалить</button>
<!--    <button type="button" className="btn1">Вернуть</button>-->
</div>`
}


const carDiv = document.createElement("div");
carDiv.classList.add("autos");

const carsList = [
    {brand:"Tesla", year: 2015, color: "Красный"},
    {brand: "Nisan", year:2019, color: "Зелёный"},
    {brand: "Mazda", year:2020, color: "Голубой"}
]

const carsHTML = carsList.map(car =>{
    return autoCar(car.brand, car.color, car.year)
}).join(" ")
carDiv.innerHTML = carsHTML;
div.insertAdjacentElement("beforebegin", carDiv);

const button = document.querySelectorAll(".btn");

function handleClick(e){
        const currentButton = e.currentTarget;
    console.log(currentButton.parentElement.remove());
}
function handleClick1(e){
    const currentButton = e.currentTarget;
    console.log(currentButton.parentElement);
}

 button.forEach(button =>{
     button.addEventListener("click", handleClick)
     button.addEventListener("click", handleClick1)
 })



// console.log(carDiv);
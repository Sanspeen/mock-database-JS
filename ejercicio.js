

const getArticles = ( callback ) =>{
    console.log("Obteniendo datos...");
    setTimeout(() => {
        const articulos = [
            {item: "papa", measure: "kg", price: 4000},
            {item: "arroz", measure: "lb", price: 2500},
            {item: "arepas", measure: "unidad", price: 3000},
            {item: "leche", measure: "unidad", price: 1500},
            {item: "huevos", measure: "30", price: 14000},
        ]
        callback(articulos);

    }, 3000);    
}

async function getArticlesToCar( article ){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(article);
        }, 2000);
    })
}

async function addToCar( articles ){ 
    console.log("--------------Agregando al carrito--------------")
    let car = [];
    let price = 0;
    for (let index = 0; index < 2; index++) {
        const article = articles[Math.floor(Math.random()*articles.length)]
        car.push(await getArticlesToCar(article));
        console.log("Se ha agregado al carrito ==> " + car[index].item + " valor unitario: $" + car[index].price)   
    }
    setTimeout(() => {
        for (let index = 0; index < car.length; index++) {
            const element = car[index];
            price += element.price;
        }        
        console.log("\nTOTAL: $" + price);
    }, 1000);
    
}

getArticles( addToCar )


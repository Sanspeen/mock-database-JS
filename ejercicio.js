

const getArticles = ( callback ) =>{
    console.log("Obteniendo datos...");
    setTimeout(() => {
        const articulos = [
            {item: "papa", medida: "kg", precio: 4000},
            {item: "arroz", medida: "lb", precio: 2500},
            {item: "arepas", medida: "unidad", precio: 3000},
            {item: "leche", medida: "unidad", precio: 1500},
            {item: "huevos", medida: "30", precio: 14000},
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

async function getPrice( car ){
    return new Promise((res, rej) => {
        setTimeout(() => {
            let price;
            for (let index = 0; index < car.length; index++) {
                const element = car[index];
                price += element.price;
            }
            res(price);
        }, 1000);
    })
}

async function addToCar( articles ){ 
    console.log("--------------Agregando al carrito--------------")
    let car = [];
    let price = 0;
    for (let index = 0; index < 2; index++) {
        const article = articles[Math.floor(Math.random()*articles.length)]
        car.push(await getArticlesToCar(article));
        console.log("Se ha agregado al carrito ==> " + car[index].item + " valor unitario: $" + car[index].precio)   
    }
    setTimeout(() => {
        for (let index = 0; index < car.length; index++) {
            const element = car[index];
            price += element.precio;
        }        
        console.log("\nTOTAL: $" + price);
    }, 1000);
    
}

getArticles( addToCar )




const getArticles = ( callback ) =>{
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

async function addToCar( articles ){ 
    for (let index = 0; index < articles.length; index++) {
        const article = articles[Math.floor(Math.random()*articles.length)]
        let car = await getArticlesToCar(article);
        console.log("ok " + car.item)   
    }
}

getArticles( addToCar )


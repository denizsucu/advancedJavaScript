// rest parametre
let showProducts = function (id, ...products){ // Bir değişkene fonksiyon eşitlenebilir
    console.log(id)
    console.log(products)
}
// console.log(typeof showProducts)

showProducts(10, ["Elma", "Armut", "Portakal"]) // array içinde array oluşturur
showProducts(10, "Elma", "Armut", "Portakal") // kalan parametreleri array olarak ifade ediyor

// spread => Ayrıştırma operatörü
let points = [1, 3, 5, 96, 45, 13, 11]
console.log(...points)
console.log(Math.max(points)) // ayrılmış değil, array olarak aldı
console.log(Math.max(...points)) // spread 

console.log(..."ABC", "D", ..."EF", ..."GHJK") // bunlar ayrılır hep böyle

// Destructuring
let populations = [10000, 20000, 30000, [40000, 10000]];
let [small, medium, high, [veryHigh, maximum]] = populations; // Değişkenin değerlerini parçaladık
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh) // iç içe olunca da şekline uygun olmalı
console.log(maximum)

// array için destruct
function someFunction([small1], number){ // Fonksiyon içinde array veriyosak onu destructuring olarak algılayacak
    console.log(small1)
}

someFunction(populations) // 10000 verecek, array'in ilk değeri

// obje için destruct
let category = {id: 1, name: "Food"}
console.log(category.id)
console.log(category.name)

let {id, name} = category
console.log(id)
console.log(name)


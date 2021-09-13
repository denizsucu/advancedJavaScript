let sayi1 = 10;
sayi1 = "Deniz Sucu";

let student = {id:1, name:"Deniz"};

function save(puan = 10, student) {
    console.log(student.name + ": " + puan)
}

save(undefined, student) // Default önce vermek istersek undefined kullanabiliriz

let students = ["Deniz", "Ahmet", "Ayşe", "Fatma"];
console.log(students)

let students2 = [student, {id:2, name:"Ahmet"}, "İstanbul", {city: "Ankara"}]; // Böyle bir tanımlama mümkün
console.log(students2)


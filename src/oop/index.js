class Customer{ // ES ile class geldi
    constructor(id, customerNumber){
        this.id = id // this => customer instance'ı => prototyping yapıyoruz
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "1234");
console.log(customer.id) // undefined

// prototyping => Bir nesneye bambaşka bir özellik eklenebiliyor
customer.name = "Deniz Sucu"
console.log(customer.name)

Customer.bisey = "Bir şey";
console.log(Customer.bisey) // "Bir şey" sonucunu verir
console.log(customer.bisey) // undefined, özellik class için eklendi instance için eklenmedi

console.log(customer.customerNumber) // artık constructor'da prototyping yaptığımız için kullanabiliyoruz bu ifadeyi


class IndividualCustomer extends Customer{
    constructor(firstName, id, customerNumber){
        super(id, customerNumber)
        this.firstName = firstName
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
        super(id, customerNumber)
        this.companyName = companyName
    }
}

// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку. 

// const bankAccount = {
//     ownerName: "Vasya",
// accountNumber: "17234",
// balance: 2002,


// deposit() {
//     const amount = Number(prompt("Введіть сумму поповнення"))
//     this.balance += amount

//     console.log(`Поповнено на ${amount}`);
//     console.log(`Загальний баланс ${this.balance}`);
// },

// withdraw() {
//     const amount = Number(prompt("Введіть сумму зняття")) 

//     if (amount > this.balance) {
//         console.log("недостатньо грошей на рахунку");
//         return
//     } else {
//         this.balance -= amount 


//         console.log(`Знято ${amount}`);
//         console.log(`Залишилось у вас ${this.balance}`);


//     }

// }


// }



// bankAccount.deposit()
// bankAccount.withdraw()


// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки


// const weather = {
//     temperature: Number(prompt("Температура?")),
//     humidity: 60,
//     windSoeed: 10,


//     frezze() {
//     return this.temperature < 0    
//     }

// }


// if (weather.frezze()) {
//     console.log("Холодно нижче нуля");
// } else {
//     console.log("Нуль або вище");

// }


// const user = {
//     name: "Vasya",
//     email: "vasya@gmail.com",
//     password: "12345",


//     login() {
//         const email = prompt("Введіть емайл")
//         const password = prompt("Пароль введи")


//         if (this.email === email && this.password === password) {
//             console.log("Вхід");

//         } else (
//             console.log("не вхід")
    
// )
//     }
// };

// user.login()


const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,

    isGood() {
        return this.rating > 8;
    }
};

console.log(movie.title);
console.log(movie.director);
console.log(movie.year);
console.log(movie.rating);

console.log(movie.isGood());

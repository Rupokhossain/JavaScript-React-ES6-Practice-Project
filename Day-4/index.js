// Nested Objects

const user = {
    id: 101,
    name: "Rupok",
    address: {
        city: "dhaka",
        zip: 1212,
        coordinates: {
            lat: 23.81,
            long: 90.41
        }
    },
    hobbies: ["Coding", "Reading"]
};

console.log(user.address.city);
console.log(user.address.coordinates.lat);


// Destructuring
const {name, id, address: {city}} = user;
console.log(name, id, city);


// object method
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    start: function() {
        return `${this.brand} ${this.model} is starting...`;
    },

    getAge(currentYear) {
        return currentYear - this.year;
    }
}

console.log(car.start());
console.log(car.getAge(2025));
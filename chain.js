var person = {
    name: 'Shifat',
    age: 21,
    address: {
        street: {
            lane: '404 Sharanika Abashik Area',
            floor: '2nd Floor',
            flat: 'Flat No. 201'
        },
        area: 'Savar',
        city: 'Dhaka'
    }
}

// If there is no data then we can use '?'. It helps us to find if there is any data or not.
const personInfo = person.address.stret?.lane;
console.log(personInfo); // result: undefined
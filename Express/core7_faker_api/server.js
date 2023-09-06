const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker');
const port = 8000;


app.listen( port, () => console.log(`Listening on port: ${port}`) );


const newUser = () =>{
    const fakeUser ={
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.uuid()
    }
    return fakeUser
}

const newCompany = () => {
    const fakeCo = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            streetAddress: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return fakeCo
}

app.get('/api/users/new', (req, res) =>{
    res.json(newUser());
} )
app.get('/api/companies/new', (req, res) =>{
    res.json(newCompany());
} )
app.get('/api/user/company', (req, res) =>{
    res.json( {user: newUser(), company: newCompany()});
} )

/*
Returns from postman get requests made to each route:
1.http://localhost:8000/api/users/new
{
    "password": "b89R33g6XJvT8qN",
    "email": "Kenya_Vandervort65@yahoo.com",
    "phoneNumber": "428-355-2348 x3928",
    "lastName": "Buckridge",
    "firstName": "Gustave",
    "_id": "2c260fa9-ec47-4c49-9e3f-077e08d63f1b"
}
2.http://localhost:8000/api/companies/new
{
    "_id": "ac0c5acd-8a12-437c-8fe3-bd36b2a9eb54",
    "name": "Spinka, Mertz and Hammes",
    "address": {
        "streetAddress": "65880 Crooks Crossing",
        "city": "Bruenview",
        "state": "Iowa",
        "zipCode": "87121-2136",
        "country": "Lesotho"
    }
}
3.http://localhost:8000/api/user/company

{
    "user": {
        "password": "cXdyv2CR0rQdHKk",
        "email": "Savion_Dooley75@yahoo.com",
        "phoneNumber": "(287) 841-9351 x782",
        "lastName": "Grimes",
        "firstName": "Ansel",
        "_id": "2f68a551-561b-4f3f-812e-d71d83c4669d"
    },
    "company": {
        "_id": "05b673e1-f06b-475c-83ce-fcc8fd692a7d",
        "name": "Ratke Group",
        "address": {
            "streetAddress": "632 Corbin Estate",
            "city": "Drakefort",
            "state": "Illinois",
            "zipCode": "95646-9771",
            "country": "Niue"
        }
    }
}
*/
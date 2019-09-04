const Users = require('../../../models/users');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/vehicletest';

beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {
    // await mongoose.connection.dropCollection('heros');
    // await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
});

describe('User  Schema', () => {

    it('Should find a user', async () => {
       let u1= await Users.findOne({"admin":"false"});
       expect(u1.username).toEqual('staff');
    });



})
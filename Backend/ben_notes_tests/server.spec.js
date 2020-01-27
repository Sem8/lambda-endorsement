const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
    describe('/', async () => {
        it('should return an OK 200 status code from /', async () => {
            const statusCode = 200;
            const response = await request(server).get('/');
            expect(response.status).toEqual(statusCode);
        });
        // it();
        // it();
    });
    // describe('/users', () => {
    //     it();
    //     it();
    //     it();
    // })
});
/*
- when making a GET request to the `/` endpoint 
  the API should respond with status code 200 
  and the following JSON object: `{ api: 'running' }`.
*/

const request = require('supertest');

const server = require('./server');

describe('server.js', () => {
    describe('index route', () => {
        it('should return an OK status code from the index route', async () => {
            const expectedStatusCode = 200;
            const response = await request(server).get('/');
            expect(response.status).toEqual(expectedStatusCode);
            
            // same code using promise .then() instead of async/await
            // let response;
            // return request(server).get('/').then( res => {
            //     response = res;
            //     expect(response.status).toEqual(expectedStatusCode);
            // });
        });

        it('should return a JSON object from the index route', async () => {
            const response = await request(server).get('/');
            expect(response.type).toEqual('application/json');
        });
    });
});
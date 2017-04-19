const mongoose = require('mongoose');
const Clients = require('./../models/clients');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./../app');
const should = chai.should();


 const clientSchemaTestUpdated = {
     name: "Alexandre dos Santos",
     phone: 987654321
 
   
 };

chai.use(chaiHttp);

describe('Routes Clients', () =>{
    beforeEach((done) =>{
        Clients.remove({}, (err) =>{
            done();
        })
    })

describe('Route GET /api/clients', () =>{
    it('it should GET all the clients', (done) =>{
        chai.request(server)
        .get('/api/clients')
        .end((err, res) =>{
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
            done();
        });
    });
});

  describe('Route GET/:id /api/clients/:id', () => {
      it('it should GET a client by the given id', (done) => {
        let client = new Clients({ name: "Alexandre dos Santos Soares", phone: 987654321 });
        client.save((err, client) => {
            chai.request(server)
            .get('/api/clients/' + client.id)
            .send(client)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('phone');
                res.body.should.have.property('_id').eql(client.id);
              done();
            });
        });

      });
  });

    describe ('Route POST /api/clients', () => {
      it('it should post a client', (done) => {
        let client = new Clients({name: "José Carlos Januario", phone: 987654321})
          chai.request(server)
          .post('/api/clients')
          .send(client)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Client successfully added!');
            res.body.client.should.have.property('name');
            res.body.client.should.have.property('phone');
            done();
        });
      });
    });

  describe('Route PUT/:id /api/clients', () => {
      it('it should UPDATE a client given the id', (done) => {
        let client = new Clients({name: "Vitor Silva Lima", phone: 987654321})
        client.save((err, client) => {
                chai.request(server)
                .put('/api/clients/' + client.id)
                .send({name: "Vitor Silva Lima", phone: 956681111})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Client updated!');
                    res.body.client.should.have.property('phone').eql(956681111);
                  done();
                });
          });
      });
  });

describe('Route DELETE/:id /api/clients', ()=>{
    it('it should DELETE a client given the id', (done) =>{
        let client = new Clients({name: "Rafael", phone: 987654321})
        client.save((err, client) =>{
            chai.request(server)
            .delete('/api/clients/'+client.id)
            .end((err, res) =>{
                res.should.be.a('object');
                res.body.should.have.property('message').eql('Client successfully deleted!');
                res.body.result.should.have.property('ok').eql(1);
                res.body.result.should.have.property('n').eql(1);
                done();
            });
        });
    });
});

});
import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import app from '../index'
chai.use(chatHttp)
const { expect } = chai

describe('Testing the orders endpoints: ', () => {
  it('It should create a order', (done) =>{
    const order = {
      status: "cozinha",
      mesa: 1,
      clientName: "Lucimar"
    }
    chai.request(app)
      .post('/api/orders')
      .set('Accept', 'application/json')
      .send(order)
      .end((err,res) => {
        expect(res.status).to.equal(201)
        expect(res.body.data).to.include({
          id:1,
          status: order.status,
          mesa: order.mesa,
          clientName: order.clientName
        })
        done()
      })
  })
  it('It should get all orders', (done) => {
    chai.request(app)
    .get('/api/orders')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        res.body.data[0].should.have.property('id')
        res.body.data[0].should.have.property('status')
        res.body.data[0].should.have.property('mesa')
        res.body.data[0].should.have.property('clientName')
        done()
      })
  })

  it('It should not create a order with incomplete parameters', (done) => {
    const order = {
      status: 'cozinha'
    }
    chai.request(app)
      .post('/api/orders')
      .set('Accept', 'application/json')
      .send(order)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        done()
      })
  })
  it('It should get a particular order', (done) => {
    const orderId = 1
    chai.request(app)
      .get(`/api/orders/${orderId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        res.body.data.should.have.property('id')
        res.body.data.should.have.property('status')
        res.body.data.should.have.property('mesa')
        res.body.data.should.have.property('clientName')
        done()
      })
  })
  it('It should not get a particular order with invalid id', (done) => {
    const orderId = 8888
    chai.request(app)
      .get(`/api/orders/${orderId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have.property('message')
      .eql(`Cannot find Order with the id ${orderId}`)
        done()
      })
  })


})
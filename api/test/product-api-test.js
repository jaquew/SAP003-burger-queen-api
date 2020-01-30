import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import app from '../index'
chai.use(chatHttp)
const { expect } = chai

describe('Testing the products endpoints: ', () => {
  it('It should create a product', (done) =>{
    const product = {
      name: "Apple",
      price: 10,
      type: "primary",
      bf: false,
    }
    chai.request(app)
      .post('/api/products')
      .set('Accept', 'application/json')
      .send(product)
      .end((err,res) => {
        expect(res.status).to.equal(201)
        expect(res.body.data).to.include({
          id:1,
          name: product.name,
          price: product.price+".00",
          type: product.type,
          bf: product.bf
        })
        done()
      })
  })
  it('It should get all products', (done) => {
    chai.request(app)
    .get('/api/products')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        res.body.data[0].should.have.property('id')
        res.body.data[0].should.have.property('name')
        res.body.data[0].should.have.property('price')
        res.body.data[0].should.have.property('type')
        res.body.data[0].should.have.property('bf')
        done()
      })
  })

  it('It should not create a product with incomplete parameters', (done) => {
    const product = {
      name: 'Coffee'
    }
    chai.request(app)
      .post('/api/products')
      .set('Accept', 'application/json')
      .send(product)
      .end((err, res) => {
        expect(res.status).to.equal(400)
        done()
      })
  })
  it('It should get a particular product', (done) => {
    const productId = 1
    chai.request(app)
      .get(`/api/products/${productId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        res.body.data.should.have.property('id')
        res.body.data.should.have.property('name')
        res.body.data.should.have.property('type')
        done()
      })
  })
  it('It should not get a particular product with invalid id', (done) => {
    const productId = 8888
    chai.request(app)
      .get(`/api/products/${productId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404)
        res.body.should.have.property('message')
                            .eql(`Cannot find Product with the id ${productId}`)
        done()
      })
  })


})
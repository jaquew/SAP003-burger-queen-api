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
          price: product.price,
          type: product.type,
          bf: product.bf
        })
        done()
      })
  })
})
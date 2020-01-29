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
      type: primary,
      bf: false,
    }
    chai.request(app)
      .post('/api/products')
      .set('Accept', 'application/json')
      .se
  })
})
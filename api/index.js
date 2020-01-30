import express from 'express'
import bodyParser from 'body-parser'
import productRoutes from './server/routes/ProductRoutes'
import orderRoutes from './server/routes/OrderRoutes'
import itemRoutes from './server/routes/ItemRoutes'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.use('/api/orders', orderRoutes)
app.use('/api/products', productRoutes)
app.use('/api/items', itemRoutes)


app.get('*', (req, res) => res.status(200).send({
   message: 'Esta é a API.'
}))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`)
})

export default app
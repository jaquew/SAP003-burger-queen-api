import express from 'express'
import bodyParser from 'body-parser'
import productRoutes from './server/routes/ProductRoutes'
import orderRoutes from './server/routes/OrderRoutes'
import itemRoutes from './server/routes/ItemRoutes'
import tableRoutes from './server/routes/TableRoutes'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 3000

app.use('/orders', orderRoutes)
app.use('/products', productRoutes)
app.use('/items', itemRoutes)
app.use('/tables', tableRoutes)



app.get('*', (req, res) => res.status(200).send({
   message: 'Esta é a API.'
}))

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`)
})

export default app
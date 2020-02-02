import ItemService from '../services/ItemService'
import Util from '../utils/Utils'

const util = new Util()


// const getAllItems = async (req, res) => {
//   try {
//     const allItems = await ItemService.getAllItems()
//     if (allItems.length > 0) {
//       util.setSuccess(200, 'Items retrieved', allItems)
//     } else {
//       util.setSuccess(200, 'No Item found')
//     }
//     return util.send(res)
//   } catch (error) {
//     util.setError(400, error)
//     return util.send(res)
//   }
// }
const addItem = async (req, res) => {
  if (!req.body.productId || !req.body.orderId) {
    util.setError(400, 'Please provide complete details')
    return util.send(res)
  } else if (!req.body.option && req.body.productId === 7 || req.body.productId === 8){
    util.setError(400, 'Please provide option of hamburger')
    return util.send(res)
  }
  const newItem = req.body
  try {
    const createdItem = await ItemService.addItem(newItem)
    util.setSuccess(201, 'Item Added!', createdItem)
    return util.send(res)
  } catch (error) {
    util.setError(400, error.message)
    return util.send(res)
  }
}

// const updatedItem = async (req, res) => {
//   const alteredItem = req.body
//   const { id } = req.params
//   if (!Number(id)) {
//     util.setError(400, 'Please input a valid numeric value')
//     return util.send(res)
//   }
//   try {
//     const updateItem = await ItemService.updateItem(id, alteredItem)
//     if (!updateItem) {
//       util.setError(404, `Cannot find product with the id: ${id}`)
//     } else {
//       util.setSuccess(200, 'Item updated', updateItem)
//     }
//     return util.send(res)
//   } catch (error) {
//     util.setError(404, error)
//     return util.send(res)
//   }
// }

// const getItem = async (req, res) => {
//   const { id } = req.params

//   if (!Number(id)) {
//     util.setError(400, 'Please input a valid numeric value')
//     return util.send(res)
//   }

//   try {
//     const theItem = await ItemService.getItem(id)

//     if (!theItem) {
//       util.setError(404, `Cannot find Item with the id ${id}`)
//     } else {
//       util.setSuccess(200, 'Found Item', theItem)
//     }
//     return util.send(res)
//   } catch (error) {
//     util.setError(404, error)
//     return util.send(res)
//   }
// }

// const deleteItem = async(req, res) => {  
//   const { id } = req.params

//   if (!Number(id)) {
//     util.setError(400, 'Please provide a numeric value')
//     return util.send(res)
//   }

//   try {
//     const itemToDelete = await ItemService.deleteItem(id)

//     if (itemToDelete) {
//       util.setSuccess(200, 'Item deleted')
//     } else {
//       util.setError(404, `Item with the id ${id} cannot be found`)
//     }
//     return util.send(res)
//   } catch (error) {
//     util.setError(400, error)
//     return util.send(res)
//   }
// }


export default {
  // getAllItems,
  addItem,
  // updatedItem,
  // getItem,
  // deleteItem
}
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Discount from './Discount';
function Cart(prop) {

  const total = prop.product1 * prop.price1 + prop.product2 * prop.price2 + prop.product3 * prop.price3;

  console.log(discount)

  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Product</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img className='product-img' src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" />
          </td>
          <td>{prop.product1}</td>
          <td>{prop.product1 * prop.price1}</td>
        </tr>
        <tr>
          <td> <img className='product-img' src="https://plus.unsplash.com/premium_photo-1673977134363-c86a9d5dcafa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" /></td>
          <td>{prop.product2}</td>
          <td>{prop.product2 * prop.price2}</td>
        </tr>
        <tr>
          <td>
            <img className='product-img' src="https://images.unsplash.com/photo-1740711152088-88a009e877bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" />
          </td>
          <td>{prop.product3}</td>
          <td>{prop.product3 * prop.price3}</td>
        </tr>
        <tr>
          <td>Grand Total : </td>
          <td>{total}</td>
          <td>
            <Button variant="primary" >Payment Page</Button>
          </td>
        </tr>
           <td>{total >= "5000" ?
            <Discount></Discount>: ""}</td>

      </tbody>
    </Table>
  );
}

export default Cart;
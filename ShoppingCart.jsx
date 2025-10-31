import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Shoes from '../src/assets/Shoes.avif';
import Button from 'react-bootstrap/Button';
import Cart from './Cart';
import { useState } from 'react';
function ShoppingCart() {

    const [count1, increment1] = useState(0);
    const [count2, increment2] = useState(0);
    const [count3, increment3] = useState(0);

    const [mrp1, setmrp1] = useState("");
    const [mrp2, setmrp2] = useState("");
    const [mrp3, setmrp3] = useState("");
    const mrpf = (e) => {
        setmrp1(e)
    }
    const mrpf2 = (e) => {
        setmrp2(e)
    }
    const mrpf3 = (e) => {
        setmrp3(e)
    }

    return (
        <CardGroup>
            <Card>
                <img src={"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"} />
                <Card.Body>
                    <Card.Title>Shoes </Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                    <span>MRP : 1200rs</span> <br /><input type="number" className='num' value={count1} />
                    <br />
                    <Button variant="warning" onClick={() => {
                        increment1(count1 >= 0 ? count1 + 1 : count1)
                        mrpf("1200")
                    }}>Add To Cart</Button>
                </Card.Body>

            </Card>
            <Card>
                <img src={"https://plus.unsplash.com/premium_photo-1673977134363-c86a9d5dcafa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGplYW5zfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"} />
                <Card.Body>
                    <Card.Title>Baggy Jeans</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.
                        additional content.
                    </Card.Text>
                    <span>MRP : 1500rs</span> <br /><input type="number" className='num' value={count2} />
                    <br />
                    <Button variant="warning" onClick={() => {
                        increment2(count2 >= 0 ? count2 + 1 : count2)
                        mrpf2("1500")
                    }}>Add To Cart</Button>
                </Card.Body>

            </Card>
            <Card>
                <img src={"https://images.unsplash.com/photo-1740711152088-88a009e877bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"} />
                <Card.Body>
                    <Card.Title>Blue Shirt</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content
                    </Card.Text>
                    <span>MRP : 1700rs</span> <br /><input type="number" className='num' value={count3} />
                    <br />
                    <Button variant="warning" onClick={() => {
                        increment3(count3 >= 0 ? count3 + 1 : count3)
                        mrpf3("1500")
                    }}>Add To Cart</Button>
                </Card.Body>


            </Card>
            <Card>

                <Card.Body>
                    <Card.Title>

                        <h1>Cart Sections</h1>
                    </Card.Title>

                    <Cart product1={count1} product2={count2} product3={count3} price1={mrp1} price2={mrp2} price3={mrp3}></Cart>

                </Card.Body>

            </Card>
        </CardGroup >
    );
}

export default ShoppingCart;
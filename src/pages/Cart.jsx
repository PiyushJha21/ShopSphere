function Cart({ cartItems }) {
  return (
    <div>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
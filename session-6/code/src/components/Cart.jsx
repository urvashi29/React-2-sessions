import React, { useMemo, memo } from "react";

const Cart = memo(({ cart }) => {
  console.log("cart data");

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

  return (
    <div style={{ flex: 1, borderLeft: "2px solid black", padding: "10px" }}>
      <h3>Cart</h3>
      <p>Total: {totalPrice}</p>
      {cart.map((cartItem) => (
        <div key={cartItem.id}>{cartItem.title}</div>
      ))}
    </div>
  );
});

export default Cart;

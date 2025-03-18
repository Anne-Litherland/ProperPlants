export default function ItemQuantity({ item, removeFromCart, addToCart }) {
  return (
    <div className="item-quantity">
      <button
        onClick={() => {
          removeFromCart(item);
        }}
      >
        -
      </button>
      <span>{item.quantity}</span>
      <button
        onClick={() => {
          addToCart(item);
        }}
      >
        +
      </button>
    </div>
  );
}

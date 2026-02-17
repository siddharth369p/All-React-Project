import Item from "./Item";

const FoodItem = ({ items }) => {
  return (
    <>
      {
        items.map((item) => (
          <Item key={item} fooditem={items} />
        ))
      }
    </>
  );
}

export default FoodItem;

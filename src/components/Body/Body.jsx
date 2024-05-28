import { products } from "../../data/Data";
import Card from "../Card/Card";

const Body = ({ cartItems, setCartItems }) => {
  return (
    <div className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, index) => {
            return (
              <Card
                data={product}
                key={index}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;

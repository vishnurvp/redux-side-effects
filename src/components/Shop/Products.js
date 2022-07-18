import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Dummy_Products = [
  {
    id: "p1",
    price: 100,
    title: "A New Book",
    description: "A story of writing new book",
  },
  {
    id: "p2",
    price: 500,
    title: "Lear JavaScript",
    description: "Practice book for mastering JavaScript",
  },
  {
    id: "p3",
    price: 300,
    title: "Learn React",
    description: "Complete guide to master React",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Products.map((product) => 
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        )}
      </ul>
    </section>
  );
};

export default Products;

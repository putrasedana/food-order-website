import FoodMenuCard from "./FoodMenuCard";
import pizza from "../images/pizza.jpg";
import spaghetti from "../images/spagetti.jpg";
import pizza2 from "../images/pizza-2.jpg";
import bigBurger from "../images/big-burger.jpg";

const menuItems = [
  {
    name: "Spaghetti Carbonara",
    imageUrl: spaghetti,
    description: "Delicious spaghetti with creamy carbonara sauce.",
    price: 11.99,
    rating: 5,
    category: "Pasta",
  },
  {
    name: "Big Burger",
    imageUrl: bigBurger,
    description: "Delicious Big Burger with extra meat, sauce, and vegetables.",
    price: 12.99,
    rating: 4.5,
    category: "Burger",
  },
  {
    name: "Original Pizza",
    imageUrl: pizza,
    description: "Original pizza topped with fresh tomatoes and mozzarella.",
    price: 10.99,
    rating: 3,
    category: "Pizza",
  },
  {
    name: "Margherita Pizza",
    imageUrl: pizza2,
    description:
      "Classic pizza topped with fresh tomatoes, mozzarella, and many more.",
    price: 12.99,
    rating: 2.5,
    category: "Pizza",
  },
];

const FoodMenuList = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Our Menu</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-6 lg:px-10">
        {menuItems.map((item, index) => (
          <FoodMenuCard
            key={index}
            menu={item.name}
            imageUrl={item.imageUrl}
            description={item.description}
            price={item.price}
            rating={item.rating}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodMenuList;

import FoodTable from "../components/FoodTable";
import pasta from "../images/spagetti.jpg";
import burger from "../images/big-burger.jpg";
import beverage from "../images/beverage.jpg";
import pizza from "../images/pizza-2.jpg";

const ManageCategoryPage = () => {
  const categories = [
    {
      id: 1,
      title: "Pizza",
      image: pizza,
      featured: true,
      active: true,
    },
    {
      id: 2,
      title: "Burger",
      image: burger,
      featured: false,
      active: true,
    },
    {
      id: 3,
      title: "Pasta",
      image: pasta,
      featured: true,
      active: false,
    },
    {
      id: 4,
      title: "Beverages",
      image: beverage,
      featured: true,
      active: false,
    },
  ];

  return (
    <div className="container mx-auto py-8 w-[70%] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Manage Category</h1>
      <FoodTable data={categories} />
    </div>
  );
};

export default ManageCategoryPage;

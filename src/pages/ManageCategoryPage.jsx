import FoodTable from "../components/FoodTable";
import img from "../images/nusa_penida.jpg";

const ManageCategoryPage = () => {
  const categories = [
    {
      id: 1,
      title: "Pizza",
      image: img,
      featured: true,
      active: true,
    },
    {
      id: 2,
      title: "Burger",
      image: img,
      featured: false,
      active: true,
    },
    {
      id: 3,
      title: "Salad",
      image: img,
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

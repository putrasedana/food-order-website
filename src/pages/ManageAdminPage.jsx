import AdminTable from "../components/AdminTable";

const ManageAdminPage = () => {
  const admins = [
    { id: 1, fullName: "Ayam Goreng", username: "Ayam", password: "ayam01" },
  ];

  return (
    <div className="container mx-auto py-8 w-[60%] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Manage Admin</h1>
      <AdminTable admins={admins} />
    </div>
  );
};

export default ManageAdminPage;

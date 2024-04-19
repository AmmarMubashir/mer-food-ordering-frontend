import ManageRestaurantForm from "@/form/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const click = () => {
    console.log("click");
  };
  return <ManageRestaurantForm onSave={click} isLoading={false} />;
};

export default ManageRestaurantPage;

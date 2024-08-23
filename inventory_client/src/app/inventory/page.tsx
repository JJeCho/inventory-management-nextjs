"use client";

import { useGetProductsQuery, useUpdateProductMutation } from "@/state/api";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 90, editable: false },
  { field: "name", headerName: "Product Name", width: 200, editable: true },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    editable: true,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    editable: true,
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
    editable: true,
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();
  const [updateProduct] = useUpdateProductMutation();

  const handleCellEditStop: GridEventListener<'cellEditStop'> = async (params) => {
    const { id, field, value } = params;
  
    let newValue = value;
  
    if (field === "price" || field === "rating" || field === "stockQuantity") {
      newValue = parseFloat(newValue as string);
    }
  
    if (!products) return;
  
    const productToUpdate = products.find((product) => product.productId === id);
  
    if (productToUpdate) {
      const updatedProduct = {
        ...productToUpdate,
        [field]: newValue,
      };
  
      console.log("Updated Product Data:", updatedProduct);
  
      await updateProduct({
        productId: id as string,
        updatedProduct,
      });
    }
  };
  
  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
        onCellEditStop={handleCellEditStop}
      />
    </div>
  );
};

export default Inventory;

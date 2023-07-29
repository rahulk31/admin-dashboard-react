import { useState } from "react";
import AddUser from "../../components/addNew/AddNew";
import DataTable from "../../components/dataTable/DataTable";
import "./products.scss";
import { GridColDef } from "@mui/x-data-grid";
import { products } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 250,
    type: "string",
  },
  {
    field: "color",
    headerName: "Color",
    width: 150,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    type: "string",
  },
  {
    field: "producer",
    headerName: "Producer",
    width: 150,
    type: "string",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 160,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Product</button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && <AddUser setOpen={setOpen} slug="product" columns={columns} />}
    </div>
  );
};

export default Products;

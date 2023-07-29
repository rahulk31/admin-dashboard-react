import { GridColDef } from "@mui/x-data-grid";
import "./addNew.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddUser = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="addUser">
      <div className="modal">
        <div className="header">
          <h1>Add new {props.slug}</h1>
          <span className="close" onClick={() => props.setOpen(false)}>
            x
          </span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid">
            {props.columns
              .filter((item) => item.field !== "id" && item.field !== "img")
              .map((column) => (
                <div className="item">
                  <label htmlFor="">{column.headerName}</label>
                  <input type={column.type} placeholder={column.field} />
                </div>
              ))}
          </div>
          <button>Add user</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

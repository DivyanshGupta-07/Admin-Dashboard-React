import React, { useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
// import {columns,rows} from '../../datatablesource'

const DataTable = () => {


  const rows = [
    {
      id: 1,
      username: "Divyansh Gupta",
      email: "abc123@gmail.com",
      status: "active",
      img: "https://e1.pxfuel.com/desktop-wallpaper/847/939/desktop-wallpaper-sad-boy-for-facebook-profile-or-whatsapp-alone-boy.jpg",
      age: 35,
    },
    {
      id: 2,
      username: "Divyansh Gupta",
      email: "abc123@gmail.com",
      status: "active",
      img: "https://e1.pxfuel.com/desktop-wallpaper/847/939/desktop-wallpaper-sad-boy-for-facebook-profile-or-whatsapp-alone-boy.jpg",
      age: 35,
    },
    {
      id: 3,
      username: "Divyansh Gupta",
      email: "abc123@gmail.com",
      status: "pending",
      img: "https://e1.pxfuel.com/desktop-wallpaper/847/939/desktop-wallpaper-sad-boy-for-facebook-profile-or-whatsapp-alone-boy.jpg",
      age: 35,
    },
    {
      id: 4,
      username: "Divyansh Gupta",
      email: "abc123@gmail.com",
      status: "active",
      img: "https://e1.pxfuel.com/desktop-wallpaper/847/939/desktop-wallpaper-sad-boy-for-facebook-profile-or-whatsapp-alone-boy.jpg",
      age: 35,
    },
    {
      id: 5,
      username: "Divyansh Gupta",
      email: "abc123@gmail.com",
      status: "passive",
      img: "https://e1.pxfuel.com/desktop-wallpaper/847/939/desktop-wallpaper-sad-boy-for-facebook-profile-or-whatsapp-alone-boy.jpg",
      age: 35,
    },
    {
      id: 6,
      username: "Divyansh Gupta",
      email: "abc123@gmail.com",
      status: "active",
      img: "https://e1.pxfuel.com/desktop-wallpaper/847/939/desktop-wallpaper-sad-boy-for-facebook-profile-or-whatsapp-alone-boy.jpg",
      age: 35,
    },
    {
      id: 7,
      username: "Divyansh Gupta",
      email: "abc123@gmail.com",
      status: "pending",
      img: "https://e1.pxfuel.com/desktop-wallpaper/847/939/desktop-wallpaper-sad-boy-for-facebook-profile-or-whatsapp-alone-boy.jpg",
      age: 35,
    },
    {
      id: 8,
      username: "Divyansh Gupta",
      email: "abc123@gmail.com",
      status: "active",
      img: "https://e1.pxfuel.com/desktop-wallpaper/847/939/desktop-wallpaper-sad-boy-for-facebook-profile-or-whatsapp-alone-boy.jpg",
      age: 35,
    },
    {
      id: 9,
      username: "Divyansh Gupta",
      email: "abc123@gmail.com",
      status: "passive",
      img: "https://e1.pxfuel.com/desktop-wallpaper/847/939/desktop-wallpaper-sad-boy-for-facebook-profile-or-whatsapp-alone-boy.jpg",
      age: 35,
    },
    {
      id: 10,
      username: "Divyansh Gupta",
      email: "abc123@gmail.com",
      status: "active",
      img: "https://e1.pxfuel.com/desktop-wallpaper/847/939/desktop-wallpaper-sad-boy-for-facebook-profile-or-whatsapp-alone-boy.jpg",
      age: 35,
    },
    {
      id: 11,
      username: "Divyansh Gupta",
      email: "abc123@gmail.com",
      status: "pending",
      img: "https://e1.pxfuel.com/desktop-wallpaper/847/939/desktop-wallpaper-sad-boy-for-facebook-profile-or-whatsapp-alone-boy.jpg",
      age: 35,
    },
  ];



  const [data, setData] = useState(rows);
  const deleteHandler = (id) => {
    setData(data.filter(item=>item.id!==id))
  };
  

  const columns = [
    { field: "id", headerName: "Id", width: 70 },
    {
      field: "user",
      headerName: "user",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img src={params.row.img} alt="avatar" className="cellImg" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 230 },
    { field: "age", headerName: "Age", width: 100 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="actionCell">
            <Link to={"/users/test"} style={{ textDecoration: "none" }}>
              <div className="viewButton">view</div>
            </Link>
            <div
              className="deleteButton"
              onClick={()=>deleteHandler(params.row.id)}
            >
              delete
            </div>
          </div>
        );
      },
    },
  ];





 





  return (
    <div className="datatable">
      <div className="dataTableTitle">
        Add New User
        <Link to={"/users/new"} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        //pageSizeOptions={[5, 10]}
        //rowPerPageOptions = {[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;

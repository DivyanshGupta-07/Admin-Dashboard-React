import React from 'react'
import './table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            id:12341,
            product:"Acer Aspire 5",
            img: "https://images.acer.com/is/image/acer/acer-aspire-5-a514-56gm-with-fingerprint-with-backlit-on-wallpaper-start-screen-steel-gray-01?$Visual-Filter-M1$",
            customer: "Rishabh Pandey",
            date: "20 feb",
            amount: 54322,
            method: "Online",
            status:"Approved",
        },
        {
            id:12341,
            product:"Play Station 5",
            img: "https://gmedia.playstation.com/is/image/SIEPDC/Controller-XL@2x?fmt=png-alpha&scl=1",
            customer: "Aviral",
            date: "29 dec",
            amount: 36322,
            method: "Cash On Delivery",
            status:"Pending",
        },
        {
            id:12341,
            product:"Console",
            img: "https://images.acer.com/is/image/acer/acer-aspire-5-a514-56gm-with-fingerprint-with-backlit-on-wallpaper-start-screen-steel-gray-01?$Visual-Filter-M1$",
            customer: "Dj wale babu",
            date: "29 feb",
            amount: 54322,
            method: "Cash On Delivery",
            status:"Approved",
        },
        {
            id:12341,
            product:"Sony Alpha",
            img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTOQZ74ul6EgR-dbB54gkP3bsx08k5KicB8MWjajBwzS-xGhPu4vaIvN7jb3dvo9lL4H543BtiooWQ25R-SnzQj_nL_BNXlN7ho4h0RK0-EDR15aQYTaQlY",
            customer: "Pankaj Dubey",
            date: "10 sep",
            amount: 254322,
            method: "Online",
            status:"Approved",
        },
        {
            id:12341,
            product:"Acer Aspire 5",
            img: "https://images.acer.com/is/image/acer/acer-aspire-5-a514-56gm-with-fingerprint-with-backlit-on-wallpaper-start-screen-steel-gray-01?$Visual-Filter-M1$",
            customer: "Dj wale babu",
            date: "29 feb",
            amount: 54322,
            method: "Cash On Delivery",
            status:"Pending",
        },
        {
            id:32341,
            product:"Razor MINI",
            img: "https://m.media-amazon.com/images/I/31N1BZUZLwL._SX300_SY300_QL70_FMwebp_.jpg",
            customer: "Divyash Gupta",
            date: "10 feb",
            amount: 54322,
            method: "Online",
            status:"Approved",
        },
    ]
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Traking Id</TableCell>
            <TableCell className='tableCell'>Products</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className='tableCell'>{row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} className='image' alt='img'/>
                    {row.product}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
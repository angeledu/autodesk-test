import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';


  const columns = [
    { field: 'id', headerName: 'ID'},
    { field: 'employee_name', headerName: 'Name', width: 200 },
    { field: 'employee_age', headerName: 'Age', width: 200 },
    { field: 'employee_salary', headerName: 'Salary', width: 500 },
  ]  

export const TableData = () => {

    const [ data, setData ] = useState([]);
  


    useEffect(() =>{
        getData()
    }, [])

    const getData = async() => {
      const url = `http://dummy.restapiexample.com/api/v1/employees`;
      const resp = await fetch( url );
      const { data } = await resp.json();
      setData(data)
    } 

  return (
    <DataGrid
              rows={data}
              columns={columns}
              pageSize={20}
              rowsPerPageOptions={[20]}
              checkboxSelection
            />
  )
}

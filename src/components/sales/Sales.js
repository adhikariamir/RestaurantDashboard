import React, { Component } from 'react';
import "./Sales.css"

import DataTable  from "react-data-table-component";
import movies from '../dataTables/Movies';

const MenuList = ({foodName}) => <>hello {foodName}</>


const customStyles = {

  headRow: {
    style: {
      fontSize :"1.5rem",
   backgroundColor: "#ff6877",

   

    },
  },


};

const columns = [
    {
        name: " Sales ID",
        selector: "id",
        sortable: true,
     
        
      },
      
    {
      name: "Item Image",
      selector: "posterUrl",
      cell: row => <img height="65px" width="65px" alt={row.name} src={row.posterUrl} style={{margin: 10}}/>,
      sortable: true,
      
    },
    {
      name: "Item Name ",
      selector: "title",
      sortable: true
    },
  
  
      {
        name: "Sales Date ",
        selector: "year",
    
        sortable: true,
   
      },
      {
        name: "Sales Quantity ",
        selector: "year",
    
        sortable: true,
   
      },
    {
      name: "Price (Rs)",
      selector: "runtime",
      sortable: true,
  
    }
  ];
class Sales extends Component {
    render() {
        return (
            <main>
            <div className="main__container_sales">
      
            <div className="sales-section">
    
            <div className="sales-request">
                <div className='sales-request-title'>

                    <div> 
                        <h6>Sales</h6>
                    </div>
                

                </div>

                <div className="sales-list">
                <DataTable
                
     subHeader="true"
          columns={columns}
          data={movies}
        highlightOnHover
     customStyles={customStyles}
subHeaderComponent={<MenuList/>}
         noHeader
          pagination
          
        
     
        />
                </div>
            </div>
 
        </div>
    
        </div>
        </main>
       
        );
    }
}

export default Sales; 

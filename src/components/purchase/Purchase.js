import React, { Component } from 'react';
import "./Purchase.css"

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
        name: " Purchase ID",
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
        name: "Vendor Name ",
        selector: "director",
        sortable: true
      },
      {
        name: "Location ",
        selector: "director",
     
        sortable: true
      },
  
      {
        name: "Purchase Date ",
        selector: "year",
    
        sortable: true,
   
      },
      {
        name: "Purchase Quantity ",
        selector: "year",
    
        sortable: true,
   
      },
    {
      name: "Price (Rs)",
      selector: "runtime",
      sortable: true,
  
    }
  ];
class Purchase extends Component {
    render() {
        return (
            <main>
            <div className="main__container_sales">
      
            <div className="purchase-section">
    
            <div className="purchase-request">
                <div className='purchase-request-title'>

                    <div> 
                        <h6>Purchase</h6>
                    </div>
                

                </div>

                <div className="purchase-list">
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

export default Purchase; 

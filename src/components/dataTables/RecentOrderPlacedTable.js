import React, { Component } from 'react';
import  './RecentOrderTable.css';
import DataTable  from "react-data-table-component";
import movies from '../dataTables/Movies';

const MenuList = ({foodName}) => <>hello {foodName}</>


const customStyles = {

  headRow: {
    style: {
      fontSize :"1rem",
      color: 'white',
   backgroundColor: "#ff6877",
   

    },
  },


};

const columns = [
    {
        name: " Order ID",
        selector: "id",
        sortable: true,
        
      },
      
    {
      name: "OrderFood Image",
      selector: "posterUrl",
      cell: row => <img height="65px" width="65px" alt={row.name} src={row.posterUrl} style={{margin: 10}}/>,
      sortable: true,
      
    },
    {
      name: "order Food ",
      selector: "title",
      sortable: true
    },
    {
        name: "Customer Name ",
        selector: "director",
        sortable: true
      },
      {
        name: "Location ",
        selector: "director",
     
        sortable: true
      },
      {
        name: "Order Status ",
        selector: "status",
        sortable: true, 
        cell: row => <div className= {`food-status ${row.status ==="pending" ? "pending" :row.status ==="cancelled"? "cancelled":row.status ==="deliverd"?"deliverd": " " }`}>{row.status  } </div>,
      },
      {
        name: "Delivered Time ",
        selector: "year",
    
        sortable: true,
   
      },
    {
      name: "Price",
      selector: "runtime",
      sortable: true,
  
    }
  ];
class RecentOrderPlacedTable extends Component {
    render() {
        return (
            <div className="recent-order-placed-section">
    
            <div className="recent-order-placed-request">
                <div className='recent-order-placed-request-title'>

                    <div> 
                        <h6>RECENTLY PLACED ORDERS</h6>
                    </div>
                

                </div>

                <div className="recent-order-placed-list">
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
        );
    }
}

export default RecentOrderPlacedTable;

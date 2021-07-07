import React, { Component } from 'react';
import DataTable from "react-data-table-component";



const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true
    },
    {
      name: "Directior",
      selector: "director",
      sortable: true
    },
    {
      name: "Runtime (m)",
      selector: "runtime",
      sortable: true,
      right: true
    },
    {
      name: "Runtime (m)",
      selector: "runtime",
      sortable: true,
      right: true
    }
  ];
class RecentPlacedOrders extends Component {
    render() {
        return (
            <div>
                   <DataTable
          title="Movies"
          columns={columns}
          data={movies}
          defaultSortFieldId={1}
       
          pagination
       
        />
            </div>
        );
    }
}

export default RecentPlacedOrders;

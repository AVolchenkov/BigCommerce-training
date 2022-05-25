import React from 'react';
import ReactDOM from 'react-dom';
import OrderHeaderIncompleteList from '../custom/components/ordersInfo'

const orderList = document.querySelector(".navUser-item--order-info .navUser-order-info")

fetch('http://localhost:8080').then(function (response) {
  return response.json();
}).then((data)=> {
  let count = 0;
  data.forEach(element => {
    if (element.customer_id == customerId) {
      if (element.status != "Completed" && element.status != "Cancelled") {
        count++
      }
    }

    if (customerId != undefined) {
      ReactDOM.render(<OrderHeaderIncompleteList count={count}/>, orderList)
    }
  });
}).catch((err)=>{
  console.log(err);
})




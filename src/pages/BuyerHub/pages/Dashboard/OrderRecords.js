import React from "react";

const OrderRecords = ({ allUserOrder }) => {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    // <div>OrderRecords</div>
    <tbody>
      {allUserOrder.map((orders, index) => (
        <tr key={index}>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  className="table-product-img"
                  src={orders.product.productImages[0].image}
                  alt="product name"
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <p>
                  {orders.product.productName
                    ? orders.product.productName.charAt().toUpperCase(0) +
                      orders.product.productName.slice(1)
                    : ""}
                </p>
                <p className="table-order-no">Order {orders.orderNumber}</p>
              </div>
            </div>
          </td>
          <td>
            {orders.product.currency} {numberWithCommas(orders.cost)}
          </td>
          <td>{orders.shippingType}</td>
          <td>{orders.paymentTerm}</td>
          <td>
            {orders.status === "PENDING" && (
              <div className="text-warning ">Pending</div>
            )}
            {orders.status === "PROCESSING" && (
              <div className="text-primary ">Confirmed</div>
            )}
            {orders.status === "SHIPPED" && (
              <div className="text-info">Shipped</div>
            )}
            {orders.status === "DELIVERED" && (
              <div className="text-success">Delivery</div>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrderRecords;

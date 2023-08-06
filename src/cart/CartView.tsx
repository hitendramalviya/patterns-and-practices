import { useEffect, useState } from "react";
import CartService from "../services/CartService";
import Http from "../http/Http";

export default function CartView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const service = new CartService(new Http("baseUrl"));
    service.getInprogressCart().then((res) => {
      setData(res.data);
    });
  }, []);

  return <div>Cart list view {data.map((d) => d)}</div>;
}

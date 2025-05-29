import { useEffect, useState } from "react";
import { getInvoices } from "../request";
import CardSkleton from "./CardSkleton";
import MyCard from "./MyCard";

export default function InvoiceCaed() {
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState(false);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    setLoding(true);
    getInvoices("/invoices")
      .then((res) => {
        setInvoices(res);
      })
      .catch((message) => {
        setError(message);
      })
      .finally(() => {
        setLoding(false);
      });
  }, []);

  if (loding) {
    return <CardSkleton />;
  }

  if (error) {
    return <p>xato</p>;
  }
  
  return (
    <div className="base-container flex flex-col gap-4">
      {invoices.map((el, index) => {
        const { createdAt, invoiceId, clientName, total, status, id } = el;
        console.log(el);
        
        console.log(createdAt);

        return (
          <MyCard
            invoiceId={invoiceId}
            createdAt={createdAt}
            clientName={clientName}
            price={total}
            status={status}
            key={id}
          />
        );
      })}
    </div>
  );
}

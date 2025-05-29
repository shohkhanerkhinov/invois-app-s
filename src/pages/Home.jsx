import { useState, useEffect } from "react";
import Header from "../components/Header";
import { getInvoices } from "../request";
import CardSkleton from "../components/CardSkleton";
import MyCard from "../components/MyCard";
import InvoiceCaed from "../components/InvoiceCaed";

export default function Home() {
  return (
    <div>
      <Header />
      <InvoiceCaed />
    </div>
  );
}

import React from "react";
import Navbar from "../component/Navbar";
import TableSpecialOffer from "../component/table/TableSpecialOffer";

export default function SpecialOfferPage() {
  return (
    <>
      <div className="p-6 pl-3 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 min-h-screen border-dashed rounded-lg">
          <Navbar />

          <TableSpecialOffer />

        </div>
      </div>
    </>
  );
}

import React from "react";
import Navbar from "../component/Navbar";
import TablePopular from "../component/table/TablePopular";

export default function PopularPage() {
  return (
    <>
      <div className="p-6 pl-3 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 min-h-screen border-dashed rounded-lg">
          <Navbar />

          <TablePopular />

        </div>
      </div>
    </>
  );
}

import React from "react";
import Navbar from "../component/Navbar";
import TableSlider from "../component/table/TableSlider";

export default function SliderPage() {
  return (
    <>
      <div className="p-6 pl-3 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 min-h-screen border-dashed rounded-lg">
          <Navbar />

          <TableSlider />
        </div>
      </div>
    </>
  );
}

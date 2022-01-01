import React, { useEffect, useState } from "react";
import RidersTable from "./RidersTable";

const RidersManagement = () => {
  const [rider, setRider] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/riders`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRider(data);
      });
  }, []);
  return (
    <div className="md:flex-1 md:p-16">
      <h2 className="uppercase admin-subSection-header md:pt-0 md:text-left">
        Manage All Riders
      </h2>

      {/* table to manage all riders  */}
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Rider Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      License Palate
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Vehicle Type
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rider.map((rider, idx) => (
                    <RidersTable rider={rider} key={idx} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RidersManagement;

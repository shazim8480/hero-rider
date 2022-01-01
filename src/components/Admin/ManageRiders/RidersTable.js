import React from "react";

const RidersTable = ({ rider }) => {
  // delete service on click delete button //////////////////////////////////
  const deleteRider = (id) => {
    const url = `https://warm-dusk-05608.herokuapp.com//deleteRider/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <>
      <tr key={rider.name}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <img
                className="w-10 h-10 rounded-full"
                src={rider.profileImageURL}
                alt="img"
              />
            </div>

            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {rider.name}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 ">
          <div className="text-sm text-gray-500 line-clamp-5">
            {rider.email}
          </div>
        </td>
        <td className="px-6 py-4 ">
          <div className="text-sm text-gray-500 line-clamp-5">
            {rider.licensePalate}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className="inline-flex px-2 uppercase text-sm font-bold ">
            {rider.vehicleType}
          </span>
        </td>

        <td className="px-6 py-4 text-sm font-medium text-left whitespace-nowrap">
          <button
            onClick={() => deleteRider(rider._id)}
            className="px-2.5 py-1 font-semibold text-sm bg-red-500 rounded-md text-red-50 active:bg-red-700"
          >
            DELETE
          </button>
        </td>
      </tr>
    </>
  );
};

export default RidersTable;

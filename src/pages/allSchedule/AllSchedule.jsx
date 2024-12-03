import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import List from "./List";
const AllSchedule = () => {
  const data = useLoaderData();
  const [schedules, setSchedules] = useState(data);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    fetch(`http://localhost:5000/schedule?search=${search}`)
      .then((res) => res.json())
      .then((data) => setSchedules(data));
  }, [search]);
  return (
    <>
      <div className="w-1/3 mx-auto mt-10">
        <div className="form-control">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      <div className="overflow-x-auto sm:w-11/12 mx-auto mt-10">
        <table className="table">
          {/* head */}
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Time</th>
              <th>Day</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {schedules.length === 0 ? (
              <>
                <td></td>
                <td> No data Found</td>
              </>
            ) : (
              schedules.map((schedule, i) => (
                <List
                  key={schedule._id}
                  schedule={schedule}
                  i={i}
                  setSchedules={setSchedules}
                  schedules={schedules}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllSchedule;

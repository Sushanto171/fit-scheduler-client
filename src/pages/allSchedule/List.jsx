import { useState } from "react";
import { IoCheckmark, IoCheckmarkDone } from "react-icons/io5";

const List = ({ schedule, i, setSchedules, schedules }) => {
  const [complete, setComplete] = useState(false);
  const TaskCompleteHandler = (_id) => {
    const info = {
      isComplete: true,
      id: _id,
    };
    // console.log(info);
    fetch("http://localhost:5000/schedule", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        setComplete(true);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const deleteHandler = (id) => {
    fetch(`http://localhost:5000/schedule/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then((data) => {
      const remain = schedules.filter((item) => item._id !== id);
      setSchedules(remain);
      console.log(data);
    });
  };
  return (
    <tr className={i % 2 !== 0 ? "hover" : ""}>
      <th>{i + 1}</th>
      <td>{schedule.title}</td>
      <td>{schedule.time}</td>
      <td>{schedule.day}</td>
      <td>{schedule.date}</td>
      <td className="md:max-w-20  flex gap-2">
        <button
          onClick={() => deleteHandler(schedule._id)}
          className="btn btn-sm"
        >
          Delete
        </button>
        <button className="btn btn-sm">Edit</button>
        <button
          onClick={() => TaskCompleteHandler(schedule._id)}
          className="btn btn-sm"
        >
          {complete || schedule.isComplete ? (
            <IoCheckmarkDone />
          ) : (
            <IoCheckmark />
          )}
        </button>
      </td>
    </tr>
  );
};

export default List;

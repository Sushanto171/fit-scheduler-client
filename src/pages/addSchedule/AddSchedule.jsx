import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import Select from "react-select";
import "./dateTime.css";

const AddSchedule = () => {
  const [value, onChange] = useState(new Date());
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const [defaultTime, setDefaultTime] = useState(new Date());
  const days = [
    { value: "sunday", label: "Sunday" },
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
    { value: "saturday", label: "Saturday" },
  ];
  const todays = days.find((day) => day.label === today);

  const addScheduleHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const time = form.time.value.split("T")[1];
    const date = form.date.value.split("T")[0];
    const day = form.day[1].value;
    const isComplete = false;
    const data = { time, title, date, day, isComplete };

    fetch("http://localhost:5000/schedule", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error, "ERROR"));
  };

  return (
    <div className="px-10 bg-[#F4F3F0] h-[calc(100vh-100px)]">
      <div>
        <h1 className="text-3xl font-bold text-center pt-10">
          Add Gym Schedule
        </h1>
      </div>
      <div className="card w-full shrink-0">
        <form
          onSubmit={addScheduleHandler}
          className="card-body grid grid-cols-2"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="input"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Time</span>
            </label>
            <DateTimePicker
              disableClock={true}
              calendarIcon={false}
              clearIcon={false}
              className="input"
              format="h:mm:ss a"
              showLeadingZeros={true}
              onChange={setDefaultTime}
              value={defaultTime}
              name="time"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <DateTimePicker
              disableClock={true}
              calendarIcon={false}
              clearIcon={false}
              className="input input-bordered "
              format="y-MM-dd"
              showLeadingZeros={true}
              onChange={onChange}
              value={value}
              name="date"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Day</span>
            </label>
            <Select
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  border: "none",
                  boxShadow: "none",
                }),
              }}
              className="input"
              defaultValue={todays}
              placeholder="select a day"
              options={days}
              name="day"
            />
          </div>
          <div className="form-control mt-6 col-span-2">
            <button className="btn bg-[#EC4899] text-white text-lg hover:text-black">
              Add Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSchedule;

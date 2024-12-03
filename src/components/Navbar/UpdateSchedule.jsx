import React from 'react';

const UpdateSchedule = () => {
    return (
        <div className="px-10 bg-[#F4F3F0] h-[calc(100vh-100px)]">
            <div>
                <h1 className="text-3xl font-bold text-center pt-10">Add Gym Schedule</h1>
            </div>
                <div className="card w-full shrink-0">
                <form className="card-body grid grid-cols-2">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Time</span>
                    </label>
                    <input type="text" placeholder="time" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="text" placeholder="day" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Day</span>
                    </label>
                    <input type="text" placeholder="Day" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 col-span-2">
                    <button className="btn bg-[#EC4899] text-white text-lg hover:text-black" >Add Schedule</button>
                    </div>
                </form>
                </div>
        </div>
    );
};

export default UpdateSchedule;
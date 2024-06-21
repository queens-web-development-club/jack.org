import React from "react";

export default function DeleteModal({ onSubmit, setConfirm }) {
  return (
    <div
      className="w-screen h-screen fixed inset-0 bg-[#c8c8c8] bg-opacity-80 flex justify-center items-center z-[100]"
      onClick={() => setConfirm(false)}
    >
      <div
        className="w-[300px] h-[150px] bg-white rounded flex flex-col justify-center items-center gap-[1rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-3xl">Are you sure?</h1>
        <div className="flex gap-[1rem]">
          <button
            className="bg-[#22B1E9] text-white px-[1rem] py-[0.5rem] rounded"
            onClick={() => setConfirm(false)}
          >
            No
          </button>
          <button
            className="bg-[#FF3D57] text-white px-[1rem] py-[0.5rem] rounded"
            onClick={onSubmit}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

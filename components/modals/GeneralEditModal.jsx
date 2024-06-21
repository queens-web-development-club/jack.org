import React from "react";

export default function GeneralEditModal({
  action,
  modalInfo,
  setModalInfo,
  fields,
}) {
  return (
    <div
      className="fixed w-screen h-screen inset-0 bg-[#c8c8c8] bg-opacity-80 flex justify-center items-center z-10"
      onClick={() => setModalInfo(null)}
    >
      <form
        onSubmit={action}
        className="flex flex-col w-[300px] h-fit gap-[1rem] bg-[#F7F7F7] rounded p-[1rem]"
        onClick={(e) => e.stopPropagation()}
      >
        {fields.map((field) => (
          <input
            type="text"
            key={field}
            name={field}
            placeholder={field}
            className="w-full p-[0.5rem] rounded"
            value={modalInfo[field]}
            onChange={(e) =>
              setModalInfo({ ...modalInfo, [field]: e.target.value })
            }
          />
        ))}
        <button
          type="submit"
          className="w-full p-[0.5rem] bg-[#22B1E9] text-white rounded"
        >
          Edit
        </button>
      </form>
    </div>
  );
}

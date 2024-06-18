import React from "react";
import ImageUpload from "../admin/ImageUpload";

export default function EditModal({ modalInfo, setModalInfo, editMember }) {
  return (
    <div className="fixed w-screen h-screen inset-0 bg-[#c8c8c8] bg-opacity-80 flex justify-center items-center" onClick={() => setModalInfo(null)}>
      <ImageUpload member={modalInfo} setMember={setModalInfo} addMember={editMember}/>
    </div>
  );
}

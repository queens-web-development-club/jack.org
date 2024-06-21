import { useState, useRef } from "react";
import { IoMdCloudUpload } from "react-icons/io";
import Image from "next/image";

export default function ImageUpload({ member, setMember, addMember }) {
  const inputRef = useRef();

  const options = ["President", "Marketing", "Events", "Summit"]

  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    setMember((prev) => ({ ...prev, image: event.dataTransfer.files[0] }));
  };

  return (
    <form
      onSubmit={addMember}
      className="flex flex-col w-[300px] h-fit gap-[1rem] bg-[#F7F7F7] rounded p-[1rem]"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`w-full h-[150px] border-dotted border-2 flex justify-center items-center cursor-pointer ${
          isDragging && "border-[#22B1E9]"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current.click()}
      >
        <input
          type="file"
          name="image"
          ref={inputRef}
          accept="image/*"
          className="hidden"
          onChange={(e) =>
            setMember((prev) => ({
              ...prev,
              [e.target.name]: e.target.files[0],
            }))
          }
        />
        <div>
          <IoMdCloudUpload className="text-[5rem] mx-auto" />
          <p className="text-center">Drag & drop or upload</p>
        </div>
      </div>
      {member.image ? (
        <Image
          src={URL.createObjectURL(member.image)}
          alt={member.image.name}
          width={300}
          height={300}
          onLoad={() => URL.revokeObjectURL(member.image)}
        />
      ) : (
        member?.currentImage && (
          <Image
            src={member.currentImage}
            alt={member.currentImage.name}
            width={300}
            height={300}
          />
        )
      )}
      <input
        type="text"
        placeholder="name"
        value={member.name}
        name="name"
        className="rounded"
        onChange={(e) =>
          setMember((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
      <input
        type="text"
        placeholder="position"
        value={member.position}
        name="position"
        className="rounded"
        onChange={(e) =>
          setMember((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        }
      />
      {member.type === "President" && (
        <textarea
          type="text"
          placeholder="testimonial"
          value={member.testimonial}
          name="testimonial"
          className="rounded"
          onChange={(e) =>
            setMember((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
      )}
      <select
        name="type"
        value={member.type}
        onChange={(e) =>
          setMember((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
        className="rounded"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button className="bg-[#22B1E9] rounded">upload</button>
    </form>
  );
}

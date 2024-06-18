"use client";

import axios from "axios";
import { useUserContext } from "@/Context/UserContext";
import ImageUpload from "@/components/admin/ImageUpload";
import { useState, useMemo } from "react";
import Image from "next/image";
import EditModal from "@/components/modals/EditModal";
import { CiEdit } from "react-icons/ci";

export default function Members() {
  const [member, setMember] = useState({
    name: "",
    position: "",
    image: "",
    type: "Normal",
    testimonial: "",
  });
  const [modalInfo, setModalInfo] = useState(null);

  const { user, setUser, setLoading } = useUserContext();

  async function addMember(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", member.name);
    formData.append("position", member.position);
    formData.append("image", member.image);
    formData.append("type", member.type);
    formData.append("testimonial", member.testimonial);
    try {
      setLoading(true);
      const res = await axios.post("/api/members", formData);
      setUser((prev) => ({
        ...prev,
        members: [...prev.members, res.data.newMember],
      }));

      setMember({
        name: "",
        position: "",
        image: "",
        type: "Normal",
        testimonial: "",
      });
    } catch (error) {
      console.log(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  async function editMember(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", modalInfo.name);
    formData.append("position", modalInfo.position);
    formData.append("image", modalInfo.image);
    formData.append("type", modalInfo.type);
    formData.append("testimonial", modalInfo.testimonial);
    formData.append("_id", modalInfo._id);
    formData.append("currentImage", modalInfo.currentImage);
    try {
      setLoading(true);
      setModalInfo(null);
      const res = await axios.put(`/api/members`, formData);
      setUser((prev) => ({
        ...prev,
        members: prev.members.map((member) =>
          member._id === res.data.updatedMember._id
            ? res.data.updatedMember
            : member
        ),
      }));
    } catch (error) {
      console.log(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  const pres = useMemo(
    () => user.members.filter((img) => img.type === "Pres"),
    [user]
  );

  const members = useMemo(
    () => user.members.filter((img) => img.type === "Normal"),
    [user]
  );

  return (
    <main className="w-full min-h-[calc(100vh-100px)] bg-[#202835] p-[2rem] flex flex-col gap-[1rem]">
      <ImageUpload
        addMember={addMember}
        setMember={setMember}
        member={member}
      />
      <section className="border-t-2 p-[1rem]">
        <h2 className="font-bold text-3xl text-white m-[1rem]">Presidents</h2>
        <div className="flex flex-wrap gap-[1rem]">
          {pres.map((img) => (
            <div className="flex p-[1.5rem] rounded-3xl bg-white max-lg:flex-col h-fit w-fit text-center relative">
              <Image
                sizes="(min-width: 560px) 300px, (min-width: 380px) 56.25vw, calc(30vw + 89px)"
                src={img.image}
                alt={img.name}
                width={300}
                height={400}
                className="rounded-3xl max-lg:mx-auto max-lg:mb-[1rem]"
              />

              <div className="flex-1 px-[2rem]">
                <p className="font-bold text-2xl">{img.name}</p>
                <p className="text-[5E5E5E]">{img.position}</p>
                <p className="mt-[2rem]">{img.testimonial}</p>
              </div>
              <CiEdit
                className="absolute bottom-5 right-5 text-3xl"
                onClick={() =>
                  setModalInfo({ ...img, image: null, currentImage: img.image })
                }
              />
            </div>
          ))}
        </div>
      </section>
      <section className="border-t-2 p-[1rem]">
        <h2 className="font-bold text-3xl text-white m-[1rem]">Members</h2>
        <div className="flex flex-wrap gap-[1rem]">
          {members.map((img) => (
            <div
              className="rounded-xl bg-[#B6CFFF] p-[1rem] text-center w-fit h-fit"
              key={img._id}
            >
              <Image
                sizes="(min-width: 440px) 250px, calc(65vw - 23px)"
                src={img.image}
                alt={img.name}
                width={250}
                height={300}
                className="rounded-xl"
              />
              <p className="font-semibold text-xl mt-[1rem]">{img.name}</p>
              <p>{img.position}</p>
            </div>
          ))}
        </div>
      </section>
      {modalInfo && (
        <EditModal
          modalInfo={modalInfo}
          setModalInfo={setModalInfo}
          editMember={editMember}
        />
      )}
    </main>
  );
}

"use client";

import useAxios from "@/hooks/useAxios";
import { useUserContext } from "@/Context/UserContext";
import ImageUpload from "@/components/admin/ImageUpload";
import { Fragment, useState, useMemo } from "react";
import Image from "next/image";
import EditModal from "@/components/modals/EditModal";
import { CiEdit } from "react-icons/ci";
import Back from "@/components/Buttons/Back";
import { MdDelete } from "react-icons/md";
import DeleteModal from "@/components/modals/DeleteModal";

export default function Members() {
  const [member, setMember] = useState({
    name: "",
    role: "",
    image: "",
    type: "Events",
    testimonial: "",
  });
  const axios = useAxios();
  const [modalInfo, setModalInfo] = useState(null);
  const [confirm, setConfirm] = useState(false);
  const [data, setData] = useState(null);
  const { user, setUser, setLoading } = useUserContext();

  async function addMember(e) {
    e.preventDefault();
    for (const key in member) {
      if (member.type === "President") {
        if (member[key] === "") {
          return alert("All fields are required!");
        }
      } else {
        if (member[key] === "" && key !== "testimonial") {
          return alert("All fields are required!");
        }
      }
    }
    const formData = new FormData();
    formData.append("name", member.name);
    formData.append("role", member.role);
    formData.append("image", member.image);
    formData.append("type", member.type);
    formData.append("testimonial", member.testimonial);
    try {
      setLoading(true);
      const res = await axios.post("/members", formData);
      setUser((prev) => ({
        ...prev,
        members: [...prev.members, res.data.newMember],
      }));

      setMember({
        name: "",
        role: "",
        image: "",
        type: "Marketing",
        testimonial: "",
      });
    } catch (error) {
      alert(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  async function editMember(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", modalInfo.name);
    formData.append("role", modalInfo.role);
    formData.append("image", modalInfo.image);
    formData.append("type", modalInfo.type);
    formData.append("testimonial", modalInfo.testimonial);
    formData.append("_id", modalInfo._id);
    formData.append("currentImage", modalInfo.currentImage);
    try {
      setLoading(true);
      setModalInfo(null);
      const res = await axios.put(`/members`, formData);
      setUser((prev) => ({
        ...prev,
        members: prev.members.map((member) =>
          member._id === res.data.updatedMember._id
            ? res.data.updatedMember
            : member
        ),
      }));
    } catch (error) {
      alert(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  async function deleteMember() {
    try {
      setLoading(true);
      await axios.delete(`/members`, {
        data: { id: data._id, currentPhoto: data.image },
      });
      setUser((prev) => ({
        ...prev,
        members: prev.members.filter((member) => member._id !== data._id),
      }));
    } catch (error) {
      alert(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  const members = useMemo(
    () =>
      user.members.reduce((memberGroups, member) => {
        if (!memberGroups[member.type]) {
          memberGroups[member.type] = [];
        }
        memberGroups[member.type].push(member);
        return memberGroups;
      }, {}),
    [user]
  );

  return (
    <main className="w-full min-h-[calc(100vh-100px)] bg-[#202835] p-[2rem] flex flex-col gap-[1rem]">
      <Back />
      <ImageUpload
        addMember={addMember}
        setMember={setMember}
        member={member}
      />
      {confirm && (
        <DeleteModal onSubmit={deleteMember} setConfirm={setConfirm} />
      )}
      <section>
        {Object.keys(members).map((key) => (
          <Fragment key={key}>
            <h2 className="font-bold text-3xl text-white m-[1rem] pt-[1rem] border-t-2">
              {key}
            </h2>
            <div className="flex flex-wrap gap-[1rem] p-[1rem]">
              {key === "President"
                ? members[key].map((img) => (
                    <div
                      className="flex p-[1.5rem] rounded-3xl bg-white max-lg:flex-col h-fit w-fit text-center relative"
                      key={img._id}
                    >
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
                        <p className="text-[5E5E5E]">{img.role}</p>
                        <p className="mt-[2rem]">{img.testimonial}</p>
                      </div>
                      <div className="absolute bottom-5 right-5 text-3xl flex items-center">
                        <CiEdit
                          onClick={() =>
                            setModalInfo({
                              ...img,
                              image: null,
                              currentImage: img.image,
                            })
                          }
                        />
                        <MdDelete
                          onClick={() => {
                            setConfirm(true);
                            setData(img);
                          }}
                        />
                      </div>
                    </div>
                  ))
                : members[key].map((img) => (
                    <div
                      className="rounded-xl bg-[#B6CFFF] p-[1rem] text-center w-fit h-fit relative"
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
                      <p className="font-semibold text-xl mt-[1rem]">
                        {img.name}
                      </p>
                      <p>{img.role}</p>
                      <div className="absolute bottom-1 right-1 text-xl flex items-center">
                        <CiEdit
                          className="cursor-pointer"
                          onClick={() =>
                            setModalInfo({
                              ...img,
                              image: null,
                              currentImage: img.image,
                            })
                          }
                        />
                        <MdDelete
                          className="cursor-pointer"
                          onClick={() => {
                            setConfirm(true);
                            setData(img);
                          }}
                        />
                      </div>
                    </div>
                  ))}
            </div>
          </Fragment>
        ))}
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

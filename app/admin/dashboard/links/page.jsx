"use client";
import Back from "@/components/Buttons/Back";
import { useState } from "react";
import useAxios from "@/hooks/useAxios";
import { useUserContext } from "@/Context/UserContext";
import GeneralEditModal from "@/components/modals/GeneralEditModal";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";

export default function Links() {
  const [modalInfo, setModalInfo] = useState(null);
  const axios = useAxios();
  const { user, setUser, setLoading } = useUserContext();

  async function editLink() {
    try {
      setLoading(true);
      await axios.put("/teamLinks", modalInfo);
      setUser((prev) => {
        const teamLinks = [...prev.teamLinks];
        teamLinks[modalInfo.index] = modalInfo.link;
        return { ...prev, teamLinks };
      });
    } catch (error) {
      console.log(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="w-full min-h-[calc(100vh-100px)] bg-[#202835] p-[2rem] flex flex-col gap-[1rem]">
      <Back />
      {modalInfo && (
        <GeneralEditModal
          modalInfo={modalInfo}
          fields={["link"]}
          setModalInfo={setModalInfo}
          action={editLink}
        />
      )}
      {user.teamLinks.map((link, key) => (
        <div
          key={link}
          className="flex items-center gap-[1rem] bg-[#B6CFFF] p-[1rem] rounded"
        >
          <h2>{key === 0 ? "Member" : key === 1 ? "Summit" : "Events"}</h2>
          <Link href={link} className="text-[#22B1E9]">
            {link}
          </Link>
          <CiEdit
            className="cursor-pointer ml-auto"
            onClick={() => setModalInfo({ link, index: key })}
          />
        </div>
      ))}
    </main>
  );
}

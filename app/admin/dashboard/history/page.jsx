"use client";

import React, { useState } from "react";
import useAxios from "@/hooks/useAxios";
import { useUserContext } from "@/Context/UserContext";
import Back from "@/components/Buttons/Back";
import GeneralEditModal from "@/components/modals/GeneralEditModal";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import DeleteModal from "@/components/modals/DeleteModal";
import Loading from "@/components/Loading";

export default function page() {
  const axios = useAxios();
  const { user, setUser } = useUserContext();
  const [info, setInfo] = useState({ year: "", description: "" });
  const [confirm, setConfirm] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    setLoading(true);
    e.preventDefault();
    for (const key in info) {
      if (!info[key]) {
        return alert("All fields are required!");
      }
    }
    try {
      const res = await axios.post("/history", info);
      const newUser = {
        ...user,
        history: [...user.history, res.data.history],
      };

      newUser.history.sort((a, b) => parseInt(b.year) - parseInt(a.year));
      setUser(newUser);
    } catch (error) {
      alert(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  async function editHistory(e) {
    e.preventDefault();
    for (const key in modalInfo) {
      if (!modalInfo[key]) {
        return alert("All fields are required!");
      }
    }
    try {
      const res = await axios.put("/history", modalInfo);
      const newUser = {
        ...user,
        history: user.history.map((history) =>
          history._id === modalInfo._id ? res.data.history : history
        ),
      };
      newUser.history.sort((a, b) => parseInt(b.year) - parseInt(a.year));
      setUser(newUser);
    } catch (error) {
      alert(error.response.data.msg);
    }
  }

  async function deleteHistory() {
    try {
      await axios.delete(`/history`, { data: { _id: data._id } });
      const newUser = {
        ...user,
        history: user.history.filter((history) => history._id !== data._id),
      };
      setUser(newUser);
    } catch (error) {
      alert(error);
      alert(error.response.data.msg);
    }
  }

  return (
    <main className="w-full min-h-[calc(100vh-100px)] bg-[#202835] p-[2rem] flex flex-col gap-[1rem]">
      <Back />
      {modalInfo && (
        <GeneralEditModal
          action={editHistory}
          modalInfo={modalInfo}
          setModalInfo={setModalInfo}
          fields={["year", "description"]}
        />
      )}
      {confirm && (
        <DeleteModal onSubmit={deleteHistory} setConfirm={setConfirm} />
      )}
      <form
        onSubmit={onSubmit}
        className="bg-[#F7F7F7] rounded w-[300px] p-[1rem] gap-[1rem] flex flex-col"
      >
        <input
          type="text"
          name="year"
          placeholder="Year"
          className="w-full p-[0.5rem] rounded border-[#22B1E9] border"
          value={info?.year}
          onChange={(e) => setInfo({ ...info, year: e.target.value })}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Description"
          className="w-full p-[0.5rem] rounded border-[#22B1E9] border"
          value={info?.description}
          onChange={(e) => setInfo({ ...info, description: e.target.value })}
        />
        <button
          type="submit"
          className="w-full p-[0.5rem] bg-[#22B1E9] text-white rounded"
        >
          Add
        </button>
      </form>
      {user.history.length > 0 ? (
        <section className="rounded p-[2rem] flex flex-col gap-[1rem]">
          {user.history.map((history, key) => (
            <div
              key={key}
              className="flex flex-col gap-[0.5rem] bg-[#F7F7F7] p-[1rem] rounded relative"
            >
              <p>
                <span className="font-bold">Year:</span> {history.year}
              </p>
              <p>
                <span className="font-bold">Description:</span>{" "}
                {history.description}
              </p>
              <div className="absolute bottom-1 right-1 text-3xl flex items-center">
                <CiEdit
                  onClick={() => setModalInfo(history)}
                  className="cursor-pointer"
                />
                <MdDelete
                  className="cursor-pointer"
                  onClick={() => {
                    setConfirm(true);
                    setData(history);
                  }}
                />
              </div>
            </div>
          ))}
        </section>
      ) : (
        <p className="text-white">Empty</p>
      )}
    </main>
  );
}

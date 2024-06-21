"use client";

import { useState } from "react";
import Back from "@/components/Buttons/Back";
import useAxios from "@/hooks/useAxios";
import { useUserContext } from "@/Context/UserContext";
import GeneralEditModal from "@/components/modals/GeneralEditModal";
import DeleteModal from "@/components/modals/DeleteModal";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function Events() {
  const [info, setInfo] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const [confirm, setConfirm] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);
  const [data, setData] = useState(null);

  const { user, setUser, setLoading } = useUserContext();

  const axios = useAxios();

  async function onSubmit(e) {
    e.preventDefault();
    for (const key in info) {
      if (!info[key]) {
        return alert("All fields are required!");
      }
    }
    try {
      setLoading(true);
      const res = await axios.post("/events", info);

      setUser((prev) => ({
        ...prev,
        events: [...prev.events, res.data],
      }));

      setInfo({
        description: "",
        title: "",
        date: "",
        location: "",
      });
    } catch (error) {
      alert(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  async function deleteEvent() {
    try {
      setLoading(true);
      await axios.delete(`/events`, { data: { _id: data._id } });
      setUser((prev) => ({
        ...prev,
        events: prev.events.filter((event) => event._id !== data._id),
      }));
    } catch (error) {
      alert(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  async function editEvent() {
    try {
      setLoading(true);
      await axios.put("/events", modalInfo);
      setUser((prev) => ({
        ...prev,
        events: prev.events.map((event) =>
          event._id === modalInfo._id ? modalInfo : event
        ),
      }));
    } catch (error) {
      alert(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="w-full min-h-[calc(100vh-100px)] bg-[#202835] p-[2rem] flex flex-col gap-[1rem]">
      <Back />
      <form
        onSubmit={onSubmit}
        className="bg-[#F7F7F7] rounded w-[300px] p-[1rem] gap-[1rem] flex flex-col"
      >
        {Object.keys(info).map((key) => (
          <input
            key={key}
            type="text"
            placeholder={key}
            value={info[key]}
            onChange={(e) => setInfo({ ...info, [key]: e.target.value })}
            className="p-[0.5rem] border border-[#22B1E9] rounded"
          />
        ))}
        <button
          type="submit"
          className="w-full p-[0.5rem] bg-[#22B1E9] text-white rounded"
        >
          Add
        </button>
      </form>
      {confirm && (
        <DeleteModal setConfirm={setConfirm} onSubmit={deleteEvent} />
      )}
      {modalInfo && (
        <GeneralEditModal
          setModalInfo={setModalInfo}
          fields={["title", "date", "location", "description"]}
          modalInfo={modalInfo}
          action={editEvent}
        />
      )}

      {user.events.map((event) => (
        <div key={event._id} className="bg-[#F7F7F7] rounded p-[2rem] relative">
          <p>
            <span className="font-bold">Title:</span> {event.title}
          </p>
          <p>
            <span className="font-bold">Date:</span> {event.date}
          </p>
          <p>
            <span className="font-bold">Location:</span> {event.location}
          </p>
          <p>
            <span className="font-bold">Description:</span> {event.description}
          </p>
          <div className="absolute bottom-1 right-1 text-3xl flex items-center">
            <CiEdit
              onClick={() => setModalInfo(event)}
              className="cursor-pointer"
            />
            <MdDelete
              className="cursor-pointer"
              onClick={() => {
                setConfirm(true);
                setData(event);
              }}
            />
          </div>
        </div>
      ))}
    </main>
  );
}

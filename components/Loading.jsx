import Image from "next/image";

export default function Loading() {
  return (
    <main className="w-[100vw] h-[100vh] bg-[#202835] flex justify-center items-center fixed inset-0">
      <Image
        src="/logo.svg"
        width={300}
        height={300}
        className="spinner"
        alt="loading"
      />
    </main>
  );
}

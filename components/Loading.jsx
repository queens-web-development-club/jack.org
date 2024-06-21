import Image from "next/image";

export default function Loading() {
  return (
    <main className="w-[100vw] h-[100vh] bg-[#202835] fixed flex inset-0 justify-center">
      <div className="flex w-[85%] h-[100px]">
        <Image
          src="/logo.svg"
          width={288}
          height={77}
          className="spinner pt-[1rem]"
          alt="loading"
        />
      </div>
    </main>
  );
}

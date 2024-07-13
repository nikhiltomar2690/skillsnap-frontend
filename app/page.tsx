import InputField from "@/components/custom/InputField";
import TextareaField from "@/components/custom/TextareaField";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-3 py-20">
      <h1 className="text-black font-bold text-lg">Custom Field Example</h1>
      <InputField
        placeholder="Enter Your Text Here"
        className="text-black w-[200px]"
      />
      <TextareaField
        placeholder="Enter Your Text Here"
        className="text-black resize-none w-[400px]"
        rows={10}
      />
    </main>
  );
}

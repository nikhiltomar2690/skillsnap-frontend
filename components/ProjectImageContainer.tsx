import Image from "next/image";

export default function ImageContainer() {
  return (
    <div className="w-full max-w-[800px] h-[312px] pt-6 rounded-[24px] bg-white border border-gray-200 px-4">
      <div className="w-full h-[264px] rounded-[18px] overflow-hidden">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/029/483/346/non_2x/black-and-white-random-pattern-free-vector.jpg"
          alt="Bicycle leaning against a graffitied wall"
          width={636}
          height={264}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

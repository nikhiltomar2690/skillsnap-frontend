// import { Card } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";

// interface Certification {
//   name: string;
//   issuer: string;
//   issuedDate: string;
//   icon: string;
//   href: string;
// }

// interface CertificationCardProps {
//   certification: Certification;
// }

// function CertificationCard({ certification }: CertificationCardProps) {
//   return (
//     <Link
//       href={certification.href}
//       className="block group"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Card
//         className={cn(
//           "w-full sm:w-[500px] h-auto sm:h-[184px] rounded-[24px] shadow-[0_2px_4px_rgba(0,0,0,0.1)]",
//           "overflow-hidden relative bg-white p-4 border-none sm:p-6 flex flex-col justify-between",
//           "transition-shadow duration-300 ease-in-out group-hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
//         )}
//       >
//         <div className="flex justify-between items-start mb-4 sm:mb-0">
//           <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-black rounded-[6px] sm:rounded-[8px] flex items-center justify-center">
//             <Image
//               src={certification.icon}
//               alt={`${certification.name} logo`}
//               width={24}
//               height={24}
//               className="w-5 h-5 sm:w-6 sm:h-6"
//             />
//           </div>
//           <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-[#E5E7EB] rounded-[10px] flex items-center justify-center group-hover:bg-[#D1D5DB] transition-colors duration-300 ease-in-out">
//             <svg
//               className="w-4 h-4 sm:w-5 sm:h-5"
//               viewBox="0 0 20 20"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M5.83333 14.1667L14.1667 5.83333"
//                 stroke="#111827"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M5.83333 5.83333H14.1667V14.1667"
//                 stroke="#111827"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//         <div className="mt-auto">
//           <h2 className="text-black text-[18px] sm:text-[20px] font-semibold leading-[22px] sm:leading-[24px] mb-1 group-hover:text-blue-600 transition-colors duration-300 ease-in-out">
//             {certification.name}
//           </h2>
//           <p className="text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-[#6B7280] mb-1">
//             By {certification.issuer}
//           </p>
//           <p className="text-[11px] sm:text-[12px] leading-[14px] sm:leading-[16px] text-[#9CA3AF]">
//             Issued on {certification.issuedDate}
//           </p>
//         </div>
//       </Card>
//     </Link>
//   );
// }

// interface CertificationListProps {
//   certifications: Certification[];
// }

// export default function CertificationList({
//   certifications,
// }: CertificationListProps) {
//   return (
//     <div className="w-full max-w-[1140px] mx-auto px-4 py-4 sm:p-8">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
//           Certifications
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//           {certifications.map((certification, index) => (
//             <CertificationCard key={index} certification={certification} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Certification {
  name: string;
  issuer: string;
  issuedDate: string;
  icon: string;
  href: string;
}

interface CertificationCardProps {
  certification: Certification;
}

function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <Link
      href={certification.href}
      className="block group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card
        className={cn(
          "w-full h-[184px] rounded-[24px] shadow-[0_2px_4px_rgba(0,0,0,0.1)]", // Fixed height for uniformity
          "overflow-hidden relative bg-white p-4 border-none sm:p-6 flex flex-col justify-between",
          "transition-shadow duration-300 ease-in-out group-hover:shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
        )}
      >
        <div className="flex justify-between items-start mb-4 sm:mb-0">
          <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-black rounded-[6px] sm:rounded-[8px] flex items-center justify-center">
            <Image
              src={certification.icon}
              alt={`${certification.name} logo`}
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>
          <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] bg-[#E5E7EB] rounded-[10px] flex items-center justify-center group-hover:bg-[#D1D5DB] transition-colors duration-300 ease-in-out">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83333 14.1667L14.1667 5.83333"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.83333 5.83333H14.1667V14.1667"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="mt-auto">
          <h2 className="text-black text-[18px] sm:text-[20px] font-semibold leading-[22px] sm:leading-[24px] mb-1 group-hover:text-blue-600 transition-colors duration-300 ease-in-out">
            {certification.name}
          </h2>
          <p className="text-[13px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-[#6B7280] mb-1">
            By {certification.issuer}
          </p>
          <p className="text-[11px] sm:text-[12px] leading-[14px] sm:leading-[16px] text-[#9CA3AF]">
            Issued on {certification.issuedDate}
          </p>
        </div>
      </Card>
    </Link>
  );
}

interface CertificationListProps {
  certifications: Certification[];
}

export default function CertificationList({
  certifications,
}: CertificationListProps) {
  return (
    <div className="w-full max-w-[1140px] mx-auto px-4 py-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
          Certifications
        </h1>
        <div className="flex flex-wrap gap-4">
          {certifications.map((certification, index) => (
            <div className="flex-shrink-0 w-full sm:w-[500px]">
              <CertificationCard key={index} certification={certification} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

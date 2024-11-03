import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface EducationEntry {
  period: string;
  title: string;
  description: string;
}

interface EducationCardProps {
  entry: EducationEntry;
}

function EducationCard({ entry }: EducationCardProps) {
  return (
    <Card className="w-full mb-4 rounded-[24px] overflow-hidden shadow-md border-none">
      <CardContent className="p-6 flex flex-col sm:flex-row">
        <div className="flex items-center sm:flex-col sm:items-center sm:mr-6">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center sm:mb-2">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/029/483/346/non_2x/black-and-white-random-pattern-free-vector.jpg"
              alt="Education Logo"
              width={24}
              height={24}
            />
          </div>
          <p className="text-sm text-gray-500 whitespace-nowrap ml-auto sm:ml-0">
            {entry.period}
          </p>
        </div>
        <div className="flex-grow flex flex-col justify-center mt-4 sm:mt-0">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {entry.title}
          </h2>
          <p className="text-sm text-gray-600">{entry.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

interface EducationComponentProps {
  educationEntries: EducationEntry[];
}

export default function EducationComponent({
  educationEntries,
}: EducationComponentProps) {
  return (
    <div className="w-full max-w-[1140px] mx-auto px-3 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-black-900 mb-8">Education</h1>
      <div>
        {educationEntries.map((entry, index) => (
          <EducationCard key={index} entry={entry} />
        ))}
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DescriptionContainer() {
  return (
    <Card className="w-full max-w-[700px] p-4 sm:p-6 rounded-[24px] border border-gray-200 bg-white">
      <CardHeader className="p-0 mb-2">
        <CardTitle className="text-2xl font-bold text-center text-gray-900">
          BuyCycle
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 text-center">
        <p className="text-base text-gray-600 leading-5 sm:leading-6">
          Lorem ipsum dolor sit amet consectetur. Aliquet id egestas a commodo
          neque malesuada vitae. Sed nunc in turpis vehicula nulla dolor sodales
          et at. Sit consequat magna amet lectus amet turpis fames et.neque
          malesuada vitae. Sed nunc in turpis vehicula nulla dolor sodales et
          at. Sit consequat magna amet lectus amet turpis fames et.
        </p>
      </CardContent>
    </Card>
  );
}

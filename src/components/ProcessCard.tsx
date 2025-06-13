
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface Step {
  title: string;
  description: string;
  details: string[];
  outcome: string;
}

interface ProcessCardProps {
  icon: LucideIcon;
  title: string;
  goal: string;
  steps?: Step[];
  process?: string[];
  fee?: string;
  outcome: string;
  className?: string;
}

const ProcessCard = ({ icon: Icon, title, goal, steps, process, fee, outcome, className = "" }: ProcessCardProps) => {
  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg rounded-2xl ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#5d248f] to-[#f46d19] flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-poppins font-bold text-2xl text-[#5d248f]">{title}</h3>
        </div>
        <p className="font-inter text-gray-700 font-medium text-lg">{goal}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {steps && (
          <div className="space-y-6">
            <h4 className="font-poppins font-semibold text-lg text-[#5d248f]">Step-by-Step:</h4>
            {steps.map((step, index) => (
              <div key={index} className="border-l-4 border-[#f46d19]/30 pl-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-[#ef3e25] text-white font-inter rounded-xl">
                    Step {index + 1}
                  </Badge>
                  <h5 className="font-poppins font-semibold text-[#5d248f]">{step.title}</h5>
                </div>
                <p className="font-inter text-gray-700">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="font-inter text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-[#f46d19] font-bold">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-[#5d248f]/10 to-[#f46d19]/10 p-3 rounded-xl border border-[#5d248f]/20">
                  <p className="font-inter font-semibold text-[#5d248f] text-sm">
                    <span className="text-[#ef3e25]">Outcome:</span> {step.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {process && (
          <div className="space-y-4">
            <h4 className="font-poppins font-semibold text-lg text-[#5d248f]">Process:</h4>
            <ul className="space-y-2">
              {process.map((item, index) => (
                <li key={index} className="font-inter text-gray-700 flex items-start gap-2">
                  <span className="text-[#f46d19] font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {fee && (
          <div className="bg-gradient-to-r from-[#5d248f]/10 to-[#f46d19]/10 p-4 rounded-xl border border-[#5d248f]/20">
            <p className="font-inter font-semibold text-[#5d248f]">
              <span className="text-[#ef3e25]">Fee:</span> {fee}
            </p>
          </div>
        )}

        <div className="bg-gradient-to-r from-[#5d248f]/10 to-[#f46d19]/10 p-4 rounded-xl border border-[#5d248f]/20">
          <p className="font-inter font-semibold text-[#5d248f]">
            <span className="text-[#ef3e25]">Final Outcome:</span> {outcome}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProcessCard;

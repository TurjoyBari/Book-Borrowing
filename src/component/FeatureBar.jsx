import { Card, CardBody } from "@heroui/react";
import { BookOpen, Truck, RotateCcw, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "READ BOOKS ONLINE",
    subtitle: "OVER MILLIONS OF BOOKS",
  },
  {
    icon: Truck,
    title: "FREE SHIPPING",
    subtitle: "ALL ACROSS THE WORLD",
  },
  {
    icon: RotateCcw,
    title: "30 DAYS RETURN",
    subtitle: "SIMPLE RETURN POLICY",
  },
  {
    icon: ShieldCheck,
    title: "SECURED PAYMENT",
    subtitle: "SECURED TRANSACTION",
  },
];

export default function FeatureBar() {
  return (
    <div className="max-w-7xl mx-auto mt-5 mb-15">
      <div className="px-6 md:px-16  ">
        <div className="bg-gray-100 rounded-2xl shadow-md py-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-4 group">
                {/* ICON BOX */}
                <div className="bg-black text-white p-4 rounded-xl group-hover:scale-110 transition">
                  <Icon size={28} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-bold text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

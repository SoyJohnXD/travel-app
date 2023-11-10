import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className=" flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container flex padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px] lg:w-[40%] overflow-hidden">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Nuestros Diferenciales</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20">
            {FEATURES.map((feature) => (
              <FeatureItem {...feature} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface FeatureItem {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

const FeatureItem = ({ title, icon, variant, description }: FeatureItem) => {
  return (
    <li className="flex w-full flewx-1 flex-col items-start">
      <div
        className={`rounded-full p-4 lg:p-7 ${
          variant === "green" ? "bg-green-50" : "bg-orange-50"
        }`}
      >
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;

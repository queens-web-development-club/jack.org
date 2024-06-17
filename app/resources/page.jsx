import AppCard from "@/components/resources/AppCard";
import Banner from "@/components/resources/Banner";
import ResourceCard from "@/components/resources/ResourceCard";
import TipsCard from "@/components/resources/TipsCard";
import {
  resourceCardData,
  appCardData,
  tipsCardData,
} from "@/data/resourcesData";
import React from "react";

export default function Resources() {
  return (
    <div className="bg-[#202835] overflow-auto">
      <h1 className="font-montserrat text-white md:text-5xl text-3xl font-bold p-8 text-center">
        Your Health is A Priority!
      </h1>
      {resourceCardData.map((resource, index) => (
        <React.Fragment key={resource.bannerImage}>
          <Banner image={resource.bannerImage} />
          <div className="w-full">
            <div className="flex flex-wrap gap-[5rem] m-[2rem] justify-center">
              {resource.resourceCards.map((card, index) => (
                <ResourceCard
                  key={index}
                  image={card.image}
                  text={card.text}
                  contact={card.contact}
                  subtitle={card.subtitle}
                  link={card.link}
                />
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}

      <Banner image={appCardData.bannerImage} />
      <div className="w-full">
        <div className="flex flex-wrap gap-[5rem] m-[2rem] justify-center">
          {appCardData.appCards.map((card, index) => (
            <AppCard
              key={card.title}
              image={card.image}
              title={card.title}
              desc={card.desc}
              link={card.link}
            />
          ))}
        </div>
      </div>

      <Banner image={tipsCardData.bannerImage} />
      <div className="w-full">
        <div className="flex flex-wrap gap-[5rem] m-[2rem] justify-center">
          {tipsCardData.tipsCards.map((card, index) => (
            <TipsCard
              key={index}
              title={card.title}
              bold={card.bold}
              notBold={card.notBold}
              animated={card.animated}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

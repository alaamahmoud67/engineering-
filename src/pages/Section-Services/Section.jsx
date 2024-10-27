import React from 'react'
import { cn } from "@/lib/utils";
import aboutImg from "../../assets/about/about.png";
import { Link } from "react-router-dom";
import Cell from "./../../components/ui/Cell";
import { ArrowRight } from "lucide-react";
import {
  MultilayerCardV_1,
  CardBody,
} from "../../components/ui/MultilayerCard";
import { Button } from "@/components/ui/button";
import { cardIcons } from "../../hooks/useHomePage/cardIcons";
import {
  cells,
  cardTitles,
  slideVariants,
} from "../../hooks/useHomePage/useHome";
export default function Section() {
  return (
    <>
      <section className="py-10 home-services bg-zinc-300">
        <div className="container max-w-6xl mx-auto md:px-10 sm:px-20">
          <div>
            <h5 className="text-2xl font-bold text-center my-8">خدماتنا</h5>
            <h2 className="text-4xl font-bold text-center my-8 ">
              خدمات البناء للقطاعات السكنية والصناعية
            </h2>
          </div>
          <div>
            {/* الشبكة التي تحتوي على 3 صفوف، وكل صف يحتوي على 3 أعمدة */}
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {cardTitles.map((title, index) => (
                <div key={index} className={`col-span-1 md:col-span-1 `}>
                  <MultilayerCardV_1>
                    <CardBody
                      title={title}
                      icon={cardIcons[index]}
                      className="px-6 my-0 py-10 relative mx-auto rounded-lg shadow dark:bg-zinc-900/90 backdrop-blur-xl text-center"
                    />
                  </MultilayerCardV_1>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>
    
    
    
    </>
  )
}

import React from "react";
import heroImg from "../assets/images/medicine.png";
import { CardHoverEffectDemo } from "../components/list";

export default function Products() {
  const products = ["Herbal Drops", "Essential Oils", "Organic Tea"];

  return (
    <section id="products" className="fade-section min-h-screen bg-[#f7f2e8] py-20 text-center">
      <h3 className="text-4xl font-bold text-[#5a3e36] mb-12">How Floradyle’s Cascade Fermentation Works</h3>
      <CardHoverEffectDemo />
      {/* <div className="flex flex-wrap justify-center gap-10">
        {products.map((item, i) => (
          <div key={i} className="b g-white shadow-md rounded-2xl p-8 w-72 hover:-translate-y-3 hover:shadow-xl transition-transform duration-300">
            <img src={heroImg} alt={item} className="w-40 mx-auto mb-6 drop-shadow-lg" />
            <h4 className="text-2xl font-semibold text-[#5a3e36]">{item}</h4>
            <p className="text-[#6b4a43] mt-2">Natural, handcrafted, and 100% organic.</p>
          </div>
        ))}
      </div> */}
    </section>
  );
}

import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "01 – Transformation of Organic Ingredients",
    description:
      "The process begins with carefully selected organic fruits, nuts, and vegetables. Natural ferment cultures, including lactic acid bacteria, are added to these raw materials. This initiates a biological transformation where complex plant molecules are broken down into smaller, active compounds such as amino acids, peptides, polyphenols, and enzymes.",
    link: "#",
  },
  {
    title: "02 – Patented Cascade Fermentation",
    description:
      "Through a series of precisely controlled fermentation stages, each using specific bacterial cultures, the ingredients are progressively refined. Every stage builds upon the previous one — enhancing purity, stability, and nutrient complexity. The result is a highly concentrated liquid essence rich in secondary plant metabolites and beneficial enzymes.",
    link: "#",
  },
  {
    title: "03 – Nutrient Activation and Absorption",
    description:
      "The fermentation process unlocks nutrients that are readily recognized and absorbed by the body: initial absorption begins through the oral mucosa; further breakdown continues in the stomach with digestive enzymes; deep absorption occurs in the intestinal mucosa where bioactive compounds enter the bloodstream and circulate throughout the body.",
    link: "#",
  },
  {
    title: "04 – Cellular and Systemic Benefits",
    description:
      "Once absorbed, these bioactive nutrients help reduce inflammation through natural anti-inflammatory compounds, stimulate metabolism and cellular energy (ATP) production, and strengthen the immune system by supporting gut integrity and modulating immune signaling. A healthy gut is directly linked to a strong immune system.",
    link: "#",
  },
  {
    title: "05 – Patented Cascade Fermentation",
    description:
      "Through a series of precisely controlled fermentation stages, each using specific bacterial cultures, the ingredients are progressively refined. Every stage builds upon the previous one — enhancing purity, stability, and nutrient complexity. The result is a highly concentrated liquid essence rich in secondary plant metabolites and beneficial enzymes.",
    link: "#",
  },
  {
    title: "06 – Cellular and Systemic Benefits",
    description:
      "Once absorbed, these bioactive nutrients help reduce inflammation through natural anti-inflammatory compounds, stimulate metabolism and cellular energy (ATP) production, and strengthen the immune system by supporting gut integrity and modulating immune signaling. A healthy gut is directly linked to a strong immune system.",
    link: "#",
  },
];

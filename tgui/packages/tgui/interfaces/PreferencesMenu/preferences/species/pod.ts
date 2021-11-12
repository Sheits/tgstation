import { createLanguagePerk, Species } from "./base";

const Pod: Species = {
  description: "Originally discovered as a mutated form of Brassica oleracea, \
    or cabbage, Podpeople have evolved over the years to almost match human \
    level motor skills, the same cant be said for intelligence, though.",
  features: {
    good: [{
      icon: "sun",
      name: "Photosynthesis",
      description: "Podpeople will passively regenerate in the light.",
    }, createLanguagePerk("Sylvan")],
    neutral: [],
    bad: [{
      icon: "fire",
      name: "Flammable",
      description: "Podpeople will burn faster and have a lower resistance to \
      high tempearatures.",
    }],
  },
  lore: [
    "LORE HERE",
  ],
};

export default Pod;

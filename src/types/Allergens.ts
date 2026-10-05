const celeryImg = new URL("../assets/allergens/celery.png", import.meta.url).href;
const eggImg = new URL("../assets/allergens/egg.png", import.meta.url).href;
const fishImg = new URL("../assets/allergens/fish.png", import.meta.url).href;
const lupinImg = new URL("../assets/allergens/lupin.png", import.meta.url).href;
const milkImg = new URL("../assets/allergens/milk.png", import.meta.url).href;
const mustardImg = new URL("../assets/allergens/mustard.png", import.meta.url).href;
const peanutsImg = new URL("../assets/allergens/peanut.png", import.meta.url).href;
const treeNutsImg = new URL("../assets/allergens/treenuts.png", import.meta.url).href;
const sesameImg = new URL("../assets/allergens/sesame.png", import.meta.url).href;
const crustaceansImg = new URL("../assets/allergens/crustaceans.png", import.meta.url).href;
const molluscsImg = new URL("../assets/allergens/molluscs.png", import.meta.url).href;
const soyaImg = new URL("../assets/allergens/soybean.png", import.meta.url).href;
const sulphitesImg = new URL("../assets/allergens/so2.png", import.meta.url).href;
const glutenImg = new URL("../assets/allergens/gluten.png", import.meta.url).href;

export type Allergen =
  | "celery"
  | "egg"
  | "fish"
  | "lupin"
  | "milk"
  | "mustard"
  | "peanuts"
  | "tree nuts"
  | "sesame"
  | "crustaceans"
  | "molluscs"
  | "soya"
  | "sulphites"
  | "gluten";

export const ALLERGEN_IMAGES: Record<Allergen, string> = {
  celery: celeryImg,
  egg: eggImg,
  fish: fishImg,
  lupin: lupinImg,
  milk: milkImg,
  mustard: mustardImg,
  peanuts: peanutsImg,
  "tree nuts": treeNutsImg,
  sesame: sesameImg,
  crustaceans: crustaceansImg,
  molluscs: molluscsImg,
  soya: soyaImg,
  sulphites: sulphitesImg,
  "gluten": glutenImg,
};
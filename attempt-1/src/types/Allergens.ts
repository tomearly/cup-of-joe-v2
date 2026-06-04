import celeryImg from "@/assets/allergens/celery.png";
import eggImg from "@/assets/allergens/egg.png";
import fishImg from "@/assets/allergens/fish.png";
import lupinImg from "@/assets/allergens/lupin.png";
import milkImg from "@/assets/allergens/milk.png";
import mustardImg from "@/assets/allergens/mustard.png";
import peanutsImg from "@/assets/allergens/peanut.png";
import treeNutsImg from "@/assets/allergens/treenuts.png";
import sesameImg from "@/assets/allergens/sesame.png";
import crustaceansImg from "@/assets/allergens/crustaceans.png";
import molluscsImg from "@/assets/allergens/molluscs.png";
import soyaImg from "@/assets/allergens/soybean.png";
import sulphitesImg from "@/assets/allergens/so2.png";
import glutenImg from "@/assets/allergens/gluten.png";

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
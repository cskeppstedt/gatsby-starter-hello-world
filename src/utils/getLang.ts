import { defaultLanguage, otherLanguage } from "../config/languages";

const getLang = (location: Location) => {
  const [firstPart] = location.pathname.split("/");
  if (firstPart === otherLanguage) {
    return firstPart;
  } else {
    return defaultLanguage;
  }
};

export default getLang;

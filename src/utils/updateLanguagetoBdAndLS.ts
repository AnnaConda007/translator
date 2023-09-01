import { dataBaseURL } from "../contains";

export const updateLanguagetoBdAndLS = async (lang: string) => {
  const url = `${dataBaseURL}/language/.json`;
  try {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lang),
    });
    localStorage.setItem("selectedLanguage", lang);
  } catch (error) {
    console.error("Ошибка при обновлении словаря", error);
  }
};

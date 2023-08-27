interface IFetchNewsJson {
  status: string;
  totalResults: number;
  articles: IArticle[];
}

interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: null;
    name: string;
  };
}
export const fetchRandomNewsArticleContent = async (): Promise<string | null> => {
  try {
    const fetchNews: Response = await fetch(
      `https://books-31eba-default-rtdb.firebaseio.com/books/.json`
    );
    const fetchNewsJson =  await fetchNews.json();
    const bookContent = fetchNewsJson['-Ncrt03oJNxdmaDQ83c_']; // Обращаемся к значению по ключу
     return bookContent;
  } catch (error) {
    return null;
  }
};


/*    
    if (fetchNews.ok!==true) {
      throw new Error("Статус ответа при запросе текста не равен `ок` ");
    }
    console.log(fetchNews)
    const fetchNewsJson: IFetchNewsJson = await fetchNews.json();
    const articles: IArticle[] = fetchNewsJson.articles;
    if (fetchNewsJson.articles.length < 0) return null;
    const randomArticle: IArticle =
      articles[Math.floor(Math.random() * articles.length)];
    const content: string = randomArticle.content;
    return content; */

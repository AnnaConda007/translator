import { fetchRandomNewsArticleContent } from "../../utils/TextNewsApi.utils";
import { useEffect, useState } from "react";

const NewsText: React.FC = () => {
  const [articleContent, setArticleContent] = useState("");  
  useEffect(() => {
    const fetchArticleContent = async (): Promise<void> => {
       const content: string | null = await fetchRandomNewsArticleContent();
      if (content === null) {
        return;
      } 
      const currentText = content.substring(0, 1020) 
      setArticleContent(currentText);
    };

    fetchArticleContent();
  }, []);
  return (
    <div>
      {articleContent.split('\n').map((paragraph, idx1) => (
        <span key={idx1}>
          {paragraph.split(/\s+/).map((word, idx2) => (
            <span
              key={idx2}
              onClick={() => console.log(word)}
              style={{ cursor: "pointer", marginRight: "5px" }}
            >
              {word}
              &nbsp;
            </span>
          ))}
          <br />
        </span>
      ))}
    </div>
  );
  
};

export default NewsText;

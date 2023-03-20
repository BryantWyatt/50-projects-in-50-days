import { Section } from "../interfaces/IRotatingNavigation";
import "../styles/Article.css";

interface IArticleProps {
  title: string;
  author: string;
  sections: Section[];
}

const Article = ({ title, author, sections }: IArticleProps) => {
  return (
    <div className="content">
      <h1>{title}</h1>
      <small>{author}</small>
      {sections.map((section) => {
        return (
          <div>
            <p>{section.text}</p>
            {section?.image ? (
              <img src={section.image} alt={section?.alt}></img>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Article;

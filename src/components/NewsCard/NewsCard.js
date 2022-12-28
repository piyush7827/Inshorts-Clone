import React from "react";
import "./newsCard.css";

function NewsCard({ newsItem }) {
  const fullDate = new Date(newsItem.publishedAt);
  var date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;
  return (
    <div className="newsCard">
      <img
        className="newsImage"
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "https://picsum.photos/seed/picsum/320/260"
        }
        alt={newsItem.title}
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem.title}</span>
          <br />
          <span className="author">
            <a href={newsItem.url} target="_blank">
              <b>short</b>
            </a>{" "}
            {""}
            <span className="muted">
              {""}
              by {newsItem.author ? newsItem.author : "unknown"} /{" "}
              {time
                ? `${hour - 12}: ${date[4].substring(3, 5)}pm`
                : `${hour}: ${date[4].substring(3, 5)}am`}{" "}
              on {date[2]} {date[1]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="loewrNewsText">
          <div className="description">{newsItem.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={newsItem.url} target="_blank" className="source">
              <b>{newsItem.source.name} </b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

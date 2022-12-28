import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./navContents.css";
function NavContents({ newsResults, newsArray,loadMore,setLoadMore }) {
  return (

    <Container maxWidth="md">
      <div className="contents">
        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.name}  />
        ))}
        {loadMore <= newsResults && (
          <>
            <hr />
            <button className="loadMore" onClick={()=>setLoadMore(loadMore+20)}>
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
}

export default NavContents;

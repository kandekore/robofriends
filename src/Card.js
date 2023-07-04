import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <a href={`https://robohash.org/${id}daz`}>
      {" "}
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="test" src={`https://robohash.org/${id}daz?200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;

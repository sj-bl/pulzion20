import Link from "next/link";
import React from "react";
import PopUp from "./PopUp";

const Card = (props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <>
      <PopUp
        open={isModalOpen}
        toggle={setIsModalOpen}
        moreInfo={props.moreInfo}
      />
      <div className="card">
        <img
          src={props.img || "https://via.placeholder.com/400"}
          alt="event img"
          className="card-img"
        />
        <div className="card-text">
          <p>
            {props.content ||
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus nulla autem ratione commodi exercitationem esse dignissimos nihil eos.Cumque consequuntur doloremque velit totam"}
          </p>

          <button className="link" onClick={() => setIsModalOpen(true)}>
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;

import Image from 'next/image';
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";

function EventCard({ title, image, desc }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <div className="relative mx-4 md:w-1/4 w-full my-16 h-[25rem] cursor-pointer group overflow-hidden">
      <div className="w-full h-full absolute brightness-75 rounded-md overflow-hidden">
        <Image src={image} layout="fill" alt="Poster" objectFit="cover" />
      </div>
      <div className="w-full h-full absolute px-8 py-4 text-justify md:text-2xl text-xl text-white bottom-0 bg-black opacity-75 translate-y-80 transition-transform duration-700 ease-out group-hover:-translate-y-0">
        <div className="flex justify-center font-semibold">{title}</div>
        <div className="mx-auto text-center my-12 px-6 py-2 text-xl">
          {desc}
        </div>
        <div className="mx-auto border w-max text-center my-12 px-6 py-2 rounded-lg" onClick={handleOpen}>
                View More
            </div>
      </div>
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="mx-auto bg-white md:w-1/3 w-11/12 relative md:top-1/4 top-24 p-6">
          <div className="relative cursor-pointer" onClick={handleClose}>
            <CancelIcon className="absolute -top-3 -right-3" />
          </div>

            <div className="">
              <img
                className="w-full object-fill rounded-xl h-84 align-middle"
                src={image}
                alt="team"
              />
            </div>
            
        </div>
      </Modal>
    </>
  );
}

const Cse = () => {
  return (
    <>
      <div className="relative top-12">
        <h1 className="sm:text-5xl text-4xl  uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
          CSE Posters
        </h1>
        <div className="flex flex-wrap justify-center ">

        <EventCard title="ABC Poster" image="/ongoing1.jpeg" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."/>
        <EventCard title="ABC Poster" image="/ongoing1.jpeg" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."/>
        <EventCard title="ABC Poster" image="/ongoing1.jpeg" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."/>
        <EventCard title="ABC Poster" image="/ongoing1.jpeg" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."/>
        <EventCard title="ABC Poster" image="/ongoing1.jpeg" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."/>
        <EventCard title="ABC Poster" image="/ongoing1.jpeg" desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."/>

        </div>
      </div>
    </>
  );
};

export default Cse;

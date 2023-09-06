import React from "react";
import Image from "next/image";

function EventCard({ title, image, desc }) {
  return (
    <div className="relative mx-4 md:w-1/4 w-full my-16 h-[25rem] cursor-pointer group overflow-hidden">
      <div className="w-full h-full absolute brightness-75 rounded-md overflow-hidden">
        <Image src={image} layout="fill" alt="Poster" objectFit="cover" />
      </div>
      <div className="w-full h-full absolute px-8 py-4 text-justify md:text-2xl text-xl text-white bottom-0 bg-black opacity-75 translate-y-80 transition-transform duration-700 ease-out group-hover:-translate-y-0">
        <div className="flex justify-center font-semibold">{title}</div>
        <div className="mx-auto text-center my-12 px-6 py-2 text-xl">
          {desc}
        </div>
      </div>
    </div>
  );
}

const Instrumentation = () => {
  return (
    <>
      <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center font-lato relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-24 mb-8">
        CENTRAL INSTRUMENTATION FACILITY (C.I.F.)
      </div>

      <div className="p-8 text-lg">
        <b>Central Instrumentation Facility (C.I.F.)</b>, at BIT Mesra, has been
        created with an objective of providing a central facility of latest and
        advanced analytical techniques for research in various areas of science
        and technology. It houses several highly sophisticated and modern
        analytical equipment’s offering its users, a wide range of analytical
        methods / techniques for chemical / material analysis / testing /
        characterization enabling them to keep pace with developments taking
        place globally, publish their research findings in peer reviewed high
        impact factor journals and through their concerted efforts contribute to
        the uplift of the society at large. This facility is extensively used by
        undergraduate, postgraduate, doctoral students and faculty members. The
        facility is also extended to external organizations mainly academic
        institutions in the country, on chargeable basis. The facilities are
        availed by approximately 1500 internal users and 500 external users
        annually. This facility is also used for organizing short term courses/
        workshops on the use and application of various instruments and
        analytical techniques.
      </div>

      <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center font-lato relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-24 mb-8">
        Objectives of the CIF :
      </div>

      <div className="p-8 text-lg">
        <p className="mb-2">
          1. To carry out analysis of samples received from faculty members of
          the institute, other academic institutions, and industries.
        </p>
        <p className="mb-2">
          2. To provide facilities of modern analytical instruments to students
          and researchers enabling them to keep pace with developments taking
          place globally, publish their research findings in peer reviewed high
          impact factor journals and through their concerted efforts, contribute
          to the uplift of the society at large.
        </p>
        <p className="mb-2">
          3. To acquire and develop capability for preventive maintenance and
          repair of the high end instruments.
        </p>
        <p className="mb-2">
          4. To organize short term courses/workshops on the use and application
          of various instruments and analytical techniques.
        </p>
        <p className="mb-2">
          5. To trained technicians for maintenance and operation of
          sophisticated instruments.
        </p>
      </div>

      <div className="relative top-12">
        {/* <h1 className="sm:text-5xl text-4xl  uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
          Central Instrumentation Facility
        </h1> */}
        <div className="flex flex-wrap justify-center ">
          <EventCard
            title="ABC Poster"
            image="/ongoing1.jpeg"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."
          />
          <EventCard
            title="ABC Poster"
            image="/ongoing1.jpeg"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."
          />
          <EventCard
            title="ABC Poster"
            image="/ongoing1.jpeg"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."
          />
          <EventCard
            title="ABC Poster"
            image="/ongoing1.jpeg"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."
          />
          <EventCard
            title="ABC Poster"
            image="/ongoing1.jpeg"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."
          />
          <EventCard
            title="ABC Poster"
            image="/ongoing1.jpeg"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque vel modi quis id, beatae voluptate animi ab officia cum similique."
          />
        </div>
      </div>

      <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-24 mb-8">
        INSTRUMENTS AT CIF:
      </div>

      <div className="flex justify-center">
        <button className="bg-[#002147] hover:bg-blue-900 mb-5 text-white mt-2 py-2 px-3 rounded-full">
          <a
            target={"_blank"}
            href="https://www.bitmesra.ac.in/Show_Other_Department?cid=1&deptid=190"
          >
            CIF Home Page
          </a>
        </button>
      </div>
    </>
  );
};

export default Instrumentation;

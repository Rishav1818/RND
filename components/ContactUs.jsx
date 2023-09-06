import React from "react";

export function DreCard({ title, image, desc }) {
  return (
    <div className="p-4 md:w-11/12 md:flex bg-gray-300 m-16 mx-auto rounded-2xl">
      <div className="basis-1/4 flex items-center justify-center">
        <img
          className="rounded-xl h-64 w-58.45 "
          src={image}
          alt="team"
        />
      </div>
      <div className="basis-3/4">
        <div className="p-2 text-center font-bold text-4xl">
          Message from DRIE
        </div>
        <div className="p-8 text-xl text-justify">
          The Research and Development Cell (RDC), formerly known as the office
          of the Dean (Research, Innovation, and Entrepreneurship), is tasked
          with implementing the institute's research, innovation, and
          entrepreneurship programs aimed at advancing human knowledge and
          promoting societal development. The RDC provides administrative
          support to faculty members in proposing and executing their research
          and consultancy projects, while also improving the institute's
          research culture through training programs and seed grant schemes. The
          RDC promotes innovation and entrepreneurship among students and
          faculty and conducts SWOT analyses to provide necessary interventions
          to research projects. It coordinates research management at the
          institute level, encourages faculty and departments to secure research
          grants from different funding organizations, and fosters national and
          international collaboration. The Dean's portfolio includes managing
          institute-funded and industry/agency-funded research, research
          infrastructure, project management, faculty development funds, project
          staff scholarships and management, project-related travel,
          entrepreneurship, innovation and incubation, patent filing and
          management (IPR Cell), entrepreneurship cell, collaboration and
          MoA/MoU with industry for faculty members, industrial collaboration
          and consultancy, technology transfer and impact assessment, and ARIIA.
        </div>
      </div>
    </div>
  );
}

const ContactUs = () => {
  return (
    <div className="pt-1">
      <DreCard image={"/dre.jpg"} />
      <div className="p-8 text-xl">
        <p className="p-2">Dean, Research, Innovation Entrepreneurship (RIE)</p>
        <p className="p-2">Contact : Extn. 4835</p>
        <p className="p-2">Email: drie@bitmesra.ac.in</p>
      </div>
    </div>
  );
};

export default ContactUs;

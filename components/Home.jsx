import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { FreeMode, Pagination, Autoplay,Navigation } from "swiper";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";
import "swiper/css/effect-creative";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";
import { EffectCreative, EffectFlip, EffectFade } from "swiper";
import { client, builder } from "../client";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function Heading() {
  return (
    <>
      <div className="text-2xl md:text-4xl lg:text-6xl text-gray-700 uppercase text-left font-lato relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-8 w-max after:rounded-full animate__animated animate__fadeInDown mt-24 mb-8 pl-8">
        Research and Development
      </div>

      <div className="p-8 text-lg">
        The office of the Dean (Research, Innovation and Entrepreneurship) is
        now called Research and Development Cell (RDC) as per the requirement of
        UGC. RDC is responsible for the implementation of the institute's
        overall research, innovation and entrepreneurship programmes which are
        focused towards advancement of human knowledge and development of
        society.
      </div>
    </>
  );
}

export function ProjectCard({ title, image, desc }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="p-4 md:w-1/2 lg:w-1/4 hover:scale-105 transition-all duration-200 cursor-pointer" onClick={handleOpen}>
        <div className="h-full bg-white shadow-lg text-center overflow-hidden">
          <div className="flex justify-center overflow-hidden relative mx-auto ">
            <img className="h-64 w-11/12 pt-4" src={image} alt="team" />
          </div>
          <div className="p-6">
            {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {category}
            </h2> */}
            <h1 className="title-font text-lg font-bold text-black mb-3 text-justify">
              {title}
            </h1>
            <p className="text-justify">{desc}</p>
          </div>
        </div>
        {/* <div className="flex justify-center">
        <button className="bg-[#002147] hover:bg-blue-900 relative bottom-16 text-white mt-2 py-2 px-3 rounded-full">
          More Info
        </button>
      </div> */}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="mx-auto bg-white md:w-1/2 w-11/12 relative md:top-1/4 top-24 p-6">
          <div className="relative cursor-pointer" onClick={handleClose}>
            <CancelIcon className="absolute -top-3 -right-3" />
          </div>

          <div className="md:flex">
            <div className="basis-4/12">
              <img
                className="w-full object-fill rounded-xl h-72 align-middle"
                src={image}
                alt="team"
              />
            </div>
            <div className="basis-8/12 p-4">
              <div className="font-semibold text-xl">{title}</div>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {desc}
              </Typography>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export function UpcomingCard({ title, image, desc }) {
  return (
    <div className="p-2 md:w-1/5 w-3/4">
      <div className="h-full border-2 border-gray-200 text-center border-opacity-60 overflow-hidden">
        <div className="flex justify-center overflow-hidden relative mx-auto ">
          <img
            className="w-full object-cover object-center"
            src={image}
            alt="team"
          />
        </div>
        <div className="p-6">
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {category}
            </h2> */}
          <h1 className="title-font text-lg font-semibold text-black mb-3 text-justify">
            {title}
          </h1>
          <p className="text-justify">{desc}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-[#002147] hover:bg-blue-900 relative bottom-16 text-white mt-2 py-2 px-3 rounded-full">
          More Info
        </button>
      </div>
    </div>
  );
}

function AboutCard({ id, image, text }) {
  return (
    <div className="md:h-[36rem] h-full text-center overflow-hidden mt-8">
      <div className="flex justify-center overflow-hidden relative mx-auto ">
        <img
          className="md:w-full md:h-[36rem] h-full object-fill object-center bg-black"
          src={image}
          alt="blog"
        />
        <div class="absolute md:text-4xl text-sm font-medium text-white top-1/4 left-1/2 animate__animated animate__fadeInRight">WELCOME TO</div>
        {/* <div class="absolute text-6xl text-white top-24 left-48 animate__animated animate__fadeInLeft">RAVISH RAJ</div> */}
        <div class="absolute md:text-6xl text-sm font-semibold text-white top-1/2 left-1/3 animate__animated animate__fadeInRight">RESEARCH AND DEVELOPMENT CELL</div>
        <div class="absolute md:text-5xl text-sm font-medium text-white top-3/4 left-1/2 animate__animated animate__fadeInRight">AT BIT MESRA</div>
        {/* <div class="absolute text-6xl text-white top-1/2 left-48 animate__animated animate__fadeInLeft">RAVISH RAJ</div> */}
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="mx-6">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={false}
        loop={false}
        pagination={false}
        breakpoints={{
          // when window width is <= 499px
          299: {
            slidesPerView: 1,
          },
          // when window width is <= 999px
          999: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3,
          },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {Array(30)
          .fill()
          .map((_, i) => (
            <SwiperSlide>
              <AboutCard id={i} image={`/gallery/gallery${i + 1}.png`} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

const Home = ({}) => {
  const [projects, setProjects] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [imageRef, setImageRef] = useState(null);

  const getProjects = async () => {
    const res = await client.fetch('*[_type == "ongoingProject"]');
    console.log(res);
    //convert image to url
    res.map((project) => {
      const url = builder.image(project.image).url();
      console.log(url);
      project.image = url;
    });

    setProjects(res);
  };

  useEffect(() => {
    getProjects();
  }, []);
  console.log(projects);
  return (
    <>
      {/* Image Slider */}
      {/* <div className="flex justify-center mt-32">
        <img
          className="md:w-1/2 object-cover object-center rounded-xl"
          src="/calender.jpg"
          alt="team"
        />
      </div> */}

      <Heading />

      <Swiper
      // grabCursor={true}
      effect={"fade"}
      // creativeEffect={{
      //   prev: {
      //     shadow: true,
      //     translate: ["-120%", 0, -500],
      //   },
      //   next: {
      //     shadow: true,
      //     translate: ["120%", 0, -500],
      //   },
      // }}
      navigation={true}
        slidesPerView={1}
        spaceBetween={30}
        freeMode={false}
        loop={false}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <AboutCard id="1" image="/home/bg1.jpeg" text="Hello1"/>
        </SwiperSlide>
        <SwiperSlide>
          <AboutCard id="2" image="/home/bg1.jpeg" text="Hello2"/>
        </SwiperSlide>
        <SwiperSlide>
          <AboutCard id="3" image="/home/bg1.jpeg" text="Hello3"/>
        </SwiperSlide>
        <SwiperSlide>
          <AboutCard id="4" image="/home/bg1.jpeg" text="Hello4"/>
        </SwiperSlide>
      </Swiper>

      {/* <div className="p-4 w-full h-24 bg-gray-300 m-16 mx-auto text-center ">
        Dropdown Menu For each section
      </div> */}

      <div className="md:flex">
        <div className="basis-9/12">
          {/* Dre Card */}

          {/* Ongoing Projects Card */}
          <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center font-lato relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-16 mb-8">
            Ongoing Projects
          </div>

          <div className="flex flex-wrap">
            {/* <ProjectCard
              image="/ongoing1.jpeg"
              title="Study the Effect of Stretching on the Physico-Mechanical Properties of Acrylates"
              desc="The study examines the impact of stretching on the mechanical properties of acrylates, a common polymer used in coatings, adhesives, and textiles. The results may inform the development of new materials."
            />

            <ProjectCard
              image="/ongoing2.jpeg"
              title="Development of multi-functional nano-HAP bone substitute for effective bone regeneration in critical defects"
              desc="This study develops a multi-functional bone substitute for effective regeneration of critical bone defects using nano-HAP technology. The material's osteogenic and angiogenic capabilities will be evaluated in vitro and in vivo for implications in regenerative medicine."
            /> */}

            {projects.map((project) => (
              <ProjectCard
                image={project.image}
                title={project.title}
                desc={project.description}
              />
            ))}

            {/* <ProjectCard
              image="/ongoing3.jpeg"
              title="Effect of Blasting on Opencast Mine Dump and development of relationship between Blast Induced Vibration and Dump Design."
              desc="This study examines the impact of blasting on opencast mine dump and develops a relationship between blast-induced vibration and dump design. The results may lead to safer and more efficient practices for opencast mining operations."
            />

            <ProjectCard
              image="/ongoing4.jpeg"
              title="DST Consoria project (Joint Project Proposal of VIT, Vellore, CLRI (CSIR) Chennai, and BIT, Mesra )"
              desc="The DST Consoria project is a collaboration between VIT, CLRI (CSIR) Chennai, and BIT, Mesra. The project aims to develop biocompatible scaffolds for tissue engineering and regenerative medicine applications, with a focus on optimizing their physical and mechanical properties for clinical use."
            /> */}
            <ProjectCard
              image="/ongoing5.jpeg"
              title="Development of Machine Learning Algorithm for the early diagnosis of Delinquent Behaviour in Juveniles"
              desc="This study develops a machine learning algorithm to predict delinquent behavior in juveniles using data from various sources. The goal is to create an effective tool for early intervention and prevention of juvenile delinquency, leading to reduced crime rates and improved social outcomes."
            />

            <ProjectCard
              image="/ongoing6.jpeg"
              title="Power System - Microgrid Analysis"
              desc="Micro Analysis at BIT Mesra is a research facility specializing in the analysis of materials and surfaces at the micro and nano scale. Equipped with state-of-the-art instruments, it provides analytical services to researchers from various disciplines, leading to the development of new materials and technologies."
            />

            <ProjectCard
              image="/ongoing7.jpeg"
              title="Design of Low Power CMOS Temperature Sensor for Aerospace Applications"
              desc="This research project aims to develop a low-power temperature sensor using CMOS technology for aerospace applications. The design will be optimized for accuracy and reliability over a wide range of temperatures and tested under simulated aerospace environments for improved efficiency and reliability."
            />

            <ProjectCard
              image="/ongoing8.jpeg"
              title="Modelling Forest Phenological Parameters from Time Series Remote Sensing Data"
              desc="This research project models seasonal changes in forests using remote sensing data. The researchers analyze satellite images to determine phenological parameters and use statistical models to forecast future changes. The goal is to provide insights into the effects of environmental factors on forest ecosystems and inform management efforts."
            />
          </div>
        </div>

        <div className="basis-3/12 mt-16 bg-[#F3F1EE] h-3/4">
          <div className="p-4">
            <div className="p-2 text-center font-bold text-xl">LATEST NEWS</div>
            <Divider variant="middle" />
            <div className="flex m-4">
              <div className="flex-col">
                <div>
                  <a href="https://dst.gov.in/sites/default/files/DST-CII%20Tech%20Summit%20Flyer.pdf">
                    India-Singapore Technology Summit 2022
                  </a>
                </div>
                <div className="font-light">23 FEB 2023</div>
              </div>
              <div>
                <img
                  className="object-fill object-center h-16"
                  src="latestnews/news1.jpeg"
                  alt="blog"
                />
              </div>
            </div>
            <Divider variant="middle" />
            <div className="flex m-4">
              <div className="flex-col">
                <a href="https://registration.geospatialworld.net/2023/dst/">
                  Geospatial Policy for National Development
                </a>
                <div className="font-light">23 FEB 2023</div>
              </div>
              <div>
                <img
                  className="object-fill object-center h-16"
                  src="latestnews/news2.jpeg"
                  alt="blog"
                />
              </div>
            </div>
            <Divider variant="middle" />
            <div className="flex m-4">
              <div className="flex-col">
                <a href="https://www.indiascienceandtechnology.gov.in/nurturing-minds/scholarships/post-doctoral-women/wise-post-doctoral-fellowship-wise-pdf">
                  WISE Post-Doctoral Fellowship (WISE-PDF)
                </a>
                <div className="font-light">23 FEB 2023</div>
              </div>
              <div>
                <img
                  className="object-fill object-center h-16"
                  src="latestnews/news3.jpeg"
                  alt="blog"
                />
              </div>
            </div>
            <Divider variant="middle" />
            <div className="flex m-4">
              <div className="flex-col">
                <a href="https://www.aicte-india.org/opportunities/students/research-funds">
                  Some Reseach funds released on AICTE India Website
                </a>
                <div className="font-light">23 FEB 2023</div>
              </div>
              <div>
                <img
                  className="object-fill object-center h-16"
                  src="latestnews/news4.jpeg"
                  alt="blog"
                />
              </div>
            </div>
            <Divider variant="middle" />
            <div className="flex m-4">
              <div className="flex-col">
                <a href="http://www.isteonline.in/ViewpagePAnel.aspx?MenuId=ISTE_National_Level_Srinivasa_Ramanujan_Mathematical_Competitions_202223_103">
                  National Level ISTE-Srinivasa Ramanujan Mathematical
                  Competitions – 2022-2023
                </a>
                <div className="font-light">23 FEB 2023</div>
              </div>
              <div>
                <img
                  className="object-fill object-center h-16"
                  src="latestnews/news5.jpeg"
                  alt="blog"
                />
              </div>
            </div>
            <Divider variant="middle" />
            <div className="flex m-4">
              <div className="flex-col">
                <a href="https://www.csir.res.in/newscallforproposalsannounce/dst-call-proposals-hydrogen-valley-platform-india-last-date-31032023">
                  DST - Call for proposals on Hydrogen Valley Platform in India
                </a>
                <div className="font-light">23 FEB 2023</div>
              </div>
              <div>
                <img
                  className="object-fill object-center h-16"
                  src="latestnews/news6.jpeg"
                  alt="blog"
                />
              </div>
            </div>
            <Divider variant="middle" />
            <div className="flex m-4">
              <div className="flex-col">
                <a href="https://www.csir.res.in/sites/default/files/PRESS%20RELEASE-%20CSIR-CNRS%20meeting%20and%20inauguration%20of%20workshop%20210223.pdf">
                  Meeting between CSIR, India and CNRS, France and Inauguration
                  of Indo-French Workshop on Clean and Sustainable Energy
                  Technologies
                </a>
                <div className="font-light">23 FEB 2023</div>
              </div>
              <div>
                <img
                  className="object-fill object-center h-16"
                  src="latestnews/news7.jpeg"
                  alt="blog"
                />
              </div>
            </div>
          </div>

          <div className="w-full h-8 bg-white"></div>

          <div className="p-2 text-center font-bold text-xl underline mt-4">
            IMPORTANT LINKS
          </div>
          <ul className="list-none p-8 list-none">
            <li>
              <a href="/funding"> List of Funding Agencies</a>
            </li>
            <li className="py-4">
              <Divider />
            </li>
            <li>
              <a href="/projects"> List of Approved R & D Project</a>
            </li>
            <li className="py-4">
              <Divider />
            </li>
            <li>
              <a href="/ipr"> IPR</a>
            </li>
            <li className="py-4">
              <Divider />
            </li>
            <li>
              <a href="/instrumentation"> Central Instrumentation Facility</a>
            </li>
            <li className="py-4">
              <Divider />
            </li>
            <li>
              <a href="/innovation"> Innovation & Entrepreneurship Related</a>
            </li>
            <li className="py-4">
              <Divider />
            </li>
            <li>
              <a href="/policy"> Seed Money Policy</a>
            </li>
            <li className="py-4">
              <Divider />
            </li>
            <li>
              <a href="/forms"> Forms & applications</a>
            </li>
            <li className="py-4">
              <Divider />
            </li>
            <li>
              <a href="/activity"> Programme & Activity</a>
            </li>
            <li className="py-4">
              <Divider />
            </li>
            <li>
              <a href="/mou"> MOUs</a>
            </li>
            <li className="py-4">
              <Divider />
            </li>
            <li>
              <a href="/talk"> Head Talk</a>
            </li>
            <li className="py-4">
              <Divider />
            </li>
            <li>
              <a href="/scholars">
                {" "}
                Useful Link for Research Scholars and faculty
              </a>
            </li>
          </ul>
          <Divider variant="middle" />
          <div className="w-full h- bg-white"></div>
        </div>
      </div>

      {/* <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-16 mb-8">
        Gallery
      </div>

      <div className="">
        <Gallery />
      </div> */}

      {/* <div className="p-4 w-full h-24 bg-gray-300 m-16 mx-auto text-center ">
        List Of Funding Agencies
      </div> */}

      {/* <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-16 mb-8">
        List Of Funding Agencies
      </div> */}

      {/* <div className="flex justify-evenly mt-16">
        <div>AICTE</div>
        <div>CSIR</div>
        <div>DAE-BRNS</div>
        <div>DAE-NBHM</div>
        <div>DBT</div>
        <div>DOE</div>
        <div>DRDO</div>
      </div> */}

      {/* <div className="m-4 md:m-16 bg-gray-300 h-32 flex items-center rounded-2xl">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          // freeMode={true}
          // loop={true}
          pagination={false}
          breakpoints={{
            // when window width is <= 499px
            299: {
              slidesPerView: 2,
            },
            // when window width is <= 999px
            999: {
              slidesPerView: 3,
            },
            1300: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <img className="h-16" src="funding/logo1.png"></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img className="h-16" src="funding/logo2.png"></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img className="h-16" src="funding/logo3.png"></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img className="h-16" src="funding/logo4.png"></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img className="h-16" src="funding/logo5.png"></img>
          </SwiperSlide>
          <SwiperSlide className="">
            <img className="h-16" src="funding/logo6.png"></img>
          </SwiperSlide>
        </Swiper>
      </div> */}

      {/* collage */}
      <div className="flex flex-wrap">
        <ProjectCard
          image="/ongoing9.jpeg"
          title="Source Apportionment hydrodynamic study and environment fate assessment of Microplastics in drinking water supplying reservoirs of Ranchi, JH"
          desc="The study involves sampling, identifying sources of microplastics, hydrodynamic modeling, fate and risk assessment to determine the potential impact on water quality and human health in the drinking water supply reservoirs of Ranchi, JH."
        />

        <ProjectCard
          image="/ongoing10.jpeg"
          title="Development of Hybrid Rocket Propulsion Systems"
          desc="The development of hybrid rocket propulsion systems involves designing, testing, and integrating a rocket engine that combines solid and liquid propellants to offer advantages over traditional engines, such as increased safety, lower costs, and greater design flexibility."
        />

        <ProjectCard
          image="/ongoing11.jpeg"
          title="Development of Bismuth Based materials for Piezoelectric Microsystem in Robotic Application"
          desc="Developing bismuth-based materials for piezoelectric microsystems in robotics involves synthesizing materials to convert electrical energy into mechanical energy with precision and efficiency. Bismuth is ideal due to low toxicity, high piezoelectric coefficients, and high electromechanical coupling factors."
        />

        <ProjectCard
          image="/ongoing12.jpeg"
          title="Application of automated molecular docking and 3D QSAR studies of different classes of NNRTIs for development of a robust pharmacophoric model for design of newer azoles."
          desc="Automated molecular docking and 3D QSAR studies of NNRTIs are used to develop a pharmacophoric model for designing newer azoles. Computational methods are used to create a robust model for drug development."
        />
        <ProjectCard
          image="/ongoing13.jpeg"
          title="Green's Function, Existence and Asymptotic Behavior of Periodic Solutions of Functional Differential Equations, Investigator"
          desc="Green's Function is a mathematical tool used to solve linear differential equations with non-homogeneous boundary conditions. The existence and asymptotic behavior of periodic solutions of functional differential equations are studied using Green's Function. Researchers investigate mathematical properties of differential equations to develop models and theories for scientific applications."
        />

        <ProjectCard
          image="/ongoing14.jpeg"
          title="SMG-BIT Agriculture Research Project"
          desc="PI - Dr. C. Jeganathan, Dr. A. P. Krishna, Dr. Vandana Bhattacharjee, Dr. Abhijit Mustafi, Dr. Sudhanshu Mishra And Funding agency- SKY MAP Global Pvt. Ltd."
        />

        <ProjectCard
          image="/ongoing15.jpeg"
          title="Control System- System Identification and Classification"
          desc="System identification involves developing mathematical models to describe the behavior of complex systems by analyzing their inputs and outputs. Classification involves using these models to classify and predict the behavior of future inputs, allowing for effective control and optimization of the system."
        />

        <ProjectCard
          image="/ongoing16.jpeg"
          title="Liquid-liquid flow through horizontal non-uniform cross-section tubes coupled with return bend."
          desc="The study of liquid-liquid flow through horizontal non-uniform cross-section tubes coupled with return bend involves analyzing how the fluid flows through a tube with varying diameter and shape, as well as through a bend that changes the direction of flow. This analysis can provide insights into the behavior of complex fluid systems."
        />
      </div>

      {/* Upcoming Cards */}
      <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center font-lato relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-16 mb-8">
        Upcoming Talks and Programs
      </div>
      <div className="flex flex-wrap justify-evenly">
        <UpcomingCard
          image="/upcoming1.jpeg"
          title="Head Talk by Head, SER on 3rd Aug 2022"
          desc="Overview of the department and Research Collaboration Opportunities"
        />

        <UpcomingCard
          image="/upcoming2.jpeg"
          title="Head Talk by Arch. & Planning dept on 10th Aug 2022"
          desc="Creating artisanal, philosophical and technologically sound built environment:Contributions from BIT"
        />

        <UpcomingCard
          image="/upcoming3.jpeg"
          title="Head talk by Management Department on 24th Aug 2022"
          desc="Overwie on the Department of Management"
        />

        <UpcomingCard
          image="/upcoming4.jpeg"
          title="Head talk by BIT Extension Centre - Deoghar on 7th Sept 2022"
          desc="Overview of BIT-Off Campus Deoghar"
        />
      </div>
    </>
  );
};

export default Home;

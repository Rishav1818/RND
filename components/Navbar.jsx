import Link from "next/link";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function Dropdown({ arr }) {
  console.log(arr);
  return (
    <div class="">
      <div class="group inline-block relative">
        <button class="text-base flex items-center">
          <span class="mr-1 mb-1 text-gray-100 tracking-wider">
            IMPORTANT LINKS
          </span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        <ul class="absolute hidden text-black group-hover:block w-64">
          <li class="">
            <a
              class="rounded-t bg-gray-200 hover:bg-gray-400 text-base py-2 px-4 block whitespace-no-wrap"
              href="/research-project"
            >
              Research Projects
            </a>
          </li>
          <li class="">
            <a
              class="bg-gray-200 hover:bg-gray-400 text-base py-2 px-4 block whitespace-no-wrap"
              href="/research-facilities"
            >
              Research Activities
            </a>
          </li>
          <li class="">
            <a
              class="rounded-b bg-gray-200 hover:bg-gray-400 text-base py-2 px-4 block whitespace-no-wrap"
              href="/sop"
            >
              STANDARD OPERATING PROCEDURE (SOPS)
            </a>
          </li>
          <li class="">
            <a
              class="rounded-b bg-gray-200 hover:bg-gray-400 text-base py-2 px-4 block whitespace-no-wrap"
              href="/researchpromotion"
            >
              RESEARCH PROMOTION SCHEME
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function SearchComponent() {
  return (
    // <div className="flex items-center">
    //   <div className="flex space-x-1">
    //     <input
    //       type="text"
    //       className="block w-48 md:w-full px-4 py-2 text-black bg-white border rounded-full  focus:outline-none focus:ring"
    //       placeholder="Search"
    //     />
    //     <button className="px-4 text-white bg-gray-700 hover:bg-gray-600 rounded-full ">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="w-5 h-5"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         strokeWidth={2}
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //         />
    //       </svg>
    //     </button>
    //   </div>
    // </div>
    <div class="pt-2 relative mx-auto text-gray-600">
      <input
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit" className="absolute right-0 top-0 mt-4 mr-4">
        <SearchIcon />
      </button>
    </div>
  );
}

function NavItem({ name, link, setMenu }) {
  return (
    <Link href={link}>
      <div
        className="nav-links after:bg-gradient-to-r after:from-[#002147] after:to-[#002147] lg:rounded-sm overflow-hidden"
        onClick={() => {
          setMenu(false);
        }}
      >
        {name}
      </div>
    </Link>
  );
}
function NavItems({ menu, setMenu }) {
  return (
    <div
      className={`${
        menu ? "" : "opacity-0 pointer-events-none"
      } absolute right-0 top-16 w-full flex flex-col gap-4 bg-[#002147] pl-4 py-4 lg:text-xl text-gray-100 transition-all duration-200 lg:opacity-100 uppercase lg:pointer-events-auto tracking-wider lg:flex-row lg:relative lg:p-0 lg:top-0 lg:bg-transparent lg:w-auto lg:rounded-none -z-10 shadow-md lg:shadow-none items-center`}
    >
      {/* <NavItem name="Search" link="/" setMenu={setMenu} /> */}

      <div className=" text-base ">
        <a href="/">Home</a>
      </div>
      {/* <div className="text-xs">|</div> */}
      <div className="text-base">
        <a href="/research-facilities">Research Activities</a>
      </div>
      {/* <div className="text-base">|</div> */}
      <div className="text-base">
        <a href="/gallery">Gallery</a>
      </div>
      {/* <div className="text-base">|</div> */}
      {/* <div className="text-base">
        <a href="/sop">Standard Operating Procedure (SOPs)</a>
      </div> */}
      {/* <div className="text-base">|</div> */}
      <Dropdown/>

      <div className="text-base">
        <a href="/contact">Contact Us</a>
      </div>
      {/* <SearchComponent /> */}
    </div>
  );
}

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar z-50 h-20 w-screen fixed flex items-center justify-between gap-4 px-8 bg-[#002147] top-0 shadow-sm">
      <div
        className={`${
          menu ? "hamburger-menu--active" : ""
        } hamburger-menu absolute right-8 menu-hidden group`}
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <div className="bar-top group-hover:bg-black"></div>
        <div className="bar-middle group-hover:bg-black"></div>
        <div className="bar-bottom group-hover:bg-black"></div>
      </div>
      <a href="/">
        <img className="h-36 w-96 py-8 object-fill" src="BIT-Mesra.png"></img>
      </a>
      <NavItems menu={menu} setMenu={setMenu} />
    </nav>
  );
}

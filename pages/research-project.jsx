import React from 'react'
import DeptCard from '../components/DeptCard'

const ResearchProject = () => {
  return (
    <>
    <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-24 mb-16">
        RESEARCH PROJECTS
      </div>
      <div className='flex flex-wrap justify-center'>
        <a target={'_blank'} href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=49&pid=2"><DeptCard title={'Architecture & Planning'} image={'/department/arch.jpg'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=51&pid=17"><DeptCard title={'Bio-Engineering & Bio-Technology'} image={'/department/biotech.jpg'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=69&pid=21"><DeptCard title={'Chemical Engineering and Technology'} image={'/department/chemical.jpg'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=140&pid=10"><DeptCard title={'Chemistry'} image={'/department/chempnp.png'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=50&pid=13"><DeptCard title={'Civil and Environmental Engineering'} image={'/department/civil.jpg'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=70&pid=25"><DeptCard title={'Computer Science and Engineering'} image={'/department/cse.jpeg'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=71&pid=29"><DeptCard title={'Electrical and Electronics Engineering'} image={'/department/eee.jpeg'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=72&pid=36"><DeptCard title={'Electronics and Communication Engineering'} image={'/department/ece.jpg'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=168&pid=72"><DeptCard title={'Mathematics'} image={'/department/maths.png'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=74&pid=33"><DeptCard title={'Mechanical Engineering'} image={'/department/mech.png'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=169&pid=68"><DeptCard title={'Physics'} image={'/department/physics.png'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=77&pid=49"><DeptCard title={'Pharmaceutical Sciences and Technology'} image={'/department/pharm.jpeg'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=76&pid=54"><DeptCard title={'Production & Indutrial Engineering'} image={'/department/prod.jpeg'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=78&pid=64"><DeptCard title={'Remote Sensing'} image={'/department/remotesensing.jpeg'}/></a>
        <a target={'_blank'}  href="https://bitmesra.ac.in/Visit_Department_Page?cid=1&deptid=167&pid=59"><DeptCard title={'Space Engineering and Rocketry'} image={'/department/space.jpeg'}/></a>
      </div>
    </>
  )
}

export default ResearchProject
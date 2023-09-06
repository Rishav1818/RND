import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(date, department, rep, invi, htalk) {
  return { date, department, rep, invi, htalk };
}

const rowmo22 = [
  createData("3rd Aug. 2022", "SER", "	 Head / In-charge", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_3rd%20August%202022_SER.pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HeadTalk%20SER%203rd%20Aug_%202022.pdf">Talk</a>),
  createData("10th Aug. 2022", "Arch. & Planning", "	 Head / In-charge", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Poster_Dr%20Satyaki_Sarkar.pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk_Dr%20Satyaki_Sarkar_10_08_2022_Arch.pdf">Talk</a>),
  createData("24th Aug. 2022", "Management", "	 Head / In-charge", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Poster_Dr%20Satyaki_Sarkar.pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20PPT%2024-08-22%20for%20website%20pdf%20Managment.pdf">Talk</a>),
  createData("7th Sept. 2022", "BIT Extension Centre - Deoghar", "	 Director", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_7th%20Sep%202022.pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/PPT_BIT%20Deoghar%20Head%20Talk%2007-09-2022.pdf">Talk</a>),
  createData("21st Sept. 2022	", "BIT Extension Centre - Patna", "	 Director", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk_BITP.jpg">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk-%20Director%2C%20Patna.pdf">Talk</a>),
  createData("12th Oct. 2022", "BIT Extension Centre - Noida", "	 Director", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_12thOctober2022(2).pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HeadTalk_NoidaCampus-12_10_22.pdf">Talk</a>),
  createData("27th Oct. 2022", "BIT Extension Centre - Jaipur", "	 Director", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_Dr%20Peeyush_27Oct2022(2).pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/jaipur%20headtalk%20Final-1.pdf">Talk</a>),
  createData("09th Nov. 2022", "BIT Extension Centre - Lalpur", "	 Director", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Invitation_Head%20Talk%20Poster_Dr%20Vandana_Director_Lalpur_EC(1).pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HeadTalk%20BIT%20Lalpur_Our%20Legacy%20and%20the%20Road%20Ahead.pdf">Talk</a>),
  createData(" 05th Jan. 2022", "PIE", "	 Dr. Joyjeet Ghosh", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_16thMarch2022_HOD_PIE_DR_JOYJEET_GHOSE.pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Heald%20Talk%2016_03_2022%20JG%20PIE.pdf">Talk</a>),
  createData("19th Jan. 2022", "Remote Sensing", "	 Dr. A.P. Krishna", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_19jan2022_DRS.pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/DRS_HeadTalk_Dr_APK_19012022_Corrected.pdf">Talk</a>),
  createData("2nd Feb. 2022", "ECE", "	  DR. S.S. Solanki", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_2Feb2022_HOD_ECE.pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20PPT_02_02_2022_ECE.pdf">Talk</a>),
  createData("16th Feb. 2022", "PST", "	 Dr. Swastika Ganguly ", <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_16Feb2022_PST%20(1).pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HOD%20PPT%20on%2016th%20February%2022%20_%20Pharmacy.pdf">Talk</a>),
  createData(" 2nd March. 2022", " CEE", "	 Dr. Sudeshna Chakarborty", <a target={"_blank"} href="https://bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_Dr_Sudeshna_CEE.pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/02%2003%2022%20Talk%20CEE.pdf">Talk</a>),
  createData("11th Aug. 2021", "	 Chemistry", "	 Dr. Ashoke Sharon ", <a target={"_blank"} href="https://bitmesra.ac.in/UploadedDocuments/adminrie/files/HEAD_TALK_SERIES_INVITATION_11august2021%20Chemistry.jpg">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/HOD%20Chemistry_Presentation_Aug%2011_2021.pdf">Talk</a>),
  createData("25th Aug. 2021", "	 Physics", "	 Dr. S. K. Sinha", <a target={"_blank"} href="https://bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20%20Physics%2025%20Aug_%202021.jpg">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/PHYSICS%20DEPT%20PRESENTATION%2025%208%2021%20Final(1).pdf">Talk</a>),
  createData("08th Sept. 2021", "Mathamatics", "	 Dr. S. Padhi", <a target={"_blank"} href="https://bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%203_Mathematics(1).jpg">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Glimpse%20on%20Mathematics_HEADTALK%20Presesntatio_8sep2021.pdf">Talk</a>),
  createData("22nd Sept. 2021", "Chemical Engg.", "	 Dr. Gautam Sarkhel", <a target={"_blank"} href="https://bitmesra.ac.in/UploadedDocuments/adminrie/files/Chemical_Talk_22sep2021.jpg">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk-%20Chemical.pdf">Talk</a>),
  createData(" 06th Oct. 2021", "BEBT", "	 Dr. Rakesh Sinha", <a target={"_blank"} href="https://bitmesra.ac.in/UploadedDocuments/adminrie/files/biotechnology%20poster.jpg">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk_Bioengineering%20and%20Biotechnology_06102021(1).pdf">Talk</a>),
  createData(" 20th Oct. 2021", "EEE", "	 Dr. Sarbani Chakarborty", <a target={"_blank"} href="https://bitmesra.ac.in/UploadedDocuments/adminrie/files/HOD_EEE_TALK_20OCT2021.pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head_Talk_EEE_6oct2021.pdf">Talk</a>),
  createData(" 17th Nov. 2021", "CSE", "	 Dr. Vandana Bhattacharjee", <a target={"_blank"} href="https://bitmesra.ac.in/UploadedDocuments/adminrie/files/head%20talk%20Invitation%20Dr%20Vandana.png">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/CSE_Footprints%20and%20Vision_2021.pdf">Talk</a>),
  createData(" 15th Dec. 2021", "Mech. Engg.", "	 Dr. D. P. Mishra", <a target={"_blank"} href="https://bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Invitation_5jan2022_MECH.pdf">Invitation</a>,          <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Head%20Talk%20Mechanical_Final.pdf">Talk</a>),
];

function MO22Table() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="center">Department</StyledTableCell>
            <StyledTableCell align="center">
              Representative(Head/In-charge)
            </StyledTableCell>
            <StyledTableCell align="center">
              Head Talk Invitation
            </StyledTableCell>
            <StyledTableCell align="center">Head Talk</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowmo22.map((row) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="center">{row.department}</StyledTableCell>
              <StyledTableCell align="center">{row.rep}</StyledTableCell>
              <StyledTableCell align="center">{row.invi}</StyledTableCell>
              <StyledTableCell align="center">{row.htalk}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
// function SP22Table() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Date</StyledTableCell>
//             <StyledTableCell align="center">Department</StyledTableCell>
//             <StyledTableCell align="center">
//               Representative(Head/In-charge)
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               Head Talk Invitation
//             </StyledTableCell>
//             <StyledTableCell align="center">Head Talk</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rowsp22.map((row) => (
//             <StyledTableRow key={row.date}>
//               <StyledTableCell component="th" scope="row">
//                 {row.date}
//               </StyledTableCell>
//               <StyledTableCell align="center">{row.department}</StyledTableCell>
//               <StyledTableCell align="center">{row.rep}</StyledTableCell>
//               <StyledTableCell align="center">{row.invi}</StyledTableCell>
//               <StyledTableCell align="center">{row.htalk}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
// function MO21Table() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Date</StyledTableCell>
//             <StyledTableCell align="center">Department</StyledTableCell>
//             <StyledTableCell align="center">
//               Representative(Head/In-charge)
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               Head Talk Invitation
//             </StyledTableCell>
//             <StyledTableCell align="center">Head Talk</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rowmo21.map((row) => (
//             <StyledTableRow key={row.date}>
//               <StyledTableCell component="th" scope="row">
//                 {row.date}
//               </StyledTableCell>
//               <StyledTableCell align="center">{row.department}</StyledTableCell>
//               <StyledTableCell align="center">{row.rep}</StyledTableCell>
//               <StyledTableCell align="center">{row.invi}</StyledTableCell>
//               <StyledTableCell align="center">{row.htalk}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

const Talk = () => {
  return (
    <>
      <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-24 mb-16">
        Previous Talks
      </div>
      <div className="px-8">
        <MO22Table />
      </div>
      {/* <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-24 mb-16">
        Schedule of SP-22
      </div>
      <div className="px-8">
        <SP22Table />
      </div>
      <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-24 mb-16">
        Schedule of MO-21
      </div>
      <div className="px-8 pb-8">
        <MO21Table />
      </div> */}
    </>
  );
};

export default Talk;

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

function createData(sno, project, year) {
  return { sno, project, year };
}

const rows = [
  createData(
    1,
    "Recently Sanction Projects in  2022- till 3.11.2022 ",
    "FY- 2022-23"
  ),
  createData(2, "Recently Sanctioned Projects in 2021-22 ", "FY- 2021-22"),
  createData(3, "Research Grants received in 2020-21", "FY - 2020-21"),
  createData(4, "Research Grants received in 2019-20 ", "FY - 2019-20"),
  createData(5, "Research Grants received in 2018-19 ", "FY - 2018-19"),
];

function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell align="center">Project Name</StyledTableCell>
            <StyledTableCell align="center">Year</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.sno}>
              <StyledTableCell component="th" scope="row">
                {row.sno}
              </StyledTableCell>
              <StyledTableCell align="center">{row.project}</StyledTableCell>
              <StyledTableCell align="center">{row.year}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Projects = () => {
  return (
    <>
      <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-24 mb-16">
        Projects
      </div>
      <div className="p-8">
        {/* <CustomizedTables /> */}
        <div className="">
          <div className="flex py-3">
            <div className="basis-1/2">
              Recently Sanction Projects in 2022- till 3.11.2022{" "}
            </div>
            <div className="basis-1/2">
              <a
                target={"_blank"}
                href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Grant%20Received%20for%20FY-%202022-03_11_2022.pdf"
              >
                FY- 2022-23
              </a>
            </div>
          </div>
          <div className="flex py-3">
             
            <div className="basis-1/2">
              Recently Sanctioned Projects in 2021-22{" "}
            </div>
            <div className="basis-1/2">
              <a
                target={"_blank"}
                href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/NEW%20Projects%20in%20FY2021-22_BIT_MESRA_RANCHI.pdf"
              >
                FY- 2021-22
              </a>
            </div>
          </div>
          <div className="flex py-3">
             
            <div className="basis-1/2">
              Research Grants received in 2020-21{" "}
            </div>
            <div className="basis-1/2">
              <a
                target={"_blank"}
                href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Grant%20Received_BIT_2020-2021_.pdf"
              >
                FY - 2020-21
              </a>
            </div>
          </div>
          <div className="flex py-3">
             
            <div className="basis-1/2">
              Research Grants received in 2019-20{" "}
            </div>
            <div className="basis-1/2">
              <a
                target={"_blank"}
                href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/GRANT%20DETAILS_BIT_2019-20.pdf"
              >
                FY - 2019-20
              </a>
            </div>
          </div>
          <div className="flex py-3">
             
            <div className="basis-1/2">
              Research Grants received in 2018-19{" "}
            </div>
            <div className="basis-1/2">
              <a
                target={"_blank"}
                href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/GRANT%20DETAILS_BIT_2018-19.pdf"
              >
                FY - 2018-19
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

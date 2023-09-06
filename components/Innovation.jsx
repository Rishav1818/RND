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
    "Innovation Incubation and Entrepreneurship (IIEP) Policy ",
    "IIEP POLICY"
  ),
  createData(2, "Startup Policy ", "STARTUP-POLICY"),
  createData(3, "Entrepreneurship Development Cell  ", "EDC Portal"),
  createData(
    4,
    "National Innovation and Startup Policy Details ",
    "National Innovation and Startup Policy Details"
  ),
  createData(
    5,
    "Global Startup Ranking & New Startups ",
    "Startups in Different Countries & Country Ranking"
  ),
  createData(
    6,
    " Innovation Contest of BIT – NISHAN ",
    "NISHAN Announcement, October, 2021"
  ),
];

function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S.No</StyledTableCell>
            <StyledTableCell align="center">StartUp Policies</StyledTableCell>
            <StyledTableCell align="center">IIE Policies</StyledTableCell>
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

const Innovation = () => {
  return (
    <>
      <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-24 mb-16">
        Startup and IIE Policies
      </div>
      <div className="p-8">
        <CustomizedTables />
      </div>
    </>
  );
};

export default Innovation;

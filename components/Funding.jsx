import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FundingTable from "./FundingTable";

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

function createData(sno, agency, abb, link) {
  return { sno, agency, abb, link };
}

const rows = [
  createData("S.No.", "Funding Agency", "Abbreviation", "Website"),
  createData(
    "1",
    "AICTE",
    "All India Council for Technical Education",
    "www.aicte-india.org"
  ),
  createData(
    "2",
    "CSIR",
    "Council of Scientific and Industrial Research",
    "www.csirhrdg.res.in"
  ),
  createData("3", "DAE-BRNS", "Department of Atomic Energy", "www.dae.gov.in"),
  createData(
    "4",
    "DAE-NBHM",
    "National Board for Higher Mathematics",
    "www.nbhm.dae.gov.in"
  ),
  createData("5", "DBT", "Department of Bio-Technology", "www.dbtindia.nic.in"),
  createData("6", "DOE", "Department of Electronics", "www.dde.nic.in"),
  createData(
    "7",
    "DRDO",
    "Defence Research and Development Organisation",
    "www.drdo.gov.in"
  ),
  createData(
    "8",
    "DRDO-AR&DB",
    "Aeronautics Research and Development Board",
    "www.drdo.gov.in"
  ),
  createData(
    "9",
    "DRDO-DMRL",
    "Defence Metallurgical Research Laboratory",
    "www.drdo.gov.in"
  ),
  createData(
    "10",
    "DRDO-LSRB",
    "Life Sciences Research Board",
    "www.drdo.gov.in"
  ),
  createData(
    "11",
    "DSIR",
    "Department for Scientific and Industrial Research",
    "www.dsir.gov.in"
  ),
  createData(
    "12",
    "DST",
    "Department of Science and Technology",
    "www.dst.gov.in"
  ),
  createData(
    "13",
    "ICMR",
    "Indian Council of Medical Research",
    "www.icmr.nic.in"
  ),
  createData(
    "14",
    "IGCAR",
    "Indira Gandhi Centre for Atomic Research",
    "www.igcar.ernet.in"
  ),
  createData(
    "15",
    "INSA",
    "Indian National Science Academy",
    "www.insaindia.org"
  ),
  createData(
    "16",
    "IREDA",
    "Indian Renewable Energy Development Agency Limited",
    "www.ireda.gov.in"
  ),
  createData(
    "17",
    "ISRO",
    "Indian Space Research Organisation",
    "www.isro.org"
  ),
  createData(
    "18",
    "ISTE",
    "Indian Society For Technical Education",
    "www.isteonline.in"
  ),
  createData(
    "19",
    "IE",
    "The Institution of Engineers (India)",
    "www.ieindia.org"
  ),
  createData(
    "20",
    "IET",
    "The Institution of Engineering and Technology",
    "www.theiet.org"
  ),
  createData("21", "IMD", "India Meteorological Department", "www.imd.gov.in"),
  createData(
    "22",
    "MCIT",
    "Ministry of Communications and Information Technology",
    "www.mcit.gov.ws"
  ),
  createData(
    "23",
    "MHRD",
    "Ministry of Human Research Development",
    "www.mhrd.gov.in"
  ),
  createData(
    "24",
    "MNRE",
    "Ministry of New and Renewable Energy",
    "www.mnre.gov.in"
  ),
  createData(
    "25",
    "MoEF",
    "Ministry of Environment and Forests",
    "www.moef.nic.in"
  ),
  createData("26", "MoES", "Ministry of Earth Science", "www.moes.gov.in"),
  createData("27", "MOWR", "Ministry of Water Resources", "www.wrmin.nic.in"),
  createData(
    "28",
    "MOCIT",
    "Ministry of Communications & Information Technology",
    "www.deity.gov.in"
  ),
  createData(
    "29",
    "MFPI",
    "Ministry of Food Processing Industries",
    "www.mofpi.nic.in"
  ),
  createData(
    "30",
    "NCERT",
    "National Council for Ec…c Research and Training",
    "www.iccw.vsnl.net.in"
  ),
  createData("31", "NJB", "National Jute Board", "www.jute.org"),
  createData(
    "32",
    "PCRA",
    "Petroleum Conservation Research Association",
    "www.pcra.org"
  ),
  createData(
    "33",
    "RSFC",
    "Research Scheme on Flood Control",
    "www.rsfc.vsnl.net.in"
  ),
  createData("34", "RSOP", "Research Scheme on Power", "www.cbip.org"),
  createData("35", "SDC", "SAARC Documentation Centre", "www.sdc.gov.in"),
  createData(
    "36",
    "SERC",
    "Science and Engineering Research Council",
    "www.serc-dst.org"
  ),
  createData(
    "37",
    "TAAS",
    "Technology Absorption and Adaptation Scheme",
    "www.taas-dst.org"
  ),
  createData("38", "UGC", "University Grants Commission", "www.ugc.ac.in"),
  createData("39", "VSSC", "Vikram Sarabhai Space Centre", "www.vssc.gov.in"),
  createData("40", "W2E", "Waste to Energy", "www.w2es.com"),
];

function CustomizedTables() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>S.No</StyledTableCell>
              <StyledTableCell align="center">Funding Agencies</StyledTableCell>
              <StyledTableCell align="center">Abbreviation</StyledTableCell>
              <StyledTableCell align="center">Website</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.sno}>
                <StyledTableCell component="th" scope="row">
                  {row.sno}
                </StyledTableCell>
                <StyledTableCell align="center">{row.agency}</StyledTableCell>
                <StyledTableCell align="center">{row.abb}</StyledTableCell>
                <StyledTableCell align="center">{row.link}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FundingTable />
    </div>
  );
}

const Funding = () => {
  return (
    <>
      <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-24 mb-16">
        LIST OF FUNDING AGENCIES
      </div>
      <div className="p-8">
        <CustomizedTables />
      </div>
    </>
  );
};

export default Funding;

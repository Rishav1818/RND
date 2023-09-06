import React from "react";

function FormItem({ title, link, linkText }) {
  return (
    <div className="text-md px-4 pb-2">
      {title}
      <a className="text-blue-600 underline" target={"_blank"} href={link}>
        {linkText}
      </a>
    </div>
  );
}

const Forms = () => {
  return (
    <>
      <div className="text-md py-4 px-4 font-bold">1. Memo related forms</div>
      <FormItem
        title={
          "(1.1) Request for Memo / Extension / FORM1 for Scholars working under a Project : "
        }
        linkText={"Form1"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/formate%20for%20Memo%20Project%20Revised%2021_06_2022.pdf"}
      />
      <FormItem
        title={
          "(1.2)  New Memo / Extension / FORM2 for Scholars who have their OWN Fellowship : "
        }
        linkText={"Form2"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/formate%20for%20Memo%20Thesis%20Revised%2021_06_2022.pdf"}
      />
      <div className="text-md py-4 px-4 font-bold">2. Forms Relevant to Sponsored Projects</div>
      <FormItem
        title={
          "(2.1)  Form for Resignation from Project : "
        }
        linkText={"Resignation from Project"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Resignation%20from%20project%20Memo(1).pdf"}
      />
      <FormItem
        title={
          "(2.2)  Form for Movement/Travel/ to attend Seminar/ Conferences : "
        }
        linkText={"Movement order form for project student"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Revised%20Movement%20order%20formate%20for%20project%20Student%2018_01_2023.pdf"}
      />
      <div className="px-4 pb-2 text-red-600">(Note : Movement order Form should be filled at least 10 days before date of Journey)</div>
      <FormItem
        title={
          "(2.2)  Absentee Report for Fellowship &  Along with Leave : "
        }
        linkText={" Monthly Absentee Report  "}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Modified_Absentee%20Report%20for%20the%20departments(2).docx"}
      />
      <FormItem
        title={
          "(2.3.1) Attendance record  Monthly attendance Record from Departments ;  Annual Leave Record : "
        }
        linkText={"Annual Leave"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Annual_Leave%20Sanction%20Sheet%20(IRF%2C%20JRF%2C%20SRF%20and%20Project%20Fellow)%20(1).docx"}
      />
      <FormItem
        title={
          "(2.4) Payment request form Sponsored Projects  : "
        }
        linkText={"Form for payment request (Govt. grants)"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Revised%20Govt%20Bill%20format%20as%20on%2024_03_2022(3)%20(1)%20(1).docx"}
      />
      <FormItem
        title={
          "(2.5) Leave for CSIR /UGC/ Project Student  : "
        }
        linkText={"Leave application for Student"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Revised%20Leave%20application%20as%20on%2001_01_2023.pdf"}
      />
      <FormItem
        title={
          "(2.6) Bio-mertic  Missed Punch Slip : "
        }
        linkText={"Mis-Punch Slip"}
        link={""}
      />
      <FormItem
        title={
          "(2.7) UGC Continuation certificate:  Continuation Certificate    HRA     Contigency   Covering Letter:    Covering Letter   Upgadation JRF to SRF : "
        }
        linkText={"JRF To SRF"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/ANNEXURE%20III%20for%20NET%20JRF.pdf"}
      />
      <FormItem
        title={
          "(2.8) MANF : "
        }
        linkText={" Continuation     HRA     Contnigency and UC for MANF     Yearly Progress Report      Upgradation from JRF to SRF  Joining Report for MANF"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Joining%20Report%20for%20MANF.pdf"}
      />
      <FormItem
        title={
          "(2.9) Exception report & Covering letter for UGC : "
        }
        linkText={" Exception Report for UGC  Covering Letter : Covering Letter for Exception Report"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/ExceptionScholarship(1).pdf"}
      />
      <FormItem
        title={
          "(2.10) CSIR Statement of Expenditure : "
        }
        linkText={"Statement of Expenditure CSIR"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Statement%20of%20Expenditure.pdf"}
      />
      <FormItem
        title={
          "(2.11) No Dues Form : "
        }
        linkText={"No Dues Form"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/No%20dues%20Form.docx"}
      />
      <FormItem
        title={
          "(2.12) Joining Report : "
        }
        linkText={"Joining Report"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Joining%20for%20fellowship%20(9).docx"}
      />
      <FormItem
        title={
          "(2.13) Monthly Conformation Report for UGC: "
        }
        linkText={"confirmation Report"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/301118_Format_for_Fellowship_Scholarship.pdf"}
      />
      <div className="text-md py-4 px-4 font-bold">3. New Project Proposal Submission Google Form</div>
      <FormItem
        title={
          "Faculty who want to submit any new proposal to any funding agency should fill the following form. After that they need to send a letter to DRIE office (forwarded by HOD) for getting endorsement letter. "
        }
        linkText={"https://docs.google.com/forms/d/e/1FAIpQLScl0mq0aO2PxiFqY5c0RZ8ZRS6V_8m9fTbBXRVXWVLqfTsiow/viewform"}
        link={"https://docs.google.com/forms/d/e/1FAIpQLSfsF_rh7jaBcgI6O3tcRW-uLdCXJhoV_fLoJuDJirHJV7kY1A/formrestricted"}
      />
      <FormItem
        title={
          "(3.1) New Project form along with Sanction Letter : "
        }
        linkText={"New Project Registration Form 17.11.2022"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/New%20Project%20Registration%20Form%2017_11_2022(1)%20(1).docx"}
      />
      <FormItem
        title={
          "(3.2) Movement order form for Faculty : "
        }
        linkText={"Faculty Movement Form"}
        link={"https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Movement%20form%20for%20Faculty%20Revised%20as%20on%2026_09_2022.pdf"}
      />
    </>
  );
};

export default Forms;

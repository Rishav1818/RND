import React from "react";

const ResearchPromotion = () => {
  return (
    <>
      <div className="sm:text-4xl text-3xl text-gray-700 uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-gray-400 after:to-gray-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown mt-24 mb-8">
        Research Promotion Scheme in BIT
      </div>

      <div className="p-8 text-lg">
        <div className="p-2">
          <b>1.Seed Money Scheme (SMS)</b> initiated by the Institute in the
          year 2015 to provide grant for the Faculty Members under different
          areas of research, which is to be used to initiate/continue the
          research work of the Faculty. The objective of the scheme is to
          accelerate the possibility to receive the financial support from
          external agencies in future. The applicant must clearly and
          convincingly demonstrate that the proposed project represents a new
          research direction in an area likely to generate external funding. The
          project under SMS is being considered as Minor Project and relevant
          API score will be credited as per CAS rule of BIT, Mesra (Clause –
          10A).
        </div>
        <div className="p-2 text-red-500">
          Download Clause 10A of CAS rule : <a target={"_blank"} href="https://www.bitmesra.ac.in/UploadedDocuments/adminrie/files/Clause%2010%20A.pdf">Clause 10A</a>
        </div>
        <div className="p-2">
          The List of Previous SMS beneficiary is attached : Details of SMS
          Beneficiary
        </div>
      </div>

      <div className="text-xl text-relative pl-10">
        <b>
          Applicant must be a full-time newly recruited faculty as Assistant
          Professor in the Institute or its extension centers in last 3 years &
          Grant will be of Rs. 5,00,000.
        </b>
      </div>

      <div>
        <div className="pl-10 pt-5 text-lg">
          Link for Seed money Scheme : <a href="#">Seed Money Scheme </a>
        </div>
      </div>

      <div className="p-8 text-lg">
        <div className="p-2">
          <b>2. Research Promotion Grant (RPG)</b>: The Institute is giving 30%
          of the over-head cost of the project under RPG to the Principal
          Investigator (PI) /Co-PI of the project as under:
          <div className="pl-10 pt-2">
            <b>i. Principal Investigator (PI) : 60% </b>
          </div>
          <div className="pl-10 pt-1 pb-4">
            <b>ii. Co-Principal Investigator (Co-PI) : 40% </b>
          </div>
          The amount under RPG is being given to the PI and Co-PI towards the
          following:
          <div className="pl-10 pt-2">
            <b>i. For attending National / International Conferences. </b>
          </div>
          <div className="pl-10 pt-1 pb-5">
            <b>
              ii. Buying books, computer peripherals, publication in reviewed
              journals, telephone / internet charges, for extending hospitality
              to the experts / invitees.
            </b>
          </div>
          The PI /Co-PI may utilize the unspent amount under this grant till
          his/her superannuation/resignation.
        </div>
      </div>

      <div className="pl-10 text-lg">
        <div>
          {" "}
          <b>3. Performance Based Incentives (PBI)</b>: The Institute has taken
          initiative to give incentives to the Departments & Principal
          Investigators as under, based on the performance for accumulating
          maximum amount of research fund from the external Funding Agencies.
        </div>
      </div>

      <div className="p-10">
        <table class="border-collapse">
          <tbody>
            <tr>
              <td class="border border-slate-700 ...">First 3 Departments who have accumulated maximum funds for research from different funding agencies in last 3 / 4 years:</td>
              <td class="border border-slate-700 ...">Indianapolis</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ResearchPromotion;

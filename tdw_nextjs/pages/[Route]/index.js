// pages/index.js

import Footer from "../Components/Footer";
import GetCompanyResponse from "../CompanyResponse";
import Header from "../Components/Header";
import Category from "../Components/Category";
import Aboutus from "../Components/Aboutus";
import NotFound from "../Components/Notfound";
import Catindex from "../Components/Catindex";
import Enquiry from "../Components/Enquiry";

export async function getServerSideProps(context) {
  try {
    const companyData = await GetCompanyResponse(context);
    console.log("Company Data from API:", companyData);

    if (!companyData) {
      // Handle the case where the API returns no data
      console.error("No data returned from the API.");
      return { notFound: true };
    }

    return {
      props: { companyData }, // Pass companyData as props
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { notFound: true }; // Render 404 page on error
  }
}

export default function Index({ companyData }) {
//   console.log("Received companyData:", companyData);

  const pagename = companyData?.DATA?.PAGELINKTYPE;
//   console.log("Page Name:", pagename);

  let pageComponent;

  switch (pagename) {
    case "category":
      pageComponent = <Category companydata={companyData} />;
      break;
    case "aboutus":
      pageComponent = <Aboutus />;
      break;
    case "catindex":
      pageComponent = <Catindex companydata={companyData}/>;
      break;
    case "enquiry":
      pageComponent = <Enquiry />;
      break;
    default:
      pageComponent = <NotFound context={context} />;
  }

  return (
    <>
      <Header companydata={companyData} />
      {pageComponent} {/* Render the correct component */}
      <Footer />
    </>
  );
}

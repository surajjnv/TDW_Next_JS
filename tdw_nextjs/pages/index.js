import { ForbiddenRoute_afterAPI } from "./getForbiddenRoute";
import { RedirectRoute_afterAPI } from "./getRedirectionRoute";
import Footer from "./Components/Footer"; // Import the Footer component
import Homepage from "./Components/Index";
import Header from "./Components/Header";
import GetCompanyResponse  from "./CompanyResponse";


export async function getServerSideProps(context) {
  try {
   console.log(context);
   let companyData = await GetCompanyResponse(context);
    // ForbiddenRoute_afterAPI(companyData, parsedUrl);

    console.log("Returning company data!!");
    return {
      props: {
        companyData,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      notFound: true,
    };
  }
}

export default function Index({ companyData }) {
  return (
    <>
      <Header companydata={companyData} />
      <Homepage />
      <Footer />
    </>
  );
}

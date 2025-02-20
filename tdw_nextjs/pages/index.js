import { ForbiddenRoute_afterAPI } from "./getForbiddenRoute";
import { RedirectRoute_afterAPI } from "./getRedirectionRoute";
import Footer from "./Components/Footer"; // Import the Footer component
import Homepage from "./Components/Index";
import Header from "./Components/Header";
import GetCompanyResponse  from "./CompanyResponse";
import "@/styles/bootstrap_home.css"
import Set_PrimaryColor from "./Utilities/Select_Color.js"


export async function getServerSideProps(context) {
  try {
   console.log(context);
   let companyData = await GetCompanyResponse(context);
    // ForbiddenRoute_afterAPI(companyData, parsedUrl);

    // console.log("Returning company data!!");
    // console.log(companyData);
    const { mainColor, auxColor } = Set_PrimaryColor(companyData);
    return {
      props: {
        companyData,
        mainColor,
        auxColor
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      notFound: true,
    };
  }

 
}

export default function Index({ companyData, context, mainColor, auxColor }) {
  return (
    <div style={{ "--main-color": mainColor, "--aux-color": auxColor }}>
      <Header companydata={companyData} context={context} mainColor = {mainColor}  />
      <Homepage />
      <Footer companydata={companyData} />
      <style jsx global>{`
        :root {
          --main-color: ${mainColor};
          --aux-color: ${auxColor};
        }
      `}</style>
    </div>
  );
}


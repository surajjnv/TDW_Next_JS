// pages/index.js

import Footer from "../Components/Footer";
import GetCompanyResponse from "../CompanyResponse";
import Header from "../Components/Header";
import Category from "../Components/Category/Category";
import Aboutus from "../Components/Aboutus";
import NotFound from "../Components/Notfound";
import Catindex from "../Components/Catindex";
import Enquiry from "../Components/Enquiry";
import SiteMap from "../Components/SiteMap";
import Custom404 from "../404"
import Set_PrimaryColor from "../Utilities/Select_Color";
// import "@styles/dt_style.css";

  
export async function getServerSideProps(context) {
  try {
    const companyData = await GetCompanyResponse(context);
    // console.log("Company Data from API:", companyData);
    console.log(context);
    var pagename = companyData?.DATA?.PAGELINKTYPE;
    const { mainColor, auxColor } = Set_PrimaryColor(companyData);
    let pathname = context.resolvedUrl
    console.log("pathname:",pathname);
    let pagename = '';
    if(pathname == '/sitemap.html'){
      console.log("setting pathname for sitemap !!")
      pagename = 'sitemap';
    }

    if (!companyData || pagename === undefined) {
      // Handle the case where the API returns no data
      console.error("No data returned from the API.");
      return { notFound: true };
    }
    else {
      return {
        props: {  companyData,
          mainColor,
          auxColor,pagename }, // Pass companyData as props
      };
    }

  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { notFound: true }; // Render 404 page on error
  }
}

export default function Index({  companyData, mainColor, auxColor,pagename }) {
  //   console.log("Received companyData:", companyDa
  var pagename_api = companyData?.DATA?.PAGELINKTYPE;
  console.log("Page Name:", pagename);
  if(pagename == 'sitemap'){
    pagename_api = 'sitemap';
  }
  let pageComponent;
  switch (pagename_api) {
    case "category":
      pageComponent = <Category companydata={companyData} />;
      break;
    case "aboutus":
      pageComponent = <Aboutus />;
      break;
    case "catindex":
      pageComponent = <Catindex companydata={companyData} />;
      break;
    case "enquiry":
      pageComponent = <Enquiry />;
      break;
    case "sitemap":
      pageComponent = <SiteMap companydata={companyData}></SiteMap>
      break;
    default:
      pageComponent = <Custom404 />
  }

  return (
    <div style={{ "--main-color": mainColor, "--aux-color": auxColor }}>
      <Header companydata={companyData} />
      {pageComponent} {/* Render the correct component */}
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

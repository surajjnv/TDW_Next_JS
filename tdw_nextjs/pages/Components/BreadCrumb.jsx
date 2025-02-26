
const Breadcrumb = ({ pagelinktype, companydata }) => {
  if (pagelinktype === "homepage" || pagelinktype === "search") {
    return null;
  }
 console.log("inside breadcrumb!!");
  let breadcrumb = "";
  console.log(pagelinktype);
  let breadlink = "";
  let extendTitle = "";
  let showBreadcrumb = "";
  let paid_showroom_url = companydata?.URL_DETAIL?.PAID_SHOWROOM_URL;

  const pageArray = [
    "awards", "customprofile", "infrastructure", "quality", "job", "testimonial",
    "corporate-brochure", "corporate-video", "corporate-presentation", "news", "franchisee"
  ];

  if (pageArray.includes(pagelinktype)) {
    breadcrumb = companydata.DATA.HEADER.PROFILE_DISPNAME_FINAL;
    breadlink = companydata.DATA.HEADER.PROFILE;
  }

  if (pagelinktype === "category") {
    breadcrumb = companydata.DATA.HEADER.CAT_INDEX_DISP_NAME || "Product Range";
    breadlink = companydata.DATA.HEADER.CAT_INDEX;
  }

  if (pagelinktype === "aboutus") {
    if (
      companydata.DATA.HEADER.PROFILE_DISPNAME_FINAL === companydata.DATA.HEADER.CURRENT_LINKNAME &&
      companydata.DATA.HEADER.CURRENT_LINKNAME !== "" &&
      companydata.PRDSERV.FEATURED_ITEM.length === 0
    ) {
      let extendedData = companydata.PRDSERV.EXTENDED_ITEM || [];
      if (extendedData.length > 0) {
        extendTitle = extendedData[0]?.SEC_TITLE || "";
        breadlink = companydata.DATA.HEADER.PROFILE;
        breadcrumb = companydata.DATA.HEADER.PROFILE_DISPNAME_FINAL;
      }
    } else if (companydata.DATA.HEADER.PROFILE_DISPNAME_FINAL !== companydata.DATA.HEADER.CURRENT_LINKNAME) {
      breadlink = companydata.DATA.HEADER.PROFILE;
      breadcrumb = companydata.DATA.HEADER.PROFILE_DISPNAME_FINAL;
      extendTitle = companydata.DATA.HEADER.CURRENT_LINKNAME;
    }
  }

  if (pagelinktype === "franchisee") {
    extendTitle = `${companydata.DATA.HEADER.FRANCHISE_LINK || "Franchisee"} Enquiry Form`;
  }

  if (
    pagelinktype === "cinpage" &&
    companyhash?.URL_DETAIL?.CIN_LINK === 1
  ) {
    breadcrumb = companydata.DATA.HEADER.PROFILE_DISPNAME_FINAL;
    breadlink = companydata.DATA.HEADER.PROFILE;
    extendTitle = "Registration & Directors Information";
  }

  if (!breadcrumb) {
    switch (pagelinktype) {
      case "catindex":
        showBreadcrumb = companydata.DATA.HEADER.CAT_INDEX_DISP_NAME;
        break;
      case "enquiry":
        showBreadcrumb = "Contact Us";
        break;
      case "aboutus":
        showBreadcrumb = companydata.DATA.HEADER.PROFILE_DISPNAME_FINAL;
        break;
      case "sitemap":
        showBreadcrumb = "Sitemap";
        break;
      case "thankyou":
        showBreadcrumb = "Thank You";
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb" className="mt15">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href={paid_showroom_url}>Home</a>
              </li>
              {breadcrumb ? (
                <>
                  <li className="breadcrumb-item">
                    <a href={breadlink}>{breadcrumb}</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {extendTitle || companydata.DATA.HEADER.CURRENT_LINKNAME}
                  </li>
                </>
              ) : (
                <li className="breadcrumb-item active" aria-current="page">
                  {showBreadcrumb}
                </li>
              )}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;

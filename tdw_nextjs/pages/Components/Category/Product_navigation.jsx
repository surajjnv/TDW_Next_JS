import { useState } from "react";
import { getBookmark } from "../../Utlility_function/common_function";

const ProductNavigation = ({ companydata }) => {
  if (!companydata?.DATA?.PRDNAV) return null;

  const [activeNav, setActiveNav] = useState(0);
  let catList = [];

  companydata.DATA.PRDNAV.forEach((prdcat) => {
    if (companydata.DATA?.PRDSERV?.[0]?.CAT_NAME && prdcat.CAT_NAME === companydata.DATA.PRDSERV[0].CAT_NAME) {
      let firstCat = catList[0];
      catList[0] = prdcat;
      if (firstCat) {
        catList.push(firstCat);
      }
    } else {
      catList.push(prdcat);
    }
  });

  const showprd = (index) => {
    setActiveNav(activeNav === index ? null : index);
  };

  return (
    <div className="pdp col-md-3">
      <ul className="sbar">
        {catList.map((prdcat, index) => {
          let isActive = activeNav === index;
          let prdlisttmp = prdcat.PRODLIST.map((catprd) => {
            let my_name = catprd.ITEM_NAME ? getBookmark(catprd.ITEM_NAME) : "";
            return (
              <li className="fs14" key={my_name}>
                <a href={`${prdcat.CATFLNAME}#${my_name}`}>{catprd.ITEM_NAME}</a>
              </li>
            );
          });

          return (
            <li className={`fw5 ${isActive ? "actv" : ""}`} key={index}>
              <div className="d-flex align-items-center justify-content-between">
                <a href={prdcat.CATFLNAME} className="d-flex justify-content-between align-items-center">
                  {prdcat.CAT_NAME} ({prdcat.CAT_PRD_COUNT})
                </a>
                <span className="cp" onClick={() => showprd(index)}>
                  <span className={isActive ? "u_arw" : "d-none u_arw"}>
                    <svg width="13" height="11" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.99997 3.16581L8.88889 7.05469L10 5.94358L4.99997 0.94352L0 5.94358L1.1111 7.05469L4.99997 3.16581Z" fill="#4F4F4F"></path>
                    </svg>
                  </span>
                  <span className={!isActive ? "d_arw" : "d-none d_arw"}>
                    <svg width="13" height="11" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.00003 4.83419L1.11111 0.945312L0 2.05642L5.00003 7.05648L10 2.05642L8.8889 0.945312L5.00003 4.83419Z" fill="#4F4F4F"></path>
                    </svg>
                  </span>
                </span>
              </div>
              <ul className={`prd ${isActive ? "" : "d-none"}`} id={`nav-${index}`}>
                {prdlisttmp}
              </ul>
              {prdcat.CAT_PRD_COUNT > 5 && (
                <span className="fs14 tdu mt15 cp d-block clr5">
                  <a href={prdcat.CATFLNAME}>View More</a>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductNavigation;

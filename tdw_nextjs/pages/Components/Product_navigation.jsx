import { getBookmark } from "../Utlility_function/common_function";

const ProductNavigation = ({ companydata }) => {
  if (!companydata?.DATA?.PRDNAV) return null;

  let catListActive = [];  // Stores the active category
  let catListOther = [];   // Stores other categories

  companydata.DATA.PRDNAV.forEach((prdcat, index) => {
    let r_more = "";
    let c1 = "";
    let c2 = "d-none";
    let catPrdCnt = prdcat.CAT_PRD_COUNT;
    let catflname1 = prdcat.CATFLNAME || "";

    let prdlisttmp = prdcat.PRODLIST.map((catprd) => {
      let my_name = catprd.ITEM_NAME ? getBookmark(catprd.ITEM_NAME) : "";
      return (
        <li className="fs14" key={my_name}>
          <a href={`${catflname1}#${my_name}`}>{catprd.ITEM_NAME}</a>
        </li>
      );
    });
    
    if (companydata.DATA?.PRDSERV?.[0]?.CAT_NAME && prdcat.CAT_NAME === companydata.DATA.PRDSERV[0].CAT_NAME){
        c1 = "actv";
        c2 = "";
    }
    
    if (catPrdCnt > 5) {
      r_more = (
        <span className={`fs14 tdu mt15 cp d-block clr5 ${c2}`}>
          <a href={prdcat.CATFLNAME}>View More</a>
        </span>
      );
    }

   
    let categoryBlock = (
      <li className={`fw5 ${c1}`} key={index}>
        <div className="d-flex align-items-center justify-content-between">
          <a href={prdcat.CATFLNAME} className="d-flex justify-content-between align-items-center">
            {prdcat.CAT_NAME} ({catPrdCnt})
          </a>
          <span className="cp" onClick={(e) => showprd(e.currentTarget)}>
            <span className={c1 ? "u_arw" : "d-none u_arw"}>
              <svg width="13" height="11" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.99997 3.16581L8.88889 7.05469L10 5.94358L4.99997 0.94352L0 5.94358L1.1111 7.05469L4.99997 3.16581Z" fill="#4F4F4F"></path>
              </svg>
            </span>
            <span className={!c1 ? "d_arw" : "d-none d_arw"}>
              <svg width="13" height="11" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00003 4.83419L1.11111 0.945312L0 2.05642L5.00003 7.05648L10 2.05642L8.8889 0.945312L5.00003 4.83419Z" fill="#4F4F4F"></path>
              </svg>
            </span>
          </span>
        </div>
        <ul className={`${c2} prd`} id={index}>
          {prdlisttmp}
        </ul>
        {r_more}
      </li>
    );

    // Check if this is the active category
    if (companydata.DATA?.PRDSERV?.[0]?.CAT_NAME && prdcat.CAT_NAME === companydata.DATA.PRDSERV[0].CAT_NAME) {
      catListActive.push(categoryBlock);
    } else {
      catListOther.push(categoryBlock);
    }
  });

  return (
    <div className="pdp col-md-3">
      <ul className="sbar">
        {/* First render active category, then all other categories */}
        {catListActive}
        {catListOther}
      </ul>
    </div>
  );
};

export default ProductNavigation;

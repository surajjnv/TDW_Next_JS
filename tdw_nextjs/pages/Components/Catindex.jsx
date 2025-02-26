import CategoryList from "./Catlist";

import "@/styles/bootstrap_home.css"
import "@/styles/globals.css";

export default function CatIndex({companydata}) {
  console.log(companydata.DATA.PRDSERV);
  var subcat = companydata?.DATA?.PRDSERV;
  let pc_clnt_enable = companydata?.URL_DETAIL?.PC_CLNT_ENABLE;
  console.log("from catindex");
  subcat.forEach(cat => {
        cat.PRODLIST.map((prd,prdId)=>{
           console.log(prd.ITEM_NAME);
        })
  });
  return (
    <>
      <div className="ps-home__content">
        <div className="container">
          <div className="row">
            <div className="col-md-12 tp_hdng">
              <h2>
                <span className="fw-bold clr4">Brown And Cello Tapes</span>
              </h2>
            </div>
            <div className="col-md-12">
              <p className="clr3 lh24 hgt100 overflow-hidden position-relative he06" id="v_more">
                Established as a <b>Sole Proprietorship</b> firm in the year <b>2014</b> at{" "}
                <b>Bhiwadi (Rajasthan, India)</b>, we <b>“Shree Shyam Packaging”</b> are the reputed Manufacturer of a huge gamut of{" "}
                <b>BOPP Packaging Tapes, Brown Tapes, Cello Tapes, Plain Tapes, Printed Colored Tapes</b>, etc. These products are widely
                appreciated for features like high durability, superior finish and easy usage nature.
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="row mt15 ci_page">
            <CategoryList subcat ={subcat} pc_clnt_enable={pc_clnt_enable}></CategoryList>
          </div>
        </div>
      </div>
    </>
  );
}


// import "@/styles/globals.css";

import { changeHttpPath } from "../../Utils/Utlility_function/common_function";
import { getBookmark } from "../../Utils/Utlility_function/common_function";
import generateNavLinks from "../../Utils/Utlility_function/navlink";

export default function SiteMap({ companydata }) {
    var top_navigation = generateNavLinks(companydata);
    console.log(companydata);
    var catlist = companydata?.DATA?.PRDNAV;
    var paid_showroom_url = companydata?.URL_DETAIL?.PAID_SHOWROOM_URL;
    const cat_html = catlist?.map((cat, catId) => {
        var total_prod_count = cat?.CAT_PRD_COUNT;
        var prdnav_prd_count = cat?.PRODLIST.length;
        return (
            <div className="an-sitemap-ul an-ul-prd mb15" key={catId}>
                <div className="row">
                    <div className="col-md-12">
                        <h5>
                            <a href="online-store-items.html" className="d-flex">{cat.CAT_NAME}</a>
                        </h5>
                    </div>
                </div>
                <ul className="row" id={`list_${catId}`}>
                    {cat?.PRODLIST?.map((prd, prdId) => {
                        return (
                            <li className="col-md-3 an-sitemap-prd" key={prdId}>
                                <a
                                    href={`online-store-items.html#${getBookmark(prd?.ITEM_NAME)}`}
                                    className="row overflow-hidden"
                                >
                                    <div className="d-flex align-items-center justify-content-center col-md-4 an-sitemap-prd-img">
                                        <img
                                            alt={prd?.ITEM_NAME}
                                            src={changeHttpPath(prd?.ITEM_IMG_125)}
                                            width="100%"
                                        />
                                    </div>
                                    <div className="col-md-8 an-sitemap-prd-txt position-relative">
                                        <h6 className="an-sprd-head lne3txt overflow-hidden">
                                            {prd?.ITEM_NAME}
                                        </h6>
                                        <p className="an-sprd-prc position-absolute tdu fw-bold">
                                            Rs&nbsp;{prd?.PC_ITEM_FOB_PRICE} / {prd?.PC_ITEM_MOQ_UNIT_TYPE}
                                        </p>
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
                {
                    (total_prod_count > 40 && prdnav_prd_count == 40) && (<div className="row" id="142664142" onclick="">
                        <div className="col-md-12">
                            <a className="ps-btn ps-btn--warning get-q-btn" id={`showmore_${catId}`}>View More</a>
                        </div>
                    </div>
                    )

                }
                <div id="t_cnt" style={{ display: "none" }}>{total_prod_count}</div>
            </div>
        );
    });



    return (
        <>
            <div className="ps-home__content stemap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 tp_hdng">
                            <h2><span className="fw-bold clr4">Sitemap</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="stemap_txt">
                                <li className="mb10">
                                    <a href={paid_showroom_url} className="d-flex fw5">Home</a>
                                </li>
                                <li className="mb10">
                                    <a href={top_navigation?.profile?.fl_name} className="d-flex fw5">{top_navigation?.profile?.fl_display_name}</a>
                                    <ul className="an-sitemap-ul">
                                        {
                                            top_navigation?.profile?.sub_profile?.map((subprofile, index) => {
                                                return (

                                                    <li className="pt5"><a href={subprofile?.fl_name} className="d-flex">{subprofile?.fl_display_name}</a></li>

                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                                <li className="mb10">
                                    <a href="brown-cello-tapes.html" className="d-flex fw5">Our Product Range</a>
                                    {
                                        cat_html
                                    }
                                </li>
                                <li className="mb10">
                                    <a href="enquiry.html" className="d-flex fw5">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

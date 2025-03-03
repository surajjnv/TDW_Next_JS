import IsqSection from "./IsqSection";
import { changeHttpPath } from "../../../Utils/Utlility_function/common_function";
import { parseYtUrl } from "../../../Utils/Utlility_function/common_function";
import ImgSection from "./ImgSection";

export default function Product({ prd }) {
    let prdname = prd?.ITEM_NAME;
    let prdImg = prd?.ITEM_BIMG_500X500 != '' ? changeHttpPath(prd?.ITEM_BIMG_500X500) : '';
    let prdPrice = prd?.PC_ITEM_FOB_PRICE_FORMATTED;
    let prdDesc = prd?.ITEM_SDESC;
    if (/<table/i.test(prdDesc)) {
        prdDesc = prdDesc
            .replace(/<table/gi, '<div class="text txt7"><div class="tbl1"><table')
            .replace(/<\/table>/gi, '</table></div></div>');

    }
    let product_videocode = prd?.PRD_BULK_VID != '' ? parseYtUrl(prd?.PRD_BULK_VID[0].PC_ITEM_VIDEO_PATH) : '';

    //Thumbmail Images 

    let multipleImages = [];

    // Push main product images
    multipleImages.push({
        s_img: prd?.ITEM_SIMG,
        s_img_125: prd?.ITEM_SIMG_125X125,
        b_img: prd?.ITEM_BIMG_500X500,
        b_img_1000: prd?.ITEM_IMG_1000X1000
    });

    // Push video thumbnail images if available
    if (product_videocode) {
        multipleImages.push({
            s_img: `https://img.youtube.com/vi/${product_videocode}/hqdefault.jpg`,
            s_img_125: `https://img.youtube.com/vi/${product_videocode}/default.jpg`,
            b_img: `https://img.youtube.com/vi/${product_videocode}/sddefault.jpg`
        });
    }

    // Push bulk product images if available
    if (prd?.PRD_BULK_IMG && prd.PRD_BULK_IMG.length > 0) {
        prd.PRD_BULK_IMG.forEach((images_oth) => {
            let s_img_125 = images_oth?.PC_ITEM_IMAGE_125X125 ? changeHttpPath(images_oth?.PC_ITEM_IMAGE_125X125) : '';
            let s_img_250 = images_oth?.PC_ITEM_IMAGE_250X250 ? changeHttpPath(images_oth?.PC_ITEM_IMAGE_250X250) : '';
            let b_img_500 = images_oth?.PC_ITEM_IMAGE_500X500 ? changeHttpPath(images_oth?.PC_ITEM_IMAGE_500X500) : '';
            let b_img_1000 = images_oth?.PC_ITEM_IMAGE_1000X1000 ? changeHttpPath(images_oth?.PC_ITEM_IMAGE_1000X1000) : '';

            if (s_img_125) {
                multipleImages.push({
                    s_img: s_img_250,
                    s_img_125: s_img_125,
                    b_img: b_img_500,
                    b_img_1000: b_img_1000
                });
            }
        });
    }

    return (
        <>
            <a id={`${prd?.ITEM_NAME}`}></a>
            <section className="pdp_img_txt mb30">
                <h3>
                    <span className="fw-bold clr4">
                        {prd?.ITEM_NAME}
                    </span>
                </h3>
                <div className="row">
                    <ImgSection multipleImages={multipleImages} productvideocode={product_videocode} prdImg={prdImg}></ImgSection>
                    <div className="col-md-6 position-relative pdp_data_sec">
                        <span className="col-md-5 position-absolute rcbckCTA">
                            <a className="ps-btn rcb_btn_pdp1 d-flex align-items-center justify-content-center">
                                <span>
                                    <svg height="15" viewBox="0 0 25 25" width="15">
                                        <g id="Phone">
                                            <path d="M25 17.36719v6.10693a1.56585 1.56585 0 0 1-.47656 1.127 1.41172 1.41172 0 0 1-.9834.39991q-.03077 0-.06152-.00147a24.5 24.5 0 0 1-16.30127-7.17583 24.50109 24.50109 0 0 1-7.17676-16.30273 1.41132 1.41132 0 0 1 .39844-1.04444 1.56585 1.56585 0 0 1 1.12695-.47656h6.10693a1.5074 1.5074 0 0 1 1.48487 1.2876l.80664 5.64648a1.50724 1.50724 0 0 1-.42432 1.27292l-2.395 2.395a.50347.50347 0 0 0-.084.61035 20.50592 20.50592 0 0 0 6.76709 6.7666.50318.50318 0 0 0 .60937-.084l2.39554-2.39495a1.50974 1.50974 0 0 1 1.27246-.42432l5.64648.80664a1.50739 1.50739 0 0 1 1.28806 1.48487z"></path>
                                        </g>
                                    </svg>
                                </span>
                                <span className="ml5">Request Callback</span>
                            </a>
                        </span>
                        <div className="row" id="prdcont1">
                            <div className="col-md-12">
                                <p className="pdp_prc_cta">
                                    <span className="clr4 fw-price">{prdPrice}</span>
                                </p>
                            </div>
                            <div className="col-md-12 mt5">
                                <div className="position-relative" id="r_more2">
                                    {/* <span className="blr position-absolute"></span> */}
                                    <table className="tbl tble2">
                                        <tbody>
                                        <IsqSection prd={prd}></IsqSection>
                                        </tbody>
                                    </table>
                                    <div className="mt10 fs14 lh1-7 pr tbl_dn cat_desc2" dangerouslySetInnerHTML={{ __html: prdDesc }}></div>
                                    {/* <span className="pdp_rm clr5 cp position-absolute">read more...</span> */}
                                </div>
                            </div>

                            <div className="row pdp_cta mt15">
                                <div
                                    className="col-md-7 yiamintCTA"
                                    onClick={() => {
                                        page_name('productpage', 'count_intrstd', 'index_2');
                                        imgset_zoom('2', 'dataref');
                                        attachClickEvent(2, 'non_img', 'count_intrstd');
                                        if (window._gaq) {
                                            window._gaq.push(['b._trackEvent', 'Body', 'IMInterested/1/category', 'd0073']);
                                        }
                                        recEvent('Body', 'IMInterested/1/category', 'd0073');
                                    }}
                                >
                                    <a className="ps-btn ps-btn--warning glq_btn_pdp d-flex align-items-center justify-content-center">
                                        <span className="mr10">
                                            <svg height="25" viewBox="0 0 25 25" width="30">
                                                <g>
                                                    <path d="m25 17.232v-9.444l-7.556 4.407z"></path>
                                                    <path d="m12.5 13.92139 12.5-7.29193v-.12946a2.50294 2.50294 0 0 0 -2.5-2.5h-20a2.50294 2.50294 0 0 0 -2.5 2.5v.12946z"></path>
                                                    <path d="m16.48273 12.75586-3.73073 2.17627a.50158.50158 0 0 1 -.5039 0l-3.73077-2.17627-8.51733 5.67834v.0658a2.50294 2.50294 0 0 0 2.5 2.5h20a2.50294 2.50294 0 0 0 2.5-2.5v-.06567z"></path>
                                                    <path d="m0 7.787v9.445l7.556-5.037z"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        <span>Yes! I am interested</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}


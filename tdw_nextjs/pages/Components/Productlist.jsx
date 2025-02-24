import { changeHttpPath } from "../Utlility_function/common_function";


function ProductList({ companydata }) {
  console.log("prd page company data", companydata);
  var prdList = companydata?.DATA?.PRDSERV[0]?.PRODLIST;
  console.log(prdList);

  return (
    <>
      {
        prdList.map((prd, prdId) => {
          let prdname = prd.ITEM_NAME;
          let prdImg = prd.ITEM_BIMG_500X500 != '' ? changeHttpPath(prd.ITEM_BIMG_500X500) : '';
          let prdPrice = prd.PC_ITEM_FOB_PRICE_FORMATTED;
          let prdDesc = prd?.ITEM_SDESC;
          if (/<table/i.test(prdDesc)) {
            prdDesc = prdDesc
                .replace(/<table/gi, '<div class="text txt7"><div class="tbl1"><table')
                .replace(/<\/table>/gi, '</table></div></div>');
            
        }
           
          // console.log(prdPrice);
          let isqShown = 0;
          let isqRows = '';
          if (prd?.ISQ || prd.ISQ.length !== 0) {
            isqRows = prd.ISQ.map((item, index) => {
              if (isqShown >= 10) return null; // Limit to 10 rows
              if (item.FK_IM_SPEC_MASTER_DESC && item.SUPPLIER_RESPONSE_DETAIL) {
                isqShown++;
                return (
                  <tr key={index}>
                    <td className="fw6">{item.FK_IM_SPEC_MASTER_DESC}</td>
                    <td>{item.SUPPLIER_RESPONSE_DETAIL}</td>
                  </tr>
                );
              }
              return null;
            });
          }
          return (
            <>
              <a id="prd.ITEMNAME"></a>
              <section className="pdp_img_txt mb30">
                <h3>
                  <span className="fw-bold clr4">
                    {prd.ITEM_NAME}
                  </span>
                </h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="position-sticky">
                      <div id="pvdo1"></div>
                      <div className="pdp-img_thmb">
                        <div className="pdp_img cp d-flex align-items-center justify-content-center overflow-hidden index_1 position-relative">
                          <span
                            className="col-md-5 position-absolute d-flex align-item-center justify-content-center gbqCTA"
                          >
                            <a className="ps-btn ps-btn--new glq_btn_pdp d-flex align-items-center justify-content-center">
                              <span>Get Best Quote</span>
                            </a>
                          </span>
                          <span id="pimg1"></span>
                          <div className="d-flex align-items-center justify-content-center pdp_img_pic prd_cntr position-relative">
                            <img
                              className="max-width"
                              alt=""
                              id="1"
                              src={prdImg}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="pdp_thmb mt15 position-relative" id="thumbnail-container1">
                        <div className="overflow-hidden t_nail">
                          <ul className="d-flex align-items-center">
                            {["407430349/IC/KD/LV", "407430348/ZL/FZ/MR", "407430350/MB/GD/QB"].map((img, index) => (
                              <li key={index} className="d-flex align-items-center overflow-hidden cp t_nl">
                                <img
                                  alt=""
                                  src={`https://5.imimg.com/data5/SELLER/Default/2024/4/${img}/3759446/luxor-pro-e-refillable-white-board-marker-red-box-of-10-125x125.jpg`}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
                              {isqRows}
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
        )
      }

    </>
  )
}
export default ProductList;

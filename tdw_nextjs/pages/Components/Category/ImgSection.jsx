import { useState } from "react";
import Image from "next/image";

export default function ImgSection({ multipleImages, productVideoCode, prdImg, alt, sampleResize, pageNameForm, countType, googleTrackEvent }) {
    if (!multipleImages || multipleImages.length <= 1) return null;

    let count = 0;
    let v = 0;
    const [mainImg, setmainImg] = useState(prdImg);

    return (
        <div className="col-md-6">
            <div className="position-sticky">
                <div id="pvdo1"></div>
                <div className="pdp-img_thmb">
                    <div className="pdp_img cp d-flex align-items-center justify-content-center overflow-hidden index_1 position-relative">
                        <span className="col-md-5 position-absolute d-flex align-item-center justify-content-center gbqCTA">
                            <a className="ps-btn ps-btn--new glq_btn_pdp d-flex align-items-center justify-content-center">
                                <span>Get Best Quote</span>
                            </a>
                        </span>
                        <span id="pimg1"></span>
                        <div className="d-flex align-items-center justify-content-center pdp_img_pic prd_cntr position-relative">
                            <Image
                                className="max-width"
                                alt={alt || "Product Image"}
                                id="1"
                                src={mainImg}
                                width={500} 
                                height={500} 
                                priority // Ensures main image loads first
                            />
                        </div>
                    </div>
                </div>
                <div className="pdp_thmb mt15 position-relative" id="thumbnail-container37">
                    <div className="overflow-hidden t_nail">
                        <ul className="d-flex align-items-center">
                            {multipleImages.map((simages, i) => {
                                let bImg = simages?.b_img_1000 || simages?.b_img || simages?.s_img || "";
                                count++;
                                let actv = count === 1 ? "actv_thmb" : "";

                                if (count === 2 && productVideoCode) {
                                    v++;
                                    return (
                                        <li key={i} className="d-flex align-items-center overflow-hidden cp pdp_vdo t_nl">
                                            <Image
                                                src={`https://i.ytimg.com/vi/${productVideoCode}/default.jpg`}
                                                width={100}
                                                height={100}
                                                alt="Foil Print"
                                                onMouseOver={() => setmainImg(bImg)}
                                                onClick={() => {
                                                    getIndex(v);
                                                    playVideo(productVideoCode);
                                                }}
                                            />
                                        </li>
                                    );
                                } else if (simages?.s_img_125) {
                                    return (
                                        <li key={i} className={`d-flex align-items-center overflow-hidden cp t_nl ${actv}`}>
                                            <Image
                                                alt={alt}
                                                {...sampleResize}
                                                src={simages.s_img_125}
                                                width={100}
                                                height={100}
                                                loading="lazy"
                                                onMouseOver={() => setmainImg(bImg)}
                                                onClick={() => {
                                                    pageName(pageNameForm, countType, `index_${i}`);
                                                    imgset_zoom(i, "dataref");
                                                    googleTrackEvent();
                                                }}
                                            />
                                        </li>
                                    );
                                }

                                return null;
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

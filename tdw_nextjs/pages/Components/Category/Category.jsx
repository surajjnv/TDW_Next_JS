// import "@/styles/category.css";
import ProductList from './Productlist';
import ProductNavigation from "./Product_navigation";
import CategoryDescription from "./Default_Description";
import { useEffect, useRef, useState } from "react";

export default function Category({ companydata }) {
    let cat_name = companydata?.DATA?.PRDSERV[0].CAT_NAME == 'New Items' ? companydata?.DATA?.PRDSERV[0].CAT_NAME : companydata?.DATA?.PRDSERV[0].CATDETAIL.CAT_NAME;
    let cat_desc = '';
    cat_desc = companydata?.DATA?.PRDSERV[0].CATDETAIL.CAT_DESC;
    var bizType = companydata?.DATA?.COMPANYDETAIL?.BIZ;
    let city = companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_CITY;
    let country = companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_COUNTRY;
    let catId = companydata?.DATA?.PRDSERV[0]?.CAT_ID;
    var prodList = companydata?.DATA?.PRDSERV[0].PRODLIST;
    let cat_desc1 = '';
    if (/<table/i.test(cat_desc)) {
        cat_desc = cat_desc
            .replace(/<table/gi, '<div class="text txt7"><div class="tbl1"><table')
            .replace(/<\/table>/gi, '</table></div></div>');

    }
    if (cat_desc == '') {
        cat_desc = CategoryDescription(bizType, city, country, catId, prodList);
        console.log(cat_desc);

    }

    const [readMore, setReadMore] = useState(false);
    const divref = useRef(null);
    useEffect(() => {
        if (divref.current.scrollHeight > 10) {
            setReadMore(true);
        }
    }, [])
    // cat_desc = 'Ensure your paint markers last longer and perform like new with our Paint Marker Replacement Tip. This affordable and eco-friendly solution allows you to replace worn-out tips instead of buying new markers, saving you money in the long run. Perfect for professional artists, DIY enthusiasts, and industrial use, these replacement tips are compatible with a wide range of paint markers. Easy to install and durable, they ensure a smooth, consistent flow of paint, providing precision and control with every stroke.Features:Cost-Effective: Extend the life of your paint markers and save money.Durable & Reliable: High-quality material for long-lasting performance.Easy to Install: Simple and quick replacement to get your marker working again.Eco-Friendly: Reduce waste by reusing your existing markers.Versatile: Fits most standard paint markers, perfect for art, crafts, and professional applications.Upgrade your supplies while cutting costs with our Paint Marker Replacement Tip. Keep your projects on budget without compromising on quality!Dear Customers, Now shop from your favorite store Royal Stationers right from your  mobile. Get your produ'
    readMore && (
        cat_desc1 = cat_desc.substring(0, 470)
    );

    return (
        <>
            <div className="ps-home ps-home--5 pdp">
                <div className="ps-home__content pdp">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 tp_hdng">
                                <h2><span className="fw-bold clr4 ">{cat_name}</span></h2>
                            </div>
                            <div className="col-md-12">
                                <p
                                    ref={divref} className={readMore ? "clr3 lh24 hgt100 overflow-hidden position-relative he06" : "clr3 lh24 overflow-hidden position-relative he06"}
                                    id="v_more"
                                >
                                    {readMore ? cat_desc1 : cat_desc}
                                {readMore && (
                                    <>
                                        <span className="clr_main fw5">...</span>
                                        <span
                                            className="clr_main cp fw6"
                                            onClick={() => {
                                                setReadMore(false);
                                            }}
                                        >
                                            Read More
                                        </span>
                                    </>
                                )}
                                </p>
                            </div>
                        </div>
                        <div className="row mt15">
                            <ProductNavigation companydata={companydata}></ProductNavigation>
                            <div className="pdp col-md-9" id="paginate">
                                <ProductList companydata={companydata}></ProductList>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
};



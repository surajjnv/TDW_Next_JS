import "@/styles/category.css";
import ProductList from './Productlist';
import ProductNavigation from "./Product_navigation";
import BreadCrumb from "../BreadCrumb";
import CategoryDescription from "./Default_Description";
// import "@styles/category.css";
export default function Category({ companydata }) {
    let cat_name = companydata?.DATA?.PRDSERV[0].CAT_NAME == 'New Items' ? companydata?.DATA?.PRDSERV[0].CAT_NAME : companydata?.DATA?.PRDSERV[0].CATDETAIL.CAT_NAME;
    let cat_desc = '';
    cat_desc = companydata?.DATA?.PRDSERV[0].CATDETAIL.CAT_DESC;
    // console.log("cat_desc");
    // console.log(cat_desc);
    var bizType = companydata?.DATA?.COMPANYDETAIL?.BIZ;
    let city = companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_CITY;
    let country = companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_COUNTRY;
    let catId = companydata?.DATA?.PRDSERV[0]?.CAT_ID;
    var prodList = companydata?.DATA?.PRDSERV[0].PRODLIST;
    // console.log(prodList);
    if (/<table/i.test(cat_desc)) {
        cat_desc = cat_desc
            .replace(/<table/gi, '<div class="text txt7"><div class="tbl1"><table')
            .replace(/<\/table>/gi, '</table></div></div>');

    }
    if (cat_desc == '') {
        //Show Default Category Description 
        // cat_desc = 'of a wide range of products which include camlin permanent marker pen, luxor pro-e refillable white board marker - red - box of 10, luxor pro-e refillable white board marker - green - box of 10, luxor pro-e refillable white board marker, luxor permanent marker - black - box of 10 and camlin white board marker pack of 10 -green.';
        cat_desc = CategoryDescription(bizType, city, country, catId, prodList);
        console.log(cat_desc);

    }
    return (
        <>
            <div className="ps-home ps-home--5 pdp">
                <BreadCrumb Catname={cat_name}></BreadCrumb>
                <div className="ps-home__content pdp">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 tp_hdng">
                                <h2><span className="fw-bold clr4 ">{cat_name}</span></h2>
                            </div>
                            <div className="col-md-12">
                                <p
                                    className="clr3 lh24 hgt100 overflow-hidden position-relative he06"
                                    id="v_more"
                                    dangerouslySetInnerHTML={{ __html: cat_desc }}
                                ></p>
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



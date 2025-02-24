import ProductList from './Productlist';
import "@/styles/category.css";
import ProductNavigation from "./Product_navigation";
// import "@styles/category.css";

export default function Category({ companydata }) {
    return (
        <>
            <div className="ps-home ps-home--5 pdp">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav
                                className="mt15"
                            >
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="https://www.royalstationers.co.in/">Home</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="brown-cello-tapes.html">Our Product Range</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Marker Pen
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="ps-home__content pdp">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 tp_hdng">
                                <h2><span className="fw-bold clr4 ">Marker Pen</span></h2>
                            </div>
                            <div className="col-md-12">
                                <p className="clr3 lh24 hgt100 overflow-hidden position-relative he06" id="v_more" > of a wide range of products which include luxor pro-e refillable white board marker - red - box of 10, luxor pro-e refillable white board marker - green - box of 10, luxor pro-e refillable white board marker, luxor permanent marker - black - box of 10, camlin permanent marker ink 500ml-red and camlin permanent marker ink 500ml-green.</p>
                            </div>
                        </div>
                        <div className="row mt15">
                            <ProductNavigation></ProductNavigation>
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



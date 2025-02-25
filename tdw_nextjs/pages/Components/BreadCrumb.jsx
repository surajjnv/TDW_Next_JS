export default function BreadCrumb({Catname}) {
    return (<>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav
                        style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb"  className="mt15"
                    >
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="https://www.royalstationers.co.in/">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="brown-cello-tapes.html">Our Product Range</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                {Catname}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </>)

}
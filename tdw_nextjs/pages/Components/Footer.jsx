import generateNavLinks from "../../Utils/Utlility_function/navlink";

export default function Footer({ companydata }) {
    var topNav = generateNavLinks(companydata);
    var pagename = companydata?.DATA?.PAGELINKTYPE || '';
    var profile_dname = companydata?.DATA?.HEADER?.PROFILEDISPNAME;
    var profle_link = companydata?.DATA?.HEADER?.PROFILE;
    var paid_showroom_url = companydata?.URL_DETAIL?.PAID_SHOWROOM_URL;
    var franchisee = companydata?.DATA?.HEADER?.FRANCHISE_LINK != '' ? companydata?.DATA?.HEADER?.FRANCHISE_LINK : 'Franchisee';
    var franchisee_dname = franchisee + ' Enquiry Form';
    var franchisee_link = 'franchisee.html';
    var news = companydata?.DATA?.HEADER?.NEWS;
    var news_link = companydata?.DATA?.HEADER?.NEWS_DISPNAME;
    var testimonial = companydata?.DATA?.HEADER?.TESTIMONIALS;
    var testimonial_dname = companydata?.DATA?.HEADER?.TESTIMONIALS_DISPNAME;
    var ppt_path = companydata?.DATA?.HEADER?.CORPORATEPRESENTATIONLINK;
    var brochure_path = companydata?.DATA?.HEADER?.CORPORATEBROCHURELINK;
    var vdo_path = companydata?.DATA?.HEADER?.CORPORATEVIDEOLINK;
    var sitemap_link = companydata?.DATA?.HEADER?.SITEMAPLINK;
    var sitemap_title = companydata?.DATA?.HEADER?.SITEAMPTITLE;


    // Product  Listing Logic on Footer 

    var catCount = Array.isArray(topNav?.cat_complex?.subcat_link) ? topNav.cat_complex.subcat_link.length : 0;
    var checkPrdCount = 0;
    if (catCount == 1) {
        catCount = companydata?.DATA?.PRDNAV[0]?.PRODLIST.length;
        checkPrdCount = 1;
    }


    if (catCount <= 0) return null;

    const split = catCount < 10 ? Math.ceil((5 * catCount) / 10) : 5;

    const firstHalfCategories = Array.from({ length: split }, (_, displayCat) => {
        let myName = "";
        if (checkPrdCount === 1) {
            myName = companydata?.DATA?.PRDNAV?.[0]?.PRODLIST?.[displayCat]?.ITEM_NAME
                ? companyBasicDetail.getBookmark(companyBasicDetail.companyhash.DATA.PRDNAV[0].PRODLIST[displayCat].ITEM_NAME)
                : "";
        }
        const catFlName2 = companydata?.DATA?.PRDNAV?.[0]?.CATFLNAME || '';

        return (
            <li key={displayCat}>
                <span className="ln2 bg1 ds1"></span>
                <a href={checkPrdCount === 1 ? `${catFlName2}#${myName}` : topNav?.cat_complex?.subcat_link?.[displayCat]?.fl_name}>
                    {checkPrdCount === 1
                        ? companydata?.DATA?.PRDNAV?.[0]?.PRODLIST?.[displayCat]?.ITEM_NAME
                        : topNav?.cat_complex?.subcat_link?.[displayCat]?.fl_display_name}
                </a>
            </li>
        );
    });

    const catCount1 = catCount > 10 ? 8 : catCount;

    const secondHalfCategories = Array.from({ length: catCount1 - split }, (_, index) => {
        const displayCat = index + split;
        let myName = "";
        if (checkPrdCount === 1) {
            myName = companydata?.DATA?.PRDNAV?.[0]?.PRODLIST?.[displayCat]?.ITEM_NAME
                ? companyBasicDetail.getBookmark(companyBasicDetail.companyhash.DATA.PRDNAV[0].PRODLIST[displayCat].ITEM_NAME)
                : "";
        }
        const catFlName3 = companydata?.DATA?.PRDNAV?.[0]?.CATFLNAME || '';

        return (
            <li key={displayCat}>
                <span className="ln2 bg1 ds1"></span>
                <a href={checkPrdCount === 1 ? `${catFlName3}#${myName}` : topNav?.cat_complex?.subcat_link?.[displayCat]?.fl_name}>
                    {checkPrdCount === 1
                        ? companydata?.DATA?.PRDNAV?.[0]?.PRODLIST?.[displayCat]?.ITEM_NAME
                        : topNav?.cat_complex?.subcat_link?.[displayCat]?.fl_display_name}
                </a>
            </li>
        );
    });



    return (
        <>
            <footer className="ps-footer ps-footer--2 jk-footer d-none d-sm-block">
                <div className="container">
                    <div className="ps-footer__middle">
                        <div className="row m-0 justify-content-between">
                            <div className="col-md-3 p-0">
                                <div className="ps-footer--block jk-footer-block">
                                    <h2 className="ps-block__title">Company</h2>


                                    <ul className="ps-block__list">
                                        {
                                            pagename != "homepage" && (<li>
                                                <span class="ln2 bg1 ds1"></span><a href={paid_showroom_url}>Home</a></li>)
                                        }
                                        {
                                            profile_dname !== '' && (
                                                <li>
                                                    <span className="ln2 bg1 ds1"></span>
                                                    <a href={profle_link}>{profile_dname}</a>
                                                </li>
                                            )

                                        }
                                        {
                                            franchisee != '' && (<li><span className="ln2 bg1 ds1"></span><a href={franchisee_link}>{franchisee_dname}</a></li>)
                                        }
                                        {
                                            news != '' && (
                                                <li><span className="ln2 bg1 ds1"></span><a href={news_link}>{news}</a></li>
                                            )
                                        }
                                        {
                                            testimonial != '' && (
                                                <li><span className="ln2 bg1 ds1"></span><a href={testimonial}>{testimonial_dname}</a></li>
                                            )
                                        }
                                        {
                                            ppt_path != '' && (
                                                <li><span className="ln2 bg1 ds1"></span><a href="corporate-presentation.html">Corporate Presentation</a></li>
                                            )
                                        }
                                        {
                                            vdo_path != '' && (
                                                <li><span className="ln2 bg1 ds1"></span><a href="corporate-video.html">Corporate Video</a></li>
                                            )
                                        }
                                        {
                                            brochure_path != '' && (<li><span className="ln2 bg1 ds1"></span><a href="corporate-brochure.html">Corporate Brochure</a></li>)
                                        }
                                        {
                                            sitemap_title != '' && (
                                                <li><span className="ln2 bg1 ds1"></span><a href={sitemap_link}>{sitemap_title}</a></li>
                                            )
                                        }

                                        <li><span className="ln2 bg1 ds1"></span><a href="enquiry.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="ps-footer--block jk-footer-block">
                                    <h2 className="row ps-block__title">
                                        <a href="brown-cello-tapes.html" target="_top" className="col-md-12 p-0">Our Product Range</a>
                                    </h2>
                                    <div className="row all-link-wrapper">
                                        <ul className="col-md-6 ps-block__list">
                                            {firstHalfCategories}
                                        </ul>
                                        <ul className="col-md-6 ps-block__list">
                                            {secondHalfCategories}
                                            {catCount > 0 && checkPrdCount === 0 ? (
                                                <li>
                                                    <a href={topNav?.cat_complex?.fl_name} className="view-all">
                                                        <span>View All</span>
                                                        <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <g clipPath="url(#clip0_291_7611)">
                                                                <path
                                                                    d="M16.172 12.9993L10.808 18.3633L12.222 19.7773L20 11.9993L12.222 4.22134L10.808 5.63534L16.172 10.9993H4V12.9993H16.172Z"
                                                                    fill="#4F4F4F"
                                                                ></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_291_7611">
                                                                    <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </a>
                                                </li>
                                            ) : catCount > 0 && checkPrdCount === 1 ? (
                                                <li>
                                                    <a href={companyBasicDetail?.companyhash?.DATA?.PRDNAV?.[0]?.CATFLNAME || ''} className="view-all">
                                                        <span>View All</span>
                                                        <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <g clipPath="url(#clip0_291_7611)">
                                                                <path
                                                                    d="M16.172 12.9993L10.808 18.3633L12.222 19.7773L20 11.9993L12.222 4.22134L10.808 5.63534L16.172 10.9993H4V12.9993H16.172Z"
                                                                    fill="#4F4F4F"
                                                                ></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_291_7611">
                                                                    <rect width="24" height="24" fill="white" transform="matrix(1 0 0 -1 0 24)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </a>
                                                </li>
                                            ) : null}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="ps-footer--address jk-footer-address">
                                    <div className="ps-footer__title">Share Us:</div>
                                    <ul className="jk-social">
                                        <li>
                                            <a aria-label="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer.php?u=https://www.royalstationers.co.in/" className="jk-social-link">
                                                <svg width="30" height="30" viewBox="0 0 408.788 408.788">
                                                    <path fill="#475993" d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085C408.786,24.662,384.124,0,353.701,0z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a aria-label="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/cws/share?url=https://www.royalstationers.co.in/" className="jk-social-link">
                                                <svg height="30" viewBox="0 0 176 176" width="30" xmlns="http://www.w3.org/2000/svg">
                                                    <rect fill="#0077b5" height="176" rx="24" width="176"></rect>
                                                    <g fill="#fff">
                                                        <path d="m63.4 48a15 15 0 1 1 -15-15 15 15 0 0 1 15 15z"></path>
                                                        <path d="m60 73v66.27a3.71 3.71 0 0 1 -3.71 3.73h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72z"></path>
                                                    </g>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ps-footer--bottom jk-footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-7">
                                © <strong>Royal Stationers</strong>. All Rights Reserved (
                                <span className="txt6">
                                    <a
                                        href="https://www.indiamart.com/terms-of-use.html"
                                        target="_blank"
                                        onClick={() => {
                                            _gaq.push(['b._trackEvent', 'Bottom', 'termsofuse', 'd0073']);
                                            recEvent('Bottom', 'termsofuse', 'd0073');
                                        }}
                                    >
                                        <u>Terms of Use</u>
                                    </a>
                                </span>
                                )<br />
                                Developed and Managed by
                                <span className="txt6">
                                    <a
                                        href="https://corporate.indiamart.com"
                                        target="_blank"
                                        onClick={() => {
                                            _gaq.push(['b._trackEvent', 'Bottom', 'iillink', 'd0073']);
                                            recEvent('Bottom', 'iillink', 'd0073');
                                        }}
                                    >
                                        <u>IndiaMART InterMESH Limited</u>
                                    </a>
                                </span>
                            </div>
                            <div className="col-12 col-md-1 offset-md-4">
                                <a
                                    aria-label="indiamart_membership"
                                    href="https://www.indiamart.com"
                                    target="_blank"
                                    className="d-block text-end"
                                    onClick={() => {
                                        _gaq.push(['b._trackEvent', 'Bottom', 'indiamartlogo', 'd0073']);
                                        recEvent('Bottom', 'indiamartlogo', 'd0073');
                                    }}
                                >
                                    <span className="sprt ts im d-block"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}

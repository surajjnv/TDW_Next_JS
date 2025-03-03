import generateNavLinks from '../../Utils/Utlility_function/navlink'
import Search_bar from './Search_bar';

export default function TopNavigation({ companydata }) {
  var navLink = generateNavLinks(companydata);
  var pagetype = companydata?.DATA?.PAGELINKTYPE || '';
  var link = '';
  var profile_html = '';
  let catcnt = 0;
  let catnmary = [];
  let flag_page = 0;
  var prdNav = companydata?.DATA?.PRDNAV;

  // Check if sub_profile exists before iterating
  const profilelist = (navLink.profile?.sub_profile || [])
    .map((sub) => {
      link = pagetype === sub.fl_display_name ? "#" : sub.fl_name;
      return `<li class="mega-menu__column"><a href="${link}">${sub.fl_display_name}</a></li>`;
    })
    .join(''); // Convert array to string

  // console.log("Printing Navlink:", navLink);
  // console.log(navLink.profile?.sub_profile);
  // console.log(navLink.cat_complex?.subcat_link);

  if (navLink.profile) {
    profile_html = `
      <a href="${navLink.profile.fl_name}" class="d-flex conta_p align-items-center">
        About Us
        <span class="sub-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7" fill="none">
            <path d="M5.40907 4.31821L1.59091 0.5L0.5 1.59089L5.40907 6.5L10.3182 1.59089L9.22728 0.5L5.40907 4.31821Z" fill="white"></path>
          </svg>
        </span>
      </a>
      <div class="mega-menu pfl_mega_menu">
        <div class="container">
          <div class="mega-menu__row">
            <ul class="sub-menu--mega d-flex flex-wrap">${profilelist}</ul>
          </div>
        </div>
      </div>`;
  }

  // console.log(profile_html);

  //Category listing logic 



  return (
    <div className="ps-navigation ps-header--5">
      <div className="container">
        <div className="ps-navigation__left">
          <nav className="ps-main-menu">
            <ul className="menu">
              <li className="has-mega-menu">
                <a href="brown-cello-tapes.html" >
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                    <g clipPath="url(#clip0_18_48)">
                      <path d="M19.6875 18.375H1.31251C0.587605 18.375 0 17.7874 0 17.0625C0 16.3376 0.587605 15.75 1.31251 15.75H19.6875C20.4124 15.75 21 16.3376 21 17.0625C21 17.7874 20.4124 18.375 19.6875 18.375Z" fill="#fff"></path>
                      <path d="M19.6875 11.8125H1.31251C0.587605 11.8125 0 11.2249 0 10.5C0 9.77515 0.587605 9.1875 1.31251 9.1875H19.6875C20.4124 9.1875 21 9.7751 21 10.5C21 11.2249 20.4124 11.8125 19.6875 11.8125Z" fill="#fff"></path>
                      <path d="M19.6875 5.24999H1.31251C0.587605 5.24999 0 4.66238 0 3.93748C0 3.21257 0.587605 2.62497 1.31251 2.62497H19.6875C20.4124 2.62497 21 3.21257 21 3.93748C21 4.66238 20.4124 5.24999 19.6875 5.24999Z" fill="#fff"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_18_48">
                        <rect width="21" height="21" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  Our Product Range
                </a>
                <div class="mega-menu"><div class="container"><div class="mega-menu__row">
                  {prdNav?.slice(0, 7).map((prdcat, index) => {
                    // Handling conditions similar to PHP
                    if (pagetype === "category") {
                      if (flag_page === 1) {
                        if (catcnt > 4) return null; // Equivalent to `break`
                      } else {
                        if (catcnt > 4) {
                          if (
                            !(
                              companydata.DATA.PRDSERV[0]?.CAT_NAME &&
                              prdcat.CAT_NAME === companydata.DATA.PRDSERV[0].CAT_NAME
                            )
                          ) {
                            return null; // Equivalent to `continue`
                          }
                        }
                      }
                    } else {
                      if (catcnt > 4) return null; // Equivalent to `break`
                    }

                    let prdCatName = prdcat.CAT_NAME;
                    let prdcatlist = prdcat.PRODLIST;
                    let catflname1 = prdcat.CATFLNAME || "";

                    if (
                      pagetype === "category" &&
                      prdcat.CATFLNAME !== companydata.DATA.PRDSERV[0]?.CATFLNAME &&
                      !catnmary.includes(companydata.DATA.PRDSERV[0]?.CATFLNAME) &&
                      catcnt === 7
                    ) {
                      prdCatName = companydata.DATA.PRDSERV[0]?.CAT_NAME;
                      prdcatlist = companydata.DATA.PRDSERV[0]?.PRODLIST;
                    }

                    catnmary.push(prdcat.CATFLNAME);
                    catcnt++;

                    return (
                      <div className="mega-menu__column" key={index}>
                        <a href={prdcat.CATFLNAME}>
                          <h4>{prdcat.CAT_NAME}</h4>
                        </a>
                        <ul className="sub-menu--mega">
                          {prdcatlist?.slice(0, 5).map((catprd, i) => (
                            <li key={i}>
                              <a href={`${catflname1}#${catprd.ITEM_NAME}`}>
                                {catprd.ITEM_NAME}
                              </a>
                            </li>
                          ))}
                          <a href={prdcat.CATFLNAME} className="mm_va fs14 tdu clr5">
                            View All Products
                          </a>
                        </ul>
                      </div>
                    );
                  })}
                </div></div></div>
              </li>

              <li className="has-mega-menu">
                <a href="https://www.royalstationers.co.in/">Home</a>
              </li>

              <li className="has-mega-menu" dangerouslySetInnerHTML={{ __html: profile_html }} />

              <li className="has-mega-menu">
                <a href="enquiry.html" className="">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Search_bar prdNav = {prdNav}></Search_bar>
      </div>
    </div>
  );
}

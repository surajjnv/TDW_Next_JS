import { changeHttpPath } from "../Utlility_function/common_function";
import TopNavigation from "./Topnavigation";
import Breadcrumb from "./BreadCrumb";
const Header = ({ companydata, mainColor, cDetails }) => {
  const compName =
    companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_COMPANY || "Company Name";
  const gstNumber =
    companydata?.DATA?.FACTSHEET?.[0]?.DATA?.find(
      (item) => item.TITLE === "GST No."
    )?.DATA || "Not Available";
  const location = [
    companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_CITY,
    companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_DISTRICT,
    companydata?.DATA?.COMPANYDETAIL?.DIR_SEARCH_STATE,
  ]
    .filter(Boolean)
    .join(", ");

  const locality = companydata?.DATA?.COMPANYDETAIL?.GLUSR_USR_LOCALITY || "";
  const CompanyName = companydata?.DATA.COMPANYDETAIL.DIR_SEARCH_COMPANY || '';
  const CompanyLogo = changeHttpPath(companydata.DATA.COMPANYDETAIL.COMPANY_LOGO) || '';
  const CompanyLogo120 = changeHttpPath(companydata.DATA.COMPANYDETAIL.COMPANY_LOGO_120 )|| '';
  const State = companydata.DATA.COMPANYDETAIL.DIR_SEARCH_STATE || '';
  const City = companydata.DATA.COMPANYDETAIL.DIR_SEARCH_CITY || '';
  const TSCODE = companydata.DATA.COMPANYDETAIL.TSCODE || '';
  const CompanyIso = companydata.URL_DETAIL.ISO_CERT_NAME || '';
  const pagename = companydata?.DATA?.PAGELINKTYPE;
  // const cny_logo = cDetails?.CompanyLogo;
  // console.log("company_logo" + cny_logo);
  // const { req } = context;

  // Check if cookies exist
  // const cookies = req.headers.cookie || '';

  // Check for specific cookies
  // const hasIpLoc = cookies.includes('iploc=');

  // if(!hasIpLoc){

  // }


  return (
    <>
      <div className="position-fixed d-none cp align-items-center justify-content-center" id="bckTop" onclick="window.scrollTo({ 'behavior': 'smooth', 'left': 0, 'top': 0 });"><svg enable-background="new 0 0 170.08 170.08" viewBox="0 0 170.08 170.08" width="30" height="30"><g><path d="m39.65 101.37c-2.34 2.34-2.34 6.14 0 8.48s6.14 2.34 8.48 0l36.9-36.9 36.9 36.9c2.34 2.34 6.14 2.34 8.48 0s2.34-6.14 0-8.48l-41.13-41.14c-2.34-2.34-6.14-2.34-8.48 0z" fill="#1a1a1a"></path></g></svg>
      </div>
      <div className="ps-page ps-layout">
        <header className="ps-header ps-header--5">
          <div className="ps-header__middle bg-white">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <div className="ps-logo">
                    <div className="dflt_logo d-flex justify-content-center align-items-center">
                      <div className="cmpny_logo d-flex justify-content-center align-items-center">
                        <img
                          src={CompanyLogo}
                          alt={compName}
                        />
                      </div>
                      <div className="cmpny_nme_loc_gst">
                        <h1>
                          <span className="fw-bolder lne1txt overflow-hidden">
                            {compName}
                          </span>
                        </h1>
                        <div className="d-flex align-items-center loc_gst mt5">
                          <p className="d-flex align-items-center fs14">
                            <svg
                              width="13"
                              height="17"
                              viewBox="0 0 13 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12.7892 6.32762C12.6144 3.20445 9.93954 0.646596 6.6974 0.504212C6.59601 0.5 6.49548 0.5 6.39758 0.5C5.15248 0.500357 3.93452 0.850787 2.89297 1.50835C1.85142 2.16591 1.03151 3.10203 0.533711 4.20201C0.0359159 5.302 -0.118141 6.51805 0.0904198 7.70116C0.29898 8.88427 0.861098 9.98304 1.70789 10.8628C2.34676 11.5282 2.94147 12.2316 3.48849 12.9691L5.9509 16.2785C6.00169 16.347 6.06872 16.4028 6.14641 16.4414C6.2241 16.4799 6.31021 16.5 6.39758 16.5C6.48495 16.5 6.57106 16.4799 6.64875 16.4414C6.72644 16.4028 6.79347 16.347 6.84426 16.2785L9.3058 12.9691C9.83521 12.2458 10.4155 11.5584 11.0427 10.9117C11.6446 10.304 12.1103 9.58342 12.4107 8.79478C12.7112 8.00613 12.84 7.16632 12.7892 6.32762ZM6.39758 8.41956C5.98556 8.41973 5.58273 8.30212 5.24006 8.08161C4.8974 7.86111 4.63027 7.54761 4.47248 7.18076C4.31468 6.81392 4.2733 6.41021 4.35358 6.0207C4.43386 5.63119 4.63218 5.27338 4.92346 4.99251C5.21475 4.71165 5.58591 4.52035 5.99 4.44282C6.3941 4.36528 6.81297 4.40499 7.19365 4.55692C7.57433 4.70885 7.8997 4.96619 8.12863 5.29637C8.35756 5.62655 8.47975 6.01475 8.47975 6.41187C8.47929 6.94406 8.25979 7.45434 7.86944 7.83073C7.47908 8.20713 6.94974 8.41889 6.39758 8.41956Z" fill={mainColor}
                              />
                            </svg>
                            <span>{locality} {location || "Location Not Available"}</span>
                          </p>
                          <p className="d-flex align-items-center fs14">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                              <path d="M8.71665 0.5C4.34439 0.5 0.799988 4.08172 0.799988 8.5C0.799988 12.9183 4.34439 16.5 8.71665 16.5C13.0889 16.5 16.6333 12.9183 16.6333 8.5C16.6333 4.08172 13.0889 0.5 8.71665 0.5ZM13.1188 5.88032C9.84309 9.08344 8.20486 12.4772 8.18863 12.5116C8.18099 12.5275 8.16238 12.5623 8.15397 12.5775C8.08661 12.7009 8.00125 12.7855 7.87629 12.8678C7.87378 12.8695 7.87059 12.8687 7.86798 12.8704C7.73452 12.9562 7.61024 13.0081 7.45137 13.0131C7.44306 13.0133 7.40605 13.0131 7.39745 13.0131C7.39745 13.0131 7.39716 13.0129 7.39687 13.0129L7.39619 13.0131C7.26863 13.0131 7.13874 12.985 7.01582 12.9256C7.00944 12.9225 7.00586 12.9165 6.99968 12.9133C6.97591 12.9012 6.92543 12.8758 6.90272 12.8614C6.80879 12.8014 6.78266 12.7805 6.71965 12.6939C6.70893 12.6794 6.67101 12.627 6.66096 12.6116C6.65246 12.5975 5.79739 11.2944 4.45218 10.4256C4.0432 10.1616 3.92337 9.61313 4.18468 9.19907C4.44599 8.785 4.98795 8.66782 5.39847 8.92875C6.17303 9.42866 6.79906 10.0282 7.26109 10.5391C8.05527 9.18198 9.57694 6.87338 11.8972 4.60532C12.2451 4.26157 12.8018 4.2725 13.1389 4.62563C13.4775 4.97719 13.4682 5.53969 13.1188 5.88032Z" fill={mainColor}></path></svg>
                            <span>
                              GST No.- <span className="fw-bold">{gstNumber}</span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="jk-header-right d-flex align-items-center justify-content-end">
                    <div className="text-right">
                      <span className="sprt ts d-block cp"></span>
                    </div>
                    <div onclick="imgset_zoom('sendSMS','Send_sms_email');_gaq.push(['b._trackEvent','Top','SendSms/1/homepage','d0073']);recEvent('Top','SendSms/1/homepage','d0073');" id="pns" className="ps-footer--contact mt-0 cp"><div className="d-flex align-items-center">
                      <svg width="25" height="24" viewBox="0 0 25 24"><path d="M14.4912 4.80031e-05C14.3055 4.80031e-05 14.155 0.150515 14.155 0.336254C14.155 0.521994 14.3055 0.67246 14.4912 0.67246C17.0755 0.677714 19.5526 1.70677 21.3797 3.53396C23.2068 5.36134 24.2359 7.83821 24.2412 10.4223C24.2412 10.6081 24.3916 10.7585 24.5774 10.7585C24.7631 10.7585 24.9136 10.6081 24.9136 10.4223C24.9074 7.66007 23.8072 5.01279 21.8541 3.05943C19.9009 1.10617 17.2534 0.0061958 14.4912 0L14.4912 4.80031e-05Z"></path><path d="M14.4948 3.98994C16.1984 3.99809 17.8298 4.67812 19.0339 5.88234C20.238 7.08636 20.9171 8.71704 20.9234 10.4191C20.9234 10.6066 21.0755 10.7588 21.2633 10.7588C21.4509 10.7588 21.6033 10.6066 21.6033 10.4191C21.597 8.53699 20.8461 6.73348 19.5146 5.40191C18.1833 4.07034 16.3788 3.31865 14.495 3.31055C14.3072 3.31055 14.155 3.46254 14.155 3.65017C14.155 3.8378 14.3072 3.9898 14.495 3.9898L14.4948 3.98994Z"></path><path d="M14.5045 7.32004C15.3236 7.32101 16.1088 7.64689 16.688 8.22592C17.2673 8.80515 17.5932 9.59046 17.594 10.4095C17.594 10.6024 17.7506 10.759 17.9434 10.759C18.1365 10.759 18.2929 10.6024 18.2929 10.4095C18.2922 9.40499 17.8925 8.442 17.1825 7.73172C16.4721 7.02144 15.5089 6.62204 14.5045 6.62109C14.3114 6.62109 14.155 6.77769 14.155 6.97057C14.155 7.16363 14.3114 7.32004 14.5045 7.32004Z"></path><path d="M4.42173 11.7953C6.15342 15.1815 8.90545 17.9373 12.2884 19.6728L14.9143 17.0432C15.0716 16.8869 15.2693 16.7774 15.4851 16.7268C15.7009 16.6762 15.9265 16.6865 16.1368 16.7567C17.514 17.2089 18.9544 17.4383 20.4039 17.4362C20.7211 17.4371 21.0251 17.5632 21.2498 17.7871C21.4745 18.0111 21.6017 18.3147 21.6038 18.6321V22.8041C21.6017 23.1214 21.4745 23.4251 21.2498 23.649C21.0251 23.873 20.7211 23.9991 20.4039 24C15.0165 24.0003 9.84966 21.8596 6.03955 18.0488C2.22945 14.238 0.0881707 9.06904 0.0866699 3.67881C0.0887572 3.3615 0.215977 3.05784 0.44066 2.83389C0.665343 2.60994 0.969382 2.4838 1.28653 2.48291H5.47444C5.79045 2.48411 6.09307 2.61071 6.31589 2.83492C6.53871 3.05913 6.66358 3.36263 6.66297 3.67881C6.66056 5.12833 6.8898 6.56891 7.34208 7.94599C7.4101 8.15668 7.4186 8.38208 7.36667 8.59731C7.31474 8.81254 7.20438 9.00923 7.04778 9.16567L4.42173 11.7953Z"></path>
                      </svg>
                      <div><div className="ps-footer__fax lh-sm"><span id="pns_details">Call 08044457654</span></div>
                        <p className="ps-footer__work m-0">23% Response rate</p>
                      </div>
                    </div></div>
                    <div onclick="imgset_zoom('sendEmail','Send_sms_email');_gaq.push(['b._trackEvent','Top','SendEmail/1/homepage','d0073']);recEvent('Top','SendEmail/1/homepage','d0073');" className="ps-header__right p-0"><button className="ps-btn ps-btn--warning"><svg xmlns="https://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22"><path d="M24.3 0.500038H2.70003C1.99117 0.499281 1.31073 0.774931 0.807495 1.26678C0.304259 1.75862 0.0191049 2.42668 0.0142244 3.12503L0 18.875C0.00934173 19.5744 0.297993 20.242 0.803332 20.7333C1.30867 21.2246 1.99006 21.5 2.70003 21.5H24.3C25.0111 21.5037 25.6947 21.2294 26.2008 20.7374C26.707 20.2453 26.9944 19.5755 27 18.875V3.12503C26.9944 2.42448 26.707 1.75473 26.2008 1.26264C25.6947 0.770557 25.0111 0.496309 24.3 0.500038ZM24.3 5.12002C24.301 5.31093 24.2518 5.49886 24.1572 5.66546C24.0626 5.83206 23.9257 5.97165 23.76 6.07062L16.4842 10.4932C15.5871 11.0383 14.554 11.327 13.5 11.327C12.446 11.327 11.4129 11.0383 10.5158 10.4932L3.24004 6.07062C3.07432 5.97165 2.93744 5.83206 2.8428 5.66546C2.74816 5.49886 2.69898 5.31093 2.70003 5.12002C2.70051 4.92088 2.7549 4.72546 2.85754 4.55391C2.96019 4.38235 3.1073 4.24086 3.28393 4.14402C3.46055 4.04717 3.66019 3.99847 3.86227 4.00294C4.06436 4.00741 4.26164 4.06488 4.43368 4.16943L10.729 8.00121C11.5624 8.50637 12.5215 8.77383 13.5 8.77383C14.4785 8.77383 15.4376 8.50637 16.271 8.00121L22.5663 4.16943C22.7384 4.06488 22.9356 4.00741 23.1377 4.00294C23.3398 3.99847 23.5394 4.04717 23.7161 4.14402C23.8927 4.24086 24.0398 4.38235 24.1425 4.55391C24.2451 4.72546 24.2995 4.92088 24.3 5.12002Z"></path></svg><span>Send Email</span></button></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <TopNavigation companydata={ companydata}></TopNavigation>
        </header>
      </div>
    <Breadcrumb  pagelinktype={pagename} companydata ={companydata}></Breadcrumb>
    </>
  );
};

export default Header;

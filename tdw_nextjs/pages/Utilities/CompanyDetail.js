function changeHttpPath(path) {
    if (path && typeof window !== 'undefined' && window.location.protocol === 'https:') {
      path = path.replace(/^http:/, 'https:');
    }
    return path;
  }



export default function CompanyDetails(companyData) {
    const Companydetail = {
      CompanyName: '',
      CompanyLogo120: '',
      CompanyLogo: '',
      CompanyIso: '',
      State: '',
      City: '',
      TSCODE: ''
    };
  
    if (companyData && companyData.DATA && companyData.DATA.COMPANYDETAIL) {
      Companydetail.CompanyName = companyData.DATA.COMPANYDETAIL.DIR_SEARCH_COMPANY || '';
      Companydetail.CompanyLogo = changeHttpPath(companyData.DATA.COMPANYDETAIL.COMPANY_LOGO) || '';
      Companydetail.CompanyLogo120 = changeHttpPath(companyData.DATA.COMPANYDETAIL.COMPANY_LOGO_120 )|| '';
      Companydetail.State = companyData.DATA.COMPANYDETAIL.DIR_SEARCH_STATE || '';
      Companydetail.City = companyData.DATA.COMPANYDETAIL.DIR_SEARCH_CITY || '';
      Companydetail.TSCODE = companyData.DATA.COMPANYDETAIL.TSCODE || '';
      Companydetail.CompanyIso = companyData.URL_DETAIL.ISO_CERT_NAME || '';
    }
  
    return Companydetail;
  }



  
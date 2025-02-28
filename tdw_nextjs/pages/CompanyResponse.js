
import { ForbiddenRoute_afterAPI } from './getForbiddenRoute';
import { RedirectRoute_afterAPI } from './getRedirectionRoute';
import { ForbiddenRoute_beforeAPI } from './getForbiddenRoute';
import { RedirectRoute_beforeAPI } from './getRedirectionRoute';
import {Url_validation_and_security} from './Url_validation_and_security';

export default async function GetCompanyResponse(context) {

    // console.log("Printing context object!!");
    // console.log(context);
    const host = context.req.headers.host; // Host (e.g., localhost:3000 or example.com)
    const protocol = context.req.headers["x-forwarded-proto"] || "http"; // Protocol (http or https)
    let pathname = context.resolvedUrl; // Path and query (e.g., /about?name=John)
    console.log("pathname1:", pathname);
    // Construct the full URL
    const fullUrl = `${protocol}://${host}${pathname}`;
    console.log("Full URL:", fullUrl);
    const reqHeaders = context.req.headers;

    // Extract domain name
    let domainName = reqHeaders["host"] || "";
    console.log("Domain Name:", domainName);

    if (domainName === "localhost:3000" || domainName === "localhost:3001") {
        domainName = "royalstationers-co-in";
    } else {
        domainName = domainName.replace(/\./g, "-");
    }
    if(pathname == '/sitemap.html'){
        pathname = 'sitenavigation.html'
    }
     pathname = pathname.replace(/^\//, "");
     ForbiddenRoute_beforeAPI(context);
     RedirectRoute_beforeAPI(context);
     Url_validation_and_security(context);
    if (pathname === "/") pathname = "";

    const company_api = `http://company.imutils.com/wservce/company/detail/token/imobile@15061981/glusrid//alias/${domainName}/cat_link/${pathname}/modid/tdw/`;
    console.log("API URL:", company_api);
    console.log("====test===");

    // Fetch company data
    const res = await fetch(company_api, { cache: "no-store" });
    if (!res.ok) {
        throw new Error(`Failed to fetch company data: ${res.statusText}`);
    }
    const companyData = await res.json();

    ForbiddenRoute_afterAPI(context,companyData);
    RedirectRoute_afterAPI(context,companyData);
    return companyData;
}
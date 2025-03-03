import { ForbiddenRoute_afterAPI } from '../styles/getForbiddenRoute';
import { RedirectRoute_afterAPI } from '../Utils/Utlility_function/getRedirectionRoute';
import { ForbiddenRoute_beforeAPI } from '../styles/getForbiddenRoute';
import { RedirectRoute_beforeAPI } from '../Utils/Utlility_function/getRedirectionRoute';
import {Url_validation_and_security} from '../Utils/Utlility_function/Url_validation_and_security';


export default async function GetCompanyResponse(context) {
    if (typeof window !== "undefined") {
        // Running on the client, should not execute
        console.warn("GetCompanyResponse should not run on the client!");
        return null;
    }

    if (!context?.req) {
        console.error("GetCompanyResponse is missing context.req, possibly running during build.");
        return null;
    }

    const host = context.req.headers?.host;
    const protocol = context.req.headers["x-forwarded-proto"] || "http";
    let pathname = context.resolvedUrl;

    const fullUrl = `${protocol}://${host}${pathname}`;
    console.log("Full URL:", fullUrl);

    const reqHeaders = context.req.headers;
    let domainName = reqHeaders["host"] || "";

    if (domainName === "localhost:3000" || domainName === "localhost:3001") {
        domainName = "royalstationers-co-in";
    } else {
        domainName = domainName.replace(/^www\./, "").replace(/\./g, "-");
    }

    if (pathname === "/sitemap.html") {
        pathname = "sitenavigation.html";
    }
    pathname = pathname.replace(/^\//, "");

    ForbiddenRoute_beforeAPI(context);
    RedirectRoute_beforeAPI(context);
    Url_validation_and_security(context);

    if (pathname === "/") pathname = "";

    const company_api = `http://company.imutils.com/wservce/company/detail/token/imobile@15061981/glusrid//alias/${domainName}/cat_link/${pathname}/modid/tdw/`;

    try {
        const res = await fetch(company_api, { cache: "no-store" });

        if (!res.ok) {
            throw new Error(`Failed to fetch company data: ${res.statusText}`);
        }

        const companyData = await res.json();

        ForbiddenRoute_afterAPI(context, companyData);
        RedirectRoute_afterAPI(context, companyData);

        return companyData;
    } catch (error) {
        console.error("Error fetching company data:", error);
        return null;
    }
}

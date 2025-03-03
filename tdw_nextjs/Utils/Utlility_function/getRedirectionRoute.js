
export function RedirectRoute_beforeAPI(context) {
    let pathname = context.resolvedUrl; // Get the resolved URL from context
    const domainName = context.req.headers.host; // Get the domain name from the request headers
    // console.log("From Redirection !!");
    // console.log(domainName);
    pathname = pathname.replace(/^\//, ""); // Remove leading slash from the pathname
    
    if (/^m\./.test(domainName)) {
        const newDomain = domainName.replace(/^m\./, "www."); // Replace "m." with "www."
        const newUrl = `${context.req.headers["x-forwarded-proto"] || "http"}://${newDomain}/${pathname}`;

        context.res.writeHead(302, { Location: newUrl });
        context.res.end();
        return; // Stop further execution
    }
    if (/\s+/.test(pathname) && /\.html$/.test(pathname)) {
        // Remove spaces from the URL
        const cleanedURL = pathname.replace(/\s+/g, "");
        const newUrl = `${context.req.headers["x-forwarded-proto"] || "http"}://${domainName}${cleanedURL}`;

        // Redirect with 301 (Permanent)
        context.res.writeHead(302, { Location: newUrl });
        context.res.end();
        return;
    }

    if(pathname == 'sitenavigation.html'){
        const newUrl = `http://${domainName}/sitemap.html`; // Construct the new URL

        // Redirect to sitemap.html with 301 (Permanent Redirect)
        context.res.writeHead(302, { Location: newUrl });
        context.res.end();
        return;
    }

    // Define redirection mapping
    const RedirectRoute = {
        "query.html": "enquiry.html",
        "redirect.html": "enquiry.html",
    
        // New routes redirecting to "franchisee.html"
        "franchisee-enquiry-form.html": "franchisee.html",
        "distributor-enquiry-form.html": "franchisee.html",
        "wholesaler-enquiry-form.html": "franchisee.html",
        "agent-enquiry-form.html": "franchisee.html",
        "retailer-enquiry-form.html": "franchisee.html",
        "vendor-enquiry-form.html": "franchisee.html",
        "pharma-franchisee-enquiry-form.html": "franchisee.html",
    };

    for (const key in RedirectRoute) {
        if (pathname === key) {
            const newUrl = `http://${domainName}/${RedirectRoute[key]}`; // Construct the new URL
            
            // Redirect to the new URL
            context.res.writeHead(302, { Location: newUrl });
            context.res.end();
            return; // Prevent further execution
    }

}
// If no redirection is required, return false
return false;
}

export function RedirectRoute_afterAPI(context,data) {
    console.log("Redirect after API logic starts");
    const URL_DETAIL = data?.URL_DETAIL;
    const URL = URL_DETAIL?.URL;
    // console.log(URL);

    const HEADER = data?.HEADER;
    let PAGE_HEADER_STATUS = data?.PAGE_HEADER_STATUS;

    // let page_requested = context.resolvedUrl.replace(/^\//, ""); // Remove leading slash
    let pathname = context.resolvedUrl;
    pathname = pathname.replace(/^\//, "");
    let pagename_fetch = data?.PAGELINKTYPE || pathname.replace(/\.html$/, "");

    
    if(URL == '/revomacindustries' && pathname == 'redirect_after_api.html'){
        context.res.writeHead(302, { Location: 'https://www.revomac.net/about-us.html' });
            context.res.end();
            return; // Prevent further execution
    }

    if (URL_DETAIL?.URL_STATUS === "301") {
        let rdrct_url = "";
        if (URL_DETAIL?.URL && URL_DETAIL.URL !== "") {
            rdrct_url = URL_DETAIL.URL.replace(/(.*)\//, ""); 
        }
        let pathname = context.resolvedUrl;
        pathname = pathname.replace(/^\//, ""); // Remove leading slash

        let redirectBase = context.req.url.replace(/(.*)\/.*(\.html|\.htm)/, "$1/");
        let redirectURL = `${redirectBase}${rdrct_url}`;

        // Perform 301 Permanent Redirect
        context.res.writeHead(302, { Location: redirectURL });
        context.res.end();
        return; // Prevent further execution
    }

    // Check if page should be normalized
    const pageNormalizationList = [
        "about-us.htm", "aboutus.htm", "profile.htm", "about.htm", "about_us.htm",
        "contact.htm", "contacts.htm", "contact-us.htm", "contact_us.htm", "contactus.htm"
    ];

    if (pageNormalizationList.includes(pagename_fetch)) {
        pagename_fetch = pagename_fetch.replace(/\.html|\.htm$/, "");
    }

    // Page alias mapping
    const pageArray = {
        homepage: "index",
        sitenavigation: "sitemap",
        cinpage: "registration-directors-info"
    };

    if (pageArray[pagename_fetch]) {
        pagename_fetch = pageArray[pagename_fetch];
    }

    if (
        !["pdf1", "search", "thankyou", "franchisee", "sitemap", "sitenavigation"].includes(pagename_fetch) &&
        PAGE_HEADER_STATUS === 404
    ) {
        let redirect = context.req.url.replace(/(.*)\/.*(\.html|\.htm)/, "$1/");

        if (
            (pagename_fetch === "about-us" || pagename_fetch === "aboutus" || pagename_fetch === "profile" ||
                pagename_fetch === "about" || pagename_fetch === "about_us") &&
            HEADER?.PROFILE_FINAL &&
            HEADER?.ABOUTUS_FCP === 1
        ) {
            // Redirect to correct about-us page
            context.res.writeHead(302, { "Location": redirect + HEADER.PROFILE_FINAL });
            context.res.end();
            return;
        } else if (pagename_fetch === "new-items" && HEADER?.CAT_INDEX) {
            // Redirect to category index
            context.res.writeHead(302, { "Location": redirect + HEADER.CAT_INDEX });
            context.res.end();
            return;
        } else if (["contact", "contacts", "contact-us", "contact_us", "contactus"].includes(pagename_fetch)) {
            // Redirect to enquiry.html
            context.res.writeHead(302, { "Location": redirect + "enquiry.html" });
            context.res.end();
            return;
        } 
}
}



export function RedirectRoute_beforeAPI(context) {
    let pathname = context.resolvedUrl; // Get the resolved URL from context
    const domainName = context.req.headers.host; // Get the domain name from the request headers
    // console.log("From Redirection !!");
    // console.log(domainName);
    pathname = pathname.replace(/^\//, ""); // Remove leading slash from the pathname

    // Define redirection mapping
    const RedirectRoute = {
        "query.html": "enquiry.html",
        "redirect.html":"enquiry.html",
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

    const URL = data?.URL_DETAIL?.URL;
    console.log(URL);
    let pathname = context.resolvedUrl;
    pathname = pathname.replace(/^\//, "");
    if(URL == '/revomacindustries' && pathname == 'redirect_after_api.html'){
        context.res.writeHead(302, { Location: 'https://www.revomac.net/about-us.html' });
            context.res.end();
            return; // Prevent further execution
    }
}

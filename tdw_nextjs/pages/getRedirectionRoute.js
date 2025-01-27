
export function RedirectRoute_beforeAPI(context) {
    let pathname = context.resolvedUrl; // Get the resolved URL from context
    const domainName = context.req.headers.host; // Get the domain name from the request headers
    console.log("From Redirection !!");
    console.log(domainName);
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

// export function RedirectRoute_afterAPI(data, url) {
//     console.log("Redirect after API logic starts");

//     const URL_DETAIL = data?.URL_DETAIL?.URL;


//         console.log("Redirecting to https://www.revomac.net/");
//         return "https://www.revomac.net/";
    

//     // console.log("No redirection required for URL:", URL_DETAIL);
//     // return null; // Explicitly return null if no redirection is required
// }

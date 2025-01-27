export function ForbiddenRoute_beforeAPI(context) {
    //list of all forbidden Route
    let pathname = context.resolvedUrl;
    pathname = pathname.replace(/^\//, "");
    console.log("Inside forbidden functn");
    const forbiddenRoutes = [
      /\.php/,
      /\/wp-/,
      /\/wordpress\//,
      /\/href=/i,
      /\/reg\.html/,
      /\/member\//,
      /\/dglobby/,
      /\/hhcp/,
      /\/pc\.html/,
      /\/p2p\.html/,
      /\/zhuces\.php/,
      /\/main\.html/,
      /\/PageRegister\?uid=/,
      /\/\?c=Lottery/,
      /\/pc\//,
      /\/game\//,
      /\/home\//,
      /\/regpage\.do/,
      /\/Lobby\//,
      /\/lottery\//,
      /\/page\//,
      /\/v\//,
      /\/api\//,
      /\/lotteryV3\//,
      /\/main\//,
      /\/EleGame\//,
      /\/views\//,
      /\/\/\?s=index/,
      /\/\/\?a=fetch/
    ];
  
    // Check against forbidden routes
    const isForbidden = forbiddenRoutes.some((pattern) => pattern.test(pathname));
    console.log(isForbidden);
    if (isForbidden) {
        context.res.statusCode = 403;
        context.res.setHeader('Content-Type', 'text/html');
        context.res.end('<h1>Forbidden: Access to this resource is restricted.</h1>');
        return { props: {} }; // Prevent further rendering
      }
    
      return { props: { message: "Not Forbidden" } };
  }
  
  
  
  export function ForbiddenRoute_afterAPI(url, data) {
    const URL_DETAIL = data?.URL_DETAIL?.URL;
  
    if (!URL_DETAIL || URL_DETAIL.URL_STATUS === "404") {
      // Create a 404 response and terminate further execution
      return new Response("404 Not Found", {
        status: 404,
        headers: { "Content-Type": "text/html" },
      });
    }
  
    // No further processing; this behaves like exit in PHP
    return null;
  }
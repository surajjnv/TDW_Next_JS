export function ForbiddenRoute_beforeAPI(context) {
  //list of all forbidden Route
  let pathname = context.resolvedUrl;
  let referrer = context.req.headers.referer;
  console.log("referrer" + referrer);
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
    /\/\/\?a=fetch/,
    /\\s/, /=/,
    /\.pdf$/,
    /\s+|%20/,
  ];

  const forbdn_referrer = [/anti-crisis-seo/, /go\.mail\.ru/, /:80/,];
  const validExtensions = /\.(html|htm|sitemap\.xml|BingSiteAuth\.xml|pdf)$/;
  const validFileName = /^[\w-]+(\.html|\.htm|\.xml|\.pdf)$/;

  console.log("Pathname:" + pathname);
  console.log("Referrer:" + referrer);

  // Check against forbidden routes
  let isForbidden_path = forbiddenRoutes.some((pattern) => pattern.test(pathname));
  let isForbidden_referrer = forbdn_referrer.some((pattern) => pattern.test(referrer));
  if (
    !validExtensions.test(pathname) ||
    (validExtensions.test(pathname) && !validFileName.test(pathname))
  ) {
    isForbidden_path = true;
  }
  console.log(isForbidden_path);
  if (isForbidden_path || isForbidden_referrer) {
    context.res.statusCode = 403;
    context.res.setHeader('Content-Type', 'text/html');
    context.res.end('<h1>Forbidden: Access to this resource is restricted.</h1>');
    return { props: {} }; // Prevent further rendering
  }

  return { props: { message: "Not Forbidden" } };
}



export function ForbiddenRoute_afterAPI(context, data) {
  const URL = data?.URL_DETAIL?.URL;
  console.log(URL);
  let pathname = context.resolvedUrl;
  pathname = pathname.replace(/^\//, "");
  if (URL == '/revomacindustries' && pathname == 'forbidn_after_api.html') {
    context.res.statusCode = 403;
    context.res.setHeader('Content-Type', 'text/html');
    context.res.end('<h1>Forbidden: Access to this resource is restricted.</h1>');
    return { props: {} };
  }
  return { props: { message: "Not Forbidden" } };
}
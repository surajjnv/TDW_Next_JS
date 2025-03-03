export  function Url_validation_and_security(context){
    const { req } = context;
    const page_requested = req.url; // Get the requested URL
    const host = req.headers.host;

    if (/BingSiteAuth\.xml/.test(page_requested)) {
        const xmlData = `<?xml version="1.0"?>
<users>
    <user>6BA03125DEBF042AABCDD3D10BD4C12E</user>
    <user>4A943F4426F386176AF4D2A7E33F7C5B</user>
    <user>2C3E4DBB437EC1122E16AA9410B71480</user>
    <user>B2DBEE6B191E4BEE7CD2A6E60AA7804A</user>
    <user>939186B959FD1F68DA279746C06845AF</user>
    <user>45F61A87FA1B2D963044864F659E8AEA</user>
    <user>25D059C13A35C8867DBE4A03A7498F20</user>
    <user>0E4DDCEADA01EB61F581DC9E0584229D</user>
    <user>FB52CA12D534543435CC5536112B045E</user>
    <user>B822C9FADB008874A89685359243BC67</user>
    <user>AC53CE9B2FDBAA700DCDD1CAC09A4FEA</user>
    <user>05B8AF3B8542824DBD309F975C630759</user>
    <user>A1EB6E85A7888F41BFF55CC77ABCD1B0</user>
    <user>5957FD5368ED604D06D51F68ECF24472</user>
    <user>82DD3997EDA704881FEBE0C0B9131284</user>
</users>`;

        context.res.setHeader("Content-Type", "text/xml");
        context.res.write(xmlData);
        context.res.end();
        return { props: {} }; // Prevent further rendering
    } 

    // Google Site Verification Handling
    const googleSiteVerificationPattern = /google(?:a39ce0134aeec0ad|9f8e0db324bc4df6|89ca876575fd986b|57773ce3b13b6fc4|45a83ccbab8c7bb0|18239cda9255d207|1346b3d57c4f37af|08ab2478871faa74|b619603248852498|4a6c374e78791cf7|a6fd6d28e90ca1c2|530fe6991603cc0e|07830d5567b50e2b|6f9e08cadb14abad|c75be2ff03a967a0|e7168b64de0192d4|43a4891f13ceeb1c|4519147dbc6961ec|8a1a37d4ac57705f|cf88e6cccae584cd|fe2d1f6a365fe6ae|bf53fd9234c56b7f|c1e9ef1750e5781d|9ed9cdd730276e6c|e657fe3a3e0b47e8|c0dc063f9f8f1164|71f9cea0092891ec|93dc1528b711c9cf|152be1d32593e49c|587346d7926122c7|e467bc93cd5b0824|55b0579a21fb6fff|e248e33022e25f1a|2b1f323838179d79|4d2411b035ef8fd4|b84c583b75aae0fd|fa687834fb9da196|35f165a47eadcee7|d72620bf62ad8e9e|34a21211283d89d3|a49ebf09847c8354|ad2cccd9af054d0e|91124eab3a65d04d|7233f84e959df692|67df888ea463fddf|03b690d0e581541b|ff77ca2c02256e42|e64e16108f8b1992|1fd9e5dd10e941cf|b00fe6dab73f506a|09d9bb1a1c6d4396|11087d56fd2da2ff|ff8e49eb593f9979|f60e6897c8ac54a7|ff7243a1808d95ee|a4878ea6d8a63e1b|cc39c0f7bc57c490|5050466ee297b2b3|22c1fd2d1fe0c944|b14453149cd503d3|b7c7aa2a88794e1f|385507e71a658240|2f54fa6b1c39f884|b2e79103fe9c99e4|7ff57f64cc2c23dc|293c74fdfa46ccb5|c60b81cb6f359b9a|593ae1e8489f588e|aa79f583de89f883|22165a4fba957fb0|e0c3189033df91f2|8104bd49f3356dfb|c0c9ca7d2c6db81c|c1668e48b23689ab|4e575501d24cd3ff|9cad4ac5615ee2a7|e4f613bb150dd3c5|5f4593a71a47eb01|9f5890993d94b003|93f360c766f9dbd0|3392cb32116686b0|6fec2aebccc84c29|f8f668ab6f47dfa3|b1c2e9565a6f0fd6|ffb0bb5bdaff53b5|a2e40c94c06c053f|cad7933fe29a9c59|14d4ba8f47f95410|9be2473fd7233bee|b0d1c8bc9bbf72ab|a2a2208745b0f651|565bff80cebff823|22c6f57fb76a0184|afec3d57a12048dd|06cfef67d426928b|c2db1da530d99efe)/;


    if (googleSiteVerificationPattern.test(page_requested)) {
        context.res.statusCode = 200;
        context.res.setHeader("Content-Type", "text/plain");
        context.res.end(`google-site-verification: ${page_requested}`);
        return { props: {} };
      }

    if(page_requested.includes('robots.txt')){
        context.res.statusCode = 200;
        context.res.setHeader("Content-Type", "text/plain");
        context.res.end(`#Robots.txt\nUser-agent: *\nDisallow: /cgi/\nDisallow: /temp/\nDisallow: /stats/\nDisallow: /glpcat/\nDisallow: /GATRACK/\nSitemap:${host}/sitemap.xml`);
    }

    return {
        props: {},
    };

}

  
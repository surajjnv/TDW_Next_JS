export default function Url_validation_and_security(context){
    const { req } = context;
    const page_requested = req.url; // Get the requested URL

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

    return {
        props: {},
    };

}
export default function Set_PrimaryColor(companyData) {
    // console.log("api response", companyData); // Correct logging
    if (!companyData || typeof companyData !== "object") {
        console.warn("Invalid companyData received");
        return { mainColor: "#000", auxColor: "rgba(0,0,0,.1)" };
    }

    const STYLE_ID = companyData?.URL_DETAIL?.PC_CLNT_STYLE_ID;
    // const STYLE_ID = '2447';
    console.log("style_id:", STYLE_ID);

    const colorMapping = {
        "2447": { main: "#c2450f", aux: "rgba(194,65,15,.1)" },
        "2448": { main: "#9e1000", aux: "rgba(158,16,0,.1)" },
        "2449": { main: "#5b5c00", aux: "rgba(91,92,0,.1)" },
        "2450": { main: "#2d5c00", aux: "rgba(45,92,0,.1)" },
        "2452": { main: "#006061", aux: "rgba(0,96,97,.1)" },
        "2453": { main: "#0055ad", aux: "rgba(0,85,173,.1)" },
        "2454": { main: "#0000a8", aux: "rgba(0,0,168,.1)" },
        "2455": { main: "#6e00e0", aux: "rgba(110,0,224,.1)" },
        "2456": { main: "#9e009d", aux: "rgba(158,0,157,.1)" },
        "2457": { main: "#575757", aux: "rgba(87,87,87,.1)" },
        "2458": { main: "#7e3600", aux: "rgba(126,54,0,.1)" }
    };

    const mainColor = colorMapping[STYLE_ID]?.main || "#000";
    const auxColor = colorMapping[STYLE_ID]?.aux || "rgba(0,0,0,.1)";

    return { mainColor, auxColor };
}

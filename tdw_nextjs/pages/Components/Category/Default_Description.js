
const generateRandomPrefixSuffixForDefaultCatDesc = (bizType, city, country, catIdNo) => {
  let showServiceProvide = bizType === "Service Provider" ? "service" : "product";

  const prefixes = [
    `${bizType} of a wide range of ${showServiceProvide}s which include `,
    `We are a leading ${bizType} of `,
    `Our ${showServiceProvide} range includes a wide range of `,
    `Pioneers in the industry, we offer `,
    `Leading ${bizType} of `,
    `Providing you the best range of `,
    `Offering you a complete choice of ${showServiceProvide}s which include `,
    `Our range of ${showServiceProvide}s include `,
    `Prominent & Leading ${bizType}${city ? ` from ${city}` : ""}, we offer `
  ];

  const suffixes = [
    ".",
    `${city ? ` from ${city}` : ""}${country ? `, ${country}` : ""}.`,
    ".",
    `${country ? ` from ${country}` : ""}.`,
    `${city ? ` from ${city}` : ""}.`,
    " with effective & timely delivery.",
    ".",
    ".",
    "."
  ];

  return [prefixes[catIdNo], suffixes[catIdNo]];
};

const CategoryDescription = ( bizType, city, country, catId, prodList ) => {
  const catIdNo = catId ? catId % 9 : 0;
  console.log("catidno",catIdNo);
  const [prefix, suffix] = generateRandomPrefixSuffixForDefaultCatDesc(
    bizType,
    city,
    country,
    catIdNo
  );

  const uniqueProductNames = Array.from(
  new Set(prodList.map((item) => (typeof item === "string" ? item.toLowerCase() : item.ITEM_NAME.toLowerCase())))
);
  let description = prefix;

  uniqueProductNames.forEach((name, index) => {
    if (uniqueProductNames.length <= 6) {
      description +=
        index === uniqueProductNames.length - 1 && index !== 0
          ? ` and ${name}`
          : index === 0
          ? name
          : `, ${name}`;
    } else {
      description +=
        index === 5
          ? ` and ${name}`
          : index < 5
          ? (index === 0 ? name : `, ${name}`)
          : "";
    }
  });

  description += suffix;

  return description;
};

export default CategoryDescription;

import './Catindex.css';
import { useEffect, useState } from "react";

export default function Catindex({ companydata }) {
  console.log(companydata);
  const [headerData, setHeaderData] = useState({
    CAT_INDEX_DESC: "",
    CAT_INDEX_DISP_NAME: "",
  });
  const [prdServices, setPrdServices] = useState([]);
  const [categoryCounter, setCategoryCounter] = useState(0);
  const [primaryBusiness, setPrimaryBusiness] = useState("");
  const [lazyImages, setLazyImages] = useState([]);

  useEffect(() => {
    // Set header data and product services from companydata
    if (companydata?.companyhash?.DATA) {
      setHeaderData(companydata.companyhash.DATA.HEADER || {});
      setPrdServices(companydata.companyhash.DATA.PRDNAV || []);
      setPrimaryBusiness(
        companydata.companyhash.DATA.COMPANYDETAIL?.BIZ || "Product Provider"
      );
    }
  }, [companydata]);

  useEffect(() => {
    // Handle lazy image loading on scroll
    const handleScroll = () => {
      lazyImages.forEach((img) => {
        const imageElement = img;
        if (imageElement && imageElement.dataset.img && imageInViewPort(imageElement)) {
          imageElement.src = imageElement.dataset.img;
        }
      });
    };

    const imageInViewPort = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lazyImages]);

  useEffect(() => {
    // Add all images with `data-img` attributes to lazyImages
    const imgElements = Array.from(document.getElementsByClassName("imgCenter"));
    setLazyImages(imgElements);
  }, []);

  return (
    <main className="m63_wrp">
      <article className="m63_scsn">
        <h2>
          <a href={headerData.CAT_INDEX_DISP_NAME} className="tdn clr5 dib mb20">
            {headerData.CAT_INDEX_NAME?.split(" ")[0]}
            <span className="fw7"> {headerData.CAT_INDEX_NAME?.split(" ")[1]}</span>
          </a>
        </h2>

        <div className="ml10 mr10 mb30 df ffw jcc">
          {prdServices?.map((category, index) => {
            let img = category.PRODLIST?.find(
              (prd) => prd.ITEM_IMG_SMALL || prd.ITEM_IMG_125
            )?.ITEM_IMG_SMALL;

            if (!img) img = ""; // Fallback image URL if needed

            return (
              <section key={index} className="m63_prd df fdc bg5 bsb br5 tac ofh pr">
                <figure className="bg4 df">
                  <a href={category.CATFLNAME} className="tdn df jcc aic w1">
                    {img && (
                      <img
                        src={companydata.changeHttpPath(img)}
                        alt={category.CAT_NAME}
                        className="db imgCenter"
                        data-img={companydata.changeHttpPath(img)}
                      />
                    )}
                  </a>
                </figure>
                <h2>
                  <a href={category.CATFLNAME} className="tdn clr5 dib p10">
                    {category.CAT_NAME}
                  </a>
                </h2>
                {category.CAT_PRD_COUNT && (
                  <p className="clr7 p10 f15 pa bsb w1 m63_mr_prd">
                    <a href={category.CATFLNAME} className="tdn clr7">
                      {category.CAT_PRD_COUNT} {primaryBusiness}
                      {category.CAT_PRD_COUNT !== 1 && "s"}
                    </a>
                  </p>
                )}
              </section>
            );
          })}
        </div>
      </article>
    </main>
  );
}

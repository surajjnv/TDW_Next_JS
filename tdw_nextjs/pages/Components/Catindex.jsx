import './Catindex.css';

export default function Catindex({ companydata }) {
  // Initialize state values directly from props
  const headerData = companydata?.companyhash?.DATA?.HEADER || {
    CAT_INDEX_DESC: "",
    CAT_INDEX_DISP_NAME: "",
  };

  const prdServices = companydata?.companyhash?.DATA?.PRDNAV || [];
  const primaryBusiness = companydata?.companyhash?.DATA?.COMPANYDETAIL?.BIZ || "Product Provider";

  // Helper function to safely get the image path
  const getProductImage = (category) => {
    const product = category.PRODLIST?.find(
      (prd) => prd.ITEM_IMG_SMALL || prd.ITEM_IMG_125
    );
    return product ? companydata.changeHttpPath(product.ITEM_IMG_SMALL) : "";
  };

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
          {prdServices.map((category, index) => {
            const img = getProductImage(category);

            return (
              <section key={index} className="m63_prd df fdc bg5 bsb br5 tac ofh pr">
                <figure className="bg4 df">
                  <a href={category.CATFLNAME} className="tdn df jcc aic w1">
                    {img && (
                      <img
                        src={img}
                        alt={category.CAT_NAME}
                        className="db imgCenter"
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

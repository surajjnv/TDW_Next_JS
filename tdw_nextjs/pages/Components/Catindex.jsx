import './Catindex.css';
import Product from './Product'; // Assuming you create a Product component

export default function Catindex({ companydata }) {
  if (!companydata) {
    return <p>Error loading data. Please try again later.</p>;
  }

  const headerData = companydata?.DATA?.HEADER || {
    CAT_INDEX_DESC: "",
    CAT_INDEX_DISP_NAME: "",
  };

  const prdServices = companydata?.DATA?.PRDNAV || [];
  const primaryBusiness = companydata?.DATA?.COMPANYDETAIL?.BIZ || "Product Provider";
  const prodType = primaryBusiness === 'Service Provider' ? 'Service' : 'Product';

  const getProductImage = (category) => {
    const product = category.PRODLIST?.find(
      (prd) => prd.ITEM_IMG_SMALL || prd.ITEM_IMG_125
    );
    return product ? product.ITEM_IMG_SMALL || product.ITEM_IMG_125 : "";
  };

  return (
    <main className="m63_wrp">
      <article className="m63_scsn">
        <h2>
          <a href={headerData.CAT_INDEX_DISP_NAME} className="tdn clr5 dib mb20">
            {headerData.CAT_INDEX_NAME?.split(/ (.+)/)[0]}
            <span className="fw7"> {headerData.CAT_INDEX_NAME?.split(/ (.+)/)[1]}</span>
          </a>
        </h2>

        <div className="ml10 mr10 mb30 df ffw jcc">
          {prdServices.map((category, index) => {
            const img = getProductImage(category);

            return (
              <Product
                key={index}
                img={img}
                categoryName={category.CAT_NAME}
                categoryLink={category.CATFLNAME}
                productCount={category.CAT_PRD_COUNT}
                prodType={prodType}
              />
            );
          })}
        </div>
      </article>
    </main>
  );
}

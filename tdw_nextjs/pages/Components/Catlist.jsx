import { changeHttpPath } from "../Utlility_function/common_function";
import { getBookmark } from "../Utlility_function/common_function";

export default function CategoryList({ subcat,pc_clnt_enable }) {
    if (!subcat || subcat.length === 0) return null;
  
    let categoryCounter = 0;
    let catCount = 0;
  
    return (
      <>
        {subcat.map((category, catIndex) => {
          if (!category.PRODLIST) return null;
  
          const allPrd = category.PRODLIST;
          let categorySubList = [];
          let hotVerticalCounter = 0;
          let productAdded = 0;
          let productAdded1 = 0;
          let productWN = [];
  
          allPrd.forEach((productDetail, productIndex) => {
            const myName = productDetail.ITEM_NAME
              ? getBookmark(productDetail.ITEM_NAME)
              : "";
            const productName = productDetail.ITEM_NAME;
            productDetail.ITEM_SIMG = changeHttpPath(
              productDetail.ITEM_SIMG || ""
            );
  
            let imageCons = null;
            if (productDetail.ITEM_SIMG) {
              imageCons = (
                <img
                  src={productDetail.ITEM_SIMG}
                  dataimg={productDetail.ITEM_SIMG}
                  alt={productName}
                />
              );
            }
  
            if (pc_clnt_enable === "S") {
              productAdded1++;
              if (catCount === productAdded1 && imageCons) {
                categorySubList.push(
                  <div key={productIndex} className="ci_img overflow-hidden">
                    <a
                      href={`${category.CATFLNAME}#${myName}`}
                      className="d-flex align-items-center justify-content-center"
                    >
                      {imageCons}
                    </a>
                  </div>
                );
              }
            } else {
              if (productAdded < 1 && imageCons) {
                categorySubList.push(
                  <div key={productIndex} className="ci_img overflow-hidden">
                    <a
                      href={`${category.CATFLNAME}#${myName}`}
                      className="d-flex align-items-center justify-content-center"
                    >
                      {imageCons}
                    </a>
                  </div>
                );
                productAdded++;
              }
            }
  
            if (hotVerticalCounter < 3) {
              productWN.push(
                <li key={productIndex} className="fs14 lne2txt overflow-hidden">
                  <a href={`${category.CATFLNAME}#${myName}`}>{productName}</a>
                </li>
              );
            }
            hotVerticalCounter++;
  
            if (productAdded >= 1 && hotVerticalCounter >= 3) return;
          });
  
          if (catCount === 4) catCount = 0;
          catCount++;
          categoryCounter++;
  
          return (
            <div key={catIndex} className="col-md-3 position-relative">
              <div className="ps-section__product">
                {categorySubList}
                <div className="jk-banner-product-content">
                  <h2>
                    <a href={category.CATFLNAME}>{category.CAT_NAME}</a>
                  </h2>
                  <div className="jk-banner-product-list-info overflow-hidden">
                    <ul>{productWN}</ul>
                  </div>
                  <a
                    href={category.CATFLNAME}
                    className="position-absolute d-flex align-items-center ci_vall fs14 fw5"
                  >
                    <span>View All</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  
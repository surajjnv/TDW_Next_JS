
import Product from "./Product";


function ProductList({ companydata }) {
  console.log("prd page company data", companydata);
  var prdList = companydata?.DATA?.PRDSERV[0]?.PRODLIST;
  console.log(prdList);

  return (
    <>
      {
        prdList.map((prd, prdId) => {
          return <Product prd={prd}></Product>
        }
        )
      }

    </>
  )
}
export default ProductList;

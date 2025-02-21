import ProductList from './Productlist';
import "@/styles/category.css";
// import "@styles/category.css";

export default function Category({companydata}){
    return(<>
        <h1>Category Page!!</h1>
        <ProductList companydata={companydata}/>
        </>)
};
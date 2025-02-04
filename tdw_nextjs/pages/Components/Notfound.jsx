export default function NotFound(context){
    console.log(context);
    // context.res.statusCode = '404';
    return(<>
    <h1>Page not found !!</h1>
    </>)
}
// export async function getServerSideProps({ context }) {
//     context.statusCode = 404;
//     return { props: {} };
//   }
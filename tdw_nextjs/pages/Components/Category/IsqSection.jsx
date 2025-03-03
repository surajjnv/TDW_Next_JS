export default function IsqSection ({prd}){
    let isqShown = 0;
    if (!prd?.ISQ || prd.ISQ.length === 0) return null;
    
    if (prd?.ISQ || prd.ISQ.length !== 0) 
    return(<>
    {
        prd?.ISQ.map((item, index) => {
          if (isqShown >= 10) return null; // Limit to 10 rows
          if (item.FK_IM_SPEC_MASTER_DESC && item.SUPPLIER_RESPONSE_DETAIL) {
            isqShown++;
            return (
              <tr key={index}>
                <td className="fw6">{item.FK_IM_SPEC_MASTER_DESC}</td>
                <td>{item.SUPPLIER_RESPONSE_DETAIL}</td>
              </tr>
            );
          }
          return null;
        })

    }
    
    </>)
    
}
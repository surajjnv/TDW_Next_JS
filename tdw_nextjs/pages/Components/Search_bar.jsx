import { useEffect, useRef, useState } from "react";

export default function Search_bar({ prdNav }) {
    // Prepare autoSuggest array
    const autoSuggest = [];
    prdNav.forEach(cat => {
        autoSuggest.push(cat.CAT_NAME); // Ensure category name is included
        cat.PRODLIST.forEach((prd) => {
            autoSuggest.push(prd.ITEM_NAME);
        });
    });

    const [searchKeyword, setsearchKeyword] = useState('');
    const [filteredResults, setFilteredResults] = useState([]); // Store filtered suggestions
    const inputRef = useRef(null);

    useEffect(() => {
        if (!searchKeyword.trim()) {
            setFilteredResults([]); // Clear results if search is empty
            return;
        }

        let pattern = new RegExp(searchKeyword, 'ig');
        let filteredItems = autoSuggest.filter((prd) => prd.match(pattern)).slice(0, 15);

        setFilteredResults(filteredItems);
    }, [searchKeyword]);

    return (
        <>
            <div className="ps-navigation__right">
                <div className="ps-header__search header__search22">
                    <form id="cse-search-box" method="get" name="frm">
                        <div className="ps-search-table">
                            <div className="input-group">
                                <input
                                    ref={inputRef}
                                    onChange={(e) => setsearchKeyword(e.target.value)} 
                                    className="form-control ps-input"
                                    style={{ width: "304px" }}
                                    type="text"
                                    id="ss"
                                    placeholder="Search Products/Services"
                                    autoComplete="off"
                                />
                                <div className="input-group-append d-flex justify-content-center cp">
                                    <span className="search-btn d-flex justify-content-center align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                            <path d="..." fill="white"></path>
                                        </svg>
                                        Search
                                    </span>
                                    <div id="SearchSuggest" className="position-absolute" style={{ display: filteredResults.length > 0 ? 'block' : 'none' }}>
                                        <ul>
                                            {filteredResults.map((prd, prdId) => (
                                                <li className="as_D ui-menu-item cp" role="menuitem" key={prdId}>
                                                    <a className="ui-corner-all">
                                                        <b className="ds1 w17">{prd}</b>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

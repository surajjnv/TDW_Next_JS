export default function ProductNavigation() {
    return (
        <>

                <div class="pdp col-md-3">
                    <ul class="sbar"></ul>
                    <li className="fw5">
                        <div className="d-flex align-items-center justify-content-between">
                            <a href="marker-pen.html" className="d-flex justify-content-between align-items-center">
                                Marker Pen (45)
                            </a>
                            <span className="cp" onClick={(e) => showprd(e.currentTarget)}>
                                <span className="u_arw d-none">
                                    <svg width="13" height="11" viewBox="0 0 10 8" fill="none" xmlns="https://www.w3.org/2000/svg">
                                        <path d="M4.99997 3.16581L8.88889 7.05469L10 5.94358L4.99997 0.94352L0 5.94358L1.1111 7.05469L4.99997 3.16581Z" fill="#4F4F4F"></path>
                                    </svg>
                                </span>
                                <span className="d_arw">
                                    <svg width="13" height="11" viewBox="0 0 10 8" fill="none" xmlns="https://www.w3.org/2000/svg">
                                        <path d="M5.00003 4.83419L1.11111 0.945312L0 2.05642L5.00003 7.05648L10 2.05642L8.8889 0.945312L5.00003 4.83419Z" fill="#4F4F4F"></path>
                                    </svg>
                                </span>
                            </span>
                        </div>

                        <ul className="prd d-none" id="2">
                            <li className="fs14">
                                <a href="marker-pen.html#luxor-pro-e-refillable-white-board-marker-red-box-of-10">
                                    Luxor Pro-E Refillable White Board Marker - Red - Box Of 10
                                </a>
                            </li>
                            <li className="fs14">
                                <a href="marker-pen.html#luxor-pro-e-refillable-white-board-marker-green-box-of-10">
                                    Luxor Pro-E Refillable White Board Marker - Green - Box Of 10
                                </a>
                            </li>
                            <li className="fs14">
                                <a href="marker-pen.html#luxor-pro-e-refillable-white-board-marker">
                                    Luxor Pro-E Refillable White Board Marker
                                </a>
                            </li>
                            <li className="fs14">
                                <a href="marker-pen.html#luxor-permanent-marker-black-box-of-10">
                                    Luxor Permanent Marker - Black - Box Of 10
                                </a>
                            </li>
                            <li className="fs14">
                                <a href="marker-pen.html#camlin-white-board-marker-pack-of-10-green">
                                    Camlin White Board Marker Pack Of 10 - Green
                                </a>
                            </li>
                        </ul>

                        <span className="fs14 tdu mt15 cp d-block clr5 d-none">
                            <a href="marker-pen.html">View More</a>
                        </span>
                    </li></div>


        </>
    )
}
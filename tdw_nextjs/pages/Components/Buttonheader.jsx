'use client'; // This marks the component as a Client Component

import { useState } from 'react';

export function Buttonheader() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    alert(`${buttonText} clicked!`);
  };

  return (
    <div className="col-md-5">
      <div className="jk-header-right d-flex align-items-center justify-content-end">
        <div className="text-right" onClick="">
          <span className="sprt ts d-block cp"></span>
        </div>

        <div onClick="" id="pns" className="ps-footer--contact mt-0 cp">
          <div className="d-flex align-items-center">
            <svg width="25" height="24" viewBox="0 0 25 24">
              <path d="M14.4912 4.80031e-05C14.3055 4.80031e-05 14.155 0.150515 14.155 0.336254C14.155 0.521994 14.3055 0.67246 14.4912 0.67246C17.0755 0.677714 19.5526 1.70677 21.3797 3.53396C23.2068 5.36134 24.2359 7.83821 24.2412 10.4223C24.2412 10.6081 24.3916 10.7585 24.5774 10.7585C24.7631 10.7585 24.9136 10.6081 24.9136 10.4223C24.9074 7.66007 23.8072 5.01279 21.8541 3.05943C19.9009 1.10617 17.2534 0.0061958 14.4912 0L14.4912 4.80031e-05Z"></path>
              <path d="M14.4948 3.98994C16.1984 3.99809 17.8298 4.67812 19.0339 5.88234C20.238 7.08636 20.9171 8.71704 20.9234 10.4191C20.9234 10.6066 21.0755 10.7588 21.2633 10.7588C21.4509 10.7588 21.6033 10.6066 21.6033 10.4191C21.597 8.53699 20.8461 6.73348 19.5146 5.40191C18.1833 4.07034 16.3788 3.31865 14.495 3.31055C14.3072 3.31055 14.155 3.46254 14.155 3.65017C14.155 3.8378 14.3072 3.9898 14.495 3.9898L14.4948 3.98994Z"></path>
              <path d="M14.5045 7.32004C15.3236 7.32101 16.1088 7.64689 16.688 8.22592C17.2673 8.80515 17.5932 9.59046 17.594 10.4095C17.594 10.6024 17.7506 10.759 17.9434 10.759C18.1365 10.759 18.2929 10.6024 18.2929 10.4095C18.2922 9.40499 17.8925 8.442 17.1825 7.73172C16.4721 7.02144 15.5089 6.62204 14.5045 6.62109C14.3114 6.62109 14.155 6.77769 14.155 6.97057C14.155 7.16363 14.3114 7.32004 14.5045 7.32004Z"></path>
              <path d="M4.42173 11.7953C6.15342 15.1815 8.90545 17.9373 12.2884 19.6728L14.9143 17.0432C15.0716 16.8869 15.2693 16.7774 15.4851 16.7268C15.7009 16.6762 15.9265 16.6865 16.1368 16.7567C17.514 17.2089 18.9544 17.4383 20.4039 17.4362C20.7211 17.4371 21.0251 17.5632 21.2498 17.7871C21.4745 18.0111 21.6017 18.3147 21.6038 18.6321V22.8041C21.6017 23.1214 21.4745 23.4251 21.2498 23.649C21.0251 23.873 20.7211 23.9991 20.4039 24C15.0165 24.0003 9.84966 21.8596 6.03955 18.0488C2.22945 14.238 0.0881707 9.06904 0.0866699 3.67881C0.0887572 3.3615 0.215977 3.05784 0.44066 2.83389C0.665343 2.60994 0.969382 2.4838 1.28653 2.48291H5.47444C5.79045 2.48411 6.09307 2.61071 6.31589 2.83492C6.53871 3.05913 6.66358 3.36263 6.66297 3.67881C6.66056 5.12833 6.8898 6.56891 7.34208 7.94599C7.4101 8.15668 7.4186 8.38208 7.36667 8.59731C7.31474 8.81254 7.20438 9.00923 7.04778 9.16567L4.42173 11.7953Z"></path>
            </svg>
            <div>
              <div className="ps-footer__fax lh-sm">
                <span id="pns_details">Call 08047641018</span>
              </div>
              <p className="ps-footer__work m-0">83% Response rate</p>
            </div>
          </div>
        </div>

        <div onClick="" className="ps-header__right p-0">
          <button className="ps-btn ps-btn--warning">
            <svg xmlns="https://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22">
              <path d="M24.3 0.500038H2.70003C1.99117 0.499281 1.31073 0.774931 0.807495 1.26678C0.304259 1.75862 0.0191049 2.42668 0.0142244 3.12503L0 18.875C0.00934173 19.5744 0.297993 20.242 0.803332 20.7333C1.30867 21.2246 1.99006 21.5 2.70003 21.5H24.3C25.0111 21.5037 25.6947 21.2294 26.2008 20.7374C26.707 20.2453 26.9944 19.5755 27 18.875V3.12503C26.9944 2.42448 26.707 1.75473 26.2008 1.26264C25.6947 0.770557 25.0111 0.496309 24.3 0.500038ZM24.3 5.12002C24.301 5.31093 24.2518 5.49886 24.1572 5.66546C24.0626 5.83206 23.9257 5.97165 23.76 6.07062L16.4842 10.4932C15.5871 11.0383 14.554 11.327 13.5 11.327C12.446 11.327 11.4129 11.0383 10.5158 10.4932L3.24004 6.07062C3.07432 5.97165 2.93744 5.83206 2.8428 5.66546C2.74816 5.49886 2.69898 5.31093 2.70003 5.12002C2.70051 4.92088 2.7549 4.72546 2.85754 4.55391C2.96019 4.38235 3.1073 4.24086 3.28393 4.14402C3.46055 4.04717 3.66019 3.99847 3.86227 4.00294C4.06436 4.00741 4.26164 4.06488 4.43368 4.16943L10.729 8.00121C11.5624 8.50637 12.5215 8.77383 13.5 8.77383C14.4785 8.77383 15.4376 8.50637 16.271 8.00121L22.5663 4.16943C22.7384 4.06488 22.9356 4.00741 23.1377 4.00294C23.3398 3.99847 23.5394 4.04717 23.7161 4.14402C23.8927 4.24086 24.0398 4.38235 24.1425 4.55391C24.2451 4.72546 24.2995 4.92088 24.3 5.12002Z"></path>
            </svg>
            <span>Send Email</span>
          </button>
        </div>

      </div>
    </div>
  );
}

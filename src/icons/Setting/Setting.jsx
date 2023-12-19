/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Setting = ({ className }) => {
  return (
    <svg
      className={`setting ${className}`}
      fill="none"
      height="36"
      viewBox="0 0 36 36"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_556)">
        <path
          className="path"
          d="M34.5853 22.5742L31.9536 20.3242C32.0782 19.5608 32.1424 18.7813 32.1424 18.0018C32.1424 17.2224 32.0782 16.4429 31.9536 15.6795L34.5853 13.4295C34.7838 13.2596 34.9259 13.0333 34.9926 12.7806C35.0594 12.528 35.0476 12.261 34.959 12.0152L34.9228 11.9108C34.1983 9.88588 33.1134 8.00877 31.7206 6.37014L31.6482 6.28577C31.4793 6.0871 31.2541 5.94428 31.0023 5.87614C30.7506 5.808 30.4841 5.81774 30.238 5.90407L26.9715 7.06523C25.7661 6.07684 24.4201 5.29738 22.9657 4.75095L22.3348 1.33577C22.2873 1.0788 22.1626 0.842387 21.9774 0.657949C21.7923 0.47351 21.5554 0.349775 21.2982 0.303181L21.1898 0.283091C19.0965 -0.0945871 16.8947 -0.0945871 14.8014 0.283091L14.6929 0.303181C14.4357 0.349775 14.1988 0.47351 14.0137 0.657949C13.8285 0.842387 13.7039 1.0788 13.6563 1.33577L13.0215 4.76702C11.5786 5.31356 10.2349 6.09261 9.04378 7.07327L5.75315 5.90407C5.50712 5.81706 5.24044 5.80696 4.98853 5.87514C4.73663 5.94332 4.51144 6.08654 4.34288 6.28577L4.27056 6.37014C2.87937 8.00993 1.79466 9.88672 1.06833 11.9108L1.03217 12.0152C0.851366 12.5175 1.00003 13.08 1.40583 13.4295L4.06967 15.7036C3.94512 16.459 3.88485 17.2304 3.88485 17.9978C3.88485 18.7693 3.94512 19.5407 4.06967 20.292L1.40583 22.5661C1.20733 22.7361 1.06526 22.9624 0.998516 23.215C0.93177 23.4676 0.943508 23.7346 1.03217 23.9804L1.06833 24.0849C1.79556 26.1099 2.87235 27.9782 4.27056 29.6255L4.34288 29.7099C4.51185 29.9086 4.73705 30.0514 4.9888 30.1195C5.24056 30.1876 5.50705 30.1779 5.75315 30.0916L9.04378 28.9224C10.2411 29.9068 11.579 30.6862 13.0215 31.2286L13.6563 34.6599C13.7039 34.9169 13.8285 35.1533 14.0137 35.3377C14.1988 35.5221 14.4357 35.6459 14.6929 35.6925L14.8014 35.7126C16.9139 36.0923 19.0772 36.0923 21.1898 35.7126L21.2982 35.6925C21.5554 35.6459 21.7923 35.5221 21.9774 35.3377C22.1626 35.1533 22.2873 34.9169 22.3348 34.6599L22.9657 31.2447C24.4195 30.6997 25.7731 29.9177 26.9715 28.9304L30.238 30.0916C30.484 30.1786 30.7507 30.1887 31.0026 30.1205C31.2545 30.0523 31.4797 29.9091 31.6482 29.7099L31.7206 29.6255C33.1188 27.9742 34.1956 26.1099 34.9228 24.0849L34.959 23.9804C35.1398 23.4862 34.9911 22.9237 34.5853 22.5742V22.5742ZM29.1009 16.1536C29.2014 16.7603 29.2536 17.3831 29.2536 18.0059C29.2536 18.6286 29.2014 19.2514 29.1009 19.8581L28.8357 21.4693L31.8371 24.0367C31.3821 25.0849 30.8078 26.0771 30.1255 26.9938L26.3969 25.6719L25.1353 26.7085C24.175 27.496 23.1063 28.1148 21.9491 28.5487L20.4183 29.1233L19.6991 33.0206C18.5644 33.1492 17.4187 33.1492 16.284 33.0206L15.5648 29.1152L14.046 28.5326C12.9009 28.0987 11.8362 27.48 10.884 26.6965L9.62235 25.6559L5.86967 26.9898C5.18663 26.0697 4.6161 25.0773 4.15806 24.0326L7.19155 21.4411L6.93038 19.834C6.83396 19.2353 6.78172 18.6166 6.78172 18.0059C6.78172 17.3911 6.82994 16.7764 6.93038 16.1777L7.19155 14.5706L4.15806 11.9791C4.61208 10.9304 5.18663 9.94202 5.86967 9.02193L9.62235 10.3559L10.884 9.31523C11.8362 8.53175 12.9009 7.913 14.046 7.47907L15.5688 6.90452L16.288 2.99916C17.417 2.87059 18.5701 2.87059 19.7032 2.99916L20.4223 6.89648L21.9532 7.47104C23.1063 7.90497 24.179 8.52372 25.1393 9.31122L26.4009 10.3478L30.1295 9.02595C30.8125 9.94604 31.3831 10.9384 31.8411 11.9831L28.8398 14.5505L29.1009 16.1536ZM17.9996 10.5326C14.0942 10.5326 10.9282 13.6987 10.9282 17.6041C10.9282 21.5094 14.0942 24.6755 17.9996 24.6755C21.9049 24.6755 25.071 21.5094 25.071 17.6041C25.071 13.6987 21.9049 10.5326 17.9996 10.5326ZM21.1817 20.7862C20.7644 21.2048 20.2683 21.5367 19.7222 21.7629C19.1761 21.989 18.5907 22.105 17.9996 22.1041C16.7982 22.1041 15.6692 21.634 14.8174 20.7862C14.3989 20.3689 14.067 19.8728 13.8408 19.3267C13.6146 18.7806 13.4987 18.1952 13.4996 17.6041C13.4996 16.4027 13.9697 15.2737 14.8174 14.4219C15.6692 13.5701 16.7982 13.1041 17.9996 13.1041C19.2009 13.1041 20.3299 13.5701 21.1817 14.4219C21.6003 14.8393 21.9322 15.3353 22.1584 15.8814C22.3845 16.4275 22.5005 17.013 22.4996 17.6041C22.4996 18.8054 22.0295 19.9344 21.1817 20.7862Z"
          fill="black"
          fillOpacity="0.85"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_556">
          <rect className="rect" fill="white" height="36" width="36" />
        </clipPath>
      </defs>
    </svg>
  );
};
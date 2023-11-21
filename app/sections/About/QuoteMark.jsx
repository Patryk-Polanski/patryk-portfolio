import React from 'react';

export default function QuoteMark({ type }) {
  let quoteMark;

  switch (type) {
    case 'start':
      quoteMark = (
        <svg
          width='50'
          height='35'
          viewBox='0 0 50 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M13.0285 0L26.8423 6.78983L24.5336 8.0981C20.9977 10.1017 18.0837 12.0874 15.7746 14.0501L15.7697 14.0543C15.1013 14.6171 14.5389 15.1011 14.0795 15.5082L14.0901 15.5139C16.0991 16.5853 17.5625 18.0592 18.3124 19.9738C19.07 21.6254 19.5001 23.1942 19.5001 24.6501V24.687L19.4981 24.7238C19.3609 27.3304 18.3861 29.5763 16.576 31.3864C14.7328 33.2296 12.3898 34.1309 9.66027 34.1309C6.4402 34.1309 3.89174 32.7587 2.19139 30.0665L2.17696 30.0436L2.16343 30.0203C0.742805 27.5664 0 25.0527 0 22.4959C0 18.4198 1.02249 14.6416 3.06821 11.1894L3.07586 11.1765C5.20466 7.67025 8.30246 4.15321 12.3248 0.61841L13.0285 0ZM36.1862 0L50 6.78983L47.6913 8.0981C44.1554 10.1017 41.2414 12.0874 38.9323 14.0501L38.9274 14.0543C38.2591 14.6171 37.6966 15.1011 37.2373 15.5082L37.2478 15.5139C39.2568 16.5853 40.7202 18.0591 41.4701 19.9738C42.2277 21.6253 42.6578 23.1942 42.6578 24.6501V24.687L42.6558 24.7238C42.5186 27.3304 41.5438 29.5763 39.7338 31.3864C37.8905 33.2296 35.5475 34.1309 32.818 34.1309C29.5979 34.1309 27.0495 32.7587 25.3491 30.0665L25.3347 30.0436L25.3211 30.0203C23.9005 27.5664 23.1577 25.0527 23.1577 22.4959C23.1577 18.4198 24.1802 14.6416 26.2259 11.1894L26.2336 11.1765C28.3624 7.67025 31.4602 4.15321 35.4825 0.61841L36.1862 0ZM13.4789 3.34687C9.95432 6.53195 7.29935 9.62687 5.4774 12.6259C3.69602 15.6346 2.80496 18.9152 2.80496 22.4959C2.80496 24.4793 3.37426 26.5054 4.57712 28.591C5.74809 30.4314 7.38436 31.3259 9.66027 31.3259C11.7179 31.3259 13.3243 30.6713 14.5926 29.403C15.8857 28.1099 16.5857 26.5382 16.695 24.6144C16.6878 23.6942 16.4056 22.5357 15.7471 21.1089L15.7279 21.0674L15.7115 21.0247C15.2724 19.883 14.389 18.8833 12.9041 18.0616L10.053 17.284V16.2128C10.053 15.7584 10.2682 15.4207 10.3197 15.34L10.3239 15.3334C10.4122 15.194 10.5155 15.0657 10.6072 14.9595C10.7949 14.7422 11.0476 14.4877 11.3436 14.2073C11.9419 13.6405 12.8187 12.8723 13.9602 11.9109C15.9068 10.2566 18.2184 8.61646 20.8869 6.98806L13.4789 3.34687ZM13.9602 11.9109C13.9611 11.9102 13.962 11.9095 13.9629 11.9087L14.8663 12.9815L13.958 11.9129C13.9587 11.9122 13.9595 11.9116 13.9602 11.9109ZM36.6367 3.34687C33.1121 6.53193 30.4571 9.62683 28.6352 12.6259C26.8538 15.6346 25.9627 18.9152 25.9627 22.4959C25.9627 24.4793 26.532 26.5054 27.7348 28.591C28.9058 30.4314 30.5421 31.3259 32.818 31.3259C34.8756 31.3259 36.482 30.6713 37.7504 29.403C39.0434 28.1099 39.7434 26.5382 39.8527 24.6144C39.8456 23.6942 39.5633 22.5357 38.9048 21.1089L38.8856 21.0674L38.8692 21.0247C38.4301 19.883 37.5467 18.8833 36.0618 18.0616L33.2107 17.284V16.2128C33.2107 15.7584 33.426 15.4207 33.4774 15.34L33.4816 15.3334C33.5699 15.194 33.6732 15.0657 33.7649 14.9595C33.9526 14.7422 34.2054 14.4877 34.5013 14.2073C35.0996 13.6405 35.9764 12.8723 37.118 11.9109C39.0645 10.2566 41.3761 8.61646 44.0446 6.98806L36.6367 3.34687ZM37.118 11.9109C37.1188 11.9102 37.1197 11.9095 37.1206 11.9087L38.024 12.9815L37.1157 11.9129C37.1164 11.9122 37.1172 11.9116 37.118 11.9109Z'
            fill='currentColor'
          />
        </svg>
      );
      break;

    case 'end':
      quoteMark = (
        <svg
          width='51'
          height='35'
          viewBox='0 0 51 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M37.7098 34.252L23.896 27.4621L26.2047 26.1539C29.7406 24.1502 32.6546 22.1646 34.9637 20.2019L34.9686 20.1977C35.6369 19.6349 36.1994 19.1508 36.6587 18.7437L36.6482 18.7381C34.6392 17.6666 33.1758 16.1928 32.4259 14.2782C31.6683 12.6266 31.2382 11.0577 31.2382 9.60185L31.2382 9.56497L31.2402 9.52814C31.3774 6.92153 32.3522 4.67564 34.1622 2.8656C36.0055 1.02235 38.3485 0.121096 41.078 0.121096C44.2981 0.121096 46.8465 1.49326 48.5469 4.18549L48.5613 4.20833L48.5749 4.2317C49.9955 6.6855 50.7383 9.19925 50.7383 11.756C50.7383 15.8322 49.7158 19.6104 47.6701 23.0625L47.6624 23.0755C45.5336 26.5817 42.4358 30.0987 38.4135 33.6335L37.7098 34.252ZM14.552 34.252L0.738281 27.4621L3.047 26.1539C6.58285 24.1502 9.49691 22.1646 11.806 20.2019L11.8109 20.1977C12.4792 19.6349 13.0416 19.1508 13.501 18.7437L13.4904 18.7381C11.4815 17.6666 10.0181 16.1928 9.26816 14.2782C8.51059 12.6266 8.08051 11.0577 8.08051 9.60184L8.08051 9.56496L8.08245 9.52813C8.21964 6.92153 9.19448 4.67564 11.0045 2.86559C12.8478 1.02235 15.1908 0.121094 17.9203 0.121094C21.1404 0.121095 23.6888 1.49326 25.3892 4.18548L25.4036 4.20832L25.4171 4.2317C26.8378 6.6855 27.5806 9.19925 27.5806 11.756C27.5806 15.8322 26.5581 19.6104 24.5124 23.0625L24.5047 23.0755C22.3759 26.5817 19.2781 30.0987 15.2557 33.6335L14.552 34.252ZM37.2593 30.9051C40.784 27.72 43.4389 24.6251 45.2609 21.626C47.0423 18.6174 47.9333 15.3367 47.9333 11.756C47.9333 9.77264 47.364 7.74651 46.1612 5.66094C44.9902 3.82055 43.3539 2.92605 41.078 2.92605C39.0204 2.92605 37.414 3.58061 36.1456 4.84899C34.8526 6.14209 34.1526 7.71373 34.0433 9.63758C34.0505 10.5578 34.3327 11.7162 34.9912 13.143L35.0104 13.1846L35.0268 13.2273C35.4659 14.369 36.3493 15.3687 37.8342 16.1904L40.6853 16.9679L40.6853 18.0392C40.6853 18.4935 40.47 18.8312 40.4186 18.912L40.4144 18.9186C40.3261 19.058 40.2228 19.1863 40.1311 19.2924C39.9434 19.5098 39.6906 19.7642 39.3947 20.0446C38.7964 20.6114 37.9196 21.3796 36.778 22.341C34.8315 23.9953 32.5199 25.6355 29.8514 27.2639L37.2593 30.9051ZM36.778 22.341C36.7772 22.3418 36.7763 22.3425 36.7754 22.3432L35.872 21.2705L36.7803 22.3391C36.7796 22.3397 36.7788 22.3404 36.778 22.341ZM14.1016 30.9051C17.6262 27.72 20.2812 24.6251 22.1031 21.6261C23.8845 18.6174 24.7756 15.3368 24.7756 11.756C24.7756 9.77264 24.2063 7.74651 23.0034 5.66096C21.8325 3.82055 20.1962 2.92605 17.9203 2.92605C15.8627 2.92605 14.2563 3.58061 12.9879 4.84899C11.6948 6.14208 10.9949 7.71371 10.8856 9.63756C10.8927 10.5577 11.175 11.7162 11.8335 13.143L11.8527 13.1846L11.8691 13.2273C12.3082 14.3689 13.1915 15.3686 14.6765 16.1904L17.5276 16.9679L17.5276 18.0392C17.5276 18.4935 17.3123 18.8313 17.2609 18.912L17.2567 18.9186C17.1684 19.058 17.065 19.1863 16.9734 19.2924C16.7857 19.5098 16.5329 19.7642 16.237 20.0446C15.6387 20.6114 14.7619 21.3796 13.6203 22.341C11.6738 23.9953 9.36219 25.6355 6.69369 27.2639L14.1016 30.9051ZM13.6203 22.341C13.6194 22.3418 13.6186 22.3425 13.6177 22.3432L12.7143 21.2705L13.6226 22.3391C13.6218 22.3397 13.6211 22.3404 13.6203 22.341Z'
            fill='currentColor'
          />
        </svg>
      );
      break;

    default:
      break;
  }

  return quoteMark;
}

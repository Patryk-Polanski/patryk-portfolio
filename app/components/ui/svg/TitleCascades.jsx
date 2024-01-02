import LinkLetter from './LinkLetter';

export default function LinkHome({ id, deviceType = 'desktop' }) {
  const responsiveVariants = {
    mobile: {
      width: '217',
      height: '46',
      paths: [
        'M22.8471 43.4866C19.0914 44.8792 15.5888 45.5755 12.3395 45.5755C8.6681 45.5755 5.69303 44.6049 3.41426 42.6637C1.13548 40.7226 -0.00390625 37.6209 -0.00390625 33.3587V13.0397C-0.00390625 9.83249 0.439189 7.40602 1.32538 5.76024C2.25377 4.11445 3.64635 2.72187 5.50313 1.58248C7.35991 0.527494 9.63869 0 12.3395 0C15.631 0 18.6061 0.696292 21.2647 2.08888L19.6189 7.02622C17.5933 6.26663 15.42 5.88684 13.0991 5.88684C11.0735 5.88684 9.34329 6.43543 7.90851 7.53262C6.47372 8.58761 5.75633 10.2334 5.75633 12.47V33.2321C5.75633 37.5787 8.22501 39.752 13.1624 39.752C15.6943 39.752 18.6061 39.2245 21.8977 38.1695L22.8471 43.4866Z',

        'M36.1756 16.9078L36.7728 12.7277C41.152 12.4291 49.9104 14.1012 49.9104 23.178V44.9744C41.7491 46.7659 25.4864 47.4825 25.7253 36.017C25.7253 34.9392 25.7118 33.9156 25.699 32.9459C25.6267 27.4681 25.5772 23.7145 28.1139 21.685C31.0997 19.2964 38.5643 18.1021 44.2373 22.2822C44.2298 22.237 44.2223 22.191 44.2146 22.1443C43.9191 20.3415 43.4517 17.49 36.1756 16.9078ZM44.2374 27.9552V39.8985C39.9577 40.6947 31.3983 40.8539 31.3983 35.1212C31.3983 34.7699 31.3976 34.4288 31.3969 34.0976C31.3834 27.6711 31.3778 24.9986 36.7728 25.5665C41.3113 26.0443 43.6402 27.358 44.2374 27.9552Z',

        'M60.1083 36.4602C60.1927 37.5996 60.7835 38.5701 61.8807 39.3719C62.9779 40.1315 64.3916 40.5113 66.1218 40.5113C67.6831 40.5113 68.9702 40.1315 69.983 39.3719C71.038 38.5701 71.5655 37.5574 71.5655 36.3336C71.5655 34.8566 70.9958 33.7383 69.8564 32.9787C68.7592 32.2191 67.0712 31.4595 64.7925 30.6999C62.8935 30.0669 61.3321 29.455 60.1083 28.8642C58.8845 28.2735 57.7873 27.4084 56.8168 26.269C55.8884 25.1296 55.3398 23.6526 55.171 21.838C55.0444 20.4032 55.3187 18.9685 55.9939 17.5337C56.7113 16.0567 57.8928 14.854 59.5386 13.9256C61.2266 12.955 63.3788 12.4697 65.9952 12.4697C67.3455 12.4697 68.5271 12.6174 69.5399 12.9128C70.5949 13.166 71.4178 13.4403 72.0086 13.7357C72.5994 14.0311 72.9581 14.221 73.0847 14.3054L71.3756 19.496C71.2912 19.4116 71.038 19.2639 70.616 19.0529C70.194 18.7997 69.5821 18.5676 68.7803 18.3566C67.9785 18.1034 67.0501 17.9768 65.9952 17.9768C64.1806 17.9768 62.9146 18.3566 62.1972 19.1162C61.4798 19.8335 61.1844 20.7408 61.311 21.838C61.4376 22.682 61.9651 23.3783 62.8935 23.9269C63.8641 24.4755 65.2778 25.0663 67.1345 25.6993C69.2867 26.4589 71.0591 27.2185 72.4517 27.9781C73.8443 28.6955 75.047 29.7504 76.0597 31.143C77.0725 32.4934 77.5789 34.2447 77.5789 36.3969C77.5789 39.0554 76.6083 41.3131 74.6672 43.1699C72.7682 44.9845 69.9197 45.8918 66.1218 45.8918C63.7164 45.8918 61.6275 45.4909 59.8551 44.6891C58.1249 43.8451 56.7956 42.7479 55.8673 41.3975C54.9811 40.0471 54.4958 38.549 54.4114 36.9033L60.1083 36.4602Z',

        'M102.054 44.5625C99.4379 45.2377 96.9059 45.5753 94.4583 45.5753C92.1796 45.5753 90.2806 45.3221 88.7614 44.8157C86.2716 43.9717 84.4571 42.6846 83.3177 40.9545C82.2205 39.1821 81.6719 36.7134 81.6719 33.5484V25.4461C81.6719 21.2684 82.7691 18.1034 84.9634 15.9512C87.1578 13.7569 89.9852 12.6597 93.4456 12.6597C96.1885 12.6597 99.0159 13.3349 101.928 14.6852L100.345 19.496C98.2774 18.652 96.3151 18.23 94.4583 18.23C92.264 18.23 90.5338 18.8419 89.2678 20.0657C88.044 21.2473 87.4321 22.9142 87.4321 25.0663V34.2447C87.4321 36.2703 88.1284 37.7262 89.521 38.6124C90.9136 39.4986 92.686 39.9417 94.8381 39.9417C96.7371 39.9417 98.6361 39.6674 100.535 39.1188L102.054 44.5625Z',

        'M116.793 16.9078L117.39 12.7277C121.769 12.4291 130.528 14.1012 130.528 23.178V44.9744C122.366 46.7659 106.104 47.4825 106.342 36.017C106.342 34.9392 106.329 33.9156 106.316 32.9459C106.244 27.4681 106.194 23.7145 108.731 21.685C111.717 19.2964 119.182 18.1021 124.855 22.2822C124.847 22.237 124.839 22.191 124.832 22.1443C124.536 20.3415 124.069 17.49 116.793 16.9078ZM124.855 27.9552V39.8985C120.575 40.6947 112.016 40.8539 112.016 35.1212C112.016 34.7699 112.015 34.4288 112.014 34.0976C112.001 27.6711 111.995 24.9986 117.39 25.5665C121.928 26.0443 124.257 27.358 124.855 27.9552Z',

        'M137.554 23.0408C137.554 18.6098 139.347 15.5715 142.934 13.9257C144.749 13.0817 146.795 12.6597 149.074 12.6597C150.256 12.6597 151.374 12.7863 152.429 13.0395C153.526 13.2505 154.455 13.5459 155.214 13.9257V0.632812H160.911V44.9423L157.43 45.2588C154.687 45.5542 152.535 45.7019 150.973 45.7019C149.412 45.7019 147.935 45.5542 146.542 45.2588C145.192 44.9634 143.841 44.4781 142.491 43.8029C140.972 43.0434 139.769 41.9251 138.883 40.4481C137.997 38.9711 137.554 37.1565 137.554 35.0043V23.0408ZM155.214 19.8125C153.484 18.8841 151.606 18.4199 149.581 18.4199C147.724 18.4199 146.205 18.9263 145.023 19.9391C143.841 20.9519 143.251 22.5555 143.251 24.7499V35.3208C143.251 36.9666 143.947 38.2326 145.34 39.1188C146.774 39.9628 148.631 40.3848 150.91 40.3848C152.176 40.3848 153.611 40.216 155.214 39.8784V19.8125Z',

        'M187.501 42.7268C185.982 43.6974 184.252 44.4359 182.311 44.9423C180.37 45.4487 178.429 45.7019 176.487 45.7019C173.365 45.7019 170.875 44.9423 169.018 43.4231C167.203 41.8618 166.296 39.5408 166.296 36.4602V23.4839C166.296 20.0657 167.351 17.4071 169.461 15.5081C171.613 13.6092 174.441 12.6597 177.943 12.6597C181.446 12.6597 184.168 13.6092 186.109 15.5081C188.092 17.3649 189.084 19.9602 189.084 23.294V32.4091L172.12 33.3585V35.8272C172.12 37.3042 172.542 38.4436 173.386 39.2454C174.272 40.005 175.496 40.3848 177.057 40.3848C179.378 40.3848 182.142 39.5408 185.349 37.8528L187.501 42.7268ZM183.26 23.2307C183.26 21.5005 182.712 20.2345 181.615 19.4327C180.517 18.5887 179.273 18.1667 177.88 18.1667C176.065 18.1667 174.652 18.6731 173.639 19.6859C172.626 20.6565 172.12 21.9436 172.12 23.5471V27.9781L183.26 27.3451V23.2307Z',

        'M199.503 36.4602C199.587 37.5996 200.178 38.5701 201.275 39.3719C202.372 40.1315 203.786 40.5113 205.516 40.5113C207.078 40.5113 208.365 40.1315 209.378 39.3719C210.433 38.5701 210.96 37.5574 210.96 36.3336C210.96 34.8566 210.39 33.7383 209.251 32.9787C208.154 32.2191 206.466 31.4595 204.187 30.6999C202.288 30.0669 200.727 29.455 199.503 28.8642C198.279 28.2735 197.182 27.4084 196.211 26.269C195.283 25.1296 194.734 23.6526 194.566 21.838C194.439 20.4032 194.713 18.9685 195.388 17.5337C196.106 16.0567 197.287 14.854 198.933 13.9256C200.621 12.955 202.773 12.4697 205.39 12.4697C206.74 12.4697 207.922 12.6174 208.934 12.9128C209.989 13.166 210.812 13.4403 211.403 13.7357C211.994 14.0311 212.353 14.221 212.479 14.3054L210.77 19.496C210.686 19.4116 210.433 19.2639 210.011 19.0529C209.589 18.7997 208.977 18.5676 208.175 18.3566C207.373 18.1034 206.445 17.9768 205.39 17.9768C203.575 17.9768 202.309 18.3566 201.592 19.1162C200.874 19.8335 200.579 20.7408 200.706 21.838C200.832 22.682 201.36 23.3783 202.288 23.9269C203.259 24.4755 204.672 25.0663 206.529 25.6993C208.681 26.4589 210.454 27.2185 211.846 27.9781C213.239 28.6955 214.441 29.7504 215.454 31.143C216.467 32.4934 216.973 34.2447 216.973 36.3969C216.973 39.0554 216.003 41.3131 214.062 43.1699C212.163 44.9845 209.314 45.8918 205.516 45.8918C203.111 45.8918 201.022 45.4909 199.25 44.6891C197.519 43.8451 196.19 42.7479 195.262 41.3975C194.376 40.0471 193.89 38.549 193.806 36.9033L199.503 36.4602Z',
      ],
    },
    tablet: {
      width: '288',
      height: '61',
      paths: [
        'M30.2986 57.667C25.3181 59.5137 20.6734 60.4371 16.3645 60.4371C11.4959 60.4371 7.55073 59.15 4.52888 56.5758C1.50702 54.0016 -0.00390625 49.8886 -0.00390625 44.2366V17.2917C-0.00390625 13.0387 0.583676 9.82103 1.75884 7.63858C2.98997 5.45612 4.83666 3.60944 7.29891 2.09851C9.76116 0.699503 12.783 0 16.3645 0C20.7294 0 24.6746 0.923344 28.2001 2.77003L26.0176 9.31738C23.3315 8.3101 20.4496 7.80646 17.3718 7.80646C14.6857 7.80646 12.3913 8.53394 10.4886 9.98891C8.586 11.3879 7.63467 13.5704 7.63467 16.5363V44.0687C7.63467 49.8326 10.9083 52.7146 17.4557 52.7146C20.8133 52.7146 24.6746 52.0151 29.0395 50.6161L30.2986 57.667Z',

        'M47.9733 22.421L48.7651 16.8777C54.5723 16.4818 66.1867 18.6991 66.1867 30.7358V59.6397C55.3642 62.0154 33.7984 62.9656 34.1152 47.7613C34.1152 46.3322 34.0973 44.9747 34.0803 43.6888C33.9845 36.4248 33.9188 31.4471 37.2828 28.756C41.2422 25.5884 51.1409 24.0046 58.6638 29.5478C58.6538 29.4879 58.6438 29.4269 58.6337 29.365C58.2418 26.9743 57.622 23.193 47.9733 22.421ZM58.6638 37.0707V52.9085C52.9886 53.9644 41.6382 54.1756 41.6382 46.5734C41.6382 46.1077 41.6372 45.6553 41.6363 45.2161C41.6184 36.694 41.6109 33.1501 48.7652 33.9032C54.7836 34.5367 57.8719 36.2788 58.6638 37.0707Z',

        'M79.7099 48.3495C79.8218 49.8605 80.6053 51.1476 82.0602 52.2108C83.5152 53.2181 85.3899 53.7217 87.6842 53.7217C89.7548 53.7217 91.4616 53.2181 92.8046 52.2108C94.2036 51.1476 94.9031 49.8045 94.9031 48.1817C94.9031 46.2231 94.1477 44.7401 92.6367 43.7328C91.1818 42.7255 88.9433 41.7183 85.9215 40.711C83.4033 39.8716 81.3328 39.0601 79.7099 38.2767C78.0871 37.4932 76.6321 36.3461 75.345 34.8351C74.1139 33.3242 73.3864 31.3656 73.1626 28.9593C72.9947 27.0567 73.3584 25.154 74.2538 23.2514C75.2051 21.2928 76.772 19.6979 78.9544 18.4668C81.1929 17.1797 84.0468 16.5361 87.5164 16.5361C89.3071 16.5361 90.874 16.732 92.217 17.1237C93.616 17.4595 94.7073 17.8232 95.4907 18.2149C96.2741 18.6067 96.7498 18.8585 96.9177 18.9704L94.6513 25.8535C94.5394 25.7416 94.2036 25.5457 93.644 25.2659C93.0844 24.9302 92.273 24.6224 91.2097 24.3426C90.1465 24.0068 88.9154 23.8389 87.5164 23.8389C85.1101 23.8389 83.4313 24.3426 82.4799 25.3499C81.5286 26.3012 81.1369 27.5043 81.3048 28.9593C81.4727 30.0785 82.1722 31.0019 83.4033 31.7293C84.6904 32.4568 86.565 33.2403 89.0273 34.0797C91.8813 35.087 94.2316 36.0942 96.0783 37.1015C97.925 38.0529 99.5198 39.4519 100.863 41.2985C102.206 43.0893 102.877 45.4116 102.877 48.2656C102.877 51.7911 101.59 54.785 99.0162 57.2472C96.498 59.6535 92.7207 60.8567 87.6842 60.8567C84.4945 60.8567 81.7245 60.325 79.3741 59.2618C77.0798 58.1426 75.317 56.6876 74.0859 54.8969C72.9107 53.1062 72.2672 51.1196 72.1553 48.9371L79.7099 48.3495Z',

        'M135.334 59.094C131.865 59.9894 128.507 60.4371 125.261 60.4371C122.24 60.4371 119.721 60.1013 117.707 59.4298C114.405 58.3106 111.999 56.6038 110.488 54.3094C109.033 51.9591 108.305 48.6854 108.305 44.4884V33.744C108.305 28.204 109.76 24.007 112.67 21.153C115.58 18.2431 119.33 16.7881 123.918 16.7881C127.556 16.7881 131.305 17.6834 135.166 19.4742L133.068 25.8537C130.326 24.7344 127.724 24.1748 125.261 24.1748C122.351 24.1748 120.057 24.9863 118.378 26.6091C116.755 28.176 115.944 30.3864 115.944 33.2404V45.4118C115.944 48.0979 116.867 50.0285 118.714 51.2037C120.561 52.3788 122.911 52.9664 125.765 52.9664C128.283 52.9664 130.801 52.6027 133.32 51.8752L135.334 59.094Z',

        'M154.879 22.421L155.67 16.8777C161.478 16.4818 173.092 18.6991 173.092 30.7358V59.6397C162.27 62.0154 140.704 62.9656 141.02 47.7613C141.02 46.3322 141.003 44.9747 140.986 43.6888C140.89 36.4248 140.824 31.4471 144.188 28.756C148.147 25.5884 158.046 24.0046 165.569 29.5478C165.559 29.4879 165.549 29.4269 165.539 29.365C165.147 26.9743 164.527 23.193 154.879 22.421ZM165.569 37.0707V52.9085C159.894 53.9644 148.543 54.1756 148.543 46.5734C148.543 46.1077 148.543 45.6553 148.542 45.2161C148.524 36.694 148.516 33.1501 155.67 33.9032C161.689 34.5367 164.777 36.2788 165.569 37.0707Z',

        'M182.41 30.5543C182.41 24.6784 184.788 20.6493 189.545 18.4668C191.951 17.3476 194.665 16.788 197.687 16.788C199.254 16.788 200.737 16.9559 202.136 17.2917C203.591 17.5715 204.822 17.9632 205.829 18.4668V0.839355H213.384V59.5976L208.767 60.0173C205.13 60.4091 202.276 60.6049 200.205 60.6049C198.134 60.6049 196.176 60.4091 194.329 60.0173C192.538 59.6256 190.748 58.9821 188.957 58.0867C186.942 57.0794 185.348 55.5965 184.172 53.6379C182.997 51.6793 182.41 49.273 182.41 46.419V30.5543ZM205.829 26.2733C203.535 25.0422 201.044 24.4266 198.358 24.4266C195.896 24.4266 193.882 25.0981 192.315 26.4412C190.748 27.7842 189.964 29.9107 189.964 32.8206V46.8387C189.964 49.0211 190.888 50.7 192.734 51.8751C194.637 52.9943 197.099 53.5539 200.121 53.5539C201.8 53.5539 203.703 53.3301 205.829 52.8824V26.2733Z',

        'M248.644 56.6598C246.63 57.9469 244.336 58.9262 241.761 59.5977C239.187 60.2692 236.613 60.605 234.039 60.605C229.898 60.605 226.596 59.5977 224.134 57.5831C221.728 55.5126 220.524 52.4348 220.524 48.3497V31.1419C220.524 26.6091 221.923 23.0836 224.721 20.5654C227.575 18.0472 231.325 16.7881 235.969 16.7881C240.614 16.7881 244.224 18.0472 246.798 20.5654C249.428 23.0277 250.743 26.4692 250.743 30.8901V42.9775L228.247 44.2366V47.5103C228.247 49.4689 228.807 50.9798 229.926 52.0431C231.101 53.0503 232.724 53.554 234.794 53.554C237.872 53.554 241.537 52.4348 245.79 50.1964L248.644 56.6598ZM243.02 30.8061C243.02 28.5118 242.293 26.833 240.838 25.7697C239.383 24.6505 237.732 24.0909 235.886 24.0909C233.479 24.0909 231.605 24.7624 230.262 26.1055C228.918 27.3926 228.247 29.0993 228.247 31.2258V37.1017L243.02 36.2623V30.8061Z',

        'M264.559 48.3495C264.671 49.8605 265.455 51.1476 266.91 52.2108C268.365 53.2181 270.239 53.7217 272.534 53.7217C274.604 53.7217 276.311 53.2181 277.654 52.2108C279.053 51.1476 279.752 49.8045 279.752 48.1817C279.752 46.2231 278.997 44.7401 277.486 43.7328C276.031 42.7255 273.793 41.7183 270.771 40.711C268.253 39.8716 266.182 39.0601 264.559 38.2767C262.936 37.4932 261.481 36.3461 260.194 34.8351C258.963 33.3242 258.236 31.3656 258.012 28.9593C257.844 27.0567 258.208 25.154 259.103 23.2514C260.054 21.2928 261.621 19.6979 263.804 18.4668C266.042 17.1797 268.896 16.5361 272.366 16.5361C274.156 16.5361 275.723 16.732 277.066 17.1237C278.465 17.4595 279.557 17.8232 280.34 18.2149C281.124 18.6067 281.599 18.8585 281.767 18.9704L279.501 25.8535C279.389 25.7416 279.053 25.5457 278.493 25.2659C277.934 24.9302 277.122 24.6224 276.059 24.3426C274.996 24.0068 273.765 23.8389 272.366 23.8389C269.959 23.8389 268.281 24.3426 267.329 25.3499C266.378 26.3012 265.986 27.5043 266.154 28.9593C266.322 30.0785 267.022 31.0019 268.253 31.7293C269.54 32.4568 271.414 33.2403 273.877 34.0797C276.731 35.087 279.081 36.0942 280.928 37.1015C282.774 38.0529 284.369 39.4519 285.712 41.2985C287.055 43.0893 287.727 45.4116 287.727 48.2656C287.727 51.7911 286.44 54.785 283.866 57.2472C281.347 59.6535 277.57 60.8567 272.534 60.8567C269.344 60.8567 266.574 60.325 264.224 59.2618C261.929 58.1426 260.166 56.6876 258.935 54.8969C257.76 53.1062 257.117 51.1196 257.005 48.9371L264.559 48.3495Z',
      ],
    },
    desktop: {
      width: 364,
      height: 78,
      paths: [
        'M38.2621 73.5622C31.9728 75.8942 26.1074 77.0602 20.6661 77.0602C14.5181 77.0602 9.53609 75.4349 5.72009 72.1842C1.90409 68.9336 -0.00390625 63.7396 -0.00390625 56.6022V22.5762C-0.00390625 17.2056 0.738094 13.1422 2.22209 10.3862C3.77676 7.63023 6.10876 5.29823 9.21809 3.39023C12.3274 1.62357 16.1434 0.740234 20.6661 0.740234C26.1781 0.740234 31.1601 1.90623 35.6121 4.23823L32.8561 12.5062C29.4641 11.2342 25.8248 10.5982 21.9381 10.5982C18.5461 10.5982 15.6488 11.5169 13.2461 13.3542C10.8434 15.1209 9.64209 17.8769 9.64209 21.6222V56.3902C9.64209 63.6689 13.7761 67.3082 22.0441 67.3082C26.2841 67.3082 31.1601 66.4249 36.6721 64.6582L38.2621 73.5622Z',

        'M60.5816 29.0534L61.5816 22.0534C68.915 21.5534 83.5816 24.3534 83.5816 39.5534V76.0532C69.915 79.0532 42.6816 80.2532 43.0816 61.0532C43.0816 59.2485 43.059 57.5343 43.0376 55.9105C42.9166 46.7374 42.8336 40.4517 47.0817 37.0532C52.0817 33.0532 64.5817 31.0532 74.0817 38.0532C74.069 37.9775 74.0564 37.9005 74.0436 37.8223C73.5488 34.8034 72.7661 30.0283 60.5816 29.0534ZM74.0817 47.5531V67.5531C66.915 68.8865 52.5817 69.1531 52.5817 59.5531C52.5817 58.965 52.5805 58.3937 52.5793 57.8391C52.5567 47.0774 52.5473 42.6021 61.5817 43.5531C69.1817 44.3531 73.0817 46.5531 74.0817 47.5531Z',

        'M100.659 61.7961C100.8 63.7041 101.79 65.3294 103.627 66.6721C105.464 67.9441 107.832 68.5801 110.729 68.5801C113.344 68.5801 115.499 67.9441 117.195 66.6721C118.962 65.3294 119.845 63.6334 119.845 61.5841C119.845 59.1107 118.891 57.2381 116.983 55.9661C115.146 54.6941 112.319 53.4221 108.503 52.1501C105.323 51.0901 102.708 50.0654 100.659 49.0761C98.6096 48.0867 96.7722 46.6381 95.1469 44.7301C93.5922 42.8221 92.6736 40.3487 92.3909 37.3101C92.1789 34.9074 92.6382 32.5047 93.7689 30.1021C94.9702 27.6287 96.9489 25.6147 99.7049 24.0601C102.532 22.4347 106.136 21.6221 110.517 21.6221C112.778 21.6221 114.757 21.8694 116.453 22.3641C118.22 22.7881 119.598 23.2474 120.587 23.7421C121.576 24.2367 122.177 24.5547 122.389 24.6961L119.527 33.3881C119.386 33.2467 118.962 32.9994 118.255 32.6461C117.548 32.2221 116.524 31.8334 115.181 31.4801C113.838 31.0561 112.284 30.8441 110.517 30.8441C107.478 30.8441 105.358 31.4801 104.157 32.7521C102.956 33.9534 102.461 35.4727 102.673 37.3101C102.885 38.7234 103.768 39.8894 105.323 40.8081C106.948 41.7267 109.316 42.7161 112.425 43.7761C116.029 45.0481 118.997 46.3201 121.329 47.5921C123.661 48.7934 125.675 50.5601 127.371 52.8921C129.067 55.1534 129.915 58.0861 129.915 61.6901C129.915 66.1421 128.29 69.9227 125.039 73.0321C121.859 76.0707 117.089 77.5901 110.729 77.5901C106.701 77.5901 103.203 76.9187 100.235 75.5761C97.3376 74.1627 95.1116 72.3254 93.5569 70.0641C92.0729 67.8027 91.2602 65.2941 91.1189 62.5381L100.659 61.7961Z',

        'M170.901 75.3644C166.52 76.4951 162.28 77.0604 158.181 77.0604C154.365 77.0604 151.185 76.6364 148.641 75.7884C144.472 74.3751 141.433 72.2198 139.525 69.3224C137.688 66.3544 136.769 62.2204 136.769 56.9204V43.3524C136.769 36.3564 138.607 31.0564 142.281 27.4524C145.956 23.7778 150.691 21.9404 156.485 21.9404C161.079 21.9404 165.813 23.0711 170.689 25.3324L168.039 33.3884C164.577 31.9751 161.291 31.2684 158.181 31.2684C154.507 31.2684 151.609 32.2931 149.489 34.3424C147.44 36.3211 146.415 39.1124 146.415 42.7164V58.0864C146.415 61.4784 147.581 63.9164 149.913 65.4004C152.245 66.8844 155.213 67.6264 158.817 67.6264C161.997 67.6264 165.177 67.1671 168.357 66.2484L170.901 75.3644Z',

        'M195.582 29.0534L196.582 22.0534C203.915 21.5534 218.582 24.3534 218.582 39.5534V76.0532C204.915 79.0532 177.682 80.2532 178.082 61.0532C178.082 59.2485 178.059 57.5343 178.038 55.9105C177.917 46.7374 177.834 40.4517 182.082 37.0532C187.082 33.0532 199.582 31.0532 209.082 38.0532C209.069 37.9775 209.056 37.9005 209.044 37.8223C208.549 34.8034 207.766 30.0283 195.582 29.0534ZM209.082 47.5531V67.5531C201.915 68.8865 187.582 69.1531 187.582 59.5531C187.582 58.965 187.58 58.3937 187.579 57.8391C187.557 47.0774 187.547 42.6021 196.582 43.5531C204.182 44.3531 208.082 46.5531 209.082 47.5531Z',

        'M230.348 39.3243C230.348 31.9043 233.351 26.8163 239.358 24.0603C242.397 22.647 245.824 21.9403 249.64 21.9403C251.619 21.9403 253.491 22.1523 255.258 22.5763C257.095 22.9296 258.65 23.4243 259.922 24.0603V1.80029H269.462V76.0003L263.632 76.5303C259.039 77.025 255.435 77.2723 252.82 77.2723C250.205 77.2723 247.732 77.025 245.4 76.5303C243.139 76.0356 240.877 75.223 238.616 74.0923C236.072 72.8203 234.058 70.9476 232.574 68.4743C231.09 66.001 230.348 62.9623 230.348 59.3583V39.3243ZM259.922 33.9183C257.025 32.3636 253.88 31.5863 250.488 31.5863C247.379 31.5863 244.835 32.4343 242.856 34.1303C240.877 35.8263 239.888 38.5116 239.888 42.1863V59.8883C239.888 62.6443 241.054 64.7643 243.386 66.2483C245.789 67.6616 248.898 68.3683 252.714 68.3683C254.834 68.3683 257.237 68.0856 259.922 67.5203V33.9183Z',

        'M313.99 72.2904C311.446 73.9158 308.548 75.1524 305.298 76.0004C302.047 76.8484 298.796 77.2724 295.546 77.2724C290.316 77.2724 286.147 76.0004 283.038 73.4564C279.999 70.8418 278.479 66.9551 278.479 61.7964V40.0664C278.479 34.3424 280.246 29.8904 283.78 26.7104C287.384 23.5304 292.118 21.9404 297.983 21.9404C303.849 21.9404 308.407 23.5304 311.658 26.7104C314.979 29.8198 316.639 34.1658 316.639 39.7484V55.0124L288.232 56.6024V60.7364C288.232 63.2098 288.938 65.1178 290.352 66.4604C291.836 67.7324 293.885 68.3684 296.5 68.3684C300.386 68.3684 305.015 66.9551 310.385 64.1284L313.99 72.2904ZM306.888 39.6424C306.888 36.7451 305.969 34.6251 304.132 33.2824C302.294 31.8691 300.21 31.1624 297.878 31.1624C294.839 31.1624 292.472 32.0104 290.776 33.7064C289.08 35.3318 288.232 37.4871 288.232 40.1724V47.5924L306.888 46.5324V39.6424Z',

        'M334.087 61.7961C334.228 63.7041 335.217 65.3294 337.055 66.6721C338.892 67.9441 341.259 68.5801 344.157 68.5801C346.771 68.5801 348.927 67.9441 350.623 66.6721C352.389 65.3294 353.273 63.6334 353.273 61.5841C353.273 59.1107 352.319 57.2381 350.411 55.9661C348.573 54.6941 345.747 53.4221 341.931 52.1501C338.751 51.0901 336.136 50.0654 334.087 49.0761C332.037 48.0867 330.2 46.6381 328.575 44.7301C327.02 42.8221 326.101 40.3487 325.819 37.3101C325.607 34.9074 326.066 32.5047 327.197 30.1021C328.398 27.6287 330.377 25.6147 333.133 24.0601C335.959 22.4347 339.563 21.6221 343.945 21.6221C346.206 21.6221 348.185 21.8694 349.881 22.3641C351.647 22.7881 353.025 23.2474 354.015 23.7421C355.004 24.2367 355.605 24.5547 355.817 24.6961L352.955 33.3881C352.813 33.2467 352.389 32.9994 351.683 32.6461C350.976 32.2221 349.951 31.8334 348.609 31.4801C347.266 31.0561 345.711 30.8441 343.945 30.8441C340.906 30.8441 338.786 31.4801 337.585 32.7521C336.383 33.9534 335.889 35.4727 336.101 37.3101C336.313 38.7234 337.196 39.8894 338.751 40.8081C340.376 41.7267 342.743 42.7161 345.853 43.7761C349.457 45.0481 352.425 46.3201 354.757 47.5921C357.089 48.7934 359.103 50.5601 360.799 52.8921C362.495 55.1534 363.343 58.0861 363.343 61.6901C363.343 66.1421 361.717 69.9227 358.467 73.0321C355.287 76.0707 350.517 77.5901 344.157 77.5901C340.129 77.5901 336.631 76.9187 333.663 75.5761C330.765 74.1627 328.539 72.3254 326.985 70.0641C325.501 67.8027 324.688 65.2941 324.547 62.5381L334.087 61.7961Z',
      ],
    },
  };

  const currentVariantWidth = +responsiveVariants[deviceType].width + 1;
  const currentVariantHeight = +responsiveVariants[deviceType].height + 1;

  const svgPaths = responsiveVariants[deviceType].paths.map((path, index) => (
    <LinkLetter key={index} index={index} path={path} />
  ));

  return (
    <svg
      width={currentVariantWidth}
      height={currentVariantHeight}
      viewBox={`0 0 ${currentVariantWidth} ${currentVariantHeight}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {id ? <clipPath id={id}>{svgPaths}</clipPath> : svgPaths}
    </svg>
  );
}
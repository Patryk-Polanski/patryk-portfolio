import LinkLetter from './LinkLetter';

export default function TitleSmartzer({ id, deviceType = 'desktop' }) {
  const responsiveVariants = {
    mobile: {
      width: '177',
      height: '36',
      paths: [
        'M19.2643 5.68048C18.6056 5.35118 17.9141 5.08774 17.1896 4.89016C16.4652 4.65964 15.7242 4.49499 14.9668 4.3962C14.2424 4.29741 13.5014 4.24801 12.744 4.24801C12.0854 4.24801 11.3774 4.31388 10.62 4.4456C9.89557 4.57732 9.18757 4.80783 8.49603 5.13713C7.83742 5.43351 7.29407 5.8616 6.86598 6.42142C6.43788 6.98123 6.22384 7.67277 6.22384 8.49603C6.22384 9.28636 6.47081 9.99436 6.96477 10.62C7.45872 11.2457 8.11733 11.8055 8.94059 12.2995C9.76385 12.7934 10.6859 13.2709 11.7067 13.732C12.7605 14.16 13.8472 14.6211 14.9668 15.115C16.0865 15.609 17.1567 16.1688 18.1776 16.7945C19.2313 17.3872 20.1698 18.0952 20.9931 18.9185C21.8164 19.7088 22.475 20.6473 22.9689 21.734C23.4629 22.8207 23.7098 24.0885 23.7098 25.5375C23.7098 27.3157 23.3805 28.847 22.7219 30.1313C22.0633 31.4155 21.1577 32.4693 20.0052 33.2926C18.8526 34.1158 17.5519 34.7086 16.1029 35.0708C14.654 35.466 13.1392 35.6636 11.5586 35.6636C10.1096 35.6636 8.67715 35.466 7.26114 35.0708C5.87807 34.7086 4.56085 34.1652 3.3095 33.4408C2.09108 32.7163 0.98791 31.7942 0 30.6746L2.61796 27.6615C3.3095 28.4518 4.14922 29.1269 5.13713 29.6867C6.15797 30.2465 7.21175 30.6746 8.29845 30.971C9.41808 31.2344 10.5048 31.3661 11.5586 31.3661C12.4806 31.3661 13.3697 31.2509 14.2259 31.0204C15.0821 30.7899 15.856 30.4441 16.5475 29.9831C17.272 29.4891 17.8318 28.8799 18.2269 28.1554C18.6221 27.398 18.8197 26.4925 18.8197 25.4387C18.8197 24.4837 18.5727 23.644 18.0788 22.9195C17.6177 22.195 16.9756 21.5529 16.1523 20.9931C15.3291 20.4333 14.3906 19.9229 13.3368 19.4618C12.3159 18.9679 11.2622 18.4904 10.1755 18.0294C9.08878 17.5354 8.035 17.0085 7.01416 16.4487C5.99332 15.8889 5.07127 15.2467 4.24801 14.5223C3.42476 13.7978 2.76615 12.9581 2.27219 12.0031C1.77824 11.0152 1.53126 9.8791 1.53126 8.59482C1.53126 7.01416 1.86056 5.68048 2.51917 4.59378C3.21071 3.50708 4.11629 2.63443 5.23592 1.97582C6.35556 1.28428 7.57398 0.790328 8.89119 0.493955C10.2084 0.164652 11.5092 0 12.7934 0C13.6826 0 14.5717 0.0658612 15.4608 0.197583C16.3499 0.329304 17.2226 0.526886 18.0788 0.790329C18.9679 1.05377 19.7911 1.39954 20.5485 1.82763L19.2643 5.68048Z',

        'M55.1595 18.1778C55.1595 17.4862 55.0277 16.877 54.7643 16.3501C54.5338 15.8232 54.2045 15.3951 53.7764 15.0658C53.3483 14.7365 52.8543 14.4896 52.2945 14.3249C51.7676 14.1273 51.2078 14.0285 50.6151 14.0285C50.187 14.0285 49.7095 14.0779 49.1826 14.1767C48.6557 14.2755 48.0959 14.4402 47.5032 14.6707C46.9104 14.9012 46.3177 15.1811 45.7249 15.5104C45.8237 15.8726 45.8896 16.2678 45.9225 16.6959C45.9554 17.124 45.9719 17.5685 45.9719 18.0296V35.071H41.5263V18.1778C41.5263 17.4862 41.3946 16.877 41.1311 16.3501C40.9006 15.8232 40.5878 15.3951 40.1926 15.0658C39.7975 14.7365 39.32 14.4896 38.7602 14.3249C38.2003 14.1273 37.6241 14.0285 37.0313 14.0285C36.5374 14.0285 36.0269 14.0779 35.5001 14.1767C35.0061 14.2755 34.5121 14.4402 34.0182 14.6707C33.5242 14.8683 32.9973 15.1152 32.4375 15.4116V35.071H27.8438V10.3239H32.4375V11.7069C32.8327 11.4435 33.3102 11.1801 33.87 10.9166C34.4298 10.6532 35.039 10.4227 35.6976 10.2251C36.3562 10.0275 37.0642 9.92871 37.8216 9.92871C38.6778 9.92871 39.5011 10.011 40.2914 10.1757C41.0817 10.3403 41.8227 10.6202 42.5142 11.0154C43.2058 11.3776 43.7985 11.8551 44.2925 12.4479C44.9181 11.9869 45.5932 11.5752 46.3177 11.213C47.0751 10.8178 47.8819 10.505 48.7381 10.2745C49.5942 10.044 50.4834 9.92871 51.4054 9.92871C52.525 9.92871 53.5788 10.0769 54.5667 10.3733C55.5546 10.6367 56.4273 11.0977 57.1847 11.7563C57.9421 12.382 58.5348 13.2217 58.9629 14.2755C59.4239 15.2964 59.6545 16.5477 59.6545 18.0296V35.071H55.1595V18.1778Z',

        'M78.1942 18.2761C78.1942 17.2224 78.046 16.3662 77.7496 15.7076C77.4862 15.049 77.091 14.5386 76.5641 14.1763C76.0701 13.7812 75.4445 13.5012 74.6871 13.3366C73.9297 13.1719 73.0735 13.0896 72.1185 13.0896L72.4643 9.87891C74.3742 9.87891 75.9714 10.06 77.2556 10.4223C78.5729 10.7516 79.6266 11.3278 80.417 12.1511C81.2402 12.9414 81.833 13.9952 82.1952 15.3124C82.5574 16.6296 82.7385 18.2597 82.7385 20.2026V35.0706C82.3763 35.1036 81.9482 35.1529 81.4543 35.2188C80.9603 35.2847 80.417 35.3341 79.8242 35.367C79.2315 35.4329 78.6058 35.4658 77.9472 35.4658C77.3215 35.4987 76.6794 35.5316 76.0208 35.5646C75.3951 35.5975 74.7859 35.614 74.1931 35.614C72.7113 35.614 71.3282 35.4823 70.0439 35.2188C68.7925 34.9883 67.6894 34.5602 66.7344 33.9345C65.7794 33.2759 65.022 32.4033 64.4622 31.3166C63.9353 30.1969 63.6719 28.8139 63.6719 27.1673V22.5736C63.6719 21.2893 63.853 20.1861 64.2152 19.2641C64.6104 18.3091 65.1373 17.5517 65.7959 16.9919C66.4545 16.3991 67.1954 15.9546 68.0187 15.6582C68.8749 15.3618 69.764 15.2136 70.686 15.2136C71.6081 15.2136 72.5301 15.3453 73.4522 15.6088C74.3742 15.8393 75.2469 16.1851 76.0701 16.6461C76.9263 17.1071 77.6343 17.6505 78.1942 18.2761ZM78.1942 21.7338C77.799 21.5033 77.2392 21.2399 76.5147 20.9435C75.7902 20.6142 74.9999 20.3343 74.1437 20.1038C73.3205 19.8733 72.4807 19.758 71.6245 19.758C71.2294 19.758 70.8342 19.8074 70.4391 19.9062C70.0439 20.005 69.6817 20.1696 69.3524 20.4002C69.0231 20.6307 68.7596 20.9764 68.562 21.4375C68.3645 21.8656 68.2657 22.4089 68.2657 23.0675V26.4264C68.2657 27.2497 68.348 27.9741 68.5126 28.5998C68.6773 29.2255 68.9737 29.7524 69.4018 30.1805C69.8299 30.6086 70.4391 30.9379 71.2294 31.1684C72.0526 31.366 73.1229 31.4647 74.4401 31.4647C74.7694 31.4318 75.0987 31.4154 75.428 31.4154C75.7902 31.3824 76.136 31.3495 76.4653 31.3166C76.7946 31.2836 77.091 31.2672 77.3544 31.2672C77.6179 31.2342 77.8155 31.2178 77.9472 31.2178C78.1118 31.1848 78.1942 31.1684 78.1942 31.1684V21.7338Z',

        'M100.963 13.9791C100.963 13.9791 100.749 13.9462 100.321 13.8803C99.9261 13.7815 99.3498 13.7322 98.5924 13.7322C97.9996 13.7322 97.374 13.7815 96.7154 13.8803C96.0897 13.9462 95.464 14.0615 94.8383 14.2261C94.2456 14.3908 93.6528 14.5883 93.0601 14.8189C92.5003 15.0164 91.9899 15.2469 91.5288 15.5104V35.071H86.9351V10.3239H91.5288V11.5094C92.4838 10.9495 93.5047 10.505 94.5914 10.1757C95.711 9.84637 96.9294 9.66526 98.2466 9.63232C98.9382 9.63232 99.5803 9.69818 100.173 9.82991C100.766 9.9287 101.227 10.044 101.556 10.1757L100.963 13.9791Z',

        'M110.102 28.5503C110.102 29.3077 110.233 29.9498 110.497 30.4767C110.793 30.9707 111.205 31.3494 111.732 31.6128C112.259 31.8433 112.884 32.008 113.609 32.1068L112.275 35.7126C110.003 35.4821 108.307 34.7741 107.187 33.5886C106.068 32.4032 105.508 30.7237 105.508 28.5503V0.493652H110.102V10.3728H115.239L114.103 14.5714H110.102V28.5503Z',

        'M136.01 10.3237V14.4236L124.204 30.7241L136.701 30.7735V35.0709H118.474V30.7735L130.28 14.5224L118.919 14.473V10.3237H136.01Z',

        'M145.114 27.9577C145.114 28.5505 145.196 29.0609 145.361 29.489C145.559 29.9171 145.806 30.2793 146.102 30.5757C146.431 30.8721 146.826 31.1026 147.288 31.2672C147.749 31.399 148.259 31.4648 148.819 31.4648C149.807 31.4648 150.877 31.2837 152.03 30.9215C153.182 30.5263 154.302 30.0488 155.388 29.489L157.068 33.3419C155.915 34.0663 154.598 34.6426 153.116 35.0707C151.634 35.4988 150.202 35.7128 148.819 35.7128C147.633 35.7128 146.53 35.5647 145.509 35.2683C144.488 35.0048 143.599 34.5932 142.842 34.0334C142.085 33.4406 141.492 32.6833 141.064 31.7612C140.669 30.8392 140.471 29.7195 140.471 28.4023V18.2762C140.471 16.3992 140.866 14.835 141.656 13.5836C142.48 12.3323 143.583 11.3938 144.966 10.7681C146.349 10.1424 147.897 9.82959 149.609 9.82959C151.387 9.82959 152.919 10.1424 154.203 10.7681C155.52 11.3938 156.524 12.3158 157.216 13.5343C157.94 14.7527 158.303 16.2839 158.303 18.128V25.4386L145.114 26.1301V27.9577ZM153.758 19.0172C153.758 18.128 153.61 17.3048 153.314 16.5474C153.017 15.79 152.573 15.1808 151.98 14.7197C151.387 14.2587 150.581 14.0611 149.56 14.127C148.473 14.127 147.6 14.341 146.942 14.7691C146.283 15.1643 145.806 15.7406 145.509 16.498C145.246 17.2225 145.114 18.1116 145.114 19.1653V21.8821L153.758 21.3881V19.0172Z',

        'M176.407 13.9791C176.407 13.9791 176.193 13.9462 175.765 13.8803C175.37 13.7815 174.794 13.7322 174.036 13.7322C173.444 13.7322 172.818 13.7815 172.159 13.8803C171.534 13.9462 170.908 14.0615 170.282 14.2261C169.69 14.3908 169.097 14.5883 168.504 14.8189C167.944 15.0164 167.434 15.2469 166.973 15.5104V35.071H162.379V10.3239H166.973V11.5094C167.928 10.9495 168.949 10.505 170.035 10.1757C171.155 9.84637 172.374 9.66526 173.691 9.63232C174.382 9.63232 175.024 9.69818 175.617 9.82991C176.21 9.9287 176.671 10.044 177 10.1757L176.407 13.9791Z',
      ],
    },
    tablet: {
      width: '236',
      height: '48',
      paths: [
        'M25.6857 7.57398C24.8075 7.13491 23.8855 6.78366 22.9195 6.52021C21.9536 6.21286 20.9657 5.99333 19.9558 5.8616C18.9898 5.72988 18.0019 5.66402 16.9921 5.66402C16.1139 5.66402 15.1699 5.75184 14.1601 5.92747C13.1941 6.10309 12.2501 6.41044 11.328 6.84952C10.4499 7.24468 9.72543 7.81547 9.15464 8.56189C8.58385 9.30831 8.29845 10.2304 8.29845 11.328C8.29845 12.3818 8.62775 13.3258 9.28636 14.1601C9.94497 14.9943 10.8231 15.7407 11.9208 16.3993C13.0185 17.0579 14.2479 17.6946 15.609 18.3093C17.014 18.8801 18.463 19.4948 19.9558 20.1534C21.4486 20.812 22.8756 21.5584 24.2367 22.3926C25.6418 23.183 26.8931 24.127 27.9908 25.2246C29.0885 26.2784 29.9666 27.5298 30.6252 28.9787C31.2838 30.4276 31.6131 32.1181 31.6131 34.05C31.6131 36.421 31.1741 38.4627 30.2959 40.175C29.4178 41.8874 28.2103 43.2924 26.6736 44.3901C25.1368 45.4878 23.4025 46.2781 21.4706 46.7611C19.5387 47.288 17.5189 47.5514 15.4114 47.5514C13.4795 47.5514 11.5695 47.288 9.68152 46.7611C7.83743 46.2781 6.08114 45.5537 4.41267 44.5877C2.7881 43.6217 1.31721 42.3923 0 40.8995L3.49062 36.882C4.41267 37.9358 5.5323 38.8359 6.84951 39.5823C8.21064 40.3287 9.61566 40.8995 11.0646 41.2947C12.5574 41.6459 14.0064 41.8216 15.4114 41.8216C16.6408 41.8216 17.8263 41.6679 18.9679 41.3605C20.1095 41.0532 21.1413 40.5921 22.0633 39.9774C23.0293 39.3188 23.7757 38.5066 24.3026 37.5406C24.8295 36.5307 25.0929 35.3233 25.0929 33.9183C25.0929 32.645 24.7636 31.5253 24.105 30.5594C23.4903 29.5934 22.6341 28.7372 21.5365 27.9908C20.4388 27.2444 19.1874 26.5638 17.7824 25.9491C16.4213 25.2905 15.0162 24.6539 13.5673 24.0392C12.1184 23.3806 10.7133 22.678 9.35222 21.9316C7.9911 21.1852 6.7617 20.329 5.66402 19.363C4.56634 18.3971 3.6882 17.2775 3.02959 16.0042C2.37099 14.6869 2.04168 13.1721 2.04168 11.4598C2.04168 9.35222 2.48075 7.57398 3.3589 6.12505C4.28095 4.67611 5.48839 3.51257 6.98124 2.63443C8.47408 1.71238 10.0986 1.05377 11.8549 0.658607C13.6112 0.219536 15.3455 0 17.0579 0C18.2434 0 19.4289 0.087815 20.6144 0.263444C21.7999 0.439073 22.9634 0.702515 24.105 1.05377C25.2905 1.40503 26.3882 1.86605 27.3981 2.43685L25.6857 7.57398Z',

        'M73.546 24.237C73.546 23.315 73.3703 22.5027 73.0191 21.8002C72.7117 21.0977 72.2727 20.5269 71.7019 20.0878C71.1311 19.6487 70.4725 19.3194 69.7261 19.0999C69.0235 18.8364 68.2771 18.7047 67.4868 18.7047C66.916 18.7047 66.2793 18.7706 65.5768 18.9023C64.8743 19.034 64.1279 19.2536 63.3376 19.5609C62.5472 19.8683 61.7569 20.2415 60.9666 20.6805C61.0983 21.1635 61.1861 21.6904 61.23 22.2612C61.2739 22.832 61.2959 23.4247 61.2959 24.0394V46.7614H55.3684V24.237C55.3684 23.315 55.1928 22.5027 54.8415 21.8002C54.5342 21.0977 54.1171 20.5269 53.5902 20.0878C53.0633 19.6487 52.4266 19.3194 51.6802 19.0999C50.9338 18.8364 50.1654 18.7047 49.3751 18.7047C48.7165 18.7047 48.0359 18.7706 47.3334 18.9023C46.6748 19.034 46.0162 19.2536 45.3576 19.5609C44.699 19.8243 43.9965 20.1537 43.25 20.5488V46.7614H37.125V13.7652H43.25V15.6093C43.7769 15.258 44.4136 14.9067 45.16 14.5555C45.9064 14.2042 46.7187 13.8969 47.5969 13.6334C48.475 13.37 49.419 13.2383 50.4289 13.2383C51.5704 13.2383 52.6681 13.348 53.7219 13.5676C54.7757 13.7871 55.7636 14.1603 56.6856 14.6872C57.6077 15.1702 58.398 15.8068 59.0566 16.5972C59.8909 15.9825 60.7909 15.4336 61.7569 14.9507C62.7668 14.4238 63.8425 14.0067 64.9841 13.6993C66.1257 13.392 67.3112 13.2383 68.5406 13.2383C70.0334 13.2383 71.4384 13.4359 72.7556 13.831C74.0729 14.1823 75.2364 14.797 76.2463 15.6751C77.2561 16.5094 78.0464 17.629 78.6172 19.034C79.2319 20.3951 79.5393 22.0636 79.5393 24.0394V46.7614H73.546V24.237Z',

        'M104.259 24.3687C104.259 22.9637 104.061 21.8221 103.666 20.9439C103.315 20.0658 102.788 19.3852 102.085 18.9022C101.427 18.3754 100.593 18.0021 99.5827 17.7826C98.5728 17.5631 97.4312 17.4533 96.1579 17.4533L96.619 13.1724C99.1656 13.1724 101.295 13.4139 103.007 13.8968C104.764 14.3359 106.169 15.1043 107.223 16.202C108.32 17.2557 109.111 18.6608 109.594 20.417C110.076 22.1733 110.318 24.3467 110.318 26.9373V46.7613C109.835 46.8052 109.264 46.8711 108.606 46.9589C107.947 47.0467 107.223 47.1126 106.432 47.1565C105.642 47.2443 104.808 47.2882 103.929 47.2882C103.095 47.3321 102.239 47.376 101.361 47.4199C100.527 47.4638 99.7144 47.4858 98.9241 47.4858C96.9483 47.4858 95.1042 47.3102 93.3918 46.9589C91.7233 46.6516 90.2524 46.0808 88.9791 45.2465C87.7058 44.3684 86.6959 43.2048 85.9495 41.7559C85.247 40.2631 84.8958 38.419 84.8958 36.2236V30.0986C84.8958 28.3862 85.1372 26.9153 85.6202 25.6859C86.1471 24.4126 86.8496 23.4027 87.7278 22.6563C88.6059 21.866 89.5938 21.2732 90.6915 20.8781C91.8331 20.4829 93.0186 20.2853 94.248 20.2853C95.4774 20.2853 96.7068 20.4609 97.9362 20.8122C99.1656 21.1196 100.329 21.5806 101.427 22.1953C102.568 22.81 103.512 23.5344 104.259 24.3687ZM104.259 28.9789C103.732 28.6716 102.985 28.3203 102.02 27.9252C101.054 27.4861 99.9998 27.1129 98.8582 26.8055C97.7605 26.4982 96.6409 26.3445 95.4993 26.3445C94.9724 26.3445 94.4456 26.4104 93.9187 26.5421C93.3918 26.6738 92.9088 26.8933 92.4697 27.2007C92.0307 27.508 91.6794 27.9691 91.416 28.5838C91.1525 29.1546 91.0208 29.879 91.0208 30.7572V35.2357C91.0208 36.3334 91.1306 37.2993 91.3501 38.1336C91.5696 38.9678 91.9648 39.6703 92.5356 40.2411C93.1064 40.8119 93.9187 41.251 94.9724 41.5583C96.0701 41.8218 97.4971 41.9535 99.2534 41.9535C99.6925 41.9096 100.132 41.8876 100.571 41.8876C101.054 41.8437 101.515 41.7998 101.954 41.7559C102.393 41.712 102.788 41.69 103.139 41.69C103.49 41.6461 103.754 41.6242 103.929 41.6242C104.149 41.5803 104.259 41.5583 104.259 41.5583V28.9789Z',

        'M134.618 18.6385C134.618 18.6385 134.332 18.5946 133.762 18.5068C133.235 18.3751 132.466 18.3092 131.456 18.3092C130.666 18.3092 129.832 18.3751 128.954 18.5068C128.12 18.5946 127.285 18.7483 126.451 18.9678C125.661 19.1874 124.87 19.4508 124.08 19.7581C123.334 20.0216 122.653 20.3289 122.038 20.6802V46.761H115.913V13.7648H122.038V15.3455C123.312 14.5991 124.673 14.0063 126.122 13.5672C127.615 13.1282 129.239 12.8867 130.995 12.8428C131.917 12.8428 132.774 12.9306 133.564 13.1062C134.354 13.2379 134.969 13.3916 135.408 13.5672L134.618 18.6385Z',

        'M146.802 38.0676C146.802 39.0774 146.978 39.9336 147.329 40.6361C147.724 41.2947 148.273 41.7997 148.975 42.1509C149.678 42.4583 150.512 42.6778 151.478 42.8095L149.7 47.6174C146.67 47.31 144.409 46.366 142.916 44.7854C141.423 43.2047 140.677 40.9654 140.677 38.0676V0.658691H146.802V13.8308H153.652L152.137 19.429H146.802V38.0676Z',

        'M181.346 13.7646V19.2311L165.606 40.9651L182.268 41.031V46.7609H157.966V41.031L173.707 19.3628L158.559 19.2969V13.7646H181.346Z',

        'M193.485 37.2773C193.485 38.0677 193.595 38.7482 193.815 39.319C194.078 39.8898 194.407 40.3728 194.803 40.7679C195.242 41.1631 195.769 41.4705 196.383 41.69C196.998 41.8656 197.678 41.9534 198.425 41.9534C199.742 41.9534 201.169 41.7119 202.706 41.229C204.243 40.7021 205.735 40.0654 207.184 39.319L209.424 44.4561C207.887 45.4221 206.131 46.1905 204.155 46.7613C202.179 47.3321 200.269 47.6175 198.425 47.6175C196.844 47.6175 195.373 47.4199 194.012 47.0247C192.651 46.6735 191.466 46.1246 190.456 45.3782C189.446 44.5879 188.656 43.578 188.085 42.3486C187.558 41.1192 187.294 39.6264 187.294 37.8701V24.3686C187.294 21.8659 187.821 19.7803 188.875 18.1119C189.973 16.4434 191.444 15.192 193.288 14.3578C195.132 13.5236 197.196 13.1064 199.479 13.1064C201.85 13.1064 203.891 13.5236 205.604 14.3578C207.36 15.192 208.699 16.4214 209.621 18.046C210.587 19.6706 211.07 21.7122 211.07 24.171V33.9184L193.485 34.8405V37.2773ZM205.011 25.3565C205.011 24.171 204.813 23.0734 204.418 22.0635C204.023 21.0536 203.43 20.2414 202.64 19.6267C201.85 19.012 200.774 18.7485 199.413 18.8363C197.964 18.8363 196.8 19.1217 195.922 19.6925C195.044 20.2194 194.407 20.9878 194.012 21.9976C193.661 22.9636 193.485 24.1491 193.485 25.5541V29.1765L205.011 28.5179V25.3565Z',

        'M235.21 18.6385C235.21 18.6385 234.924 18.5946 234.354 18.5068C233.827 18.3751 233.058 18.3092 232.048 18.3092C231.258 18.3092 230.424 18.3751 229.546 18.5068C228.712 18.5946 227.877 18.7483 227.043 18.9678C226.253 19.1874 225.462 19.4508 224.672 19.7581C223.926 20.0216 223.245 20.3289 222.63 20.6802V46.761H216.505V13.7648H222.63V15.3455C223.904 14.5991 225.265 14.0063 226.714 13.5672C228.207 13.1282 229.831 12.8867 231.587 12.8428C232.51 12.8428 233.366 12.9306 234.156 13.1062C234.946 13.2379 235.561 13.3916 236 13.5672L235.21 18.6385Z',
      ],
    },
    desktop: {
      width: 380,
      height: 77,
      paths: [
        'M41.34 12.19C39.9267 11.4833 38.4427 10.918 36.888 10.494C35.3333 9.99934 33.7433 9.646 32.118 9.434C30.5633 9.222 28.9733 9.116 27.348 9.116C25.9347 9.116 24.4153 9.25734 22.79 9.54C21.2353 9.82267 19.716 10.3173 18.232 11.024C16.8187 11.66 15.6527 12.5787 14.734 13.78C13.8153 14.9813 13.356 16.4653 13.356 18.232C13.356 19.928 13.886 21.4473 14.946 22.79C16.006 24.1327 17.4193 25.334 19.186 26.394C20.9527 27.454 22.9313 28.4787 25.122 29.468C27.3833 30.3867 29.7153 31.376 32.118 32.436C34.5207 33.496 36.8173 34.6973 39.008 36.04C41.2693 37.312 43.2833 38.8313 45.05 40.598C46.8167 42.294 48.23 44.308 49.29 46.64C50.35 48.972 50.88 51.6927 50.88 54.802C50.88 58.618 50.1733 61.904 48.76 64.66C47.3467 67.416 45.4033 69.6773 42.93 71.444C40.4567 73.2107 37.6653 74.4827 34.556 75.26C31.4467 76.108 28.196 76.532 24.804 76.532C21.6947 76.532 18.6207 76.108 15.582 75.26C12.614 74.4827 9.78733 73.3167 7.102 71.762C4.48733 70.2073 2.12 68.2287 0 65.826L5.618 59.36C7.102 61.056 8.904 62.5047 11.024 63.706C13.2147 64.9073 15.476 65.826 17.808 66.462C20.2107 67.0273 22.5427 67.31 24.804 67.31C26.7827 67.31 28.6907 67.0627 30.528 66.568C32.3653 66.0733 34.026 65.3313 35.51 64.342C37.0647 63.282 38.266 61.9747 39.114 60.42C39.962 58.7947 40.386 56.8513 40.386 54.59C40.386 52.5407 39.856 50.7387 38.796 49.184C37.8067 47.6293 36.4287 46.2513 34.662 45.05C32.8953 43.8487 30.8813 42.7533 28.62 41.764C26.4293 40.704 24.168 39.6793 21.836 38.69C19.504 37.63 17.2427 36.4993 15.052 35.298C12.8613 34.0967 10.8827 32.7187 9.116 31.164C7.34933 29.6093 5.936 27.8073 4.876 25.758C3.816 23.638 3.286 21.2 3.286 18.444C3.286 15.052 3.99267 12.19 5.406 9.858C6.89 7.526 8.83333 5.65333 11.236 4.24C13.6387 2.756 16.2533 1.696 19.08 1.06C21.9067 0.353333 24.698 0 27.454 0C29.362 0 31.27 0.141334 33.178 0.424002C35.086 0.706669 36.9587 1.13067 38.796 1.696C40.704 2.26133 42.4707 3.00333 44.096 3.922L41.34 12.19Z',

        'M118.369 39.0082C118.369 37.5242 118.086 36.2168 117.521 35.0862C117.026 33.9555 116.32 33.0368 115.401 32.3301C114.482 31.6235 113.422 31.0935 112.221 30.7402C111.09 30.3161 109.889 30.1041 108.617 30.1041C107.698 30.1041 106.674 30.2101 105.543 30.4221C104.412 30.6341 103.211 30.9875 101.939 31.4821C100.667 31.9768 99.395 32.5775 98.123 33.2841C98.335 34.0615 98.4763 34.9095 98.547 35.8282C98.6176 36.7468 98.653 37.7008 98.653 38.6902V75.2602H89.113V39.0082C89.113 37.5242 88.8303 36.2168 88.265 35.0862C87.7703 33.9555 87.099 33.0368 86.251 32.3301C85.403 31.6235 84.3783 31.0935 83.177 30.7402C81.9756 30.3161 80.739 30.1041 79.467 30.1041C78.407 30.1041 77.3116 30.2101 76.181 30.4221C75.121 30.6341 74.061 30.9875 73.001 31.4821C71.941 31.9061 70.8103 32.4361 69.609 33.0721V75.2602H59.751V22.1541H69.609V25.1222C70.457 24.5568 71.4816 23.9915 72.683 23.4261C73.8843 22.8608 75.1916 22.3662 76.605 21.9422C78.0183 21.5182 79.5376 21.3062 81.163 21.3062C83.0003 21.3062 84.767 21.4828 86.463 21.8362C88.159 22.1895 89.749 22.7901 91.233 23.6381C92.717 24.4155 93.989 25.4401 95.049 26.7121C96.3916 25.7228 97.8403 24.8395 99.395 24.0621C101.02 23.2141 102.752 22.5428 104.589 22.0481C106.426 21.5535 108.334 21.3062 110.313 21.3062C112.716 21.3062 114.977 21.6242 117.097 22.2602C119.217 22.8255 121.09 23.8148 122.715 25.2281C124.34 26.5708 125.612 28.3728 126.531 30.6341C127.52 32.8248 128.015 35.5102 128.015 38.6902V75.2602H118.369V39.0082Z',

        'M167.8 39.2202C167.8 36.9589 167.482 35.1215 166.846 33.7082C166.28 32.2949 165.432 31.1995 164.302 30.4222C163.242 29.5742 161.899 28.9735 160.274 28.6202C158.648 28.2669 156.811 28.0902 154.762 28.0902L155.504 21.2002C159.602 21.2002 163.03 21.5889 165.786 22.3662C168.612 23.0729 170.874 24.3095 172.57 26.0762C174.336 27.7722 175.608 30.0335 176.386 32.8602C177.163 35.6869 177.552 39.1849 177.552 43.3542V75.2602C176.774 75.3309 175.856 75.4369 174.796 75.5782C173.736 75.7195 172.57 75.8255 171.298 75.8962C170.026 76.0375 168.683 76.1082 167.27 76.1082C165.927 76.1789 164.549 76.2495 163.136 76.3202C161.793 76.3909 160.486 76.4262 159.214 76.4262C156.034 76.4262 153.066 76.1435 150.31 75.5782C147.624 75.0835 145.257 74.1649 143.208 72.8222C141.158 71.4089 139.533 69.5362 138.332 67.2042C137.201 64.8015 136.636 61.8335 136.636 58.3002V48.4422C136.636 45.6862 137.024 43.3189 137.802 41.3402C138.65 39.2909 139.78 37.6655 141.194 36.4642C142.607 35.1922 144.197 34.2382 145.964 33.6022C147.801 32.9662 149.709 32.6482 151.688 32.6482C153.666 32.6482 155.645 32.9309 157.624 33.4962C159.602 33.9909 161.475 34.7329 163.242 35.7222C165.079 36.7115 166.598 37.8775 167.8 39.2202ZM167.8 46.6402C166.952 46.1455 165.75 45.5802 164.196 44.9442C162.641 44.2375 160.945 43.6369 159.108 43.1422C157.341 42.6475 155.539 42.4002 153.702 42.4002C152.854 42.4002 152.006 42.5062 151.158 42.7182C150.31 42.9302 149.532 43.2835 148.826 43.7782C148.119 44.2729 147.554 45.0149 147.13 46.0042C146.706 46.9229 146.494 48.0889 146.494 49.5022V56.7102C146.494 58.4769 146.67 60.0315 147.024 61.3742C147.377 62.7169 148.013 63.8475 148.932 64.7662C149.85 65.6849 151.158 66.3915 152.854 66.8862C154.62 67.3102 156.917 67.5222 159.744 67.5222C160.45 67.4515 161.157 67.4162 161.864 67.4162C162.641 67.3455 163.383 67.2749 164.09 67.2042C164.796 67.1335 165.432 67.0982 165.998 67.0982C166.563 67.0275 166.987 66.9922 167.27 66.9922C167.623 66.9215 167.8 66.8862 167.8 66.8862V46.6402Z',

        'M216.662 29.9979C216.662 29.9979 216.202 29.9273 215.284 29.7859C214.436 29.5739 213.199 29.4679 211.574 29.4679C210.302 29.4679 208.959 29.5739 207.546 29.7859C206.203 29.9273 204.86 30.1746 203.518 30.5279C202.246 30.8813 200.974 31.3053 199.702 31.7999C198.5 32.2239 197.405 32.7186 196.416 33.2839V75.2599H186.558V22.1539H196.416V24.6979C198.465 23.4966 200.656 22.5426 202.988 21.8359C205.39 21.1293 208.005 20.7406 210.832 20.6699C212.316 20.6699 213.694 20.8113 214.966 21.0939C216.238 21.3059 217.227 21.5533 217.934 21.8359L216.662 29.9979Z',

        'M236.272 61.2681C236.272 62.8934 236.554 64.2714 237.12 65.4021C237.756 66.4621 238.639 67.2747 239.77 67.8401C240.9 68.3347 242.243 68.6881 243.798 68.9001L240.936 76.6381C236.06 76.1434 232.42 74.6241 230.018 72.0801C227.615 69.5361 226.414 65.9321 226.414 61.2681V1.06006H236.272V22.2601H247.296L244.858 31.2701H236.272V61.2681Z',

        'M291.869 22.1538V30.9518L266.535 65.9318L293.353 66.0378V75.2598H254.239V66.0378L279.573 31.1638L255.193 31.0578V22.1538H291.869Z',

        'M311.406 59.9962C311.406 61.2682 311.583 62.3636 311.936 63.2822C312.36 64.2009 312.89 64.9782 313.526 65.6142C314.233 66.2502 315.081 66.7449 316.07 67.0982C317.06 67.3809 318.155 67.5222 319.356 67.5222C321.476 67.5222 323.773 67.1336 326.246 66.3562C328.72 65.5082 331.122 64.4836 333.454 63.2822L337.058 71.5502C334.585 73.1049 331.758 74.3416 328.578 75.2602C325.398 76.1789 322.324 76.6382 319.356 76.6382C316.812 76.6382 314.445 76.3202 312.254 75.6842C310.064 75.1189 308.156 74.2356 306.53 73.0342C304.905 71.7622 303.633 70.1369 302.714 68.1582C301.866 66.1796 301.442 63.7769 301.442 60.9502V39.2202C301.442 35.1922 302.29 31.8356 303.986 29.1502C305.753 26.4649 308.12 24.4509 311.088 23.1082C314.056 21.7656 317.378 21.0942 321.052 21.0942C324.868 21.0942 328.154 21.7656 330.91 23.1082C333.737 24.4509 335.892 26.4296 337.376 29.0442C338.931 31.6589 339.708 34.9449 339.708 38.9022V54.5902L311.406 56.0742V59.9962ZM329.956 40.8102C329.956 38.9022 329.638 37.1356 329.002 35.5102C328.366 33.8849 327.412 32.5776 326.14 31.5882C324.868 30.5989 323.137 30.1749 320.946 30.3162C318.614 30.3162 316.742 30.7756 315.328 31.6942C313.915 32.5422 312.89 33.7789 312.254 35.4042C311.689 36.9589 311.406 38.8669 311.406 41.1282V46.9582L329.956 45.8982V40.8102Z',

        'M378.56 29.9979C378.56 29.9979 378.101 29.9273 377.182 29.7859C376.334 29.5739 375.097 29.4679 373.472 29.4679C372.2 29.4679 370.857 29.5739 369.444 29.7859C368.101 29.9273 366.759 30.1746 365.416 30.5279C364.144 30.8813 362.872 31.3053 361.6 31.7999C360.399 32.2239 359.303 32.7186 358.314 33.2839V75.2599H348.456V22.1539H358.314V24.6979C360.363 23.4966 362.554 22.5426 364.886 21.8359C367.289 21.1293 369.903 20.7406 372.73 20.6699C374.214 20.6699 375.592 20.8113 376.864 21.0939C378.136 21.3059 379.125 21.5533 379.832 21.8359L378.56 29.9979Z',
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

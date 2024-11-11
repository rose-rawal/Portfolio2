import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {motion} from 'framer-motion';
const Navbar=()=>{
    const dispatch =useDispatch();
    const count=useSelector((state:RootState)=>state.counter.value)
    return (
        <div className='nav-wrapper'>
        <motion.div
        initial={{y:-300}}
        animate={{y:0}}
        transition={{duration:0.6}}
        className='navbar-block'>
            <div className='navbar-heading'>
            <svg width="30" viewBox="0 0 65 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.1463 86.9339C62.1401 86.9154 62.0908 86.9031 62.0766 86.8863C62.0632 86.8705 62.0446 86.8582 62.0272 86.8466" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                <path d="M1 35.5L64 87L62.5 89" stroke="black"/>
                <path d="M60.9949 85.6555C60.9777 85.6571 60.9516 85.6602 60.9358 85.6674C60.893 85.6869 60.8261 85.6136 60.7933 85.5924C60.7333 85.5537 60.6764 85.5082 60.6252 85.457C60.591 85.4228 60.5525 85.3966 60.5185 85.3626C60.4894 85.3335 60.4607 85.3043 60.4263 85.2814C60.3318 85.2184 60.2582 85.1341 60.1611 85.0758" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M59.4498 84.3983C59.2566 84.3983 59.112 84.2539 58.9625 84.1508C58.8907 84.1013 58.8182 84.0469 58.7508 83.9913C58.6053 83.8715 58.4537 83.7719 58.297 83.6668C58.1374 83.5598 57.9893 83.4376 57.8317 83.3291C57.6406 83.1976 57.4359 83.075 57.2608 82.9232C57.1705 82.845 57.0769 82.7814 56.9968 82.6911C56.9136 82.5974 56.8378 82.4914 56.7273 82.4282" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M56.2502 81.7413C56.1634 81.763 56.0643 81.6836 56.0114 81.6175C55.9509 81.5419 55.8452 81.5079 55.7849 81.4274C55.7684 81.4054 55.7383 81.3939 55.7186 81.3742C55.6833 81.339 55.6531 81.2922 55.605 81.2723C55.5638 81.2553 55.5444 81.2282 55.514 81.1966C55.4567 81.1369 55.3704 81.0934 55.305 81.0407C55.2122 80.966 55.1029 80.9216 55.018 80.8368C54.9589 80.7777 54.871 80.7561 54.8185 80.6868C54.7168 80.5524 54.6002 80.4269 54.4813 80.3059C54.3501 80.1724 54.2516 80.0073 54.1267 79.8668" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M53.6294 79.4486C53.5081 79.4486 53.4249 79.3326 53.3384 79.2591C53.2212 79.1594 53.0788 79.0909 52.962 78.9925C52.6847 78.759 52.3806 78.5407 52.0735 78.3461C51.7945 78.1693 51.5436 77.9552 51.2675 77.7738C51.1541 77.6992 51.0514 77.5927 50.9576 77.4939C50.9008 77.4342 50.8389 77.3733 50.7904 77.3064C50.7647 77.271 50.746 77.2304 50.719 77.1959C50.6117 77.059 50.4556 76.9797 50.3174 76.8797" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M49.9649 76.93C49.8928 76.9137 49.8354 76.8853 49.7788 76.8384C49.6732 76.751 49.563 76.6719 49.4611 76.5802C49.2676 76.4061 49.088 76.2258 48.8819 76.0639C48.7744 75.9795 48.657 75.9141 48.5677 75.81C48.493 75.7228 48.4182 75.6338 48.353 75.5392C48.2683 75.4165 48.1314 75.3258 48.0507 75.2048" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M47.3455 74.7011C47.3351 74.6493 47.274 74.5825 47.2391 74.5444C47.1775 74.4771 47.1496 74.3924 47.095 74.3191C47.0512 74.2602 47.0186 74.1938 46.9677 74.1414C46.9203 74.0927 46.8872 74.0309 46.8474 73.9763C46.8262 73.9473 46.7796 73.8958 46.7676 73.863C46.7499 73.8142 46.6944 73.7743 46.6571 73.737C46.555 73.6349 46.4161 73.5802 46.3129 73.4796C46.1293 73.3006 45.9025 73.1681 45.714 72.9912C45.4987 72.7892 45.3217 72.5658 45.1438 72.3308C45.0874 72.2563 45.0536 72.1861 44.978 72.1321" stroke="black" strokeLinecap="round"/>
                <path d="M44.2728 71.8299C44.2262 71.8214 44.1756 71.7786 44.1413 71.7487C44.1218 71.7318 44.102 71.7122 44.0811 71.697C44.0554 71.6782 44.1339 71.7329 44.1574 71.7543C44.2301 71.8207 44.3223 71.8959 44.3665 71.9866C44.3983 72.0517 44.418 72.1243 44.4617 72.1825" stroke="black" strokeLinecap="round"/>
                <path d="M43.958 71.3135C43.8312 71.1995 43.6707 71.1214 43.5382 71.0127C43.4352 70.9282 43.3471 70.8254 43.25 70.7343C43.1626 70.6522 43.0725 70.5607 42.9946 70.4691C42.9172 70.3781 42.8019 70.3119 42.7001 70.2515C42.5689 70.1738 42.449 70.0872 42.3181 70.0011C42.2185 69.9355 42.1023 69.8978 42.011 69.8206C41.9507 69.7696 41.8851 69.7153 41.8172 69.6765" stroke="black" strokeLinecap="round"/>
                <path d="M41.1749 69.2735C41.1541 69.367 40.9543 69.2288 40.9398 69.2175C40.6756 69.0108 40.4284 68.7915 40.1919 68.555C40.0917 68.4547 39.9672 68.3845 39.8666 68.2856C39.7272 68.1486 39.5898 68.0196 39.428 67.9085C39.2054 67.7557 38.98 67.6045 38.7696 67.4349C38.6945 67.3743 38.6425 67.2969 38.5807 67.2236C38.5027 67.131 38.4075 67.0593 38.3219 66.9746C38.214 66.8679 38.0973 66.7594 38.0015 66.6422C37.8809 66.4949 37.7459 66.3568 37.6153 66.2183C37.542 66.1406 37.4559 66.0818 37.3718 66.0168C37.3026 65.9632 37.2428 65.8965 37.1703 65.8482" stroke="black" strokeLinecap="round"/>
                <path d="M36.8681 65.6089C36.764 65.6565 36.7304 65.5659 36.6652 65.4942C36.6008 65.4233 36.5507 65.3408 36.4749 65.2815C36.4158 65.2352 36.3477 65.2086 36.3007 65.1479C36.235 65.063 36.1777 64.9721 36.1125 64.8869C36.0057 64.7475 35.878 64.6316 35.7431 64.5203C35.5423 64.3547 35.3306 64.2064 35.1107 64.0656C34.9145 63.9399 34.7048 63.8075 34.5636 63.6192" stroke="black" strokeLinecap="round"/>
                <path d="M34.3999 63.3422C34.3281 63.3422 34.2707 63.3443 34.211 63.2988C34.1506 63.2528 34.0994 63.1957 34.0361 63.1533C33.9588 63.1015 33.8747 63.0604 33.7954 63.012C33.7251 62.969 33.6691 62.9085 33.5925 62.8762C33.5007 62.8376 33.4379 62.7468 33.3602 62.6887C33.2694 62.6208 33.1778 62.5544 33.0874 62.4858C32.9837 62.4072 32.8686 62.3464 32.7768 62.2529C32.6854 62.1598 32.5967 62.0722 32.5165 61.9695C32.4093 61.8323 32.283 61.7258 32.1527 61.6113C32.0959 61.5614 32.0582 61.5053 32.0114 61.4455C31.9792 61.4044 31.9393 61.3719 31.912 61.3273C31.8984 61.305 31.8819 61.2757 31.8561 61.2671C31.811 61.2521 31.7735 61.201 31.7301 61.1762C31.6734 61.1438 31.6054 61.0843 31.5566 61.0404C31.5067 60.9955 31.4666 60.9408 31.4027 60.9145C31.3556 60.8951 31.3217 60.8715 31.2824 60.839C31.2578 60.8186 31.2231 60.8105 31.2012 60.7914C31.1719 60.7658 31.1418 60.7477 31.1131 60.7221C31.0844 60.6966 31.0557 60.672 31.0256 60.648C31.0037 60.6304 30.9689 60.6236 30.9508 60.6032C30.9361 60.5867 30.9326 60.5897 30.9123 60.5829C30.8913 60.5759 30.8916 60.5438 30.8682 60.5353C30.8357 60.5235 30.8078 60.4975 30.7731 60.4836" stroke="black" strokeLinecap="round"/>
                <path d="M38.6501 17.475C38.6186 17.5459 38.4111 17.552 38.3411 17.5655C38.1752 17.5974 38.0201 17.6523 37.8541 17.5748C37.771 17.5361 37.673 17.5319 37.595 17.4968C37.4757 17.4431 37.3609 17.3427 37.2454 17.2767C36.9914 17.1316 36.7749 16.9412 36.515 16.8007C36.2678 16.6671 36.0397 16.5355 35.7721 16.448C35.4549 16.3442 35.1151 16.3169 34.8029 16.1998C34.5492 16.1047 34.2499 16.0358 33.985 15.9829C33.8655 15.959 33.7465 15.8294 33.6432 15.7675C33.4931 15.6774 33.3329 15.6064 33.1859 15.5084C33.0734 15.4334 32.9285 15.4008 32.8223 15.3211C32.7083 15.2356 32.605 15.1285 32.468 15.0761C32.1537 14.9559 31.8338 14.875 31.5081 14.7936C31.2561 14.7306 31.018 14.5865 30.7777 14.5033C30.7657 14.4991 30.6175 14.4378 30.6216 14.4877C30.6357 14.6561 30.9184 14.8618 31.0243 14.9762C31.1295 15.0899 31.2336 15.2194 31.3723 15.2946C31.7413 15.4945 32.0923 15.7287 32.4695 15.9173C32.6201 15.9926 32.7826 16.0417 32.9284 16.1233C32.998 16.1623 33.1089 16.2061 33.1875 16.2107C33.2356 16.2136 33.4045 16.2869 33.278 16.256C32.942 16.174 32.6206 15.9261 32.3322 15.7488C31.9685 15.5251 31.615 15.2896 31.2584 15.0558C31.1401 14.9782 31.0313 14.9411 30.9244 14.8342C30.8162 14.726 30.6083 14.6557 30.4687 14.5938C30.3025 14.5202 30.1077 14.4854 29.9349 14.4346C29.4752 14.2996 29.0179 14.1564 28.5583 14.021C28.3223 13.9515 28.056 13.7947 27.806 13.7947" stroke="black" strokeLinecap="round"/>
                <path d="M31.1773 15.1994C30.5777 15.1994 30.0828 14.7246 29.4948 14.6406C29.3113 14.6144 29.1113 14.4915 28.9626 14.3737C28.8686 14.2994 28.7032 14.2132 28.5911 14.1615C28.3637 14.0565 28.1809 13.8755 27.9652 13.7416C27.8839 13.6912 27.831 13.6208 27.7499 13.5762C27.5752 13.4802 27.2646 13.3412 27.1443 13.1829C27.0983 13.1224 26.9955 13.0775 26.9289 13.0362C26.856 12.9909 26.7737 12.9633 26.6917 12.9394C26.3232 12.8322 25.9445 12.7581 25.5711 12.671C25.1034 12.5619 24.6033 12.4743 24.1539 12.3058" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M27.497 14.0476C27.2706 14.0476 27.0909 13.9866 26.8712 13.9352C26.4146 13.8283 25.9425 13.7348 25.5008 13.5762C25.3623 13.5265 25.2226 13.4965 25.0872 13.4514C24.4417 13.2362 23.8841 12.7821 23.2768 12.5024C22.9591 12.3561 22.6595 12.1396 22.3778 11.9343C22.0818 11.7186 21.7481 11.5575 21.485 11.2944" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24.5472 12.2215C24.4696 12.0749 24.3776 12.069 24.2647 11.9655C24.098 11.8127 23.9423 11.6828 23.7262 11.6034C23.5241 11.5292 23.3146 11.5064 23.116 11.4224C22.9955 11.3714 22.8572 11.3369 22.7274 11.3225C22.6529 11.3142 22.5883 11.2253 22.4979 11.2132C22.3521 11.1938 22.2202 11.2086 22.075 11.1664C21.5095 11.0019 20.9022 10.8943 20.3051 10.873" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M21.5974 11.7439C20.7046 11.7439 19.9145 11.3008 19.0721 11.0884C18.933 11.0533 18.794 11.0166 18.6538 10.9854C18.5798 10.9689 18.554 10.9032 18.4931 10.8761C18.3267 10.8022 18.6047 10.587 18.6632 10.5359C18.7031 10.501 18.7485 10.5013 18.8005 10.4906C19.0496 10.4397 19.2941 10.4235 19.5481 10.4235C19.6336 10.4235 19.7202 10.4271 19.8056 10.4235C19.9645 10.4169 19.4901 10.3782 19.3312 10.3736C18.8581 10.3599 18.3841 10.3673 17.9109 10.3673C17.8414 10.3673 17.7311 10.3865 17.6643 10.3548C17.2608 10.1637 16.792 10.0795 16.4001 9.8835C16.3106 9.83878 16.2402 9.7646 16.1597 9.70558C15.9786 9.57274 15.7615 9.50114 15.5854 9.35441C15.4528 9.24391 15.305 9.1798 15.1733 9.07503C15.0301 8.96108 14.8542 8.92454 14.7114 8.82063C14.6414 8.76973 14.5645 8.72531 14.4897 8.68173C14.3331 8.59037 14.1429 8.60908 13.9747 8.55062C13.7723 8.48028 13.5735 8.39649 13.366 8.3446" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M19.968 10.0302C19.8587 9.95737 19.7048 9.93552 19.5809 9.90222C19.1694 9.79159 18.7544 9.69249 18.3385 9.59943C17.8371 9.4872 17.3099 9.43604 16.8215 9.27323C16.6247 9.20763 16.4081 9.1139 16.2034 9.08126C16.0146 9.05117 15.8435 8.93287 15.6572 8.90802C15.4571 8.88134 15.2613 8.7817 15.0625 8.73322C14.8005 8.66932 14.5391 8.60255 14.2806 8.52564C14.2227 8.50841 14.1638 8.49965 14.1183 8.46321C14.0253 8.38882 13.7492 8.39315 13.636 8.368C13.4137 8.3186 13.0985 8.26546 12.9165 8.11984" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16.1472 10.8168C15.9377 10.7004 15.7448 10.534 15.5479 10.3985C15.0918 10.0847 14.642 9.76181 14.187 9.44648C14.0097 9.32364 13.8259 9.20948 13.6485 9.08751C13.4458 8.94818 13.2613 8.81854 13.0336 8.71137C12.9075 8.65203 12.8529 8.53532 12.7198 8.51315" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M15.164 8.00747C15.0065 7.9704 14.8595 7.8874 14.7036 7.84203C14.3955 7.7524 14.0762 7.71924 13.7718 7.61416C13.4243 7.49421 13.0656 7.4001 12.7246 7.26611C12.286 7.09383 11.8116 7.04252 11.362 6.90558C11.195 6.85472 11.0342 6.77695 10.8657 6.73234C10.761 6.70463 10.6551 6.71442 10.5536 6.67147C10.3694 6.59356 10.1811 6.54306 10.0104 6.43579C9.81876 6.31533 9.61264 6.19599 9.41421 6.08463C9.0372 5.87304 8.6007 5.66343 8.16873 5.59143" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M13.8436 9.74925C13.6514 9.93015 13.2462 9.66215 13.0492 9.60879C12.7055 9.51571 12.361 9.42476 12.0144 9.34346C11.7023 9.27024 11.4385 9.10998 11.156 8.96576C10.8811 8.82546 10.5921 8.72746 10.3163 8.5943C10.1794 8.52821 10.0584 8.44499 9.93391 8.35863C9.776 8.24911 9.59632 8.18615 9.43915 8.07613C9.34168 8.0079 9.23884 7.95752 9.13325 7.89352C8.48044 7.49789 7.80706 7.37625 7.07306 7.19275" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12.3265 8.45697C11.8325 7.97663 11.174 7.8412 10.5286 7.67035C9.79102 7.47512 9.07156 7.24091 8.30917 7.16467" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <line x1="5.5" y1="9" x2="5.5" y2="32" stroke="#FDDBBB"/>
                <path d="M4.35682 11.249C4.52523 11.2911 4.16147 11.9879 4.13957 12.1302C4.08533 12.4828 3.96998 12.8406 3.88378 13.1901C3.67096 14.0533 3.75764 14.9715 3.75764 15.8602C3.75764 16.5569 3.75764 17.2536 3.75764 17.9503C3.75764 18.3549 3.75274 18.7598 3.75764 19.1644C3.76136 19.4712 3.82071 19.7726 3.82071 20.0789C3.82071 20.3605 3.78938 19.5114 3.83999 19.2345C3.90821 18.861 4.0283 18.5183 4.03971 18.136C4.06116 17.4175 4.32069 16.7652 4.45142 16.0634C4.48641 15.8756 4.52169 15.7056 4.51274 15.5133C4.50046 15.2492 4.38835 15.0107 4.38835 14.7459C4.38835 14.5411 4.32528 14.3564 4.32528 14.1502C4.32528 13.9377 4.32528 13.7251 4.32528 13.5125C4.32528 13.3741 4.32528 13.2357 4.32528 13.0973C4.32528 13.0393 4.3067 12.9445 4.32528 12.8888C4.33318 12.8651 4.33538 12.9377 4.3393 12.9624C4.3759 13.193 4.41391 13.4235 4.44792 13.6544C4.61056 14.759 4.54603 15.8955 4.54603 17.0095C4.54603 17.8965 4.54603 18.7836 4.54603 19.6707C4.54603 20.2189 4.63991 20.8502 4.50048 21.3859C4.42483 21.6765 4.34001 21.9092 4.32178 22.2146C4.29706 22.6286 4.13607 23.0186 4.13607 23.4357C4.13607 23.7779 4.13607 24.1201 4.13607 24.4623" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4.45142 25.1561C4.45142 26.102 4.49263 27.1051 4.29374 28.0399C4.19323 28.5123 4.10453 28.9744 4.10453 29.459C4.10453 29.9089 4.08135 30.3636 4.07299 30.815C4.06586 31.1999 4.01883 31.574 3.91531 31.9363" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4.70368 32.0309C4.57749 32.0309 4.41439 32.0036 4.29372 32.0467C4.023 32.1433 3.73034 32.0352 3.45803 32.0957C3.25295 32.1413 2.99722 32.3574 2.83082 32.4846C2.71795 32.571 2.58893 32.6459 2.47517 32.7247C2.32416 32.8292 2.14754 32.8841 2.02316 33.0085" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M1.2348 33.7969C1.2348 33.2799 1.88974 33.1187 2.3 33.0015C2.7508 32.8727 3.21962 32.8823 3.68406 32.8823C3.9435 32.8823 4.08603 32.9165 4.16761 32.6616C4.2451 32.4194 4.38053 32.2172 4.45843 31.9748C4.50789 31.821 4.49523 31.6371 4.57056 31.4948C4.68945 31.2702 4.99743 31.7514 5.0506 31.8101C5.22531 32.0032 5.11023 32.0014 4.95599 32.094" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M1.64474 32.4724C1.55238 31.8028 1.60407 31.1048 1.70605 30.4419C1.76426 30.0635 1.71967 29.6235 1.73759 29.2382C1.74998 28.9718 1.72567 28.7038 1.74285 28.4376C1.75554 28.2408 1.83258 28.0604 1.883 27.8717C1.94321 27.6464 1.97028 27.4141 2.03017 27.1884C2.11009 26.8874 2.16503 26.6093 2.18259 26.3019C2.194 26.1023 2.30548 25.922 2.33852 25.7238" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M2.5593 31.7786C2.6201 31.6646 2.59025 31.4698 2.59083 31.3476C2.59218 31.0638 2.59083 30.78 2.59083 30.4961C2.59083 30.1224 2.59083 29.7486 2.59083 29.3749C2.59083 28.8937 2.59083 28.4125 2.59083 27.9313C2.59083 26.7963 2.5593 25.6578 2.5593 24.5254" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M1.41502 27.6717C1.05633 27.3354 1.26179 26.2834 1.26179 25.7988C1.26179 25.2299 1.26179 24.6609 1.26179 24.092C1.26179 23.5467 1.47403 22.9418 1.64487 22.4192C1.77187 22.0307 1.7699 21.5319 1.98539 21.1933C2.19866 20.8582 2.15488 20.2625 2.30463 19.8823C2.46076 19.486 2.61098 19.1041 2.71751 18.6905C2.74046 18.6014 2.90684 17.6943 2.96439 17.8137C3.14201 18.1821 3.13683 18.7743 3.1687 19.1545C3.2293 19.8773 3.25383 20.6002 3.25383 21.3253C3.25383 21.7041 3.25383 22.0829 3.25383 22.4617C3.25383 23.207 3.31668 23.9634 3.10059 24.6836" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M1.415 20.6229C1.08327 20.4156 1.26176 19.3129 1.26176 18.9459C1.26176 18.5259 1.26176 18.1059 1.26176 17.6859C1.26176 16.9169 1.26176 16.1479 1.26176 15.3789C1.26176 14.5231 1.29603 13.8048 1.53418 12.9783C1.74981 12.2299 1.72147 11.4681 1.72147 10.6968C1.72147 10.098 1.72147 9.49929 1.72147 8.90054C1.72147 8.64829 1.85136 8.48356 1.91301 8.2493C1.97516 8.01313 1.95132 7.76402 1.95132 7.52144C1.95132 6.97136 2.51906 8.21557 2.54723 8.28761C2.87574 9.12774 3.09603 10.0438 3.23678 10.9351C3.3172 11.4445 3.4524 11.9368 3.55601 12.4462C3.67331 13.0229 3.585 13.6013 3.6752 14.1786C3.76719 14.7674 3.7135 15.3922 3.7135 15.9876C3.7135 16.3383 3.01646 16.4326 2.7941 16.1621C2.15751 15.3879 2.25609 14.8101 2.49189 13.9062C2.63622 13.3529 2.81495 12.8221 2.94734 12.2632C3.08793 11.6696 3.2087 11.1189 3.4496 10.5521C3.71226 9.93404 3.76109 9.31013 3.9093 8.67495C3.9297 8.58755 3.99446 8.17266 4.07956 8.10883C4.20904 8.01173 4.09659 8.43223 4.09659 8.59407C4.09659 9.10675 4.24982 9.58772 4.24982 10.0838C4.24982 10.5707 4.55629 10.9526 4.55629 11.4289" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4.86276 9.13039C4.97642 8.75154 5.016 8.37516 5.016 7.98114" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <line x1="0.145581" y1="6.52166" x2="46.1456" y2="20.5217" stroke="black"/>
                <path d="M7.3821 7.08038C7.28544 7.03809 7.20919 6.95368 7.11677 6.90245C6.78515 6.71864 6.38681 6.63323 6.02425 6.53724C5.52755 6.40573 5.02492 6.29743 4.52593 6.17514C4.19114 6.09309 3.82057 6.03571 3.50677 5.88485C3.16588 5.72096 2.83624 5.66532 2.47199 5.57426C2.2964 5.53036 2.1787 5.39747 2.00065 5.36356C1.85189 5.33522 1.73672 5.31049 1.57924 5.31049C1.42405 5.31049 1.3982 5.298 1.3982 5.46656C1.3982 5.51287 1.3982 5.55917 1.3982 5.60547C1.3982 5.69533 1.73799 5.7867 1.80399 5.80993C2.00717 5.88145 2.23303 5.88633 2.42829 5.97225C2.63454 6.063 2.8795 6.09061 3.10253 6.09711C3.28528 6.10243 3.51948 6.18247 3.67689 6.27191C3.80199 6.34299 3.95622 6.34076 4.08892 6.39053C4.18025 6.42477 4.26584 6.47477 4.36362 6.49042C4.51192 6.51414 4.64563 6.62218 4.7819 6.68707C4.84772 6.71841 4.89531 6.71123 4.96606 6.71516C5.01906 6.71811 5.079 6.78515 5.13619 6.79944C5.36791 6.85737 5.59039 6.95767 5.79482 7.07882C5.96217 7.17799 6.16649 7.21467 6.34889 7.27079C6.54269 7.33042 6.65359 7.1682 6.73595 7.0117C6.78224 6.92375 6.78362 6.8292 6.82179 6.74013C6.90331 6.54992 7.05832 6.41311 7.14487 6.22821C7.2108 6.08735 7.28575 5.91071 7.29782 5.75374C7.30725 5.63115 7.52112 5.28407 7.39459 5.15754C7.37065 5.1336 7.24765 5.10333 7.21666 5.09199C6.97492 5.00346 6.70954 4.96444 6.4597 4.9047C6.21998 4.84737 5.96672 4.7562 5.73707 4.66434C5.62476 4.61942 5.49161 4.59426 5.37342 4.56757C5.21732 4.53233 5.07791 4.47005 4.92549 4.43335C4.73161 4.38668 4.46477 4.30482 4.29806 4.19924C4.12373 4.08883 3.92852 3.95264 3.74244 3.86212C3.67123 3.82748 3.57873 3.85841 3.50208 3.83402C3.38889 3.79801 3.28396 3.76975 3.18681 3.6998C2.93171 3.51613 2.66352 3.29925 2.38459 3.15978C2.34666 3.14082 2.28008 3.08304 2.24724 3.05677C2.2055 3.02338 2.14977 3.01605 2.10209 2.98029C1.93634 2.85598 1.77779 2.68972 1.57924 2.59947C1.33442 2.48819 1.39642 3.0366 1.3982 3.15042C1.40197 3.39212 1.51057 3.62408 1.51057 3.85587C1.51057 4.17586 1.9345 4.23205 2.10053 4.43959" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6.5" y1="42" x2="6.5" y2="54" stroke="#FDDBBB"/>
                <line x1="1" y1="53.5" x2="6" y2="53.5" stroke="#FDDBBB"/>
                <path d="M1.31561 52.6603C1.31561 52.206 1.31561 51.7518 1.31561 51.2975C1.31561 50.9275 1.40448 50.6555 1.44473 50.2932C1.48291 49.9496 1.58063 49.5645 1.66948 49.2269C1.78127 48.8021 1.85108 48.3922 1.96118 47.9692C2.03231 47.6959 2.0763 47.4194 2.16681 47.1515C2.18232 47.1056 2.24074 46.6858 2.29832 46.8382C2.6528 47.7766 2.73126 48.7463 2.88889 49.7146C2.95048 50.0929 3.07367 50.4914 3.19016 50.8575C3.32022 51.2663 3.48669 51.5752 3.74487 51.9263C3.91576 52.1587 4.04301 52.2669 4.28524 52.3782C4.43605 52.4475 4.61514 52.4882 4.78257 52.4882C4.99389 52.4882 5.42301 52.2899 5.57638 52.1439C5.73145 51.9962 5.28872 51.9687 5.22969 51.9502C4.66513 51.7738 4.09296 51.6705 3.49621 51.6705C3.38759 51.6705 1.73153 51.8462 1.89424 52.163C2.02411 52.4159 2.63743 52.5312 2.90802 52.5312C3.28276 52.5312 3.88779 52.5779 4.18482 52.2873C4.71406 51.7696 5.10296 51.3218 5.10296 50.5563C5.10296 49.3676 5.18904 48.1944 5.18904 47.0056C5.18904 46.6276 5.19912 46.2477 5.18904 45.8699C5.18535 45.7315 5.12044 45.5164 5.07427 45.3821C4.97539 45.0945 4.86968 44.7387 4.69171 44.4927C4.57934 44.3373 4.59213 44.1392 4.50043 43.9762C4.40001 43.7977 4.29471 43.6366 4.17525 43.4693C4.01871 43.2502 3.76851 42.718 3.41492 42.8859C2.47912 43.3304 2.44715 44.9287 2.52785 45.8029C2.57416 46.3046 2.74673 46.8575 2.89846 47.338C2.98344 47.6071 3.10546 47.9071 3.1256 48.1892C3.1442 48.4495 3.25642 48.7124 3.29536 48.9591C3.31781 49.1012 3.3629 49.2381 3.38383 49.3847C3.43882 49.7696 3.55174 48.6253 3.63967 48.2465C3.73961 47.816 3.93919 47.417 3.88833 46.965C3.86128 46.7245 3.7141 46.505 3.66358 46.2668C3.5511 45.7365 3.63967 45.1085 3.63967 44.5692C3.63967 44.2126 3.55052 43.9069 3.50099 43.5602C3.42297 43.014 3.23538 42.5325 3.02757 42.0204C2.92296 41.7626 2.89405 41.5308 2.8602 41.26C2.8331 41.0432 2.72139 40.8299 2.68327 40.6097C2.63026 40.3034 2.53163 39.9969 2.4346 39.7059" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M1.1865 48.3565C1.12453 47.8607 1.06367 47.3752 1.12195 46.8741C1.15952 46.551 1.13095 46.1856 1.30605 45.8938C1.32838 45.8566 1.31562 45.79 1.31562 45.7479C1.31562 45.5599 1.335 45.3959 1.42082 45.2243C1.53159 45.0028 1.60381 44.6985 1.65753 44.4568C1.8219 43.7171 1.90355 42.938 1.96358 42.1877C1.97226 42.0792 2.04433 41.9931 2.04726 41.8817C2.05133 41.7273 2.04726 41.5723 2.04726 41.4178C2.04726 41.1494 2.05012 40.902 1.99466 40.6431C1.91793 40.285 1.77596 39.8933 1.746 39.5337C1.73199 39.3656 1.5565 39.2257 1.49255 39.0818C1.44557 38.9761 1.48777 38.7667 1.48777 38.6514C1.48777 38.4944 1.48777 38.3374 1.48777 38.1804C1.48777 38.0132 1.57385 37.9311 1.57385 37.7691C1.57385 37.4175 1.62629 37.0819 1.44473 36.7793" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5.14602 44.397C4.98158 44.3477 4.83063 43.9314 4.74194 43.7969C4.61408 43.6029 4.53259 43.3582 4.42394 43.1489C4.30442 42.9187 4.11757 42.7284 4.02703 42.4794C3.9938 42.388 3.90503 42.3025 3.85488 42.2116C3.78112 42.0779 3.75922 41.8792 3.72577 41.7286C3.65474 41.409 3.57975 41.0527 3.44841 40.7579C3.31239 40.4525 3.10763 40.0845 3.04194 39.7561C3.01253 39.609 3.01582 39.4536 2.98456 39.3042C2.93918 39.0874 2.81711 38.9152 2.77654 38.6921C2.75534 38.5755 2.60544 38.2329 2.50157 38.1637C2.34073 38.0564 2.77893 38.4796 2.77893 38.6729" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5.79158 43.6223C5.76411 43.8421 5.45796 43.4024 5.43771 43.3545C5.36013 43.1712 5.18904 43.0483 5.18904 42.8285C5.18904 42.5655 5.04229 42.3826 5.01689 42.116C5.00727 42.0149 4.98226 41.8662 4.9093 41.7932C4.81482 41.6987 4.88552 41.596 4.82083 41.4943C4.74105 41.369 4.67259 41.3517 4.67259 41.1883C4.67259 41.0759 4.62996 41.0955 4.56499 41.0161C4.41624 40.8343 4.33678 40.7111 4.32828 40.4901C4.32515 40.4086 4.25412 40.3291 4.23742 40.2414C4.21498 40.1236 4.16897 40.0405 4.15374 39.9187C4.13277 39.7509 4.03201 39.5917 3.98398 39.4476" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M5.83461 43.0628C5.69722 42.8018 5.61942 42.611 5.61942 42.3121C5.61942 42.1032 5.61942 41.8944 5.61942 41.6856C5.61942 41.4386 5.52046 41.262 5.44727 41.0424C5.41884 40.9571 5.28579 40.9472 5.27512 40.8583C5.26063 40.7376 5.13766 40.6707 5.10297 40.5666" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M6.05502 41.5956C6.08764 41.563 6.07782 41.5133 6.07782 41.4702" stroke="#FDDBBB" strokeWidth="2" strokeLinecap="round"/>
                <path d="M0.5 54V35M0.5 35V1L46.5 20.5L0.5 35ZM0.5 35L63 89" stroke="black"/>
            </svg>

            </div>
            <ul className='navbar-link'>
                <li>Home</li>
                <li>About Me</li>
                <li>Contact</li>
                <li>Projects</li>
            </ul>
        </motion.div>
        </div>
    )
}
export default Navbar;
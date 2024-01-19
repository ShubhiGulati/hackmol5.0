import Link from "next/link";
import React from "react";
const LearnMoreSvg = () => {
    return (<svg className="flex justify-center items-center cursor-pointer" onClick={()=>{
        window.open("https://gdsc.community.dev/dr-b-r-ambedkar-national-institute-of-technology-nit-jalandhar","_blank")
       }} width="300" height="72" viewBox="0 0 211 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="16.0382" y="32.2051" width="194.086" height="1.55514" fill="#69FF93" />
        <rect x="13.902" y="31.1685" width="196.219" height="1.03676" fill="#69FF93" />
        <rect x="11.771" y="29.6143" width="197.285" height="1.55514" fill="#69FF93" />
        <rect x="9.63824" y="28.5771" width="200.485" height="1.03676" fill="#69FF93" />
        <rect x="0.503479" y="6.23926" width="209.992" height="27.5731" fill="#69FF93" />
        <rect x="2.81946" y="3.53857" width="207.677" height="2.70104" fill="#69FF93" />
        <rect x="5.13367" y="2.18848" width="202.352" height="1.35052" fill="#69FF93" />
        <rect x="2.81946" y="33.813" width="204.667" height="1.35052" fill="#69FF93" />
        <rect x="9.76215" y="0.837402" width="195.406" height="1.35052" fill="#69FF93" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M206.779 4.70117H3.98991V7.70674H2.73816V31.791H3.98952V32.5819H199.613V31.791H208.155V28.6424H208.927V5.79612H206.779V4.70117Z" fill="#70E852" />
        <path d="M3.98991 4.70117V3.79401H3.08275V4.70117H3.98991ZM206.779 4.70117H207.686V3.79401H206.779V4.70117ZM3.98991 7.70674V8.6139H4.89707V7.70674H3.98991ZM2.73816 7.70674V6.79958H1.831V7.70674H2.73816ZM2.73816 31.791H1.831V32.6982H2.73816V31.791ZM3.98952 31.791H4.89668V30.8839H3.98952V31.791ZM3.98952 32.5819H3.08236V33.4891H3.98952V32.5819ZM199.613 32.5819V33.4891H200.52V32.5819H199.613ZM199.613 31.791V30.8839H198.706V31.791H199.613ZM208.155 31.791V32.6982H209.062V31.791H208.155ZM208.155 28.6424V27.7353H207.248V28.6424H208.155ZM208.927 28.6424V29.5496H209.835V28.6424H208.927ZM208.927 5.79612H209.835V4.88896H208.927V5.79612ZM206.779 5.79612H205.872V6.70328H206.779V5.79612ZM3.98991 5.60833H206.779V3.79401H3.98991V5.60833ZM4.89707 7.70674V4.70117H3.08275V7.70674H4.89707ZM2.73816 8.6139H3.98991V6.79958H2.73816V8.6139ZM3.64532 31.791V7.70674H1.831V31.791H3.64532ZM3.98952 30.8839H2.73816V32.6982H3.98952V30.8839ZM4.89668 32.5819V31.791H3.08236V32.5819H4.89668ZM199.613 31.6748H3.98952V33.4891H199.613V31.6748ZM198.706 31.791V32.5819H200.52V31.791H198.706ZM208.155 30.8839H199.613V32.6982H208.155V30.8839ZM207.248 28.6424V31.791H209.062V28.6424H207.248ZM208.927 27.7353H208.155V29.5496H208.927V27.7353ZM208.02 5.79612V28.6424H209.835V5.79612H208.02ZM206.779 6.70328H208.927V4.88896H206.779V6.70328ZM205.872 4.70117V5.79612H207.686V4.70117H205.872Z" fill="black" />
        <path d="M26.3369 24.3174V14.5174H28.1849V22.6374H32.6649V24.3174H26.3369ZM37.1448 24.5134C36.4541 24.5134 35.8428 24.3687 35.3108 24.0794C34.7881 23.7807 34.3774 23.3654 34.0788 22.8334C33.7894 22.292 33.6448 21.6574 33.6448 20.9294V20.7614C33.6448 20.0334 33.7894 19.4034 34.0788 18.8714C34.3681 18.33 34.7741 17.9147 35.2968 17.6254C35.8194 17.3267 36.4261 17.1774 37.1168 17.1774C37.7981 17.1774 38.3908 17.3314 38.8948 17.6394C39.3988 17.938 39.7908 18.358 40.0708 18.8994C40.3508 19.4314 40.4908 20.052 40.4908 20.7614V21.3634H35.4368C35.4554 21.8394 35.6328 22.2267 35.9688 22.5254C36.3048 22.824 36.7154 22.9734 37.2008 22.9734C37.6954 22.9734 38.0594 22.866 38.2928 22.6514C38.5261 22.4367 38.7034 22.1987 38.8248 21.9374L40.2668 22.6934C40.1361 22.936 39.9448 23.202 39.6928 23.4914C39.4501 23.7714 39.1234 24.014 38.7128 24.2194C38.3021 24.4154 37.7794 24.5134 37.1448 24.5134ZM35.4508 20.0474H38.6988C38.6614 19.646 38.4981 19.324 38.2088 19.0814C37.9288 18.8387 37.5601 18.7174 37.1028 18.7174C36.6268 18.7174 36.2488 18.8387 35.9688 19.0814C35.6888 19.324 35.5161 19.646 35.4508 20.0474ZM44.2168 24.5134C43.7222 24.5134 43.2788 24.4294 42.8868 24.2614C42.4948 24.084 42.1822 23.832 41.9488 23.5054C41.7248 23.1694 41.6128 22.7634 41.6128 22.2874C41.6128 21.8114 41.7248 21.4147 41.9488 21.0974C42.1822 20.7707 42.4995 20.528 42.9008 20.3694C43.3115 20.2014 43.7782 20.1174 44.3008 20.1174H46.2048V19.7254C46.2048 19.3987 46.1022 19.1327 45.8968 18.9274C45.6915 18.7127 45.3648 18.6054 44.9168 18.6054C44.4782 18.6054 44.1515 18.708 43.9368 18.9134C43.7222 19.1094 43.5822 19.366 43.5168 19.6834L41.8928 19.1374C42.0048 18.7827 42.1822 18.4607 42.4248 18.1714C42.6768 17.8727 43.0082 17.6347 43.4188 17.4574C43.8388 17.2707 44.3475 17.1774 44.9448 17.1774C45.8595 17.1774 46.5828 17.406 47.1148 17.8634C47.6468 18.3207 47.9128 18.9834 47.9128 19.8514V22.4414C47.9128 22.7214 48.0435 22.8614 48.3048 22.8614H48.8648V24.3174H47.6888C47.3435 24.3174 47.0588 24.2334 46.8348 24.0654C46.6108 23.8974 46.4988 23.6734 46.4988 23.3934V23.3794H46.2328C46.1955 23.4914 46.1115 23.6407 45.9808 23.8274C45.8502 24.0047 45.6448 24.1634 45.3648 24.3034C45.0848 24.4434 44.7022 24.5134 44.2168 24.5134ZM44.5248 23.0854C45.0195 23.0854 45.4208 22.95 45.7288 22.6794C46.0462 22.3994 46.2048 22.0307 46.2048 21.5734V21.4334H44.4268C44.1002 21.4334 43.8435 21.5034 43.6568 21.6434C43.4702 21.7834 43.3768 21.9794 43.3768 22.2314C43.3768 22.4834 43.4748 22.6887 43.6708 22.8474C43.8668 23.006 44.1515 23.0854 44.5248 23.0854ZM50.1546 24.3174V17.3734H51.8906V18.1574H52.1426C52.2453 17.8774 52.4133 17.672 52.6466 17.5414C52.8893 17.4107 53.1693 17.3454 53.4866 17.3454H54.3266V18.9134H53.4586C53.0106 18.9134 52.6419 19.0347 52.3526 19.2774C52.0633 19.5107 51.9186 19.8747 51.9186 20.3694V24.3174H50.1546ZM55.7054 24.3174V17.3734H57.4414V18.2834H57.6934C57.8054 18.0407 58.0154 17.812 58.3234 17.5974C58.6314 17.3734 59.098 17.2614 59.7234 17.2614C60.2647 17.2614 60.736 17.3874 61.1374 17.6394C61.548 17.882 61.8654 18.2227 62.0894 18.6614C62.3134 19.0907 62.4254 19.5947 62.4254 20.1734V24.3174H60.6614V20.3134C60.6614 19.7907 60.5307 19.3987 60.2694 19.1374C60.0174 18.876 59.6534 18.7454 59.1774 18.7454C58.636 18.7454 58.216 18.9274 57.9174 19.2914C57.6187 19.646 57.4694 20.1454 57.4694 20.7894V24.3174H55.7054ZM67.8958 24.3174V17.3599H69.6352V18.1174H69.8877C70.0093 17.8836 70.2103 17.6825 70.4909 17.5142C70.7714 17.3365 71.1408 17.2477 71.599 17.2477C72.0946 17.2477 72.4921 17.3459 72.7913 17.5422C73.0906 17.7293 73.3197 17.9771 73.4787 18.2857H73.7311C73.8901 17.9864 74.1146 17.7386 74.4044 17.5422C74.6943 17.3459 75.1058 17.2477 75.6388 17.2477C76.069 17.2477 76.4571 17.3412 76.8031 17.5282C77.1585 17.7059 77.439 17.9818 77.6447 18.3558C77.8598 18.7205 77.9674 19.1834 77.9674 19.7445V24.3174H76.1999V19.8708C76.1999 19.4874 76.1017 19.2021 75.9054 19.0151C75.709 18.8187 75.4331 18.7205 75.0778 18.7205C74.6756 18.7205 74.3624 18.8515 74.1379 19.1133C73.9228 19.3658 73.8153 19.7305 73.8153 20.2074V24.3174H72.0479V19.8708C72.0479 19.4874 71.9497 19.2021 71.7533 19.0151C71.5569 18.8187 71.2811 18.7205 70.9257 18.7205C70.5236 18.7205 70.2103 18.8515 69.9859 19.1133C69.7708 19.3658 69.6633 19.7305 69.6633 20.2074V24.3174H67.8958ZM83.1787 24.5138C82.4867 24.5138 81.8648 24.3735 81.3131 24.0929C80.7613 23.8124 80.3265 23.4056 80.0085 22.8726C79.6906 22.3395 79.5316 21.699 79.5316 20.9509V20.7264C79.5316 19.9783 79.6906 19.3377 80.0085 18.8047C80.3265 18.2717 80.7613 17.8649 81.3131 17.5843C81.8648 17.3038 82.4867 17.1635 83.1787 17.1635C83.8707 17.1635 84.4926 17.3038 85.0443 17.5843C85.596 17.8649 86.0309 18.2717 86.3488 18.8047C86.6668 19.3377 86.8258 19.9783 86.8258 20.7264V20.9509C86.8258 21.699 86.6668 22.3395 86.3488 22.8726C86.0309 23.4056 85.596 23.8124 85.0443 24.0929C84.4926 24.3735 83.8707 24.5138 83.1787 24.5138ZM83.1787 22.9427C83.7211 22.9427 84.1699 22.7697 84.5253 22.4237C84.8806 22.0684 85.0583 21.5634 85.0583 20.9088V20.7685C85.0583 20.1139 84.8806 19.6136 84.5253 19.2676C84.1793 18.9122 83.7304 18.7346 83.1787 18.7346C82.6363 18.7346 82.1874 18.9122 81.8321 19.2676C81.4767 19.6136 81.299 20.1139 81.299 20.7685V20.9088C81.299 21.5634 81.4767 22.0684 81.8321 22.4237C82.1874 22.7697 82.6363 22.9427 83.1787 22.9427ZM88.4572 24.3174V17.3599H90.1966V18.1454H90.449C90.5519 17.8649 90.7202 17.6591 90.954 17.5282C91.1972 17.3973 91.4777 17.3318 91.7957 17.3318H92.6373V18.9029H91.7676C91.3187 18.9029 90.9494 19.0245 90.6595 19.2676C90.3696 19.5014 90.2246 19.8661 90.2246 20.3617V24.3174H88.4572ZM96.9423 24.5138C96.2503 24.5138 95.6378 24.3688 95.1048 24.0789C94.5811 23.7797 94.1696 23.3635 93.8704 22.8305C93.5805 22.2881 93.4355 21.6522 93.4355 20.9228V20.7545C93.4355 20.0251 93.5805 19.3938 93.8704 18.8608C94.1603 18.3184 94.567 17.9023 95.0907 17.6124C95.6144 17.3131 96.2223 17.1635 96.9143 17.1635C97.5969 17.1635 98.1907 17.3178 98.6957 17.6264C99.2007 17.9257 99.5935 18.3465 99.874 18.8889C100.155 19.4219 100.295 20.0438 100.295 20.7545V21.3576H95.231C95.2497 21.8346 95.4274 22.2227 95.764 22.5219C96.1007 22.8211 96.5122 22.9708 96.9984 22.9708C97.4941 22.9708 97.8588 22.8632 98.0925 22.6481C98.3263 22.4331 98.504 22.1946 98.6256 21.9328L100.07 22.6902C99.9395 22.9334 99.7478 23.1999 99.4953 23.4898C99.2521 23.7703 98.9248 24.0135 98.5134 24.2192C98.1019 24.4156 97.5782 24.5138 96.9423 24.5138ZM95.245 20.0391H98.4993C98.4619 19.637 98.2983 19.3143 98.0084 19.0712C97.7278 18.8281 97.3585 18.7065 96.9002 18.7065C96.4233 18.7065 96.0446 18.8281 95.764 19.0712C95.4835 19.3143 95.3105 19.637 95.245 20.0391ZM107.59 24.5138C107.094 24.5138 106.65 24.4296 106.257 24.2613C105.864 24.0836 105.551 23.8311 105.317 23.5038C105.093 23.1672 104.981 22.7604 104.981 22.2834C104.981 21.8065 105.093 21.4091 105.317 21.0911C105.551 20.7638 105.869 20.5207 106.271 20.3617C106.683 20.1934 107.15 20.1092 107.674 20.1092H109.582V19.7165C109.582 19.3892 109.479 19.1226 109.273 18.9169C109.067 18.7018 108.74 18.5943 108.291 18.5943C107.852 18.5943 107.524 18.6972 107.309 18.9029C107.094 19.0993 106.954 19.3564 106.888 19.6744L105.261 19.1273C105.373 18.772 105.551 18.4493 105.794 18.1594C106.047 17.8602 106.379 17.6217 106.79 17.4441C107.211 17.257 107.721 17.1635 108.319 17.1635C109.236 17.1635 109.96 17.3926 110.493 17.8508C111.026 18.3091 111.293 18.973 111.293 19.8427V22.4377C111.293 22.7183 111.424 22.8586 111.686 22.8586H112.247V24.3174H111.068C110.722 24.3174 110.437 24.2332 110.213 24.0649C109.988 23.8966 109.876 23.6721 109.876 23.3916V23.3776H109.61C109.572 23.4898 109.488 23.6394 109.357 23.8264C109.226 24.0041 109.021 24.1631 108.74 24.3034C108.459 24.4436 108.076 24.5138 107.59 24.5138ZM107.898 23.083C108.394 23.083 108.796 22.9474 109.105 22.6762C109.423 22.3957 109.582 22.0263 109.582 21.5681V21.4278H107.8C107.473 21.4278 107.216 21.4979 107.029 21.6382C106.842 21.7785 106.748 21.9748 106.748 22.2273C106.748 22.4798 106.846 22.6856 107.043 22.8445C107.239 23.0035 107.524 23.083 107.898 23.083ZM117.719 24.5138C117.093 24.5138 116.611 24.4062 116.274 24.1911C115.938 23.9761 115.69 23.7376 115.531 23.4758H115.278V24.3174H113.539V14.4983H115.306V18.1594H115.559C115.662 17.9911 115.797 17.8321 115.966 17.6825C116.143 17.5329 116.373 17.4113 116.653 17.3178C116.943 17.2149 117.298 17.1635 117.719 17.1635C118.28 17.1635 118.799 17.3038 119.276 17.5843C119.753 17.8555 120.136 18.2576 120.426 18.7907C120.716 19.3237 120.861 19.969 120.861 20.7264V20.9509C120.861 21.7083 120.716 22.3536 120.426 22.8866C120.136 23.4196 119.753 23.8264 119.276 24.107C118.799 24.3782 118.28 24.5138 117.719 24.5138ZM117.186 22.9708C117.728 22.9708 118.182 22.7978 118.547 22.4518C118.911 22.0964 119.094 21.5821 119.094 20.9088V20.7685C119.094 20.0952 118.911 19.5855 118.547 19.2395C118.191 18.8842 117.738 18.7065 117.186 18.7065C116.644 18.7065 116.19 18.8842 115.825 19.2395C115.461 19.5855 115.278 20.0952 115.278 20.7685V20.9088C115.278 21.5821 115.461 22.0964 115.825 22.4518C116.19 22.7978 116.644 22.9708 117.186 22.9708ZM125.795 24.5138C125.103 24.5138 124.481 24.3735 123.929 24.0929C123.377 23.8124 122.942 23.4056 122.624 22.8726C122.306 22.3395 122.147 21.699 122.147 20.9509V20.7264C122.147 19.9783 122.306 19.3377 122.624 18.8047C122.942 18.2717 123.377 17.8649 123.929 17.5843C124.481 17.3038 125.103 17.1635 125.795 17.1635C126.487 17.1635 127.108 17.3038 127.66 17.5843C128.212 17.8649 128.647 18.2717 128.965 18.8047C129.283 19.3377 129.442 19.9783 129.442 20.7264V20.9509C129.442 21.699 129.283 22.3395 128.965 22.8726C128.647 23.4056 128.212 23.8124 127.66 24.0929C127.108 24.3735 126.487 24.5138 125.795 24.5138ZM125.795 22.9427C126.337 22.9427 126.786 22.7697 127.141 22.4237C127.496 22.0684 127.674 21.5634 127.674 20.9088V20.7685C127.674 20.1139 127.496 19.6136 127.141 19.2676C126.795 18.9122 126.346 18.7346 125.795 18.7346C125.252 18.7346 124.803 18.9122 124.448 19.2676C124.093 19.6136 123.915 20.1139 123.915 20.7685V20.9088C123.915 21.5634 124.093 22.0684 124.448 22.4237C124.803 22.7697 125.252 22.9427 125.795 22.9427ZM133.724 24.4296C133.182 24.4296 132.705 24.308 132.293 24.0649C131.891 23.8124 131.578 23.4664 131.354 23.0269C131.129 22.5874 131.017 22.0824 131.017 21.5119V17.3599H132.784V21.3717C132.784 21.8954 132.911 22.2881 133.163 22.55C133.425 22.8118 133.794 22.9427 134.271 22.9427C134.814 22.9427 135.234 22.765 135.534 22.4097C135.833 22.045 135.983 21.54 135.983 20.8947V17.3599H137.75V24.3174H136.011V23.4056H135.758C135.646 23.6394 135.435 23.8685 135.127 24.0929C134.818 24.3174 134.351 24.4296 133.724 24.4296ZM142.382 24.3174C141.924 24.3174 141.55 24.1771 141.26 23.8966C140.979 23.6067 140.839 23.2233 140.839 22.7463V18.8187H139.1V17.3599H140.839V15.1997H142.606V17.3599H144.514V18.8187H142.606V22.4377C142.606 22.7183 142.737 22.8586 142.999 22.8586H144.346V24.3174H142.382ZM153.014 24.5138C152.341 24.5138 151.728 24.3641 151.176 24.0649C150.634 23.7563 150.199 23.3121 149.872 22.7323C149.554 22.1432 149.395 21.4278 149.395 20.5861V18.2296C149.395 16.9671 149.75 15.9993 150.461 15.3259C151.172 14.6433 152.135 14.302 153.351 14.302C154.557 14.302 155.487 14.6246 156.142 15.2698C156.806 15.9057 157.138 16.7708 157.138 17.8649V17.921H155.314V17.8088C155.314 17.4628 155.24 17.1495 155.09 16.8689C154.95 16.5884 154.735 16.3686 154.445 16.2097C154.155 16.0413 153.79 15.9572 153.351 15.9572C152.696 15.9572 152.182 16.1582 151.808 16.5603C151.434 16.9625 151.247 17.5095 151.247 18.2015V20.6142C151.247 21.2969 151.434 21.8486 151.808 22.2694C152.182 22.6809 152.705 22.8866 153.379 22.8866C154.052 22.8866 154.543 22.7089 154.852 22.3536C155.16 21.9982 155.314 21.5493 155.314 21.007V20.8667H152.986V19.2956H157.138V24.3174H155.427V23.3776H155.174C155.109 23.5365 155.001 23.7049 154.852 23.8825C154.711 24.0602 154.496 24.2098 154.206 24.3314C153.916 24.453 153.519 24.5138 153.014 24.5138ZM158.626 24.3174V22.6902H159.917V16.1255H158.626V14.4983H162.666C163.985 14.4983 164.985 14.835 165.668 15.5083C166.36 16.1723 166.706 17.1635 166.706 18.4821V20.3337C166.706 21.6522 166.36 22.6481 165.668 23.3215C164.985 23.9854 163.985 24.3174 162.666 24.3174H158.626ZM161.768 22.6341H162.694C163.442 22.6341 163.989 22.4377 164.335 22.045C164.681 21.6522 164.854 21.1005 164.854 20.3898V18.426C164.854 17.7059 164.681 17.1542 164.335 16.7707C163.989 16.378 163.442 16.1816 162.694 16.1816H161.768V22.6341ZM171.658 24.5138C170.9 24.5138 170.232 24.3782 169.652 24.107C169.072 23.8358 168.619 23.4477 168.291 22.9427C167.964 22.4377 167.8 21.8299 167.8 21.1192V20.7264H169.624V21.1192C169.624 21.7083 169.806 22.1525 170.171 22.4518C170.536 22.7417 171.031 22.8866 171.658 22.8866C172.294 22.8866 172.766 22.7604 173.075 22.5079C173.393 22.2554 173.552 21.9328 173.552 21.54C173.552 21.2688 173.472 21.049 173.313 20.8807C173.163 20.7124 172.939 20.5768 172.64 20.4739C172.35 20.3617 171.995 20.2588 171.574 20.1653L171.251 20.0952C170.578 19.9456 169.998 19.7585 169.512 19.5341C169.035 19.3003 168.665 18.9964 168.404 18.6223C168.151 18.2483 168.025 17.762 168.025 17.1635C168.025 16.565 168.165 16.0554 168.446 15.6345C168.736 15.2044 169.138 14.8771 169.652 14.6526C170.176 14.4189 170.788 14.302 171.49 14.302C172.191 14.302 172.813 14.4235 173.355 14.6667C173.907 14.9005 174.337 15.2558 174.646 15.7327C174.964 16.2003 175.123 16.7895 175.123 17.5002V17.921H173.299V17.5002C173.299 17.1261 173.224 16.8269 173.075 16.6024C172.934 16.3686 172.729 16.2003 172.457 16.0974C172.186 15.9852 171.864 15.9291 171.49 15.9291C170.928 15.9291 170.512 16.0367 170.241 16.2517C169.979 16.4575 169.848 16.7427 169.848 17.1074C169.848 17.3505 169.909 17.5563 170.031 17.7246C170.162 17.8929 170.353 18.0332 170.606 18.1454C170.858 18.2576 171.181 18.3558 171.574 18.44L171.896 18.5101C172.598 18.6597 173.206 18.8515 173.72 19.0852C174.244 19.319 174.65 19.6276 174.94 20.011C175.23 20.3944 175.375 20.8854 175.375 21.4839C175.375 22.0824 175.221 22.6107 174.912 23.069C174.613 23.5178 174.183 23.8732 173.622 24.135C173.07 24.3875 172.415 24.5138 171.658 24.5138ZM180.487 24.5138C179.272 24.5138 178.308 24.1771 177.598 23.5038C176.887 22.8211 176.532 21.8486 176.532 20.5861V18.2296C176.532 16.9671 176.887 15.9993 177.598 15.3259C178.308 14.6433 179.272 14.302 180.487 14.302C181.694 14.302 182.624 14.6339 183.279 15.2979C183.943 15.9525 184.275 16.8549 184.275 18.0051V18.0893H182.451V17.949C182.451 17.3692 182.287 16.8923 181.96 16.5183C181.642 16.1442 181.151 15.9572 180.487 15.9572C179.833 15.9572 179.318 16.1582 178.944 16.5603C178.57 16.9625 178.383 17.5095 178.383 18.2015V20.6142C178.383 21.2969 178.57 21.8439 178.944 22.2554C179.318 22.6575 179.833 22.8586 180.487 22.8586C181.151 22.8586 181.642 22.6715 181.96 22.2975C182.287 21.9141 182.451 21.4371 182.451 20.8667V20.6142H184.275V20.8106C184.275 21.9608 183.943 22.8679 183.279 23.5319C182.624 24.1865 181.694 24.5138 180.487 24.5138Z" fill="black" />
    </svg>)
}

const InfoAboutGDSC = () => {
    return (<svg width="180" height="90" viewBox="0 0 100 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.8113 26.3979L40.0507 16.5247C43.8733 14.2021 45.1777 9.05227 42.9734 5.02467C40.769 0.997064 35.8815 -0.377373 32.059 1.94524L3.99698 19.0126L23.8113 26.3979Z" fill="#EA4335" />
        <path d="M36.0439 51.7903C38.8014 51.7903 41.4928 50.2767 42.9706 47.58C45.1749 43.5524 43.8705 38.4027 40.048 36.0801L11.986 19.0128C8.16346 16.6902 3.27593 18.0646 1.07158 22.0922C-1.13276 26.1198 0.17169 31.2696 3.9942 33.5922L32.0562 50.6595C33.3194 51.425 34.6899 51.7903 36.0439 51.7903Z" fill="#4285F4" />
        <path d="M63.9585 51.7897C65.3125 51.7897 66.683 51.4244 67.9461 50.6588L96.0081 33.5916L76.4497 26.0496L59.9626 36.0794C56.1401 38.4021 54.8274 43.5518 57.04 47.5794C58.5095 50.2761 61.201 51.7897 63.9585 51.7897Z" fill="#FBBC04" />
        <path d="M92.0016 34.7227C94.7591 34.7227 97.4506 33.2178 98.9284 30.5124C101.133 26.4848 99.8283 21.3351 96.0058 19.0125L67.9437 1.94524C64.1212 -0.377369 59.2337 0.997064 57.0294 5.02465C54.825 9.05224 56.1294 14.202 59.952 16.5246L88.014 33.5919C89.2689 34.3574 90.6477 34.7227 92.0016 34.7227Z" fill="#34A853" />
    </svg>)
}
let Footer = function (props) {
    return (
        <div id="contact" >
            <div className="flex flex-col w-full h-auto bg-[#1F1F1F] items-center">
                <div className="flex flex-col justify-center items-center h-52 md:mb-28">
                    <div className="m-auto pt-12"><h1 className="text-white font-bold text-xs">FOLLOW DSC NITJ</h1></div>
                    <div className="flex flex-row justify-between w-56">
                        {/* Youtube */}
                        <Link href="https://youtube.com/@DSCNITJ" rel="noreferrer" target="_blank"><svg className="p-1 h-[35px] w-[35px] fill-white ease-in duration-200 hover:fill-red-600" width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27.3405 5.022C27.3405 2.64668 25.5931 0.735884 23.4338 0.735884C20.5091 0.599171 17.5263 0.546387 14.4781 0.546387H13.5278C10.487 0.546387 7.49886 0.599171 4.57414 0.736411C2.4202 0.736411 0.672767 2.65777 0.672767 5.03308C0.540785 6.91169 0.484825 8.79084 0.487992 10.6699C0.482713 12.549 0.542545 14.43 0.667487 16.3126C0.667487 18.6879 2.41493 20.6146 4.56887 20.6146C7.6414 20.7571 10.7931 20.8204 13.9976 20.8152C17.2074 20.8257 20.3503 20.7588 23.4264 20.6146C25.5856 20.6146 27.3331 18.6879 27.3331 16.3126C27.4598 14.4282 27.5178 12.549 27.5126 10.6647C27.5245 8.78552 27.4672 6.90464 27.3405 5.022ZM11.4161 15.8481V5.47594L19.071 10.6594L11.4161 15.8481Z" /></svg></Link>
                        {/* Instagram */}
                        <Link href="https://instagram.com/dscnitj" rel="noreferrer" target="_blank"><svg className="p-1 h-[40px] w-[35px] fill-white ease-in duration-200 hover:fill-pink-500" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 28 28"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" /></svg></Link>
                        {/* Facebook */}
                        <Link href="https://www.facebook.com/DSCNITJ/" rel="noreferrer" target="_blank"><svg className="p-1 h-[35px] w-[30px] fill-white ease-in duration-200 hover:fill-blue" width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4737 0.546387H8.47935C7.15574 0.546387 5.88634 1.08028 4.95041 2.03062C4.01447 2.98094 3.48867 4.26988 3.48867 5.61385V8.65433H0.494263V12.7083H3.48867V20.8163H7.48122V12.7083H10.4756L11.4737 8.65433H7.48122V5.61385C7.48122 5.34506 7.58637 5.08727 7.77357 4.8972C7.96075 4.70714 8.21463 4.60036 8.47935 4.60036H11.4737V0.546387Z" /></svg></Link>
                        {/* Twitter */}
                        <Link href="https://twitter.com/GDSCNitj" rel="noreferrer" target="_blank"><svg className="p-1 h-[35px] w-[35px] fill-white ease-in duration-200 hover:fill-[#1DA1F2]" width="28" height="22" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.4924 0.557746C24.4107 1.32079 23.2129 1.90439 21.9453 2.28609C21.265 1.50383 20.3608 0.949382 19.3551 0.697737C18.3494 0.446093 17.2906 0.509393 16.3221 0.879075C15.3535 1.24876 14.5218 1.90699 13.9396 2.76474C13.3573 3.62249 13.0524 4.63837 13.0664 5.675V6.80464C11.0812 6.85611 9.1141 6.41583 7.34026 5.523C5.56643 4.63017 4.04094 3.31252 2.89966 1.68738C2.89966 1.68738 -1.6189 11.8541 8.54784 16.3727C6.22139 17.9519 3.44997 18.7437 0.640381 18.6319C10.8071 24.2801 23.2331 18.6319 23.2331 5.64111C23.232 5.32646 23.2018 5.01258 23.1428 4.70352C24.2956 3.56653 25.1093 2.131 25.4924 0.557746Z" /></svg></Link>
                    </div>
                </div>
                <div className="m-auto ml-20 mr-20 md:flex justify-between self-center w-10/12 order-1 md:order-2">
                    {/* Info about GDSC */}
                    <div className="md:inline-flex pb-20">
                        <div className="self-start m-auto row-span-1 w-16 md:w-64 flex justify-center hover:animate-[bounce_2s_linear_infinite]">
                            <InfoAboutGDSC />
                        </div>
                        <div className="flex md:-mt-6 flex-col h-[72px] row-span-1">
                            <h6 className="text-white w-80 font-Space-Grotesk text-40 font-bold md:font-normal text-center md:text-left w-64 m-auto mt-2">
                                GDSC NITJ
                                <br />
                                Google Developer Student Clubs are university based community groups for students interested in Google developer technologies.
                            </h6>
                        </div>
                    </div>
                    {/* Learn about GDSC */}
                
                  <LearnMoreSvg  />
                </div>
            </div>
            <div className='grid md:flex p-4 md:h-16 text-sm bg-[#1F1F1F] md:bg-[#313131] text-center text-white justify-center items-center w-full font-Jakarta font-normal'>
                <Link className="hover:underline mx-4 p-1" href="#">Contact Us</Link>
                <Link className="hover:underline mx-4 p-1" href="#">Institute</Link>
                <Link className="hover:underline mx-4 p-1" href="#">Website</Link>
                <Link className="hover:underline mx-4 p-1" href="#">Terms of Service</Link>
                <Link className="hover:underline mx-4 p-1" href="#">Privacy Policy</Link>
                <p className="p-5 md:hidden"> &copy; 2024 Hackmol.tech</p>
            </div>
        </div>
    )
}

export default Footer;
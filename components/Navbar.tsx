"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import Logo from "@/public/logo.svg";

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>

            <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b  backdrop-blur dark:bg-background">
                <div className="container flex h-14 items-center px-4 sm:px-6 lg:px-8">
                    <Link
                        className=" mr-4 sm:mr-6  items-center space-x-2"
                        href="/">
                        <svg
                            width="142"
                            height="37"
                            viewBox="0 0 142 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.50376 18.9009C8.38025 18.7545 8.18171 18.7097 8.02112 18.637C6.85525 18.1095 5.89932 17.3269 5.18602 16.3216C4.37257 15.175 3.89139 13.5363 4.22074 11.6902C4.50512 10.0941 5.36558 8.90969 6.42225 8.0258C7.50432 7.12091 8.89122 6.46005 10.7356 6.35478C12.4825 6.25546 13.9743 6.7997 15.0187 7.43928C16.1305 8.12029 16.9971 9.05809 17.5524 10.2098C18.1157 11.3769 18.3822 13.0636 17.9145 14.6063C17.5081 15.9471 16.7203 16.9356 15.758 17.7432C15.4377 18.0236 15.099 18.2574 14.7022 18.4614C14.1477 18.7468 13.4639 19.0346 12.7719 19.2091C12.5392 19.2672 12.2872 19.3067 12.0782 19.3992C11.6326 19.5964 11.0945 19.9727 11.0527 20.5132C10.973 21.5458 12.1757 21.6738 12.8174 22.0228C13.3001 22.2861 13.6326 22.5514 14.0239 22.9316C14.7214 23.6095 15.2426 24.511 15.336 25.8041C15.4341 27.1664 14.9375 28.1638 14.3106 28.9259C13.668 29.7079 12.8674 30.286 11.7015 30.5382C10.3207 30.8376 9.07779 30.5322 8.15718 30.055C7.22665 29.5723 6.53904 28.8712 6.09115 27.9152C5.86749 27.4391 5.70194 26.867 5.69844 26.2149C5.69085 24.8356 6.15801 23.9222 6.81467 23.1518C7.03949 22.8874 7.30548 22.6263 7.629 22.3891C7.71396 22.327 7.90287 22.2345 7.91543 22.1547C7.93557 22.0285 7.56447 21.699 7.47804 21.5245C7.39045 21.3477 7.32767 21.136 7.3122 20.9825C7.25789 20.4411 7.44067 19.9988 7.64418 19.6778C7.86462 19.3294 8.16244 19.1293 8.50376 18.9009ZM14.0686 13.0235C14.0756 12.2974 13.8239 11.6473 13.5106 11.1919C13.4151 11.0529 13.3421 10.8977 13.2542 10.7961C12.8376 10.3157 11.9611 9.86168 11.0521 9.90169C10.2083 9.93886 9.53211 10.3191 9.09151 10.7518C8.29471 11.5344 7.92243 13.0235 8.48829 14.1963C8.97151 15.1977 9.96628 16.043 11.4443 15.9261C12.2741 15.8602 12.8104 15.4661 13.3144 15.0027C13.6905 14.4625 14.061 13.8212 14.0686 13.0235ZM9.4086 25.5552C8.95458 26.4209 9.56656 27.2637 10.3283 27.4164C11.1465 27.5804 11.8452 26.9465 11.8516 26.1999C11.8554 25.7459 11.5608 25.3313 11.3538 25.1302C11.1929 24.9738 10.8708 24.7233 10.5695 24.6756C10.1365 24.7976 9.57999 25.2283 9.4086 25.5552Z"
                                fill="currentColor"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                className="text-orange-500 motion-safe:animate-bounce w-3 h-3"
                                d="M19.5884 7.1025C20.5026 7.02929 21.2641 7.52813 21.6092 8.09904C22.2334 9.13048 21.7488 10.4017 20.9759 10.9133C20.2959 11.3633 19.2999 11.3866 18.6079 10.957C18.0234 10.5947 17.4806 9.83646 17.6427 8.83226C17.7259 8.31753 17.958 7.96057 18.2911 7.65951C18.6085 7.37348 19.0389 7.1462 19.5884 7.1025Z"
                                fill="currentColor"
                            />
                            <path
                                d="M33.3066 13.9091V16.6364H25.4231V13.9091H33.3066ZM27.2129 10.7727H30.8436V22.9773C30.8436 23.3125 30.8947 23.5739 30.997 23.7614C31.0992 23.9432 31.2413 24.071 31.4231 24.1449C31.6106 24.2187 31.8265 24.2557 32.0708 24.2557C32.2413 24.2557 32.4117 24.2415 32.5822 24.2131C32.7527 24.179 32.8833 24.1534 32.9742 24.1364L33.5453 26.8381C33.3634 26.8949 33.1078 26.9602 32.7782 27.0341C32.4487 27.1136 32.0481 27.1619 31.5765 27.179C30.7015 27.2131 29.9345 27.0966 29.2754 26.8295C28.622 26.5625 28.1134 26.1477 27.7498 25.5852C27.3862 25.0227 27.2072 24.3125 27.2129 23.4545V10.7727ZM39.5836 19.4318V27H35.9529V9.54545H39.4813V16.2188H39.6348C39.9302 15.446 40.4075 14.8409 41.0666 14.4034C41.7257 13.9602 42.5524 13.7386 43.5467 13.7386C44.4558 13.7386 45.2484 13.9375 45.9245 14.3352C46.6063 14.7273 47.1348 15.2926 47.5098 16.0312C47.8904 16.7642 48.0779 17.642 48.0723 18.6648V27H44.4416V19.3125C44.4473 18.5057 44.2427 17.8778 43.8279 17.429C43.4188 16.9801 42.845 16.7557 42.1063 16.7557C41.612 16.7557 41.1745 16.8608 40.7938 17.071C40.4188 17.2812 40.1234 17.5881 39.9075 17.9915C39.6973 18.3892 39.5893 18.8693 39.5836 19.4318ZM56.8954 27.2557C55.5488 27.2557 54.3897 26.983 53.4181 26.4375C52.4522 25.8864 51.7079 25.108 51.1852 24.1023C50.6625 23.0909 50.4011 21.8949 50.4011 20.5142C50.4011 19.1676 50.6625 17.9858 51.1852 16.9688C51.7079 15.9517 52.4437 15.1591 53.3926 14.5909C54.3471 14.0227 55.4664 13.7386 56.7505 13.7386C57.6142 13.7386 58.4181 13.8778 59.1625 14.1562C59.9125 14.429 60.5659 14.8409 61.1227 15.392C61.6852 15.9432 62.1227 16.6364 62.4352 17.4716C62.7477 18.3011 62.9039 19.2727 62.9039 20.3864V21.3835H51.85V19.1335H59.4863C59.4863 18.6108 59.3727 18.1477 59.1454 17.7443C58.9181 17.3409 58.6028 17.0256 58.1994 16.7983C57.8017 16.5653 57.3386 16.4489 56.8102 16.4489C56.259 16.4489 55.7704 16.5767 55.3443 16.8324C54.9238 17.0824 54.5943 17.4205 54.3556 17.8466C54.117 18.267 53.9948 18.7358 53.9892 19.2528V21.392C53.9892 22.0398 54.1085 22.5994 54.3471 23.071C54.5914 23.5426 54.9352 23.9062 55.3784 24.1619C55.8215 24.4176 56.3471 24.5455 56.9551 24.5455C57.3585 24.5455 57.7278 24.4886 58.063 24.375C58.3983 24.2614 58.6852 24.0909 58.9238 23.8636C59.1625 23.6364 59.3443 23.358 59.4693 23.0284L62.8272 23.25C62.6568 24.0568 62.3073 24.7614 61.7789 25.3636C61.2562 25.9602 60.5801 26.4261 59.7505 26.7614C58.9267 27.0909 57.975 27.2557 56.8954 27.2557ZM71.171 32.1818C69.9948 32.1818 68.9863 32.0199 68.1454 31.696C67.3102 31.3778 66.6454 30.9432 66.1511 30.392C65.6568 29.8409 65.3358 29.2216 65.188 28.5341L68.546 28.0824C68.6483 28.3438 68.8102 28.5881 69.0318 28.8153C69.2534 29.0426 69.546 29.2244 69.9096 29.3608C70.2789 29.5028 70.7278 29.5739 71.2562 29.5739C72.046 29.5739 72.6965 29.3807 73.2079 28.9943C73.725 28.6136 73.9835 27.9744 73.9835 27.0767V24.6818H73.8301C73.671 25.0455 73.4323 25.3892 73.1142 25.7131C72.796 26.0369 72.3869 26.3011 71.8869 26.5057C71.3869 26.7102 70.7903 26.8125 70.0971 26.8125C69.1142 26.8125 68.2193 26.5852 67.4125 26.1307C66.6113 25.6705 65.9721 24.9687 65.4948 24.0256C65.0233 23.0767 64.7875 21.8778 64.7875 20.429C64.7875 18.946 65.0289 17.7074 65.5119 16.7131C65.9948 15.7187 66.6369 14.9744 67.438 14.4801C68.2448 13.9858 69.1284 13.7386 70.0886 13.7386C70.8215 13.7386 71.4352 13.8636 71.9295 14.1136C72.4238 14.358 72.8215 14.6648 73.1227 15.0341C73.4295 15.3977 73.6653 15.7557 73.8301 16.108H73.9664V13.9091H77.5715V27.1278C77.5715 28.2415 77.2988 29.1733 76.7534 29.9233C76.2079 30.6733 75.4522 31.2358 74.4863 31.6108C73.5261 31.9915 72.421 32.1818 71.171 32.1818ZM71.2477 24.0852C71.8329 24.0852 72.3272 23.9403 72.7306 23.6506C73.1397 23.3551 73.4522 22.9347 73.6681 22.3892C73.8897 21.8381 74.0005 21.179 74.0005 20.4119C74.0005 19.6449 73.8926 18.9801 73.6767 18.4176C73.4608 17.8494 73.1483 17.4091 72.7392 17.0966C72.3301 16.7841 71.8329 16.6278 71.2477 16.6278C70.6511 16.6278 70.1483 16.7898 69.7392 17.1136C69.3301 17.4318 69.0204 17.875 68.8102 18.4432C68.6 19.0114 68.4948 19.6676 68.4948 20.4119C68.4948 21.1676 68.6 21.821 68.8102 22.3722C69.0261 22.9176 69.3358 23.3409 69.7392 23.642C70.1483 23.9375 70.6511 24.0852 71.2477 24.0852ZM84.1937 27.2472C83.3585 27.2472 82.6142 27.1023 81.9608 26.8125C81.3073 26.517 80.7903 26.0824 80.4096 25.5085C80.0346 24.929 79.8471 24.2074 79.8471 23.3438C79.8471 22.6165 79.9806 22.0057 80.2477 21.5114C80.5147 21.017 80.8784 20.6193 81.3386 20.3182C81.7988 20.017 82.3215 19.7898 82.9068 19.6364C83.4977 19.483 84.117 19.375 84.7647 19.3125C85.5261 19.233 86.1397 19.1591 86.6056 19.0909C87.0715 19.017 87.4096 18.9091 87.6198 18.767C87.8301 18.625 87.9352 18.4148 87.9352 18.1364V18.0852C87.9352 17.5455 87.7647 17.1278 87.4238 16.8324C87.0886 16.5369 86.6113 16.3892 85.992 16.3892C85.3386 16.3892 84.8187 16.5341 84.4323 16.8239C84.046 17.108 83.7903 17.4659 83.6653 17.8977L80.3073 17.625C80.4778 16.8295 80.813 16.142 81.313 15.5625C81.813 14.9773 82.4579 14.5284 83.2477 14.2159C84.0431 13.8977 84.9636 13.7386 86.009 13.7386C86.7363 13.7386 87.4323 13.8239 88.0971 13.9943C88.7676 14.1648 89.3613 14.429 89.8784 14.7869C90.4011 15.1449 90.813 15.6051 91.1142 16.1676C91.4153 16.7244 91.5659 17.392 91.5659 18.1705V27H88.1227V25.1847H88.0204C87.8102 25.5938 87.5289 25.9545 87.1767 26.267C86.8244 26.5739 86.4011 26.8153 85.9068 26.9915C85.4125 27.1619 84.8414 27.2472 84.1937 27.2472ZM85.2335 24.7415C85.7676 24.7415 86.2392 24.6364 86.6483 24.4261C87.0573 24.2102 87.3784 23.9205 87.6113 23.5568C87.8443 23.1932 87.9608 22.7812 87.9608 22.321V20.9318C87.8471 21.0057 87.6909 21.0739 87.492 21.1364C87.2988 21.1932 87.0801 21.2472 86.8358 21.2983C86.5914 21.3437 86.3471 21.3864 86.1028 21.4261C85.8585 21.4602 85.6369 21.4915 85.438 21.5199C85.0119 21.5824 84.6397 21.6818 84.3215 21.8182C84.0034 21.9545 83.7562 22.1392 83.5801 22.3722C83.4039 22.5994 83.3159 22.8835 83.3159 23.2244C83.3159 23.7188 83.4948 24.0966 83.8528 24.358C84.2164 24.6136 84.6767 24.7415 85.2335 24.7415ZM100.28 32.1818C99.1042 32.1818 98.0957 32.0199 97.2548 31.696C96.4196 31.3778 95.7548 30.9432 95.2605 30.392C94.7661 29.8409 94.4451 29.2216 94.2974 28.5341L97.6554 28.0824C97.7576 28.3438 97.9196 28.5881 98.1411 28.8153C98.3627 29.0426 98.6554 29.2244 99.019 29.3608C99.3883 29.5028 99.8372 29.5739 100.366 29.5739C101.155 29.5739 101.806 29.3807 102.317 28.9943C102.834 28.6136 103.093 27.9744 103.093 27.0767V24.6818H102.939C102.78 25.0455 102.542 25.3892 102.224 25.7131C101.905 26.0369 101.496 26.3011 100.996 26.5057C100.496 26.7102 99.8997 26.8125 99.2065 26.8125C98.2235 26.8125 97.3286 26.5852 96.5218 26.1307C95.7207 25.6705 95.0815 24.9687 94.6042 24.0256C94.1326 23.0767 93.8968 21.8778 93.8968 20.429C93.8968 18.946 94.1383 17.7074 94.6213 16.7131C95.1042 15.7187 95.7463 14.9744 96.5474 14.4801C97.3542 13.9858 98.2377 13.7386 99.198 13.7386C99.9309 13.7386 100.545 13.8636 101.039 14.1136C101.533 14.358 101.931 14.6648 102.232 15.0341C102.539 15.3977 102.775 15.7557 102.939 16.108H103.076V13.9091H106.681V27.1278C106.681 28.2415 106.408 29.1733 105.863 29.9233C105.317 30.6733 104.562 31.2358 103.596 31.6108C102.635 31.9915 101.53 32.1818 100.28 32.1818ZM100.357 24.0852C100.942 24.0852 101.437 23.9403 101.84 23.6506C102.249 23.3551 102.562 22.9347 102.778 22.3892C102.999 21.8381 103.11 21.179 103.11 20.4119C103.11 19.6449 103.002 18.9801 102.786 18.4176C102.57 17.8494 102.258 17.4091 101.849 17.0966C101.439 16.7841 100.942 16.6278 100.357 16.6278C99.7605 16.6278 99.2576 16.7898 98.8485 17.1136C98.4394 17.4318 98.1298 17.875 97.9196 18.4432C97.7093 19.0114 97.6042 19.6676 97.6042 20.4119C97.6042 21.1676 97.7093 21.821 97.9196 22.3722C98.1355 22.9176 98.4451 23.3409 98.8485 23.642C99.2576 23.9375 99.7605 24.0852 100.357 24.0852ZM113.303 27.2472C112.468 27.2472 111.724 27.1023 111.07 26.8125C110.417 26.517 109.9 26.0824 109.519 25.5085C109.144 24.929 108.956 24.2074 108.956 23.3438C108.956 22.6165 109.09 22.0057 109.357 21.5114C109.624 21.017 109.988 20.6193 110.448 20.3182C110.908 20.017 111.431 19.7898 112.016 19.6364C112.607 19.483 113.226 19.375 113.874 19.3125C114.635 19.233 115.249 19.1591 115.715 19.0909C116.181 19.017 116.519 18.9091 116.729 18.767C116.939 18.625 117.045 18.4148 117.045 18.1364V18.0852C117.045 17.5455 116.874 17.1278 116.533 16.8324C116.198 16.5369 115.721 16.3892 115.101 16.3892C114.448 16.3892 113.928 16.5341 113.542 16.8239C113.155 17.108 112.9 17.4659 112.775 17.8977L109.417 17.625C109.587 16.8295 109.922 16.142 110.422 15.5625C110.922 14.9773 111.567 14.5284 112.357 14.2159C113.153 13.8977 114.073 13.7386 115.118 13.7386C115.846 13.7386 116.542 13.8239 117.206 13.9943C117.877 14.1648 118.471 14.429 118.988 14.7869C119.51 15.1449 119.922 15.6051 120.224 16.1676C120.525 16.7244 120.675 17.392 120.675 18.1705V27H117.232V25.1847H117.13C116.92 25.5938 116.638 25.9545 116.286 26.267C115.934 26.5739 115.51 26.8153 115.016 26.9915C114.522 27.1619 113.951 27.2472 113.303 27.2472ZM114.343 24.7415C114.877 24.7415 115.349 24.6364 115.758 24.4261C116.167 24.2102 116.488 23.9205 116.721 23.5568C116.954 23.1932 117.07 22.7812 117.07 22.321V20.9318C116.956 21.0057 116.8 21.0739 116.601 21.1364C116.408 21.1932 116.189 21.2472 115.945 21.2983C115.701 21.3437 115.456 21.3864 115.212 21.4261C114.968 21.4602 114.746 21.4915 114.547 21.5199C114.121 21.5824 113.749 21.6818 113.431 21.8182C113.113 21.9545 112.866 22.1392 112.689 22.3722C112.513 22.5994 112.425 22.8835 112.425 23.2244C112.425 23.7188 112.604 24.0966 112.962 24.358C113.326 24.6136 113.786 24.7415 114.343 24.7415ZM127.123 19.4318V27H123.492V13.9091H126.952V16.2188H127.106C127.395 15.4574 127.881 14.8551 128.563 14.4119C129.245 13.9631 130.072 13.7386 131.043 13.7386C131.952 13.7386 132.745 13.9375 133.421 14.3352C134.097 14.733 134.623 15.3011 134.998 16.0398C135.373 16.7727 135.56 17.6477 135.56 18.6648V27H131.93V19.3125C131.935 18.5114 131.731 17.8864 131.316 17.4375C130.901 16.983 130.33 16.7557 129.603 16.7557C129.114 16.7557 128.682 16.8608 128.307 17.071C127.938 17.2812 127.648 17.5881 127.438 17.9915C127.233 18.3892 127.128 18.8693 127.123 19.4318Z"
                                fill="currentColor"
                            />
                        </svg>
                    </Link>
                    {/* theme button */}

                    <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
                        <nav className="flex items-center space-x-3 sm:space-x-3 text-sm font-medium">
                            <Link
                                className="hidden sm:flex transition-colors hover:text-foreground/80 dark:text-foreground/60"
                                href="#about">
                                About
                            </Link>
                            <Link
                                className="hidden sm:flex transition-colors hover:text-foreground/80 dark:text-foreground/60"
                                href="#projects">
                                Projects
                            </Link>

                            <button
                                onClick={() => {
                                    const currentTheme = theme;
                                    setTheme(
                                        currentTheme === "dark"
                                            ? "light"
                                            : "dark"
                                    );
                                }}
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"
                                type="button"
                                id="radix-:r6:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed">
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:-rotate-90 dark:scale-100 duration-300">
                                    <path
                                        d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"></path>
                                </svg>
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:rotate-0 dark:scale-0 duration-300">
                                    <path
                                        d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Toggle theme</span>
                            </button>

                            <button className="group group hover:transform-wave inline-block items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90  px-2 py-1 ">
                                Say Hi.!{" "}
                                <span className="group hover:transform-wave mr-1">
                                    {" "}
                                    👋🏻{" "}
                                </span>
                            </button>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
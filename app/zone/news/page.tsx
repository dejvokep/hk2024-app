export default function Page() {
    return <div
        className="bg-[#000000] flex flex-col gap-0 items-start justify-start h-[844px] relative overflow-hidden"
    >
        <div
            className="p-5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
        >
            <div
                className="bg-[#111111] rounded-md pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row items-center justify-between self-stretch shrink-0 relative"
            >
                <div
                    className="flex flex-row gap-2.5 items-center justify-start shrink-0 relative"
                >
                    <svg
                        className="shrink-0 w-4 h-4 relative overflow-visible"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.33333 13.1667C10.2789 13.1667 12.6667 10.7789 12.6667 7.83333C12.6667 4.88781 10.2789 2.5 7.33333 2.5C4.38781 2.5 2 4.88781 2 7.83333C2 10.7789 4.38781 13.1667 7.33333 13.1667Z"
                            stroke="#959595"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M14 14.5L11.1333 11.6333"
                            stroke="#959595"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <div
                        className="text-grey text-left font-['Arial-Regular',_sans-serif] text-[15px] font-normal relative"
                    >
                        Search
                    </div>
                </div>
            </div>
        </div>
        <div
            className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
        >
            <div
                className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
            >
                <div
                    className="pr-5 pl-5 flex flex-row gap-1 items-center justify-start self-stretch shrink-0 relative"
                >
                    <svg
                        className="shrink-0 w-[18px] h-[18px] relative overflow-visible"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.375 10.875C6.87228 10.875 7.34919 10.6775 7.70083 10.3258C8.05246 9.97419 8.25 9.49728 8.25 9C8.25 7.965 7.875 7.5 7.5 6.75C6.696 5.14275 7.332 3.7095 9 2.25C9.375 4.125 10.5 5.925 12 7.125C13.5 8.325 14.25 9.75 14.25 11.25C14.25 11.9394 14.1142 12.6221 13.8504 13.2591C13.5865 13.896 13.1998 14.4748 12.7123 14.9623C12.2248 15.4498 11.646 15.8365 11.0091 16.1004C10.3721 16.3642 9.68944 16.5 9 16.5C8.31056 16.5 7.62787 16.3642 6.99091 16.1004C6.35395 15.8365 5.7752 15.4498 5.28769 14.9623C4.80018 14.4748 4.41347 13.896 4.14963 13.2591C3.8858 12.6221 3.75 11.9394 3.75 11.25C3.75 10.3853 4.07475 9.5295 4.5 9C4.5 9.49728 4.69754 9.97419 5.04917 10.3258C5.40081 10.6775 5.87772 10.875 6.375 10.875Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <div
                        className="text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-[13px] font-bold relative"
                    >
                        Just happened
                    </div>
                </div>
                <div
                    className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                        className="p-2.5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                    >
                        <div
                            className="text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-base font-bold relative"
                        >
                            News
                        </div>
                        <div
                            className="bg-[#000000] rounded-[20px] border-solid border-[#ffffff] border-[0.5px] pt-0.5 pr-2 pb-0.5 pl-0.5 flex flex-row gap-1 items-center justify-start shrink-0 relative"
                        >
                            <img
                                className="rounded-[200px] shrink-0 w-6 h-6 relative"
                                style={{objectFit: "cover"}}
                                src="/image_17.png"
                            />
                            <div
                                className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative"
                            >
                                AAPL
                            </div>
                            <div
                                className="text-destructive text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative"
                            >
                                -2.4%
                            </div>
                        </div>
                    </div>
                    <div
                        className="pt-1 pr-2.5 pb-1 pl-2.5 flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                    >
                        <div
                            className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal relative self-stretch"
                        >
                            Apple to see greater e-commerce connectivity as new stripe payment
                            gateway yaddy yadda who care...
                        </div>
                        <div
                            className="bg-[#111111] rounded-[20px] p-1.5 flex flex-row gap-1.5 items-center justify-start shrink-0 relative overflow-hidden"
                        >
                            <div
                                className="bg-[#ffffff] rounded-[50%] shrink-0 w-1.5 h-1.5 relative"
                            ></div>
                            <div
                                className="bg-grey rounded-[50%] shrink-0 w-1.5 h-1.5 relative"
                            ></div>
                            <div
                                className="bg-grey rounded-[50%] shrink-0 w-1.5 h-1.5 relative"
                            ></div>
                            <div
                                className="bg-grey rounded-[50%] shrink-0 w-1.5 h-1.5 relative"
                            ></div>
                            <div
                                className="bg-grey rounded-[50%] shrink-0 w-1.5 h-1.5 relative"
                            ></div>
                            <div
                                className="bg-grey rounded-[50%] shrink-0 w-1.5 h-1.5 relative"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col gap-5 items-start justify-start self-stretch shrink-0 relative"
            >
                <div
                    className="pr-5 pl-5 flex flex-row gap-1 items-center justify-start self-stretch shrink-0 relative"
                >
                    <svg
                        className="shrink-0 w-[18px] h-[18px] relative overflow-visible"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.25 2.25V15.75H15.75"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M14.25 6.75L10.5 10.5L7.5 7.5L5.25 9.75"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <div
                        className="text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-[13px] font-bold relative"
                    >
                        Market movers
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
            >
                <div
                    className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                        className="pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                    >
                        <div
                            className="bg-[#000000] rounded-[20px] border-solid border-[#ffffff] border-[0.5px] pt-0.5 pr-2 pb-0.5 pl-0.5 flex flex-row gap-1 items-center justify-start shrink-0 relative"
                        >
                            <img
                                className="rounded-[20px] shrink-0 w-6 h-6 relative"
                                style={{objectFit: "cover"}}
                                src="/image_18.png"
                            />
                            <div
                                className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative"
                            >
                                MSFT
                            </div>
                            <div
                                className="text-secondary text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative"
                            >
                                +3.14%
                            </div>
                        </div>
                    </div>
                    <div
                        className="pt-1 pr-5 pb-1 pl-5 flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                    >
                        <div
                            className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal relative self-stretch"
                        >
                            Apple to see greater e-commerce connectivity as new stripe payment
                            gateway yaddy yadda who care...
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                        className="pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                    >
                        <div
                            className="bg-[#000000] rounded-[20px] border-solid border-[#ffffff] border-[0.5px] pt-0.5 pr-2 pb-0.5 pl-0.5 flex flex-row gap-1 items-center justify-start shrink-0 relative"
                        >
                            <img
                                className="rounded-[20px] shrink-0 w-6 h-6 relative"
                                style={{objectFit: "cover"}}
                                src="/image_18.png"
                            />
                            <div
                                className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative"
                            >
                                MSFT
                            </div>
                            <div
                                className="text-secondary text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative"
                            >
                                +3.14%
                            </div>
                        </div>
                    </div>
                    <div
                        className="pt-1 pr-5 pb-1 pl-5 flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                    >
                        <div
                            className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal relative self-stretch"
                        >
                            Apple to see greater e-commerce connectivity as new stripe payment
                            gateway yaddy yadda who care...
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                        className="pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                    >
                        <div
                            className="bg-[#000000] rounded-[20px] border-solid border-[#ffffff] border-[0.5px] pt-0.5 pr-2 pb-0.5 pl-0.5 flex flex-row gap-1 items-center justify-start shrink-0 relative"
                        >
                            <img
                                className="rounded-[20px] shrink-0 w-6 h-6 relative"
                                style={{objectFit: "cover"}}
                                src="/image_18.png"
                            />
                            <div
                                className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative"
                            >
                                MSFT
                            </div>
                            <div
                                className="text-secondary text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative"
                            >
                                +3.14%
                            </div>
                        </div>
                    </div>
                    <div
                        className="pt-1 pr-5 pb-1 pl-5 flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                    >
                        <div
                            className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal relative self-stretch"
                        >
                            Apple to see greater e-commerce connectivity as new stripe payment
                            gateway yaddy yadda who care...
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                        className="pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                    >
                        <div
                            className="bg-[#000000] rounded-[20px] border-solid border-[#ffffff] border-[0.5px] pt-0.5 pr-2 pb-0.5 pl-0.5 flex flex-row gap-1 items-center justify-start shrink-0 relative"
                        >
                            <img
                                className="rounded-[20px] shrink-0 w-6 h-6 relative"
                                style={{objectFit: "cover"}}
                                src="/image_18.png"
                            />
                            <div
                                className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative"
                            >
                                MSFT
                            </div>
                            <div
                                className="text-secondary text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative"
                            >
                                +3.14%
                            </div>
                        </div>
                    </div>
                    <div
                        className="pt-1 pr-5 pb-1 pl-5 flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                    >
                        <div
                            className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal relative self-stretch"
                        >
                            Apple to see greater e-commerce connectivity as new stripe payment
                            gateway yaddy yadda who care...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
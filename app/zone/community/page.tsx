import {useUser} from "@auth0/nextjs-auth0/client";
import {getSession} from "@auth0/nextjs-auth0";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
    const user = await getSession()

    return <div
        className="bg-[#000000] flex flex-col gap-0 items-start justify-start relative overflow-hidden"
    >
        <div
            className="flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
        >
            <div
                className="p-5 flex flex-row items-center justify-between self-stretch shrink-0 relative"
            >
                <div
                    className="text-muted text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal relative"
                >
                    LVL 6
                </div>
                <div
                    className="text-muted text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal relative"
                >
                    Badges
                </div>
                <div
                    className="text-muted text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal relative"
                >
                    Achievements
                </div>
                <div
                    className="text-muted text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal relative"
                >
                    Friends
                </div>
                <Link href={"/zone/settings"}><img
                    className="rounded-[50%] shrink-0 w-8 h-8 relative"
                    style={{objectFit: "cover"}}
                    src={user?.user?.picture || ""}
                /></Link>
            </div>
            <div
                className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative"
            >
                <div
                    className="border-solid border-[#2d2d2d] border p-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                >
                    <div
                        className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-base font-normal relative"
                    >
                        Leaderboard
                    </div>
                </div>
                <div
                    className="border-solid border-[#2d2d2d] border p-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                >
                    <div
                        className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-base font-normal relative"
                    >
                        Communities
                    </div>
                </div>
                <div
                    className="border-solid border-[#2d2d2d] border p-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                >
                    <div
                        className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-base font-normal relative"
                    >
                        Friends
                    </div>
                </div>
            </div>
            <div
                className="rounded-[10px] pt-10 pr-2.5 pb-5 pl-2.5 flex flex-col gap-5 items-center justify-start self-stretch shrink-0 relative"
            >
                <div
                    className="text-[#ffffff] text-center font-['Arial-Regular',_sans-serif] text-2xl font-normal relative self-stretch"
                >
                    Foresee the future of stocks
                </div>
                <div
                    className="text-[#ffffff] text-center font-['Arial-Regular',_sans-serif] text-base font-normal relative self-stretch"
                >
                    Join the daily price prediction and weekly challenge for a chance to win
                    a random stock
                </div>
                <img
                    className="rounded-[10px] shrink-0 w-[200px] h-[199px] relative"
                    style={{objectFit: "cover"}}
                    src="/community.png"
                />
                <div
                    className="text-[#ffffff] text-center font-['Arial-Regular',_sans-serif] text-xl font-normal relative self-stretch"
                >
                    Daily AAPL price prediction
                </div>
                <div
                    className="text-[#ffffff] text-center font-['Arial-Regular',_sans-serif] text-base font-normal relative self-stretch"
                >
                    Predict the price of AAPL at 20:00 CTE to win a AAPL share
                </div>
                <div
                    className="text-white text-center font-['Arial-Bold',_sans-serif] text-[32px] font-bold relative self-stretch"
                >
                    Apr 7
                </div>
                <div
                    className="flex flex-col gap-0 items-center justify-start self-stretch shrink-0 relative"
                >
                    <div
                        className="text-grey text-center font-['Arial-Regular',_sans-serif] text-base font-normal relative self-stretch"
                    >
                        Ends in
                    </div>
                    <div
                        className="text-white text-center font-['Arial-Bold',_sans-serif] text-2xl font-bold relative self-stretch"
                    >
                        7 hours
                    </div>
                </div>
                <div
                    className="flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative"
                >
                    <div
                        className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative"
                    >
                        <div
                            className="text-[#ffffff] text-center font-['Arial-Regular',_sans-serif] text-[15px] font-normal relative"
                        >
                            I predict the AAPL price will be
                        </div>
                        <div
                            className="rounded-[10px] border-solid border-[#ffffff] border p-2.5 flex flex-row gap-2.5 items-center justify-end self-stretch shrink-0 h-[46px] relative overflow-hidden"
                        >
                            <div
                                className="text-[#ffffff] text-center font-['Arial-Regular',_sans-serif] text-[15px] font-normal relative"
                            >
                                EUR
                            </div>
                        </div>
                    </div>
                </div>
                <Button className={"w-full"}>Submit</Button>
            </div>
        </div>
    </div>
}
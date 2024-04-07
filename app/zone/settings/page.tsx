import {getSession} from "@auth0/nextjs-auth0";
import Link from "next/link";

export default async function Page() {
    const user = await getSession()
    return <div
        className="bg-[#000000] flex flex-col gap-0 items-start justify-start h-[844px] relative overflow-hidden"
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
                <img
                    className="rounded-[50%] shrink-0 w-8 h-8 relative"
                    style={{objectFit: "cover"}}
                    src={user?.user?.picture || ""}
                />
            </div>
            <div
                className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative"
            >
                <div
                    className="flex flex-col gap-[5px] items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                        className="pl-5 flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative"
                    >
                        <div
                            className="text-muted text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal relative"
                        >
                            Your profile
                        </div>
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
                                Public profile
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
                        <div
                            className="border-solid border-[#2d2d2d] border p-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                        >
                            <div
                                className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-base font-normal relative"
                            >
                                My communities
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col gap-[5px] items-start justify-start self-stretch shrink-0 relative"
                >
                    <div
                        className="pt-[35px] pl-5 flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative"
                    >
                        <div
                            className="text-muted text-left font-['Arial-Regular',_sans-serif] text-[13px] font-normal relative"
                        >
                            Preferences
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative"
                    >
                        <div
                            className="border-solid border-[#2d2d2d] border p-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                        >
                            <Link href={"/onboarding"}>
                                <div
                                    className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-base font-normal relative"
                                >
                                    Settings
                                </div>
                            </Link>
                        </div>
                        <div
                            className="border-solid border-[#2d2d2d] border p-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                        >
                            <div
                                className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-base font-normal relative"
                            >
                                Notifications
                            </div>
                        </div>
                        <div
                            className="border-solid border-[#2d2d2d] border p-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                        >
                            <div
                                className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-base font-normal relative"
                            >
                                Currency
                            </div>
                        </div>
                        <div
                            className="border-solid border-[#2d2d2d] border p-5 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                        >
                            <div
                                className="text-[#ffffff] text-left font-['Arial-Regular',_sans-serif] text-base font-normal relative"
                            >
                                Transaction history
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
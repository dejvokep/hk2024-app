import {getSession} from "@auth0/nextjs-auth0";

export default async function Page() {
    const data = {}

    return <div>
        <div className="flex flex-col pt-10 mx-auto w-full bg-black max-w-[480px]">
            <div className="flex flex-col items-start pl-10 w-full">
                <div className="text-4xl font-bold tracking-tight leading-9 text-white">
                    12 923,62€
                </div>
                <div className="flex gap-2.5 items-start pt-2.5 text-sm tracking-normal text-neutral-400">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5230564c823ede35a90419159011351c2e47a2efc89ce19260eb85401175125?"
                        className="shrink-0 w-3 aspect-[1.2] fill-green-500 fill-opacity-40"
                    />
                    <div>3,35%</div>
                    <div>(432.94€)</div>
                    <div className="self-stretch">All time</div>
                </div>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/69c8087248ab7085021e3a562e5254fb14a974dd691b8a8c6e305b5fcc617d4b?"
                className="self-start mt-1 w-full aspect-[1.23] stroke-[1.5px] stroke-white"
            />
            <div className="flex gap-2.5 justify-between px-5 py-1.5 mt-1 text-sm tracking-normal text-white whitespace-nowrap bg-black">
                <div className="justify-center px-5 py-2.5 bg-black rounded-md">1D</div>
                <div className="justify-center px-5 py-2.5 bg-black rounded-md">1W</div>
                <div className="justify-center px-5 py-2.5 bg-black rounded-md">1M</div>
                <div className="justify-center px-5 py-2.5 bg-black rounded-md">1Y</div>
                <div className="justify-center px-5 py-2.5 text-black bg-white rounded-md shadow-sm">
                    All
                </div>
            </div>
            <div className="flex flex-col items-center pt-2.5 mt-1 w-full text-sm whitespace-nowrap bg-black">
                <div className="flex gap-2.5 justify-between p-5 w-full tracking-normal text-white bg-black rounded-xl shadow-sm max-w-[350px]">
                    <div className="flex gap-5 my-auto">
                        <div className="font-bold">AAPL</div>
                        <div>€156,36</div>
                        <div className="my-auto text-xs tracking-normal text-green-500 text-opacity-40">
                            +0.38
                        </div>
                        <div className="my-auto text-xs tracking-normal text-green-500 text-opacity-40">
                            (+0.24%)
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/305f32f0fffe7946c1cb7d91f315c94650c121f76a966a9335535513a7f02d55?"
                        className="shrink-0 aspect-[1.67] stroke-[1px] stroke-white w-[63px]"
                    />
                </div>
                <div className="flex gap-2.5 justify-between p-5 mt-2.5 w-full tracking-normal text-white bg-black rounded-xl shadow-sm max-w-[350px]">
                    <div className="flex gap-5 my-auto">
                        <div className="font-bold">AAPL</div>
                        <div>€156,36</div>
                        <div className="my-auto text-xs tracking-normal text-green-500 text-opacity-40">
                            +0.38
                        </div>
                        <div className="my-auto text-xs tracking-normal text-green-500 text-opacity-40">
                            (+0.24%)
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a5a3e80292354a8b85c12d8ec4bbbec612deb8a3bd86ef4e162d88cda4a4f4d?"
                        className="shrink-0 aspect-[1.67] stroke-[1px] stroke-white w-[63px]"
                    />
                </div>
                <div className="flex flex-col justify-center items-start p-5 mt-2.5 max-w-full tracking-normal text-white bg-black rounded-xl shadow-sm w-[350px]">
                    <div className="flex gap-5">
                        <div className="font-bold">AAPL</div>
                        <div>€156,36</div>
                        <div className="my-auto text-xs tracking-normal text-green-500 text-opacity-40">
                            +0.38
                        </div>
                        <div className="my-auto text-xs tracking-normal text-green-500 text-opacity-40">
                            (+0.24%)
                        </div>
                    </div>
                </div>
                <div className="flex z-10 gap-5 self-stretch px-5 py-1.5 text-base">
                    <div className="flex-1 justify-center px-16 py-4 text-black bg-white rounded-xl shadow-sm">
                        Buy
                    </div>
                    <div className="flex-1 justify-center px-16 py-4 text-white bg-black rounded-xl shadow-md">
                        Sell
                    </div>
                </div>
                <div className="flex gap-2.5 justify-between items-start px-5 pt-5 mt-0 tracking-normal text-white bg-black rounded-xl shadow-sm">
                    <div className="flex gap-5 mt-3">
                        <div className="font-bold">AAPL</div>
                        <div>€156,36</div>
                        <div className="text-xs tracking-normal text-green-500 text-opacity-40">
                            +0.38
                        </div>
                        <div className="text-xs tracking-normal text-green-500 text-opacity-40">
                            (+0.24%)
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb6852d84cac5fde9ad90abace37abb596688418a83798ac52ee292ac34c339?"
                        className="shrink-0 aspect-[3.45] stroke-[1px] stroke-white w-[63px]"
                    />
                </div>
            </div>
        </div>
    </div>
}
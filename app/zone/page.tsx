import PortfolioGraph from "@/components/zone/portfolio-graph";
import Controls from "@/components/zone/controls";

export default async function Page() {
    return <div>
        <div className="flex flex-col pt-10 mx-auto w-full bg-black max-w-[480px]">
            <PortfolioGraph />
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
            </div>
            <Controls />
        </div>
    </div>
}
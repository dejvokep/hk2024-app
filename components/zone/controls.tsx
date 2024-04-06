export default function Controls() {
    return <div className="w-full fixed bottom-[80px] flex z-10 gap-5 self-stretch px-5 py-1.5 text-base">
        <div className="flex-1 text-center justify-center px-16 py-4 text-black bg-white rounded-xl shadow-sm" style={{boxShadow: "inset 0 -3px 4px 0 rgba(0, 0, 0, 0.25)"}}>
            Buy
        </div>
        <div className="flex-1 text-center justify-center px-16 py-4 text-white bg-black rounded-xl shadow-md" style={{boxShadow: "inset 0 2px 4px 0 rgba(255, 255, 255, 0.25), 0 -2px 10px 0 rgba(255, 255, 255, 0.1)"}}>
            Sell
        </div>
    </div>
}
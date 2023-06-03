import Image from "next/image";

const TopBar = () => {
    return (
        <div className="flex min-sm:justify-center items-center py-4 px-3 lg:py-4 lg:px-24">
            <div>
                <Image
                    alt="Logo"
                    width={70}
                    height={70}
                    src="/static/logo.png"
                />
            </div>
            <div className="flex items-center text-white">
                <div className="ml-4">
                    <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold pb-1">WittyWeather</h1>
                    <h5 className="text-sm md-text-xl lg:text-xl font-thin">Weather updates with a side of wit!</h5>
                </div>
            </div>
        </div>
    )
}

export default TopBar

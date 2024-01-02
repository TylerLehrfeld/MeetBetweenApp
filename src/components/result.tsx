import { Location } from "@/lib/data";

type LocType = {
    location: Location;
};

const Result = (locType: LocType) => {
    const { location } = locType;
    return (
        <div className="w-5/6 lg:w-1/2 bg-gray-300 p-5 border-zinc-500 border-4 rounded">
            <div>
                <div>
                    <p>{location.name}</p>
                </div>
            </div>
            <div>
                <p>{`(${location.lat}, ${location.lng})`}</p>
            </div>
        </div>
    );
};

export default Result;

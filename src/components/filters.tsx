import SliderBox from "./sliderBox";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const Filters = () => {
    return (
        <>
            <div className="text-xs lg:text-base">
                <div className="bg-gray-900">
                    <SliderBox label={"Maximum Distance"}></SliderBox>
                </div>

                <ToggleGroup
                    type="multiple"
                    className="flex-wrap justify-center gap-1 lg:gap-4 bg-gray-900"
                >
                    <ToggleGroupItem
                        value="activity"
                        className="rounded-full bg-blue-900 border-white border-2 text-white"
                    >
                        <div>
                            <p className="text-xs lg:text-base">Activity</p>
                        </div>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="restaurant"
                        className="rounded-full bg-blue-900 border-white border-2 text-white"
                    >
                        <div>
                            <p className="text-xs lg:text-base">Restaurant</p>
                        </div>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="park"
                        className="rounded-full bg-blue-900 border-white border-2 text-white"
                    >
                        <div>
                            <p className="text-xs lg:text-base">Park</p>
                        </div>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="coffeeShop"
                        className="rounded-full bg-blue-900 border-white border-2 text-white"
                    >
                        <div>
                            <p className="text-xs lg:text-base">Coffee Shop</p>
                        </div>
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value=""
                        className="rounded-full bg-blue-900 border-white border-2 text-white"
                    >
                        <div>
                            <p className="text-xs lg:text-base">Activity</p>
                        </div>
                    </ToggleGroupItem>
                </ToggleGroup>
            </div>
        </>
    );
};

export default Filters;

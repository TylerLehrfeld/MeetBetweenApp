import SliderBox from "./sliderBox";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

const Filters = () => {
    return (
        <>
            <div className="bg-gray-900">
                <SliderBox label={"Maximum Distance"}></SliderBox>
            </div>

            <ToggleGroup
                type="multiple"
                className="flex justify-center gap-4 bg-gray-900"
            >
                <ToggleGroupItem
                    value="activity"
                    className="rounded-full bg-blue-900 border-white border-2 text-white"
                >
                    <div>
                        <p>Activity</p>
                    </div>
                </ToggleGroupItem>
                <ToggleGroupItem
                    value="restaurant"
                    className="rounded-full bg-blue-900 border-white border-2 text-white"
                >
                    <div>
                        <p>Restaurant</p>
                    </div>
                </ToggleGroupItem>
                <ToggleGroupItem
                    value="park"
                    className="rounded-full bg-blue-900 border-white border-2 text-white"
                >
                    <div>
                        <p>Park</p>
                    </div>
                </ToggleGroupItem>
                <ToggleGroupItem
                    value="coffeeShop"
                    className="rounded-full bg-blue-900 border-white border-2 text-white"
                >
                    <div>
                        <p>Coffee Shop</p>
                    </div>
                </ToggleGroupItem>
                <ToggleGroupItem
                    value=""
                    className="rounded-full bg-blue-900 border-white border-2 text-white"
                >
                    <div>
                        <p>Activity</p>
                    </div>
                </ToggleGroupItem>
            </ToggleGroup>
        </>
    );
};

export default Filters;

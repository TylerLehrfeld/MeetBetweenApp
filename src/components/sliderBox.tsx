import { SetStateAction, useState } from "react";
import { Slider } from "./ui/slider";

const SliderBox = ({ label }: { label: string }) => {
    const [progress, setProgress] = useState(0);

    return (
        <>
            <div className="flex justify-center p-5">
                <div className="bg-blue-900 rounded-full w-11/12 lg:w-5/6">
                    <div className="flex justify-center p-5 text-white rounded-full">
                        <p>{label + ": " + progress + " miles"}</p>
                    </div>
                    <div className="flex justify-center p-5">
                        <div className="w-3/4 lg:w-1/2">
                            <Slider
                                onValueChange={(
                                    value: number,
                                ) => {
                                    setProgress(value);
                                }}
                            ></Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderBox;

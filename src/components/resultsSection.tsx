import { locations } from "@/lib/data";
import Result from "./result";

const ResultsSection = () => {


    return (<>
        <div className="bg-gray-900 flex justify-center flex-col gap-2 p-5">
            {locations.map((loc) => (
                <div className="flex justify-center" key={loc.id}>
                    <Result location = { loc } ></Result>
                </div>
            ))}
        </div>
    </>);
};

export default ResultsSection;

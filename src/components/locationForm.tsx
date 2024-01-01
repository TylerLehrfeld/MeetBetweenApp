import { Button } from "./ui/button";
import { Input } from "./ui/input";

const LocationForm = () => {



  
    return (
        <>
            <div className="bg-gray-900 flex text-white gap-8 p-5">
                
                    <Input className="" type="text" placeholder="location"/>
                
                    <Input type="text" placeholder="location"/>
                
            </div>
            <div className="flex justify-center p-5">
                <Button>Find middle locations!</Button>
            </div>
        </>
    );
};

export default LocationForm;

import UserOptions from "./userOptions";

const Header = () => {
    return (
        <>
            <div className="flex justify-center p-1 lg:p-5">
                <div className="border-zinc-500 border-4 rounded w-full flex h-min bg-gray-300">
                    <div className="p-4 flex justify-between items-center w-full h-full">
                        <div className="flex items-center">
                            <img
                                className="size-4 lg:size-16"
                                src="location-svgrepo-com.svg"
                            />
                        </div>
                        <div className="flex it ems-center">
                            <p className="font-extrabold text-xl lg:text-5xl">
                                MeetBetween
                            </p>
                        </div>
                        <div className="flex items center">
                            <UserOptions></UserOptions>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

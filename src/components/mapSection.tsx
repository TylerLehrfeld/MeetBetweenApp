import { Loader } from "@googlemaps/js-api-loader";

const MapSection = () => {
    const loader = new Loader({
        apiKey: localStorage.getItem("api_key") as string,
        version: "weekly",
    });

    loader.load().then(async () => {
        const { Map } = (await google.maps.importLibrary(
            "maps",
        )) as google.maps.MapsLibrary;
        map = new Map(document.getElementById("map") as HTMLElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    });
    let map: google.maps.Map;
    async function initMap(): Promise<void> {
        const { Map } = (await google.maps.importLibrary(
            "maps",
        )) as google.maps.MapsLibrary;
        map = new Map(document.getElementById("map") as HTMLElement, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
        map.setZoom(7);
    }

    initMap();

    return (
        <div className="flex h-full justify-center bg-gray-900">
            <div className="h-2/3 w-1/2">
                <div id="map" className="h-full"></div>
            </div>
        </div>
    );
};

export default MapSection;

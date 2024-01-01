import Header from "./components/header";
import LocationForm from "./components/locationForm";
import MapSection from "./components/mapSection";
import ResultsSection from "./components/resultsSection";

function App() {
    return (
        <>
            <div className="bg-gray-900 h-screen">
                <Header></Header>
                <LocationForm></LocationForm>
                <MapSection></MapSection>
                <ResultsSection></ResultsSection>
            </div>
        </>
    );
}

export default App;

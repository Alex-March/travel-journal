import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import data from "./data";

function App() {
  const locations = data.map((place) => {
    return (
      <Body
        key={place.title}
        country={place.location}
        photo={place.imageUrl}
        mapsLink={place.googleMapsUrl}
        startDate={place.startDate}
        endDate={place.endDate}
        description={place.description}
      />
    );
  });

  return (
    <div className='App'>
      <Navbar />
      {locations}
    </div>
  );
}

export default App;

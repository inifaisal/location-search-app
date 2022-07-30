import { Wrapper } from "@googlemaps/react-wrapper";
import { Content } from 'antd/lib/layout/layout';

import MapContainer from './components/Map/MapContainer';
import SearchInput from "./components/SearchInput/SearchInput";

import './App.css';



function App() {
  return (
    <div className="App">
      <SearchInput />
      <Content>
        <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
          <MapContainer />
        </Wrapper>
      </Content>
    </div>
  );
}

export default App;

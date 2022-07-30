import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Select } from 'antd'

import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

import { clearLocationList, saveLocationList } from '../../features/locations/searchLocationSlice';
import { selectLocation } from '../../features/locations/selectedLocationSlice';
import "./SearchInput.css";


const SearchInput = () => {
  const locations = useSelector((state) => state.location.locations);
  const dispatch = useDispatch();

  const {
    placesService,
    placePredictions,
    getPlacePredictions,
  } = usePlacesService({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const handleOnGetPrediction = () => {
    if (placePredictions.length) {
      const places = placePredictions.map((place)  => {
        return {
          label: place.description,
          value: place.place_id
        };
      });
      dispatch(saveLocationList(places))
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(handleOnGetPrediction, [placePredictions]);

  const onSearch = (input) => {
    if(!input && input.length === 0) {
      dispatch(clearLocationList());
    } else {
      getPlacePredictions({input});
    }
  };

  const handleOnSelectPlace = (placeId) => {
    placesService?.getDetails({ placeId }, (placeDetail) => {
      const { location } = placeDetail.geometry;
      const lat = location.lat();
      const lng = location.lng();
      dispatch(selectLocation({lat, lng}));
      // remove location list after select the location item.
      dispatch(clearLocationList());
    });
}

  const options = locations.map(location => {
    return (
      <Select.Option
        key={location.value}
        value={location.value}
      >
        {location.label}
      </Select.Option>
    )
  })

  return (
    <div  className='search-input'>
      <Select
        showSearch
        value={null}
        placeholder="Search Location"
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={onSearch}
        notFoundContent={null}
        onChange={handleOnSelectPlace}
      >
        {options}
      </Select>
    </div>

  )
}

export default SearchInput
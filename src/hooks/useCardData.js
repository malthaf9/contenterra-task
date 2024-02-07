import { useDispatch } from 'react-redux';
import { addCardData } from '../utils/cardSlice';
import { useEffect } from "react";
import { FETCH_API } from "../utils/constants";

const useCardData = () => {
    // fetch the cards data and update the store accordingly
    const dispatch = useDispatch()

  const fetchData = async () => {
    const data = await fetch(FETCH_API);
    const json = await data.json();
    console.log(json.data.children)
   dispatch(addCardData(json.data.children))
  };

  useEffect(() => {
    fetchData();
  }, []);
}

export default useCardData;
import { useSelector, useDispatch } from "react-redux";
import { removeProductActionById } from "./slices/productSlice";
import { orderNameSelector } from "./selectors";

const dispatch = useDispatch();
const orderName = useSelector(orderNameSelector); // get data using created selector
console.log(orderName);

const handleAccept = (id: number) => {
  dispatch(removeProductActionById(id)); // dispatch usage example
};

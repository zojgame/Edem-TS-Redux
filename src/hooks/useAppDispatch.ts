import { useDispatch } from "react-redux";
import { ApiDispatch } from "../types";

const useAppDispatch = () => useDispatch<ApiDispatch>();

export { useAppDispatch };

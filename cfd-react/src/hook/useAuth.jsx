import { useContext } from "react";
import { Context } from "../App";

export const useAuth = () => useContext(Context);
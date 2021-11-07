import { useContext } from "react";
import { Context } from "../App";
import {useSelector} from "react-redux"

export const useAuth = () => useSelector(store => store.auth)
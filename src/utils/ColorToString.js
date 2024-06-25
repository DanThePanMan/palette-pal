import { createContext } from "react"
import Colors from "../assets/Colors.json"

const colors = JSON.parse(Colors)

const colorContext = createContext(colors)
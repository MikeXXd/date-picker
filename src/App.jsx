import { useState } from "react";
import { DatePicker } from "./DatePicker";


export function App() {
const [ value, setValue ] = useState(new Date());

  return (
<DatePicker value={value} onChange={setValue}/>
  )
}

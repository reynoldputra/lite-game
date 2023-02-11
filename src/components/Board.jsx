import Row from "./Row";
import { useEffect, useState } from "react";
import generateClue from "../lib/generateClue";


export default function Board() {
    const clues = 17
    const square = 3  

    const [data, setData] = useState([])


    useEffect( ()=> {
        const generatedData = generateClue(clues, square)
        setData(generatedData)
    }, [])


    return (
        <>
            <div className='bg-white w-[80vw] h-[80vw] p-4 rounded-md'>
                <div className="border border-slate-600 grid grid-rows-[9] w-full h-full">
                    {data.map((val, idx) => (
                        <Row row={idx} data={val} />
                    ))}
                </div>
            </div>
        </>
    )
}
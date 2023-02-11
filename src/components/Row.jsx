export default function Row({row, data}) {

    return (
        <div className={`grid grid-cols-9`}>
            {data.map((val, idx) => (
                <p className={`text-center align-middle border border-x-[1] ${[2,5].includes(idx) ? " border-r-slate-800" : " border-slate-200 "} ${[2,5].includes(row) ? " border-b-slate-800" : " "}`}>
                {val ? val : " "}
                </p>
            ))}
        </div>
    )
}   
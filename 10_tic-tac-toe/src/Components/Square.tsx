import { useState } from "react";

export default function Square({value, onSquareClick}: {value: string, onSquareClick: any}) {
    // const [value, setValue] = useState<string>('');

    

    return <button className="square" onClick={onSquareClick}>{value}</button>;
}
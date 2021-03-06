import { useState } from "react"
import getRandAnswer from "./helpers"
import answers from "./answers"

const EightBall = () => {
    let [color, setColor] = useState("black")
    let [msg, setMsg] = useState("Think of a Question")
    const answer = getRandAnswer(answers)

    const handleClick = () => {
        if (color === "black" && msg === "Think of a Question") {
            setMsg(answer[0])
            setColor(answer[1])
        } else {
            setMsg("Think of a Question")
            setColor("black")
        }
    }

    console.log(color, msg)

    return (
        <div onClick={handleClick} style={{ backgroundColor: color}}className="eightBall">
            {msg}
        </div>
    )
}

EightBall.defaultProps = answers

export default EightBall
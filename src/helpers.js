const getRandAnswer = (arr) => {
    const randIdx = Math.floor(Math.random() * arr.length) 
    return [arr[randIdx].msg, arr[randIdx].color]
}

export default getRandAnswer
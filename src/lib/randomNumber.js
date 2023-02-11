const randomNumber = (start, end) => {
    return Math.floor(Math.random() * (start - end + 1) + end)
}

export default randomNumber;
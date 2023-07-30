export const arrow = {
    position: "relative",
    top: "-70%",
    fontSize: "4rem",
    color: "#000",
    zIndex: 10,
    cursor: "pointer",
    userSelect: "none",
}

export const backArrow = {
    ...arrow,
    left: "0",
}

export const forwardArrow = {
    ...arrow,
    right: "-89%",
}

export const imageBox = (selected: boolean) => ({
    height: "100%",
    width: "100%",
    display: selected ? "block" : "none",
})

export const caption = {
    position: "relative",
    top: "-20%",
    fontSize: "2rem",
    color: "#000",
    zIndex: 10,
    fontWeight: 500,
}

export const slideImage = { width: "100%", height: "100%" }
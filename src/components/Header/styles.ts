export const appBar = {
  backgroundColor: "lightgray",
};

export const name = (xs: boolean) => ({
  mr: 2,
  display: { xs: xs ? "flex" : "none", md: xs ? "none" : "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "black",
  textDecoration: "none",
});

export const icon = (xs: boolean) => ({
  display: { xs: xs ? "flex" : "none", md: xs ? "none" : "flex" },
  mr: 1,
});

export const menuFullPageButton = { my: 2, color: "black", display: "block" };

export const menuFullPageEndBox = { display: { xs: "none", md: "flex" } }

export const menuBarEndBox = { display: { xs: "flex", md: "none" } }

export const menuBarMenu = { display: { xs: "block", md: "none" }, }


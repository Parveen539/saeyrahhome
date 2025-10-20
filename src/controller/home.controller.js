export const sendHomePage = async (req, res) => {
  try {
    return res.render("home", { title: "Home Page", name: "Parveen" });
  } catch (error) {
    return res.send(`Page Error: ${error.message}`);
  }
};

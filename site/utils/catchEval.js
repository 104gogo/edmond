export default (code) => {
  try {
    window.eval(code);
  } catch (e) {
    console.error(e.message);
  }
};

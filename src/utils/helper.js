// get the first letters in a string
function getInitials(fullName) {
  let names = fullName.split(" ");
  let firstInitial = names[0][0];
  let lastInitial = names.length > 1 ? names[names.length - 1][0] : "";
  return firstInitial + (lastInitial ? " " + lastInitial : "");
}

// navigate user back
const handleBackNavigate = (navigate) => {
  navigate(-1);
};

export { getInitials, handleBackNavigate };

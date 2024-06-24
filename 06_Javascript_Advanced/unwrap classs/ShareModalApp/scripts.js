const modal = document.querySelector(".modal"); // modal k element ko le liya 
const overlay = document.querySelector(".overlay"); // overlay element ko le liya 



//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active"); //jab open modal call hoga tb modal ki clasList ke andar ek active class add kr do
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
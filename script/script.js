// dom variables
const container = document.getElementById("all-jobs-con");
const totalEl = document.getElementById("total-count");
const interviewEl = document.getElementById("interview-count");
const rejectedEl = document.getElementById("rejected-count");
const totalJobsEl = document.getElementById("total-jobs");
const categoryAllBtn = document.getElementById("category-all");
const categoryInterviewBtn = document.getElementById("category-interview");
const categoryRejectedBtn = document.getElementById("category-rejected");
const categoryBtns = document.querySelectorAll(".category");
let curentFilter = "all";

// category btn active class add
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    categoryBtns.forEach((b) => {
      b.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

// category btn click event handler
categoryAllBtn.addEventListener("click", function () {
  renderjobs("all");
});
categoryInterviewBtn.addEventListener("click", function () {
  renderjobs("Interview");
});
categoryRejectedBtn.addEventListener("click", function () {
  renderjobs("Rejected");
});
// main job rendering function call
renderjobs();

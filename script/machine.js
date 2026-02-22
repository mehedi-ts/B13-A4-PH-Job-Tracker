console.log("machine conected.");

function updateCount() {
  totalEl.innerText = jobs.length;
  totalJobsEl.innerText = jobs.length;
  interviewEl.innerText = jobs.filter((j) => {
    return j.status === "Interview";
  }).length;
  rejectedEl.innerText = jobs.filter((j) => {
    return j.status === "Rejected";
  }).length;
}
function renderjobs(filter = "all") {
  container.innerHTML = "";
  const filterJob = jobs.filter((job) => {
    if (filter === "all") {
      return true;
    }
    return job.status === filter;
  });

  filterJob.forEach((job, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="w-full bg-white h-[300px] rounded-xl p-6">
            <div class="sub-title flex items-center justify-between">
              <div class="titles">
                <h4 class="text-black text-[18px] font-semibold">
                  Mobile First Corp
                </h4>
                <p class="text-base text-[#64748B]">React Native Developer</p>
              </div>
              <div
                class="delete-btn flex items-center justify-center w-8 h-8 rounded-full p-2 border border-[#F1F2F4] text-[#64748B]"
              >
                <i class="fa-regular fa-trash-can w-4"></i>
              </div>
            </div>
          </div>
    `;
    container.appendChild(div);
  });
  updateCount();
}

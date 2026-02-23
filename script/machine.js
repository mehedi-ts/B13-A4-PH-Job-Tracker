// function for category click
function bntHandle(index, status) {
  jobs[index].status = status;
  renderjobs(curentFilter);
}
// function for delete btn click
function deleteJob(index) {
  jobs.splice(index, 1);
  renderjobs(curentFilter);
}
// function for update cuount state
function updateCount(filter) {
  let filterJOb = jobs;
  if (filter !== "all") {
    filterJOb = jobs.filter((j) => {
      return j.status === filter;
    });
  }
  totalJobsEl.innerText = filterJOb.length;

  totalEl.innerText = jobs.length;
  interviewEl.innerText = jobs.filter((j) => {
    return j.status === "Interview";
  }).length;
  rejectedEl.innerText = jobs.filter((j) => {
    return j.status === "Rejected";
  }).length;
}
// function for main job rendar.
function renderjobs(filter = "all") {
  curentFilter = filter;
  container.innerHTML = "";
  const filterJob = jobs.filter((job) => {
    if (filter === "all") {
      return true;
    }
    return job.status === filter;
  });
  if (filterJob.length === 0) {
    container.innerHTML = `<div class=" text-center flex px-10 py-14 bg-white w-full rounded-xl items-center justify-center flex-col">
            <img src="./assets/jobs.png" alt="" />
            <h1 class="mt-5 mb-2 text-2xl font-semibold text-black">
              No jobs available
            </h1>
            <p class="text-base text-[#64748B]">
              Check back soon for new job opportunities
            </p>
          </div>`;
    updateCount(filter);
    return;
  }

  filterJob.forEach((job, index) => {
    const mainDataIndex = jobs.indexOf(job);

    const div = document.createElement("div");
    div.classList.add(
      "w-full",
      "bg-white",
      "rounded-xl",
      "p-6",
      "flex",
      "flex-col",
      "gap-5",
    );
    div.innerHTML = `
    
            <div class="sub-title flex items-center justify-between">
              <div class="titles">
                <h4 class="text-black text-[18px] font-semibold">
                  ${job.companyName}
                </h4>
                <p class="text-base text-[#64748B]">${job.position}</p>
              </div>
              <div
      onclick="deleteJob(${mainDataIndex})"
      class="delete-btn hover:bg-[#b1b2b4c3] hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center w-8 h-8 rounded-full p-2 border border-[#F1F2F4] text-[#64748B]"
    >
      <i class="fa-regular fa-trash-can w-4"></i>
    </div>
            </div>
            <div
              class="flex items-center justify-start gap-3 text-sm text-[#64748B]"
            >
              <p>${job.location}</p>
              <p><i class="fa-solid fa-circle text-[7px]"></i></p>
              <p>${job.type}</p>
              <p><i class="fa-solid fa-circle text-[7px]"></i></p>
              <p>${job.salary}</p>
            </div>
            <div>
              <span
                class= " ${job.status === "Rejected" ? "bg-red-300 text-black" : "bg-[#EEF4FF]"} ${job.status === "Interview" ? "bg-green-300 text-black" : "bg-[#EEF4FF]"} bg-[#EEF4FF] px-3 py-2 text-black text-sm font-medium rounded-[4px]"
                >${job.status}</span
              >
              <p class="text-[#323B49] text-sm mt-4">
                ${job.description}
              </p>
            </div>
            <div class="cart-btn flex gap-2">
              <button
                onclick="bntHandle(${mainDataIndex}, 'Interview')"
                class="btn btn-outline btn-success text-sm font-semibold"
              >
                interview
              </button>
              <button
                onclick="bntHandle(${mainDataIndex}, 'Rejected')"
                class="btn btn-outline btn-error text-sm font-semibold"
              >
                Rejected
              </button>
            </div>
         
    `;
    container.appendChild(div);
  });
  updateCount(filter);
}

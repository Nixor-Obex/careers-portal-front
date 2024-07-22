// function renderJobListings() {
//   jobListings.forEach((job) => {
//     const teamSection = document.getElementById(job.team);
//     if (teamSection) {
//       const jobCard = document.createElement("div");
//       jobCard.classList.add("job-card");
//       jobCard.innerHTML = `
//                 <h2>${job.title}</h2>
//                 <p>${job.location}</p>
//                 <p>${job.workType}</p>
//                 <button class="apply-button">Apply</button>
//             `;
//       teamSection.appendChild(jobCard);
//     }
//   });
// }

// renderJobListings();


const jobListings = [
  {
      title: "Deputy Manager of Finance and Investor Relations Group",
      location: "New York, NY",
      workType: "Full-Time",
      id: "job1",
      team: "finance"
  },
  {
      title: "Global Legal Officer",
      location: "San Francisco, CA",
      workType: "Full-Time",
      id: "job2",
      team: "legal"
  }
  // Add more jobs as needed
];

function renderJobListings() {
  const jobListingsContainer = document.getElementById("job-listings");
  jobListings.forEach((job) => {
      const jobCard = document.createElement("div");
      jobCard.classList.add("job-card");
      jobCard.innerHTML = `
          <h2><a href="jobs.html?job=${job.id}">${job.title}</a></h2>
          <p>${job.location}</p>
          <p>${job.workType}</p>
          <button class="apply-button">Apply</button>
      `;
      jobListingsContainer.appendChild(jobCard);
  });
}

function getJobFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('job');
}

function showJobDescription(jobId) {
  if (!jobId) return;

  // Hide all job descriptions
  const jobDescriptions = document.querySelectorAll('.job-description');
  jobDescriptions.forEach(description => description.style.display = 'none');

  // Show the selected job description
  const selectedJob = document.getElementById(jobId);
  if (selectedJob) {
      selectedJob.style.display = 'block';
  }
}

// On page load, get the job from the URL and show the corresponding job description
window.onload = () => {
  renderJobListings();
  const jobId = getJobFromUrl();
  showJobDescription(jobId);
};



//  Login Page 

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
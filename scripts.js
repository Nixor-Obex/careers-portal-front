function renderJobListings() {
  jobListings.forEach((job) => {
    const teamSection = document.getElementById(job.team);
    if (teamSection) {
      const jobCard = document.createElement("div");
      jobCard.classList.add("job-card");
      jobCard.innerHTML = `
                <h2>${job.title}</h2>
                <p>${job.location}</p>
                <p>${job.workType}</p>
                <button class="apply-button">Apply</button>
            `;
      teamSection.appendChild(jobCard);
    }
  });
}

renderJobListings();

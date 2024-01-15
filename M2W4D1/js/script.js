function findJob(title, location) {
    const jobsFound = {
        result: [],
        count: 0,
    }
    jobs.forEach(job => {
        if (job.title.toLowerCase().includes(title.toLowerCase()) && job.location.toLocaleLowerCase().includes(location.toLocaleLowerCase())) {
            jobsFound.result.push(job);
        }
    })
    jobsFound.count = jobsFound.result.length;
    return jobsFound;
}

function deleteJobList() {
    const body = document.querySelector("body");
    const jobListContainer = document.querySelector(".jobListContainer");
    if (body.contains(jobListContainer)) {
        jobListContainer.remove();
    }
}

function ReadFormAndSearchJob() {
    const jobTitle = document.querySelector("#jobTitle");
    const jobLocation = document.querySelector("#jobLocation");
    const jobsFound = findJob(jobTitle.value, jobLocation.value);
    jobTitle.value = "";
    jobLocation.value = "";
    return jobsFound;
}

function createJobList(jobsFound) {
    if (jobsFound != undefined) {
        const body = document.querySelector("body");
        const jobListContainer = document.createElement("div");
        const resultsCounter = document.createElement("p");
        const list = document.createElement("ul");
        jobListContainer.classList.add("jobListContainer");
        resultsCounter.classList.add("jobListResults");
        list.classList.add("list");
        resultsCounter.textContent = `Results: ${jobsFound.count}`;
        jobsFound.result.forEach(jobResult => {
            const job = document.createElement("li");
            job.classList.add("job");
            job.innerHTML = "<p><strong>TITLE:</strong> " + jobResult.title + "</p> <p><strong>LOCATION:</strong> " + jobResult.location + "</p>";
            list.append(job);
        })
        jobListContainer.append(resultsCounter, list);
        body.append(jobListContainer);
    }
}

const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    deleteJobList();
    createJobList(ReadFormAndSearchJob());
})

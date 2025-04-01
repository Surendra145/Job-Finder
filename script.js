const jobListings = [
    { title: "Software Developer", company: "TechCorp", location: "New York, NY", description: "Develop and maintain software solutions.", id: 1 },
    { title: "Data Scientist", company: "DataTech", location: "San Francisco, CA", description: "Analyze and interpret complex data.", id: 2 },
    { title: "Web Developer", company: "WebWorks", location: "Remote", description: "Build and maintain websites.", id: 3 },
    { title: "Product Manager", company: "Innovative Solutions", location: "Chicago, IL", description: "Manage product development and roadmap.", id: 4 },
    { title: "Graphic Designer", company: "Creative Co.", location: "Los Angeles, CA", description: "Design graphics for digital and print media.", id: 5 }
];

function displayJobs(jobs) {
    const jobListContainer = document.getElementById("job-listings");
    jobListContainer.innerHTML = ''; // Clear previous listings

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
            <button onclick="applyForJob(${job.id})">Apply</button>
        `;

        jobListContainer.appendChild(jobCard);
    });
}

function applyForJob(jobId) {
    const job = jobListings.find(job => job.id === jobId);
    alert(`You have applied for the position: ${job.title} at ${job.company}`);
}

function searchJobs() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredJobs = jobListings.filter(job =>
        job.title.toLowerCase().includes(searchInput) ||
        job.company.toLowerCase().includes(searchInput) ||
        job.location.toLowerCase().includes(searchInput)
    );
    displayJobs(filteredJobs);
}

// Initial job display
displayJobs(jobListings);
function applyForJob(jobId) {
    const job = jobListings.find(job => job.id === jobId);
    
    // Show the application form when Apply button is clicked
    document.getElementById('application-form').style.display = 'block';

    // Store job information in the form (just for convenience)
    document.getElementById('apply-form').onsubmit = function(e) {
        e.preventDefault(); // Prevent form from reloading the page

        // Get user input
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const resume = document.getElementById('resume').files[0] ? document.getElementById('resume').files[0].name : 'No file uploaded';

        // Simulate the application submission
        alert(`You have applied for the position: ${job.title} at ${job.company}\nName: ${name}\nEmail: ${email}\nResume: ${resume}`);

        // You can store the application details in localStorage or an array
        localStorage.setItem('jobApplication', JSON.stringify({
            jobId: job.id,
            name: name,
            email: email,
            resume: resume
        }));

        // Clear the form and hide it again
        document.getElementById('apply-form').reset();
        document.getElementById('application-form').style.display = 'none';
    };
}

function closeApplicationForm() {
    // Hide the application form if the user cancels
    document.getElementById('application-form').style.display = 'none';
}

// Your previous job display and search code remains unchanged

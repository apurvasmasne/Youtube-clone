// script.js

// Function to fetch and populate video cards on the home page
function populateVideoCards() {
  // Simulated data
  const videos = [
    { id: 1, title: "Video 1", thumbnail: "thumbnail1.jpg" },
    { id: 2, title: "Video 2", thumbnail: "thumbnail2.jpg" },
    { id: 3, title: "Video 3", thumbnail: "thumbnail3.jpg" },
  ];

  const videoCardsContainer = document.getElementById("video-cards");

  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "mb-4");

    card.innerHTML = `
        <div class="card">
          <img src="${video.thumbnail}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${video.title}</h5>
            <a href="video.html?id=${video.id}" class="btn btn-primary">Watch Video</a>
          </div>
        </div>
      `;

    videoCardsContainer.appendChild(card);
  });
}

// Function to fetch and populate user's uploaded videos on the profile page
function populateUploadedVideos() {
  // Simulated data
  const uploadedVideos = [
    { id: 1, title: "Uploaded Video 1", thumbnail: "uploaded-thumbnail1.jpg" },
    { id: 2, title: "Uploaded Video 2", thumbnail: "uploaded-thumbnail2.jpg" },
  ];

  const uploadedVideosContainer = document.getElementById("uploaded-videos");

  uploadedVideos.forEach((video) => {
    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "mb-4");

    card.innerHTML = `
        <div class="card">
          <img src="${video.thumbnail}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${video.title}</h5>
            <a href="video.html?id=${video.id}" class="btn btn-primary">Watch Video</a>
          </div>
        </div>
      `;

    uploadedVideosContainer.appendChild(card);
  });
}

// Function to fetch and populate comments on a video page
function populateComments() {
  // Simulated data
  const comments = [
    { user: "User1", comment: "This is a great video!" },
    { user: "User2", comment: "I learned a lot from this video." },
  ];

  const commentsContainer = document.getElementById("comments");

  comments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("card", "mb-2");

    commentElement.innerHTML = `
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted">${comment.user}</h6>
          <p class="card-text">${comment.comment}</p>
        </div>
      `;

    commentsContainer.appendChild(commentElement);
  });
}

// Populate video cards on the home page
populateVideoCards();

// Populate user's uploaded videos on the profile page
populateUploadedVideos();

// Populate comments on the video page
populateComments();

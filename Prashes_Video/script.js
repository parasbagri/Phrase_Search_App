// script.js
// import assets from "./assets";
// console.log("not", assets);
const mockData = [
  {
    phrase: "i know that you",
    videoUrl: "./assets/_I_know_that_you_.mp4",
  },

  {
    phrase: "have a problem with",
    videoUrl: "./assets/videoplayback.mp4",
  },
  {
    phrase: "do you think this",
    videoUrl: "./assets/_Do you think this_.mp4",
  },

  {
    phrase: "as long as you",
    videoUrl: "./assets/_As long as you_.mp4",
  },
  //   {
  //     phrase: "can you believe that",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "in the history of",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "are you going to ",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "is there anything i",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "out of your mind",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "did you get here",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "do you know why",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "in a few days",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "the fact that you",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "in front of me",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "i was just trying",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "all over the place",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "to get to the",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "i think this is",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "i know all about",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
  //   {
  //     phrase: "can you help me",
  //     videoUrl: "https://path-to-video3.mp4",
  //   },
];

console.log(mockData[0].videoUrl);

document.getElementById("searchBtn").addEventListener("click", function () {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const results = document.getElementById("results");
  //   console.log(results)
  console.log("Query:", query);
  results.innerHTML = ""; // Clear previous results
  if (query === "") {
    results.innerHTML = "<h3>Please search any one phrase </h3>";
    results.style.color = "#fff";
  } else {
    const filteredClips = mockData.filter((item) =>
      item.phrase.toLowerCase().includes(query)
    );
    console.log("working Flter Clips", query, filteredClips);

    if (filteredClips.length > 0) {
      filteredClips.forEach((clip) => {
        const video = document.createElement("video");
        video.src = clip.videoUrl;
        video.controls = true;
        video.play();
        video.style.width = "40%";
        // overlay div
        const div = document.createElement("div");

        console.log("kya forEach ho rha hai :", clip);

        // const phrase = document.createElement("p");
        // phrase.innerText = clip.phrase;

        // results.appendChild(phrase);
        results.appendChild(video);
      });
    } else {
      results.innerHTML = "<p>No matching clips found!</p>";
    }
  }
});

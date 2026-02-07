class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
  }
}

const video1 = new Video("Learn JavaScript", "Alice", 300);
video1.watch();

const video2 = new Video("CSS Basics", "Bob", 180);
video2.watch();

const videosData = [
  { title: "JavaScript Functions", uploader: "Alice", time: 250 },
  { title: "CSS Grid", uploader: "Bob", time: 200 },
  { title: "HTML Forms", uploader: "Charlie", time: 180 },
  { title: "React Basics", uploader: "Diana", time: 400 },
  { title: "Node.js Intro", uploader: "Eve", time: 350 },
];

const videoInstances = [];

for (let data of videosData) {
  videoInstances.push(new Video(data.title, data.uploader, data.time));
}

for (let video of videoInstances) {
  video.watch();
}

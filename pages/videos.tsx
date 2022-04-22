import Head from "next/head";
import VideoComponent from "../components/video";
import { Video } from "../interfaces/models";

type Props = {
  videos: Video[];
};

function Videos({ videos }: Props) {
  return (
    <div className="border-8 border-black my-4">
      <Head>
        <title>Mateusz Ostafil | Videos</title>
        <meta
          name="description"
          content="A collection of videos that Mateusz Ostafil worked on"
        />
        <meta name="author" content="Mateusz Ostafil" />
      </Head>
      <h1 className="text-6xl font-bold uppercase mt-2 text-center ">Videos</h1>
      <div className="font-mono border-8 border-black m-2 p-2">
        <p className="m-2 text-lg">Here are some of my videos</p>
        <div className="flex flex-wrap gap-2">
          {videos.map((video) => (
            <VideoComponent key={video.title} video={video}></VideoComponent>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const videos: Video[] = [
    {
      title: "Entering an enterprise commerce market",
      src: "https://www.youtube.com/embed/V3smwf80bJw",
      description:
        "Motivational talk recorded for Divante Winter Summit 2020. It's about my story at Divante with Spartacus",
    },
    {
      title: "Jak działa kod? | How does the code work?",
      src: "https://www.youtube.com/embed/3kamCG3id3E",
      description:
        "Short video lecture for kids willing to know how computer code works.",
    },
    {
      title: "Routing in “Spartacus” - openSAP course",
      src: "https://www.youtube.com/embed/1f9-G-VF_ZQ",
      description:
        "Part of my first video course created and recorded for openSAP platform",
    },
    {
      title: "SAP Spartacus Training promotional video",
      src: "https://www.youtube.com/embed/ZWjo0nMKKIw",
      description: "Video promoting my SAP Spartacus training",
    },
    {
      title: "When project manager meets developer",
      src: "https://www.youtube.com/embed/zPHheusbNME",
      description:
        "Recording of my discussion with Robbie Ablett about headless commerce project management",
    },
    {
      title: "CMS in “Spartacus” - openSAP course",
      src: "https://www.youtube.com/embed/CXSvTdxnunk",
      description:
        "Teaser video for an openSAP course that I co-created. I was responsible for the course curriculum and recording of one chapter.",
    },
    {
      title: "Introduction to “Spartacus” - openSAP course",
      src: "https://www.youtube.com/embed/wjHQNgyVzWQ",
      description:
        "Teaser video for another openSAP course that I co-created. Again, I was responsible for course curriculum and recording of some chapters.",
    },
    {
      title: "Kill the mutants @ dev.js summit 2021",
      src: "https://www.youtube.com/embed/QC40DJvXVow",
      description:
        "Recording of my talk about mutation testing at dev.js summit 2021 conference",
    },
    {
      title: "Śniadanie z Programowaniem #74",
      src: "https://www.youtube.com/embed/jw_308mQFLU",
      description:
        "I was a guest at 'Breakfast with Programming' newsroom webinar",
    },
    {
      title: "Webinar: What's new in Spartacus? SAP Spartacus 4.0",
      src: "https://www.youtube.com/embed/hyuWmEcHVbI",
      description: "Recording of a webinar hosted by me",
    },
    {
      title: "SAP Spartacus Quickstart Guide ",
      src: "https://www.youtube.com/embed/dEnIkBqEPuA",
      description:
        "Short video tutorial showing how to install and get started with SAP Spartacus",
    },
    {
      title: "Product page customization in Spartacus 2.0",
      src: "https://www.youtube.com/embed/3xhnYUK9-sc",
      description:
        "Video tutorial showing how to customize product page in SAP Spartacus",
    },
    {
      title: "Intro to the SAP Spartacus Trainings",
      src: "https://www.youtube.com/embed/FmN8ZaF-qtI",
      description: "Another SAP Spartacus promotional video",
    },
    {
      title: "Czym jest wirus komputerowy? | What is a computer virus?",
      src: "https://www.youtube.com/embed/JM_YKHV-Jy0",
      description:
        "Short video lecture for kids willing to know what is a computer virus",
    },
  ];
  return {
    props: {
      videos,
    },
  };
}

export default Videos;

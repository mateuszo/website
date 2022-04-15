import { Video } from "../interfaces/models";

type Props = {
  video: Video;
};
export default function VideoComponent({ video }: Props) {
  return (
    <div className="flex-1 basis-auto md:basis-1/3 border-4 border-black p-3">
      <iframe
        className="w-full"
        width="560"
        height="315"
        src={video.src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h1 className="font-sans text-2xl">{video.title}</h1>
      <p className="mt-2">{video.description}</p>
    </div>
  );
}

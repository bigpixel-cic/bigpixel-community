export default function HeroVideo() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="z-5 absolute top-0">
        <div className="h-screen w-screen flex items-end lg:items-center">
          <div className="w-full max-w-7xl mx-auto p-4 lg:p-6 items-start">
            <div className="w-full lg:w-2/3 flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-9 xl:gap-y-12">
              <h1 className="font-headline font-black text-7xl lg:text-[5.5rem] 2xl:text-[10rem] text-white">
                Look as good as the work you do
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-5xl text-white leading-tight">
                Digital strategy, design, and web development for charities, non-profits &amp;
                social enterprises.
              </p>
            </div>
          </div>
        </div>
      </div>
      <video
        className="absolute inset-0 w-full h-full object-cover object-[75%_50%] lg:object-center z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="https://res.cloudinary.com/dzm5kamkv/video/upload/f_jpg,so_50p/hero-video_s6rawa"
      >
        <source
          src="https://res.cloudinary.com/dzm5kamkv/video/upload/f_auto,q_auto/hero-video_s6rawa"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoTestimonial {
  id: string;
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  achievement: {
    timeframe: string;
    result: string;
  };
  author: {
    name: string;
    role: string;
  };
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "1",
    videoUrl: "https://www.youtube.com/watch?v=4gK-fPib4Ys",
    thumbnailUrl: "https://img.youtube.com/vi/4gK-fPib4Ys/maxresdefault.jpg",
    title: "From Struggling Student to DBA Graduate",
    description: "Discover how expert coaching transformed an overwhelmed student into a confident DBA graduate, overcoming academic challenges and achieving success.",
    achievement: {
      timeframe: "In just 1 MONTH",
      result: "COMPLETED CONCEPT PAPER",
    },
    author: {
      name: "Chadwick Okoye",
      role: "DBA Graduate, Nigeria",
    },
  },
  {
    id: "2",
    videoUrl: "https://www.youtube.com/watch?v=Cmky87elh-8",
    thumbnailUrl: "https://img.youtube.com/vi/Cmky87elh-8/maxresdefault.jpg",
    title: "Breaking Through Dissertation Barriers",
    description: "Watch how personalized mentorship helped break through research roadblocks and complete a challenging dissertation with confidence and clarity.",
    achievement: {
      timeframe: "In just 18 MONTHS",
      result: "COMPLETED DBA",
    },
    author: {
      name: "David Oliogemu",
      role: "DBA Graduate, CIPM Consulting",
    },
  },
  {
    id: "3",
    videoUrl: "https://www.youtube.com/watch?v=mtT5Jj30PZM",
    thumbnailUrl: "https://img.youtube.com/vi/mtT5Jj30PZM/maxresdefault.jpg",
    title: "Career Transformation Through DBA",
    description: "Learn how professional coaching accelerated career growth and opened new opportunities through strategic DBA program completion.",
    achievement: {
      timeframe: "In just 6 months",
      result: "Crossed halfway on Doctorate And Published 2 Research papers",
    },
    author: {
      name: "Atul Baggar",
      role: "DBA Candidate",
    },
  },
  {
    id: "4",
    videoUrl: "https://www.youtube.com/watch?v=xDAb2bOLcho",
    thumbnailUrl: "https://img.youtube.com/vi/xDAb2bOLcho/maxresdefault.jpg",
    title: "From Overwhelmed to Confident",
    description: "See the transformation from feeling lost and overwhelmed to becoming a confident researcher with clear direction and expert guidance.",
    achievement: {
      timeframe: "In just 1 month",
      result: "COMPLETED Research Proposal",
    },
    author: {
      name: "Noushija",
      role: "DBA Candidate",
    },
  },
  {
    id: "5",
    videoUrl: "https://www.youtube.com/watch?v=UXmtUKVtpo0",
    thumbnailUrl: "https://img.youtube.com/vi/UXmtUKVtpo0/maxresdefault.jpg",
    title: "Achieving Work-Life-Study Balance",
    description: "Discover proven strategies for balancing demanding work schedules, family commitments, and DBA studies without sacrificing any area of life.",
    achievement: {
      timeframe: "In just 10 DAYS",
      result: "COMPLETED LITERATURE REVIEW",
    },
    author: {
      name: "Sai Karthika Puttha",
      role: "DBA Engineer",
    },
  },
];

interface VideoTestimonialsProps {
  darkTheme?: boolean;
}

const VideoTestimonialsSection = ({ darkTheme = false }: VideoTestimonialsProps) => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  
  const bgClass = darkTheme ? "bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950" : "bg-white";
  const titleClass = darkTheme ? "text-white" : "text-slate-900";
  const gradientTextClass = darkTheme ? "from-blue-400 to-cyan-300" : "from-blue-600 to-cyan-600";
  const subtitleClass = darkTheme ? "text-slate-300" : "text-slate-600";
  const cardBgClass = darkTheme ? "bg-slate-800/50 border-slate-700" : "bg-white border-slate-200";
  const cardTitleClass = darkTheme ? "text-white" : "text-slate-900";
  const cardTextClass = darkTheme ? "text-slate-300" : "text-slate-600";
  const authorNameClass = darkTheme ? "text-white" : "text-slate-900";
  const authorRoleClass = darkTheme ? "text-slate-400" : "text-slate-500";

  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }
    return url;
  };

  return (
    <section className={`py-4 md:py-12 lg:py-12 ${bgClass}`}>
      <div className={`container-custom px-4 md:px-6 ${darkTheme ? '[&_.card-bg]:bg-slate-800/50 [&_.card-bg]:border-slate-700 [&_.card-title]:text-white [&_.card-text]:text-slate-300 [&_.author-name]:text-white [&_.author-role]:text-slate-400' : '[&_.card-bg]:bg-white [&_.card-bg]:border-slate-200 [&_.card-title]:text-slate-900 [&_.card-text]:text-slate-600 [&_.author-name]:text-slate-900 [&_.author-role]:text-slate-500'}`}>
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 ${titleClass} px-2`}>
            Real Success Stories from{" "}
            <span className={`bg-gradient-to-r ${gradientTextClass} bg-clip-text text-transparent`}>
              Real People
            </span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg max-w-3xl mx-auto px-4">
            Don't just take our word for it. Here's what our graduates say about their transformation.
          </p>
        </motion.div>

        {/* Video Grid - First Row (3 videos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {videoTestimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Video Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Video Player or Thumbnail */}
                {playingVideo === testimonial.id ? (
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src={getEmbedUrl(testimonial.videoUrl)}
                      title={testimonial.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div
                    className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 cursor-pointer overflow-hidden"
                    onClick={() => handleVideoClick(testimonial.id)}
                  >
                    <img
                      src={testimonial.thumbnailUrl}
                      alt={testimonial.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                    />
                    
                    {/* Achievement Overlay */}
                    <div className="absolute top-4 left-4 text-white">
                      <p className="text-sm font-medium opacity-90">
                        {testimonial.achievement.timeframe}
                      </p>
                      <p className="text-lg font-bold leading-tight mt-1">
                        {testimonial.achievement.result.split(" ").map((word, i) => (
                          <span key={i}>
                            {word === "COMPLETED" || word === "MONTH" || word === "MONTHS" || word === "DBA" || word === "DAYS" ? (
                              <span className="text-red-500">{word}</span>
                            ) : (
                              word
                            )}{" "}
                          </span>
                        ))}
                      </p>
                    </div>

                    {/* Play Button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl">
                        <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                      </div>
                    </motion.div>

                    {/* Author Info */}
                    <div className="absolute bottom-4 right-4 text-white text-right">
                      <p className="text-sm font-semibold">{testimonial.author.name}</p>
                      <p className="text-xs opacity-90">{testimonial.author.role}</p>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                    {testimonial.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Grid - Second Row (2 videos centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {videoTestimonials.slice(3, 5).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Video Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Video Player or Thumbnail */}
                {playingVideo === testimonial.id ? (
                  <div className="relative aspect-video bg-black">
                    <iframe
                      src={getEmbedUrl(testimonial.videoUrl)}
                      title={testimonial.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div
                    className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 cursor-pointer overflow-hidden"
                    onClick={() => handleVideoClick(testimonial.id)}
                  >
                    <img
                      src={testimonial.thumbnailUrl}
                      alt={testimonial.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                    />
                    
                    {/* Achievement Overlay */}
                    <div className="absolute top-4 left-4 text-white">
                      <p className="text-sm font-medium opacity-90">
                        {testimonial.achievement.timeframe}
                      </p>
                      <p className="text-lg font-bold leading-tight mt-1">
                        {testimonial.achievement.result.split(" ").map((word, i) => (
                          <span key={i}>
                            {word === "COMPLETED" || word === "month" || word === "Research" || word === "Proposal" || word === "LITERATURE" || word === "REVIEW" || word === "DAYS" ? (
                              <span className="text-red-500">{word}</span>
                            ) : (
                              word
                            )}{" "}
                          </span>
                        ))}
                      </p>
                    </div>

                    {/* Play Button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl">
                        <Play className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" />
                      </div>
                    </motion.div>

                    {/* Author Info */}
                    <div className="absolute bottom-4 right-4 text-white text-right">
                      <p className="text-sm font-semibold">{testimonial.author.name}</p>
                      <p className="text-xs opacity-90">{testimonial.author.role}</p>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                    {testimonial.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;

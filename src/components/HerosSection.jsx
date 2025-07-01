// components/HeroSection.jsx
import React from "react";
import {
  Star,
  BookOpen,
  Users,
  GraduationCap,
  Award,
  DollarSign,
  Lightbulb,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import studentImage from "../assets/image.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-purple-500 min-h-screen px-[4rem]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%),
                               radial-gradient(circle at 40% 40%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="container-padding relative z-10 pt-8">
        {/* Top Hero Content (Flex instead of Grid) */}
        <div className="flex flex-col lg:flex-row gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 animate-slide-in-left text-white">
            <p className="text-white/90 mb-4 text-lg">Your Online Learning Partner</p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Learn, Grow, and <br /> Achieve with <br />
              <span className="text-yellow-300">Expert Guidance</span>
            </h1>
            <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-lg">
              Access high-quality courses anytime, anywhere, and take control of your learning journey with ease.
            </p>

            <Button
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-4 rounded-xl mb-12"
            >
              Get Started Now
            </Button>

            {/* Student Review Box */}
            <div className=" flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-sm">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-sm">👨🏻</div>
                <div className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-sm">👩🏽</div>
                <div className="w-10 h-10 bg-teal-700 text-white font-bold rounded-full border-2 border-white flex items-center justify-center text-sm">+</div>
              </div>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  <span className="text-2xl font-bold text-white">4.8</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-white/80 text-sm">Student Review</p>
                <p className="text-white/60 text-xs">Based on more than 10,000 feedbacks</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 animate-slide-in-right relative">
            <img src={studentImage} alt="Happy student" className="w-[102rem] absolute top-[-20rem]" />

            {/* Floating Stats */}
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-bounce">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Total Courses</p>
                  <p className="text-lg font-bold text-gray-900">1200+</p>
                </div>
              </div>
            </div>

            <div className="absolute top-32 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-pulse">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Total Instructors</p>
                  <p className="text-lg font-bold text-gray-900">400+</p>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-32 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Total Students</p>
                  <p className="text-lg font-bold text-gray-900">20,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mt-16 mb-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-6 h-6 text-gray-600" />,
                title: "Best Mentors",
                desc: "Our top mentors bring valuable knowledge and experience to guide you on your journey.",
              },
              {
                icon: <DollarSign className="w-6 h-6 text-white" />,
                title: "Best Price",
                desc: "We offer competitive pricing on all our courses, ensuring you receive the best value for money.",
                gradient: true,
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-gray-600" />,
                title: "Easy to Learn",
                desc: "With user-friendly navigation and engaging materials, you can dive into your studies hassle-free.",
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-gray-600" />,
                title: "1 to 1 Discussion",
                desc: "Our 1-to-1 mentoring connects you with dedicated professionals for your success.",
              },
            ].map(({ icon, title, desc, gradient }, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl ${
                  gradient ? "bg-gradient-to-br from-green-400 to-green-600 text-white" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 ${
                    gradient ? "bg-white/20" : "bg-gray-100"
                  } rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  {icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className={`text-sm ${gradient ? "text-white/90" : "text-gray-600"}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

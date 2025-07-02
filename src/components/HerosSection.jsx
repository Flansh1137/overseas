import React from "react";
import { Star, BookOpen, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import studentImage from "../assets/image.png";
import AbroadStudyFeatures from "./AbroadStudy";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#9B59B6] min-h-screen px-20">
      {/* Reduced padding from px-[8rem] (~128px) to px-20 (80px) */}
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

      <div className="container-padding relative z-10 pt-6">
        {" "}
        {/* Reduced pt-8 to pt-6 */}
        {/* Top Hero Content (Flex instead of Grid) */}
        <div className="flex flex-col lg:flex-row gap-12 items-center min-h-[calc(100vh-180px)]">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 animate-slide-in-left text-white">
            <p className="text-white/90 mb-3 text-base">
              Your Online Learning Partner
            </p>{" "}
            {/* reduced text-lg to text-base, mb-4 to mb-3 */}
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">
              {" "}
              {/* reduced from 5xl/6xl to 4xl/5xl */}A Leading And Trusted
              Education Consultancy
            </h1>
            <p className="text-white/90 text-base mb-6 leading-relaxed max-w-lg">
              {" "}
              {/* text-lg to base, mb-8 to mb-6 */}
              Access high-quality courses anytime, anywhere, and take control of
              your learning journey with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                className="hover:bg-white bg-purple-900 hover:text-purple-500 text-white font-semibold text-lg px-6 py-3 rounded-xl transition-colors duration-300"
              >
                Get Started Now
              </Button>

              <Button
                size="lg"
                className="bg-white hover:bg-purple-900 text-purple-500 hover:text-white font-semibold text-lg px-6 py-3 rounded-xl transition-colors duration-300"
              >
                Book Appointment
              </Button>
            </div>
            {/* Student Review Box */}
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 max-w-sm">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-sm">
                  👨🏻
                </div>
                <div className="w-9 h-9 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-sm">
                  👩🏽
                </div>
                <div className="w-9 h-9 bg-teal-700 text-white font-bold rounded-full border-2 border-white flex items-center justify-center text-sm">
                  +
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1 mb-1">
                  <span className="text-xl font-bold text-white">4.8</span>{" "}
                  {/* reduced from 2xl */}
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-white/80 text-xs">Student Review</p>
                <p className="text-white/60 text-xs">
                  Based on more than 10,000 feedbacks
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 animate-slide-in-right relative">
            <img
              src={studentImage}
              alt="Happy student"
              className="w-[90rem] absolute top-[-16rem]"
            />{" "}
            {/* Reduced width from 102rem to 90rem */}
            {/* Floating Stats */}
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce">
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-teal-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Total Courses</p>
                  <p className="text-lg font-bold text-gray-900">1200+</p>
                </div>
              </div>
            </div>
            <div className="absolute top-32 left-8 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-pulse">
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Total Instructors</p>
                  <p className="text-lg font-bold text-gray-900">400+</p>
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-32 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Total Students</p>
                  <p className="text-lg font-bold text-gray-900">20,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AbroadStudyFeatures />
      </div>
    </section>
  );
};

export default HeroSection;

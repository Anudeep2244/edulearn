import React from 'react';
import { BookOpen, Video, Download, Users, Award, BookCheck } from 'lucide-react';

function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-32 mt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="Students studying"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-pink-200">
              Bringing Education to Rural India
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              Learn from anywhere with our virtual classrooms and digital resources.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600">Video Courses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">1000+</div>
              <div className="text-gray-600">Digital Books</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Teachers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed in your education journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="text-pink-500 mb-4">
                <BookOpen className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Books & Study Materials</h3>
              <p className="text-gray-600">Access a vast library of digital books and study materials, both free and premium.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="text-purple-500 mb-4">
                <Video className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live & Pre-recorded Classes</h3>
              <p className="text-gray-600">Interactive live sessions and comprehensive pre-recorded lessons.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <div className="text-indigo-500 mb-4">
                <Download className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Offline Access</h3>
              <p className="text-gray-600">Download content for offline learning when internet connectivity is limited.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to start your learning journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">1</div>
              <h3 className="text-2xl font-semibold mb-4">Sign Up</h3>
              <p className="text-gray-600">Create your account and complete your profile</p>
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-10 left-[60%] w-full h-2 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </div>
            
            <div className="relative text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">2</div>
              <h3 className="text-2xl font-semibold mb-4">Join Classes</h3>
              <p className="text-gray-600">Browse and enroll in your preferred courses</p>
              {/* Connector line for desktop */}
              <div className="hidden md:block absolute top-10 left-[60%] w-full h-2 bg-gradient-to-r from-indigo-500 to-transparent"></div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg">3</div>
              <h3 className="text-2xl font-semibold mb-4">Track Progress</h3>
              <p className="text-gray-600">Monitor your learning journey and achievements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real stories from our community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                  alt="Student"
                  className="w-16 h-16 rounded-full border-4 border-pink-100"
                />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Priya Sharma</h4>
                  <p className="text-indigo-600">Class 10 Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The platform has made quality education accessible to me in my village. The offline access feature is a game-changer!"</p>
              <div className="mt-4 flex text-yellow-400">
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                  alt="Student"
                  className="w-16 h-16 rounded-full border-4 border-purple-100"
                />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Rahul Patel</h4>
                  <p className="text-indigo-600">Class 12 Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The live classes are interactive and engaging. Teachers are very supportive and clear all our doubts promptly."</p>
              <div className="mt-4 flex text-yellow-400">
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
                  alt="Student"
                  className="w-16 h-16 rounded-full border-4 border-indigo-100"
                />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Anjali Singh</h4>
                  <p className="text-indigo-600">College Student</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"The study materials are comprehensive and well-structured. It has helped me prepare better for my exams."</p>
              <div className="mt-4 flex text-yellow-400">
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
                <Award className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600">Trusted by leading organizations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="h-12 flex items-center justify-center">
                <BookCheck className="w-12 h-12 text-indigo-600" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="h-12 flex items-center justify-center">
                <Users className="w-12 h-12 text-purple-600" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="h-12 flex items-center justify-center">
                <Award className="w-12 h-12 text-pink-600" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="h-12 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import { EnrollmentForm } from './components/EnrollmentForm';
import { AIChatAssistant } from './components/AIChatAssistant';
import { TESTIMONIALS, COURSES } from './constants';

const Home = () => (
  <div className="space-y-24 pb-20">
    {/* Hero Section */}
    <section className="relative overflow-hidden bg-white pt-16 lg:pt-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 rounded-full text-sm font-bold tracking-wide mb-6 uppercase">
            Globally Trusted Education
          </span>
          <h1 className="text-5xl lg:text-7xl font-display text-slate-900 leading-tight mb-6">
            Unlock Your Child's <span className="text-amber-500 underline decoration-amber-200">Genius</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            World-class Vedic Maths and Communication courses designed for kids aged 6-15. Empowering NRI and international students with skills that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
            <Link to="/enroll" className="px-8 py-4 bg-amber-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-amber-200 transform transition-transform hover:-translate-y-1">
              Start Free Trial
            </Link>
            <Link to="/specialisations" className="px-8 py-4 bg-slate-50 text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-colors">
              Explore Courses
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6 grayscale opacity-60">
            
          </div>
        </div>
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
            <img src="https://picsum.photos/id/1/800/600" alt="Student Learning" className="w-full object-cover" />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50 animate-bounce">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-xs font-bold text-slate-500">Top Rated</p>
                  <p className="text-sm font-bold text-slate-900">#1 Mental Math Platform</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>

    {/* Core Values Section */}
    <section className="bg-slate-50 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
          <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">🧠</div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">Mental Speed</h3>
          <p className="text-slate-600 text-sm">Calculate 10x faster than traditional methods using Vedic secrets.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
          <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">💎</div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">Confidence First</h3>
          <p className="text-slate-600 text-sm">Overcome maths anxiety and stage fear with professional guidance.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">🌍</div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">Global Standards</h3>
          <p className="text-slate-600 text-sm">Curriculum mapped to global boards (IB, Cambridge, ICSE, CBSE).</p>
        </div>
      </div>
    </section>

    {/* Courses Preview */}
    <section id="specialisations" className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display text-slate-900 mb-4">Our Specializations</h2>
        <p className="text-slate-500 max-w-2xl mx-auto italic">Culturally rich, internationally compliant learning modules.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {COURSES.map((course) => (
          <div key={course.id} className="group bg-white rounded-3xl p-6 shadow-sm border border-slate-100 transition-all hover:shadow-xl hover:border-amber-200">
            <div className="text-4xl mb-6 transform transition-transform group-hover:scale-125 group-hover:rotate-12">{course.icon}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{course.title}</h3>
            <p className="text-xs font-bold text-amber-500 mb-4 uppercase tracking-tighter">Age: {course.ageGroup}</p>
            <p className="text-slate-600 text-sm mb-6 line-clamp-2">{course.description}</p>
            <ul className="space-y-2 mb-8">
              {course.features.map((f, i) => (
                <li key={i} className="text-xs text-slate-500 flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/enroll" className="w-full block text-center py-3 bg-slate-900 text-white rounded-xl text-sm font-bold group-hover:bg-amber-500 transition-colors">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonials - Success Stories */}
    <section id="success-stories" className="bg-amber-500 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-white mb-4">Success Stories</h2>
          <p className="text-amber-100">Trusted by hundreds of parents in London, Dubai, NYC, and Singapore.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center space-x-4 mb-6">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-amber-500 shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500">{t.role} • {t.location}</p>
                </div>
              </div>
              <div className="flex mb-4 text-amber-400">
                {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-slate-600 leading-relaxed italic">"{t.content}"</p>
              <div className="absolute -bottom-4 -right-4 text-slate-50 opacity-10 text-8xl font-serif">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Enroll CTA */}
    <section id="enroll" className="container mx-auto px-6">
      <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-display text-white mb-6">Give Your Child The <span className="text-amber-500">Dexa Edge</span></h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Join our community of over-achievers. Our special batch for students in USA/Europe starts next week. Reserve your spot today!
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                <div>
                  <h4 className="font-bold text-white">Live Interactive Sessions</h4>
                  <p className="text-sm text-slate-500">Not recorded videos. Real teachers, real interaction.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                <div>
                  <h4 className="font-bold text-white">Custom Progress Reports</h4>
                  <p className="text-sm text-slate-500">Track your child's improvement with monthly analytical reviews.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <EnrollmentForm />
          </div>
        </div>
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      </div>
    </section>
  </div>
);

const Specialisations = () => (
  <div className="space-y-20 pb-20">
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl lg:text-6xl font-display text-white mb-6">Our Specializations</h1>
        <p className="text-xl text-amber-50 max-w-2xl mx-auto">Discover our comprehensive range of courses designed for modern learners.</p>
      </div>
    </div>

    <section className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {COURSES.map((course) => (
          <div key={course.id} className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-2 hover:border-amber-300">
            <div className="text-6xl mb-6 transform transition-transform group-hover:scale-150 group-hover:rotate-12">{course.icon}</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{course.title}</h3>
            <p className="text-sm font-bold text-amber-600 mb-4 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full inline-block">Age: {course.ageGroup}</p>
            <p className="text-slate-600 mb-6 leading-relaxed">{course.description}</p>
            <div className="mb-8 space-y-3">
              {course.features.map((f, i) => (
                <li key={i} className="text-sm text-slate-600 flex items-start space-x-3">
                  <span className="text-green-500 text-lg leading-none">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </div>
            <Link to="/enroll" className="w-full block text-center py-3 bg-amber-500 text-white rounded-xl font-bold group-hover:bg-amber-600 transition-colors">
              Enroll Now
            </Link>
          </div>
        ))}
      </div>
    </section>

    <section className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-12">
      <div>
        <img src="https://picsum.photos/id/200/600/500" alt="Interactive Learning" className="rounded-3xl shadow-xl" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Choose Our Courses?</h2>
        <ul className="space-y-6">
          <li className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">🎯</div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Expert Instructors</h4>
              <p className="text-slate-600">Certified teachers with 10+ years of experience in global education.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">🌐</div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Globally Recognized</h4>
              <p className="text-slate-600">Curriculum aligned with international standards and exam boards.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">📊</div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Proven Results</h4>
              <p className="text-slate-600">95% of our students show measurable improvement in 3 months.</p>
            </div>
          </li>
          <li className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0 mt-1">⏰</div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Flexible Scheduling</h4>
              <p className="text-slate-600">Live classes and recorded sessions available 24/7 for your convenience.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

const SuccessStories = () => (
  <div className="space-y-20 pb-20">
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl lg:text-6xl font-display text-white mb-6">Success Stories</h1>
        <p className="text-xl text-amber-50 max-w-2xl mx-auto">Real transformations from students across the globe.</p>
      </div>
    </div>

    <section className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-2">
            <div className="flex items-center space-x-4 mb-6">
              <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full border-3 border-amber-500 shadow-md" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                <p className="text-sm text-slate-600">{t.role}</p>
                <p className="text-xs text-amber-600 font-semibold">{t.location}</p>
              </div>
            </div>
            <div className="flex mb-4 text-amber-400 text-xl">
              {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
            </div>
            <p className="text-slate-700 leading-relaxed italic font-medium mb-4">"{t.content}"</p>
            <div className="border-t border-slate-100 pt-4">
              <p className="text-xs text-slate-500">⭐ Highly Recommended</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Join 2000+ Happy Learners</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">Our students have improved their scores, built confidence, and discovered a love for learning.</p>
        <Link to="/enroll" className="inline-block px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold shadow-lg shadow-amber-200 transition-all transform hover:scale-105">
          Start Your Free Trial
        </Link>
      </div>
    </section>
  </div>
);

const About = () => (
  <div className="space-y-20 pb-20">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl lg:text-6xl font-display text-white mb-6">About Dexa Academy</h1>
        <p className="text-xl text-amber-50 max-w-2xl mx-auto">Bridging ancient wisdom with modern education for global learners.</p>
      </div>
    </div>

    {/* Mission & Vision */}
    <section className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">OUR MISSION</div>
          <h2 className="text-4xl font-bold text-slate-900">Empowering Young Minds Globally</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            At Dexa Academy, we believe that every child has unlimited potential waiting to be unleashed. Our mission is to revolutionize how children learn by combining the timeless wisdom of Vedic Mathematics with cutting-edge teaching methodologies and powerful communication training.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't just teach maths – we transform how young minds approach problem-solving, boost confidence, and prepare them to excel globally.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="px-6 py-3 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-sm text-slate-600">2000+</p>
              <p className="font-bold text-slate-900">Happy Students</p>
            </div>
            <div className="px-6 py-3 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-sm text-slate-600">15+</p>
              <p className="font-bold text-slate-900">Countries</p>
            </div>
            <div className="px-6 py-3 bg-slate-50 rounded-xl border border-slate-200">
              <p className="text-sm text-slate-600">95%</p>
              <p className="font-bold text-slate-900">Success Rate</p>
            </div>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://picsum.photos/id/102/800/600" alt="Our Mission" className="w-full object-cover" />
        </div>
      </div>

      {/* Why Vedic Maths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 flex-row-reverse">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src="https://picsum.photos/id/103/800/600" alt="Vedic Maths" className="w-full object-cover" />
        </div>
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">VEDIC MATHEMATICS</div>
          <h2 className="text-4xl font-bold text-slate-900">Ancient Wisdom, Modern Results</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Vedic Mathematics is a system of calculation techniques discovered in ancient Indian scriptures. It's not just about speed – it's about developing a profound understanding of how numbers work.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-4">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 font-bold text-sm">1</span>
              <div>
                <h4 className="font-bold text-slate-900">10x Faster Calculations</h4>
                <p className="text-slate-600">Solve complex problems in seconds using elegant shortcuts.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 font-bold text-sm">2</span>
              <div>
                <h4 className="font-bold text-slate-900">Boosts Confidence</h4>
                <p className="text-slate-600">Master maths anxiety and become the math expert in your class.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 font-bold text-sm">3</span>
              <div>
                <h4 className="font-bold text-slate-900">Competitive Edge</h4>
                <p className="text-slate-600">Excel in SAT, GMAT, JEE, and other competitive exams.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0 font-bold text-sm">4</span>
              <div>
                <h4 className="font-bold text-slate-900">Cultural Connection</h4>
                <p className="text-slate-600">Connect with Indian heritage while thriving globally.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Teaching Philosophy */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white mb-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Teaching Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center text-2xl">👨‍🎓</div>
            <h3 className="text-xl font-bold">Student-Centric</h3>
            <p className="text-slate-300">Every lesson is personalized to each child's learning pace and style.</p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center text-2xl">🎯</div>
            <h3 className="text-xl font-bold">Results-Driven</h3>
            <p className="text-slate-300">We focus on measurable outcomes and continuous improvement.</p>
          </div>
          <div className="space-y-4">
            <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center text-2xl">🌱</div>
            <h3 className="text-xl font-bold">Holistic Growth</h3>
            <p className="text-slate-300">Beyond academics – we build confidence, communication, and critical thinking.</p>
          </div>
        </div>
      </div>

      {/* Global Presence */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Teaching Worldwide</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">We operate across multiple continents, bringing world-class education to students wherever they are.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {['🇬🇧 United Kingdom', '🇺🇸 United States', '🇮🇳 India', '🇸🇬 Singapore', '🇦🇪 UAE', '🇨🇦 Canada'].map((location) => (
            <div key={location} className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 font-bold text-slate-700">
              {location}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-amber-500 rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Child's Learning?</h2>
        <p className="text-amber-50 mb-8 max-w-xl mx-auto">Join hundreds of families who have already discovered the Dexa difference.</p>
        <Link to="/enroll" className="inline-block px-8 py-4 bg-white text-amber-600 rounded-2xl font-bold shadow-lg hover:bg-slate-50 transition-colors">
          Start Free Trial Today
        </Link>
      </div>
    </section>
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/enroll" element={<div className="container mx-auto px-6 py-20 max-w-4xl"><EnrollmentForm /></div>} />
          <Route path="/specialisations" element={<Specialisations />} />
          <Route path="/success-stories" element={<SuccessStories />} />
        </Routes>
        <AIChatAssistant />
      </Layout>
    </HashRouter>
  );
};

export default App;
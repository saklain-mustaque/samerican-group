import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, DollarSign, Briefcase, Clock, Calendar, Star, Share2, Heart } from 'lucide-react';

export default function JobModal({ job, isOpen, onClose }) {
  if (!job) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleApply = () => {
    // In a real application, this would redirect to an application form
    alert(`Applying for ${job.title} at ${job.company}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">{job.title}</h2>
                    {job.featured && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star size={12} className="fill-current" />
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">{job.company}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                      {job.remote && <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs ml-2">Remote</span>}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={16} />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{job.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>Posted {formatDate(job.postedDate)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-full transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-gray-100 rounded-full transition-colors">
                    <Share2 size={20} />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Job Description */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h4>
                    <p className="text-gray-600 leading-relaxed">{job.description}</p>
                  </div>

                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Apply Button */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <button
                      onClick={handleApply}
                      className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors mb-3"
                    >
                      Apply Now
                    </button>
                    <button className="w-full border border-red-600 text-red-600 py-3 px-6 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                      Save Job
                    </button>
                  </div>

                  {/* Job Summary */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Job Summary</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Industry:</span>
                        <span className="font-medium text-gray-900">{job.industry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Job Type:</span>
                        <span className="font-medium text-gray-900">{job.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Experience:</span>
                        <span className="font-medium text-gray-900">{job.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Salary:</span>
                        <span className="font-medium text-gray-900">{job.salary}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium text-gray-900">{job.location}</span>
                      </div>
                      {job.remote && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Remote:</span>
                          <span className="font-medium text-green-600">Available</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">About {job.company}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {job.company} is a leading company in the {job.industry.toLowerCase()} industry, 
                      committed to innovation and excellence in delivering high-quality solutions to our clients.
                    </p>
                    <button className="mt-3 text-red-600 hover:text-red-800 font-medium text-sm">
                      View Company Profile →
                    </button>
                  </div>

                  {/* Share */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Share this Job</h4>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                        LinkedIn
                      </button>
                      <button className="flex-1 bg-blue-400 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-500 transition-colors">
                        Twitter
                      </button>
                      <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                        Copy Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

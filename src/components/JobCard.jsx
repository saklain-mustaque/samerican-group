import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Briefcase, Calendar, Star } from 'lucide-react';

export default function JobCard({ job, onViewDetails }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-red-300 relative"
    >
      {job.featured && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <Star size={12} className="fill-current" />
          Featured
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-red-600 transition-colors cursor-pointer" 
              onClick={() => onViewDetails(job)}>
            {job.title}
          </h3>
          <p className="text-gray-600 font-medium mb-1">{job.company}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{job.location}</span>
              {job.remote && <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs ml-2">Remote</span>}
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{formatDate(job.postedDate)}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <div className="flex items-center gap-4 mb-4 text-sm">
        <div className="flex items-center gap-1 text-gray-600">
          <DollarSign size={14} />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Briefcase size={14} />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <Clock size={14} />
          <span>{job.experience}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
          {job.industry}
        </span>
        <div className="flex gap-2">
          {/* <button
            onClick={() => onViewDetails(job)}
            className="text-red-600 hover:text-red-800 font-semibold text-sm border border-red-600 hover:border-red-800 px-4 py-2 rounded-lg transition-colors"
          >
            View Details
          </button> */}
          <button className="bg-red-600 text-white hover:bg-red-700 font-semibold text-sm px-4 py-2 rounded-lg transition-colors">
            Quick Apply
          </button>
        </div>
      </div>
    </motion.div>
  );
}

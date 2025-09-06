import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, DollarSign, Briefcase, Clock, ArrowRight, Star } from 'lucide-react';
import { jobsData } from '../data/jobs';

export default function FeaturedJobs() {
  // Get featured jobs (first 6 featured jobs)
  const featuredJobs = jobsData.filter(job => job.featured).slice(0, 6);

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-red-600">Job Opportunities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover handpicked job opportunities from top companies. Find your perfect match today.
          </p>
        </motion.div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 hover:border-red-300 relative group"
            >
              {/* Featured Badge */}
              <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Star size={12} className="fill-current" />
                Featured
              </div>
              
              {/* Job Content */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {job.title}
                </h3>
                <p className="text-gray-600 font-medium mb-3">{job.company}</p>
                
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                    {job.remote && (
                      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs">
                        Remote
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={14} />
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{formatDate(job.postedDate)}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {job.description}
                </p>
              </div>

              {/* Industry Tag */}
              <div className="flex items-center justify-between">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                  {job.industry}
                </span>
                <Link
                  to="/jobs"
                  className="text-red-600 hover:text-red-800 font-semibold text-sm flex items-center gap-1 group/link"
                >
                  View Details
                  <ArrowRight 
                    size={14} 
                    className="group-hover/link:translate-x-1 transition-transform" 
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors group"
          >
            View All Jobs
            <ArrowRight 
              size={20} 
              className="group-hover:translate-x-1 transition-transform" 
            />
          </Link>
          <p className="text-gray-600 mt-4">
            Explore over 500+ job opportunities from top companies
          </p>
        </motion.div>
      </div>
    </section>
  );
}

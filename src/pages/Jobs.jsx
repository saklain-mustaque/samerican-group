import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import JobSearch from '../components/JobSearch';
import JobCard from '../components/JobCard';
import JobModal from '../components/JobModal';
import { jobsData } from '../data/jobs';
import { ChevronLeft, ChevronRight, Briefcase, TrendingUp, Users, Clock } from 'lucide-react';

export default function Jobs() {
  const [jobs, setJobs] = useState(jobsData);
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('date');
  const [filters, setFilters] = useState({
    industries: [],
    jobTypes: [],
    experienceLevels: [],
    remote: []
  });

  const jobsPerPage = 6;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  const heroProps = {
    title: "Find Your Dream Job Here",
    subtitle: "Discover thousands of job opportunities from top companies. Search by location, industry, and experience level to find the perfect match for your career.",
    backgroundImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
    showSearch: false,
    height: "h-96"
  };

  useEffect(() => {
    let filtered = [...jobs];

    // Apply filters
    if (filters.industries.length > 0) {
      filtered = filtered.filter(job => filters.industries.includes(job.industry));
    }
    if (filters.jobTypes.length > 0) {
      filtered = filtered.filter(job => filters.jobTypes.includes(job.type));
    }
    if (filters.experienceLevels.length > 0) {
      filtered = filtered.filter(job => filters.experienceLevels.includes(job.experience));
    }
    if (filters.remote.includes('remote')) {
      filtered = filtered.filter(job => job.remote);
    }

    // Apply sorting
    switch (sortBy) {
      case 'date':
        filtered.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
        break;
      case 'salary':
        filtered.sort((a, b) => {
          const salaryA = parseInt(a.salary.replace(/[^0-9]/g, ''));
          const salaryB = parseInt(b.salary.replace(/[^0-9]/g, ''));
          return salaryB - salaryA;
        });
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }

    setFilteredJobs(filtered);
    setCurrentPage(1);
  }, [filters, sortBy, jobs]);

  const handleSearch = ({ searchTerm, location }) => {
    let filtered = [...jobs];
    
    if (searchTerm) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (location) {
      filtered = filtered.filter(job => 
        job.location.toLowerCase().includes(location.toLowerCase()) ||
        (location.toLowerCase().includes('remote') && job.remote)
      );
    }

    setFilteredJobs(filtered);
    setCurrentPage(1);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: Array.isArray(value) ? value : [value]
    }));
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { icon: <Briefcase className="w-8 h-8" />, value: "500+", label: "Active Jobs" },
    { icon: <Users className="w-8 h-8" />, value: "50+", label: "Top Companies" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "95%", label: "Success Rate" },
    { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero {...heroProps} />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-red-600 flex justify-center mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Search and Filters */}
        <JobSearch 
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          filters={filters}
        />

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredJobs.length} Jobs Found
            </h2>
            <p className="text-gray-600">
              Showing {startIndex + 1} - {Math.min(endIndex, filteredJobs.length)} of {filteredJobs.length} results
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-sm">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              <option value="date">Most Recent</option>
              <option value="salary">Salary (High to Low)</option>
              <option value="title">Job Title</option>
            </select>
          </div>
        </div>

        {/* Job Cards Grid */}
        {filteredJobs.length > 0 ? (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
            >
              {currentJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <JobCard job={job} onViewDetails={handleViewDetails} />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-red-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <button 
              onClick={() => {
                setFilters({ industries: [], jobTypes: [], experienceLevels: [], remote: [] });
                setFilteredJobs(jobs);
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Job Details Modal */}
      <JobModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedJob(null);
        }}
      />
    </div>
  );
}

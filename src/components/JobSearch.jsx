import { useState } from 'react';
import { Search, MapPin, Filter, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function JobSearch({ onSearch, onFilterChange, filters }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, location });
  };

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  const clearFilter = (filterType, value = null) => {
    if (value) {
      const newValues = filters[filterType].filter(item => item !== value);
      onFilterChange(filterType, newValues);
    } else {
      onFilterChange(filterType, []);
    }
  };

  const activeFiltersCount = Object.values(filters).reduce((count, filter) => count + filter.length, 0);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="City, state, or remote"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center gap-2"
          >
            <Search size={20} />
            Find Jobs
          </button>
        </div>
      </form>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <Filter size={20} />
          <span>Filters</span>
          {activeFiltersCount > 0 && (
            <span className="bg-red-600 text-white text-xs rounded-full px-2 py-0.5 ml-1">
              {activeFiltersCount}
            </span>
          )}
        </button>
        
        {activeFiltersCount > 0 && (
          <button
            onClick={() => {
              onFilterChange('industries', []);
              onFilterChange('jobTypes', []);
              onFilterChange('experienceLevels', []);
              onFilterChange('remote', []);
            }}
            className="text-red-600 hover:text-red-800 text-sm font-medium"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.industries.map(industry => (
            <span key={industry} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              {industry}
              <button onClick={() => clearFilter('industries', industry)} className="hover:text-blue-900">
                <X size={14} />
              </button>
            </span>
          ))}
          {filters.jobTypes.map(type => (
            <span key={type} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              {type}
              <button onClick={() => clearFilter('jobTypes', type)} className="hover:text-green-900">
                <X size={14} />
              </button>
            </span>
          ))}
          {filters.experienceLevels.map(level => (
            <span key={level} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              {level}
              <button onClick={() => clearFilter('experienceLevels', level)} className="hover:text-purple-900">
                <X size={14} />
              </button>
            </span>
          ))}
          {filters.remote.includes('remote') && (
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm flex items-center gap-2">
              Remote Only
              <button onClick={() => clearFilter('remote', 'remote')} className="hover:text-yellow-900">
                <X size={14} />
              </button>
            </span>
          )}
        </div>
      )}

      {/* Filter Options */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Industry Filter */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Industry</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {['Information Technology', 'Healthcare', 'Sales & Marketing', 'Accounting And Finance', 'Human Resources', 'Construction', 'Creative & Digital Marketing', 'Engineering'].map(industry => (
                <label key={industry} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.industries.includes(industry)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleFilterChange('industries', [...filters.industries, industry]);
                      } else {
                        clearFilter('industries', industry);
                      }
                    }}
                    className="mr-2 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-600">{industry}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Job Type Filter */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Job Type</h4>
            <div className="space-y-2">
              {['Full-time', 'Part-time', 'Contract', 'Temporary'].map(type => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.jobTypes.includes(type)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleFilterChange('jobTypes', [...filters.jobTypes, type]);
                      } else {
                        clearFilter('jobTypes', type);
                      }
                    }}
                    className="mr-2 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-600">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience Level Filter */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Experience</h4>
            <div className="space-y-2">
              {['Entry Level', '1-2 years', '2-4 years', '3-5 years', '5-8 years', '8+ years'].map(level => (
                <label key={level} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.experienceLevels.includes(level)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleFilterChange('experienceLevels', [...filters.experienceLevels, level]);
                      } else {
                        clearFilter('experienceLevels', level);
                      }
                    }}
                    className="mr-2 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-600">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Remote Work Filter */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Work Type</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.remote.includes('remote')}
                  onChange={(e) => {
                    if (e.target.checked) {
                      handleFilterChange('remote', ['remote']);
                    } else {
                      clearFilter('remote', 'remote');
                    }
                  }}
                  className="mr-2 text-red-600 focus:ring-red-500"
                />
                <span className="text-sm text-gray-600">Remote Only</span>
              </label>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

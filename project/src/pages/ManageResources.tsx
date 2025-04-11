import React, { useState } from 'react';
import { 
  BookOpen,
  Upload,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Download,
  FileText,
  Lock,
  Eye,
  Star,
  BarChart
} from 'lucide-react';

function ManageResources() {
  const [selectedResource, setSelectedResource] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Advanced Physics Notes',
      type: 'Document',
      subject: 'Physics',
      downloads: 245,
      views: 1200,
      rating: 4.8,
      status: 'published',
      access: 'premium',
      lastUpdated: '2024-03-10'
    },
    {
      id: 2,
      title: 'Chemistry Lab Manual',
      type: 'PDF',
      subject: 'Chemistry',
      downloads: 189,
      views: 890,
      rating: 4.5,
      status: 'published',
      access: 'free',
      lastUpdated: '2024-03-08'
    },
    // Add more resources as needed
  ];

  return (
    <main className="flex-grow pt-20 pb-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Resources</h1>
            <p className="text-gray-600">Upload and organize educational materials</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Resource
          </button>
        </div>

        {/* Upload Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Upload</h2>
            <p className="text-gray-600">Drag and drop your files or click to browse</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-sm text-gray-600 mb-4">
                Support for PDF, DOCX, PPTX, and video files up to 500MB
              </p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                Choose Files
              </button>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Types</option>
              <option value="document">Documents</option>
              <option value="video">Videos</option>
              <option value="quiz">Quizzes</option>
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-100 p-3 rounded-xl">
                      <BookOpen className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                      <p className="text-sm text-gray-600">{resource.subject}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Trash2 className="w-5 h-5 text-red-600" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Download className="w-4 h-4 mr-2" />
                    {resource.downloads} Downloads
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Eye className="w-4 h-4 mr-2" />
                    {resource.views} Views
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    {resource.rating} Rating
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Lock className="w-4 h-4 mr-2" />
                    {resource.access.charAt(0).toUpperCase() + resource.access.slice(1)}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    resource.status === 'published' 
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {resource.status.charAt(0).toUpperCase() + resource.status.slice(1)}
                  </span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Resource Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-medium mb-2">Total Resources</h3>
              <p className="text-3xl font-bold">45</p>
              <p className="text-sm opacity-80 mt-1">Across all subjects</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-medium mb-2">Total Downloads</h3>
              <p className="text-3xl font-bold">2.5k</p>
              <p className="text-sm opacity-80 mt-1">Last 30 days</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-medium mb-2">Average Rating</h3>
              <p className="text-3xl font-bold">4.8</p>
              <p className="text-sm opacity-80 mt-1">From 500+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ManageResources;
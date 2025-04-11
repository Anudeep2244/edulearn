import React, { useState } from 'react';
import { 
  Video,
  Users,
  Clock,
  Calendar,
  Search,
  Plus,
  Edit,
  Trash2,
  MoreVertical,
  FileText,
  CheckCircle,
  XCircle,
  Filter
} from 'lucide-react';

function ManageClasses() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const classes = [
    {
      id: 1,
      name: 'Advanced Physics',
      subject: 'Physics',
      schedule: 'Mon, Wed, Fri - 2:00 PM',
      students: 45,
      status: 'active',
      nextClass: '2024-03-15T14:00:00',
      completion: 75,
      assignments: 12,
      averageScore: 85
    },
    {
      id: 2,
      name: 'Organic Chemistry',
      subject: 'Chemistry',
      schedule: 'Tue, Thu - 3:30 PM',
      students: 38,
      status: 'active',
      nextClass: '2024-03-14T15:30:00',
      completion: 60,
      assignments: 8,
      averageScore: 78
    },
    // Add more classes as needed
  ];

  return (
    <main className="flex-grow pt-20 pb-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Classes</h1>
            <p className="text-gray-600">Organize and monitor your virtual classrooms</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Class
          </button>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search classes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {classes.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-indigo-100 p-3 rounded-xl">
                      <Video className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{classItem.name}</h3>
                      <p className="text-sm text-gray-600">{classItem.subject}</p>
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
                    <Users className="w-4 h-4 mr-2" />
                    {classItem.students} Students
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {classItem.schedule}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <FileText className="w-4 h-4 mr-2" />
                    {classItem.assignments} Assignments
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {classItem.completion}% Complete
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    classItem.status === 'active' 
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {classItem.status.charAt(0).toUpperCase() + classItem.status.slice(1)}
                  </span>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                    Manage Class
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Class Analytics */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Class Analytics Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-medium mb-2">Total Students</h3>
              <p className="text-3xl font-bold">156</p>
              <p className="text-sm opacity-80 mt-1">Across all classes</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-medium mb-2">Average Attendance</h3>
              <p className="text-3xl font-bold">92%</p>
              <p className="text-sm opacity-80 mt-1">Last 30 days</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-medium mb-2">Assignment Completion</h3>
              <p className="text-3xl font-bold">85%</p>
              <p className="text-sm opacity-80 mt-1">Class average</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ManageClasses;
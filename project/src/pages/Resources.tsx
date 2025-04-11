import React, { useState } from 'react';
import { BookOpen, Download, Search, Filter, Star, Lock, ChevronDown, Share2, Heart, FileText, FileSpreadsheet, Presentation as FilePresentation, FileCheck, X, CreditCard } from 'lucide-react'; 
interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  category: string;
  rating: number;
  downloads: number;
  price: number | 'Free';
  isPremium: boolean;
  fileSize?: string;
  lastUpdated: string;
  formats: string[];
  author?: string;
  level?: string;
}

function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [downloadProgress, setDownloadProgress] = useState<{[key: string]: number}>({});

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Basic Mathematics Notes',
      description: 'Comprehensive notes covering algebra, geometry, and trigonometry',
      type: 'notes',
      category: 'Mathematics',
      rating: 4.5,
      downloads: 1200,
      price: 'Free',
      isPremium: false,
      fileSize: '2.5 MB',
      lastUpdated: '2024-02-15',
      formats: ['pdf', 'docx'],
      author: 'Dr. Sarah Johnson',
      level: 'High School'
    },
    {
      id: '2',
      title: 'Advanced Physics Guide',
      description: 'In-depth study material with solved examples and practice problems',
      type: 'guide',
      category: 'Physics',
      rating: 4.8,
      downloads: 850,
      price: 499,
      isPremium: true,
      fileSize: '15 MB',
      lastUpdated: '2024-03-01',
      formats: ['pdf', 'pptx', 'docx'],
      author: 'Prof. Michael Chen',
      level: 'University'
    },
    {
      id: '3',
      title: 'Chemistry Lab Manual',
      description: 'Complete guide for practical experiments with safety protocols',
      type: 'manual',
      category: 'Chemistry',
      rating: 4.7,
      downloads: 950,
      price: 'Free',
      isPremium: false,
      fileSize: '8 MB',
      lastUpdated: '2024-02-28',
      formats: ['pdf'],
      author: 'Dr. Emily Williams',
      level: 'High School'
    },
    {
      id: '4',
      title: 'Biology Study Guide',
      description: 'Comprehensive study material for advanced biology concepts',
      type: 'guide',
      category: 'Biology',
      rating: 4.9,
      downloads: 1500,
      price: 699,
      isPremium: true,
      fileSize: '20 MB',
      lastUpdated: '2024-03-05',
      formats: ['pdf', 'pptx'],
      author: 'Prof. David Brown',
      level: 'University'
    },
    {
      id: '5',
      title: 'Computer Science Fundamentals',
      description: 'Essential concepts of programming and computer science',
      type: 'textbook',
      category: 'Computer Science',
      rating: 4.6,
      downloads: 2000,
      price: 'Free',
      isPremium: false,
      fileSize: '5 MB',
      lastUpdated: '2024-03-10',
      formats: ['pdf', 'epub'],
      author: 'Dr. Alex Turner',
      level: 'Beginner'
    },
    {
      id: '6',
      title: 'Organic Chemistry Notes',
      description: 'Detailed notes on organic chemistry reactions and mechanisms',
      type: 'notes',
      category: 'Chemistry',
      rating: 4.7,
      downloads: 1800,
      price: 'Free',
      isPremium: false,
      fileSize: '12 MB',
      lastUpdated: '2024-03-12',
      formats: ['pdf', 'docx'],
      author: 'Dr. Rachel Green',
      level: 'University'
    },
    {
      id: '7',
      title: 'Calculus Practice Problems',
      description: 'Extensive collection of calculus problems with step-by-step solutions',
      type: 'practice',
      category: 'Mathematics',
      rating: 4.9,
      downloads: 2500,
      price: 299,
      isPremium: true,
      fileSize: '10 MB',
      lastUpdated: '2024-03-15',
      formats: ['pdf', 'xlsx'],
      author: 'Prof. James Wilson',
      level: 'Advanced'
    },
    {
      id: '8',
      title: 'Python Programming Guide',
      description: 'Learn Python programming from basics to advanced concepts',
      type: 'guide',
      category: 'Computer Science',
      rating: 4.8,
      downloads: 3000,
      price: 'Free',
      isPremium: false,
      fileSize: '18 MB',
      lastUpdated: '2024-03-18',
      formats: ['pdf', 'ipynb'],
      author: 'Sarah Code',
      level: 'Beginner to Advanced'
    },
    {
      id: '9',
      title: 'Physics Lab Reports Template',
      description: 'Professional templates for physics lab reports with examples',
      type: 'template',
      category: 'Physics',
      rating: 4.5,
      downloads: 800,
      price: 'Free',
      isPremium: false,
      fileSize: '3 MB',
      lastUpdated: '2024-03-20',
      formats: ['docx', 'pdf'],
      author: 'Dr. Robert Lee',
      level: 'University'
    },
    {
      id: '10',
      title: 'Biology Diagrams Collection',
      description: 'High-quality biological diagrams and illustrations',
      type: 'visual',
      category: 'Biology',
      rating: 4.7,
      downloads: 1200,
      price: 399,
      isPremium: true,
      fileSize: '25 MB',
      lastUpdated: '2024-03-22',
      formats: ['pdf', 'pptx', 'png'],
      author: 'Dr. Maria Garcia',
      level: 'All Levels'
    }
  ];

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'pdf':
        return <FileText className="w-4 h-4" />;
      case 'xlsx':
      case 'xls':
        return <FileSpreadsheet className="w-4 h-4" />;
      case 'pptx':
      case 'ppt':
        return <FilePresentation className="w-4 h-4" />;
      default:
        return <FileCheck className="w-4 h-4" />;
    }
  };

  const toggleFavorite = (resourceId: string) => {
    setFavorites(prev => 
      prev.includes(resourceId) 
        ? prev.filter(id => id !== resourceId)
        : [...prev, resourceId]
    );
  };

  const simulateDownload = (resourceId: string, format: string) => {
    const downloadKey = `${resourceId}-${format}`;
    if (downloadProgress[downloadKey]) return;

    setDownloadProgress(prev => ({ ...prev, [downloadKey]: 0 }));
    
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        const newProgress = (prev[downloadKey] || 0) + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadProgress(prev => {
              const newState = { ...prev };
              delete newState[downloadKey];
              return newState;
            });
          }, 1000);
        }
        return { ...prev, [downloadKey]: newProgress };
      });
    }, 300);
  };

  const shareResource = async (resource: Resource) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: resource.title,
          text: resource.description,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const ResourceModal = ({ resource, onClose }: { resource: Resource, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{resource.title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600">{resource.description}</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Category:</span>
              <span className="ml-2 font-medium">{resource.category}</span>
            </div>
            <div>
              <span className="text-gray-500">Author:</span>
              <span className="ml-2 font-medium">{resource.author}</span>
            </div>
            <div>
              <span className="text-gray-500">Level:</span>
              <span className="ml-2 font-medium">{resource.level}</span>
            </div>
            <div>
              <span className="text-gray-500">Last Updated:</span>
              <span className="ml-2 font-medium">{resource.lastUpdated}</span>
            </div>
            <div>
              <span className="text-gray-500">File Size:</span>
              <span className="ml-2 font-medium">{resource.fileSize}</span>
            </div>
            <div>
              <span className="text-gray-500">Downloads:</span>
              <span className="ml-2 font-medium">{resource.downloads}</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Available Formats</h3>
            <div className="flex flex-wrap gap-2">
              {resource.formats.map(format => (
                <button
                  key={format}
                  onClick={() => simulateDownload(resource.id, format)}
                  disabled={!!downloadProgress[`${resource.id}-${format}`]}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  {getFormatIcon(format)}
                  <span className="uppercase">{format}</span>
                  {downloadProgress[`${resource.id}-${format}`] && (
                    <span>{downloadProgress[`${resource.id}-${format}`]}%</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => shareResource(resource)}
              className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition duration-300"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ResourceCard = ({ resource }: { resource: Resource }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`${resource.isPremium ? 'bg-purple-100' : 'bg-indigo-100'} p-3 rounded-xl`}>
            <BookOpen className={`w-6 h-6 ${resource.isPremium ? 'text-purple-600' : 'text-indigo-600'}`} />
          </div>
          <div className="flex items-center gap-2">
            {resource.isPremium && <Lock className="w-5 h-5 text-purple-600" />}
            <button 
              onClick={() => toggleFavorite(resource.id)}
              className="hover:bg-gray-100 p-1 rounded-full transition-colors"
            >
              <Heart 
                className={`w-5 h-5 ${
                  favorites.includes(resource.id) 
                    ? 'text-red-500 fill-current' 
                    : 'text-gray-400'
                }`} 
              />
            </button>
          </div>
        </div>
        
        <div 
          className="cursor-pointer"
          onClick={() => {
            setSelectedResource(resource);
            setShowModal(true);
          }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm text-gray-500">{resource.author}</span>
            <span className="text-sm text-gray-400">•</span>
            <span className="text-sm text-gray-500">{resource.level}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{resource.rating}</span>
          </div>
          {resource.isPremium ? (
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
              Buy Now
            </button>
          ) : (
            <div className="flex gap-2">
              {resource.formats.slice(0, 2).map(format => (
                <button
                  key={format}
                  onClick={() => simulateDownload(resource.id, format)}
                  className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 px-2 py-1 rounded border border-indigo-200 hover:border-indigo-300"
                  disabled={!!downloadProgress[`${resource.id}-${format}`]}
                >
                  {downloadProgress[`${resource.id}-${format}`] ? (
                    <span>{downloadProgress[`${resource.id}-${format}`]}%</span>
                  ) : (
                    <>
                      {getFormatIcon(format)}
                      <span className="text-xs uppercase">{format}</span>
                    </>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <main className="flex-grow pt-20 pb-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Educational Resources</h1>
          <p className="text-gray-600">Access our comprehensive collection of study materials</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white p-4 rounded-xl shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for books and resources..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Categories</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Computer Science">Computer Science</option>
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources
            .filter(resource => 
              (selectedCategory === 'all' || resource.category === selectedCategory) &&
              (searchQuery === '' || 
                resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                resource.description.toLowerCase().includes(searchQuery.toLowerCase()))
            )
            .map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))
          }
        </div>
      </div>

      {/* Resource Details Modal */}
      {showModal && selectedResource && (
        <ResourceModal 
          resource={selectedResource} 
          onClose={() => {
            setShowModal(false);
            setSelectedResource(null);
          }} 
        />
      )}
    </main>
  );
}

export default Resources;
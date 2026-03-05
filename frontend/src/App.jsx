import { useState } from 'react';
import MergePage from './pages/MergePage';
import SplitPage from './pages/SplitPage';
import CompressPage from './pages/CompressPage';
import PdfToImagePage from './pages/PdfToImagePage';
import ImageToPdfPage from './pages/ImageToPdfPage';
import ReorderPage from './pages/ReorderPage';
import ProtectPage from './pages/ProtectPage';
import UnlockPage from './pages/UnlockPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('merge');

  const tools = [
    { id: 'merge', label: 'Merge PDF', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { id: 'split', label: 'Split PDF', icon: 'M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2' },
    { id: 'compress', label: 'Compress PDF', icon: 'M19 14l-7 7m0 0l-7-7m7 7V3' },
    { id: 'pdf-to-image', label: 'PDF → Image', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { id: 'image-to-pdf', label: 'Image → PDF', icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
    { id: 'reorder', label: 'Reorder PDF', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
    { id: 'protect', label: 'Protect PDF', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { id: 'unlock', label: 'Unlock PDF', icon: 'M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z' },
  ];

  const renderPage = () => {
    switch (activeTab) {
      case 'merge': return <MergePage />;
      case 'split': return <SplitPage />;
      case 'compress': return <CompressPage />;
      case 'pdf-to-image': return <PdfToImagePage />;
      case 'image-to-pdf': return <ImageToPdfPage />;
      case 'reorder': return <ReorderPage />;
      case 'protect': return <ProtectPage />;
      case 'unlock': return <UnlockPage />;
      default: return <MergePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Bar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Name */}
            <div className="flex flex-col cursor-pointer" onClick={() => setActiveTab('merge')}>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                PhenomPDF
              </h1>
              <span className="text-xs text-gray-500 font-medium -mt-1">
                The Phenomenal PDF Toolkit
              </span>
            </div>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex flex-wrap justify-center gap-1">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`
                    px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm
                    ${activeTab === tool.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                    }
                  `}
                >
                  {tool.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="text-center py-12 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          PhenomPDF
        </h2>
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          Merge, split, compress and convert PDFs quickly and securely.
        </p>
      </div>

      {/* Tool Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id)}
              className={`
                group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                ${activeTab === tool.id
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
                }
              `}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors
                ${activeTab === tool.id
                  ? 'bg-white/20'
                  : 'bg-blue-50 group-hover:bg-blue-100'
                }
              `}>
                <svg 
                  className={`w-6 h-6 transition-colors ${
                    activeTab === tool.id ? 'text-white' : 'text-blue-600'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tool.icon} />
                </svg>
              </div>
              <span className={`font-semibold text-sm md:text-base block ${
                activeTab === tool.id ? 'text-white' : 'text-gray-800'
              }`}>
                {tool.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-4 mb-6">
        <div className="bg-white rounded-xl shadow-md p-1 inline-flex flex-wrap justify-center w-full">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTab(tool.id)}
              className={`
                px-3 py-2 rounded-lg font-medium transition-all duration-200 text-xs flex items-center gap-1 flex-1 min-w-fit
                ${activeTab === tool.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                }
              `}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tool.icon} />
              </svg>
              {tool.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto pb-12 px-4">
        {renderPage()}
      </div>
    </div>
  );
}

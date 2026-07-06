import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, X, ShieldCheck, FileImage } from 'lucide-react';

const CATEGORIES = [
  "About Us",
  "Services - Custom Homes",
  "Services - Renovations",
  "Services - Framing",
  "Portfolio - Custom Homes",
  "Portfolio - Renovations",
  "Portfolio - Kitchens & Baths"
];

export const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim().toLowerCase() === 'admin123' || password.trim() === 'admin') { 
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password. Please try admin123');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setStatus('uploading');
    setMessage('');

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64Data = event.target?.result;
        
        if (typeof base64Data !== 'string') {
          throw new Error('Failed to read file');
        }

        const scriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL;
        if (!scriptUrl || scriptUrl === 'YOUR_APPS_SCRIPT_WEB_APP_URL' || !scriptUrl.startsWith('http')) {
          throw new Error('Apps Script URL is not configured.');
        }

        const response = await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify({
            action: 'upload_photo',
            category: selectedCategory,
            filename: selectedFile.name,
            file: base64Data
          }),
        });

        const data = await response.json();
        
        if (data.status === 'success') {
          setStatus('success');
          setMessage('File uploaded successfully!');
          setSelectedFile(null);
        } else {
          throw new Error(data.message || 'Upload failed');
        }
      };
      
      reader.onerror = () => {
        throw new Error('Failed to read file');
      };

      reader.readAsDataURL(selectedFile);
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setMessage(err.message || 'An error occurred during upload.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-charcoal-950 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-charcoal-925 p-12 border border-charcoal-800 rounded-sm max-w-md w-full text-center"
        >
          <ShieldCheck className="w-12 h-12 text-gold-500 mx-auto mb-6" />
          <h1 className="text-2xl font-display font-bold text-white mb-2 uppercase tracking-widest">Admin Access</h1>
          <p className="text-steel-500 text-sm mb-8">Please enter the administrator password to continue.</p>
          
          <form onSubmit={handleLogin}>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password (admin123)"
              className="w-full bg-charcoal-900 border border-charcoal-800 text-white px-4 py-3 mb-4 focus:outline-none focus:border-gold-500 transition-colors"
            />
            <button 
              type="submit"
              className="w-full bg-gold-500 text-charcoal-950 font-bold text-xs tracking-[0.2em] uppercase py-4 hover:bg-white transition-colors"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal-950 pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-3xl font-display font-bold text-white uppercase tracking-widest">Site Administration</h1>
          <button onClick={() => window.location.hash = ''} className="text-gold-500 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">
            &larr; Back to Site
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-charcoal-925 p-8 border border-charcoal-800">
            <h2 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest border-b border-charcoal-800 pb-4">
              Upload Portfolio Photo
            </h2>
            
            <form onSubmit={handleUpload} className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold tracking-widest text-steel-500 uppercase mb-2">Category</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-charcoal-900 border border-charcoal-800 text-white px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold tracking-widest text-steel-500 uppercase mb-2">Select Image</label>
                <div className="relative border-2 border-dashed border-charcoal-800 hover:border-gold-500 transition-colors p-8 text-center cursor-pointer bg-charcoal-900 group">
                  <input 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {selectedFile ? (
                    <div className="flex flex-col items-center">
                      <FileImage className="w-8 h-8 text-gold-500 mb-2" />
                      <span className="text-sm text-white truncate max-w-[200px]">{selectedFile.name}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <Upload className="w-8 h-8 text-steel-500 group-hover:text-gold-500 transition-colors mb-2" />
                      <span className="text-sm text-steel-400">Click or drag image to upload</span>
                    </div>
                  )}
                </div>
              </div>

              <button 
                type="submit"
                disabled={!selectedFile || status === 'uploading'}
                className="w-full bg-gold-500 text-charcoal-950 font-bold text-xs tracking-[0.2em] uppercase py-4 hover:bg-white transition-colors disabled:opacity-50"
              >
                {status === 'uploading' ? 'Uploading...' : 'Upload Image'}
              </button>

              {message && (
                <div className={`p-4 text-sm font-bold tracking-widest uppercase text-center ${status === 'success' ? 'text-gold-500 bg-gold-500/10' : 'text-red-500 bg-red-500/10'}`}>
                  {message}
                </div>
              )}
            </form>
          </div>

          <div className="bg-charcoal-925 p-8 border border-charcoal-800">
            <h2 className="text-xl font-display font-bold text-white mb-6 uppercase tracking-widest border-b border-charcoal-800 pb-4">
              Instructions
            </h2>
            <div className="space-y-4 text-steel-400 text-sm leading-relaxed">
              <p>
                Use this panel to upload new photos directly to your Google Drive Portfolio folders.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-steel-500">
                <li>Select the appropriate category for your image.</li>
                <li>Choose a high-quality image (JPG, PNG).</li>
                <li>Click upload and wait for the confirmation.</li>
                <li>Once uploaded, the image will automatically appear in the Portfolio section of the website.</li>
              </ul>
              <div className="mt-8 pt-4 border-t border-charcoal-800">
                <p className="text-xs text-steel-500">
                  <strong>Note:</strong> Uploads are processed via Google Apps Script and saved to the "T.K.O Construction Portfolio" folder in Google Drive. Ensure you have run <code className="text-gold-500">setupPortfolio()</code> in your Apps Script project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

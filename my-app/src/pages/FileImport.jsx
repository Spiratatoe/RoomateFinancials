import { Link } from 'react-router-dom';
import { useState } from 'react';
import './FileImport.css';

function FileImport() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Handle file upload logic here
      console.log('Uploading file:', selectedFile);
      alert(`File "${selectedFile.name}" ready to upload!`);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
  };

  return (
    <div className="file-import">
      <header className="dashboard-header">
        <h1>Import Financial Data</h1>
        <nav>
          <Link to="/" className="nav-link">Dashboard</Link>
          <Link to="/import" className="nav-link active">Import Files</Link>
        </nav>
      </header>

      <main className="import-content">
        <div className="import-container">
          <div className="import-instructions">
            <h2>Upload Your Financial File</h2>
            <p>Supported formats: CSV, Excel (.xlsx, .xls), JSON</p>
          </div>

          <div
            className={`drop-zone ${dragActive ? 'drag-active' : ''} ${selectedFile ? 'has-file' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {!selectedFile ? (
              <>
                <svg className="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="drop-text">Drag and drop your file here</p>
                <p className="drop-text-secondary">or</p>
                <label htmlFor="file-input" className="file-input-label">
                  Browse Files
                </label>
                <input
                  id="file-input"
                  type="file"
                  onChange={handleFileChange}
                  accept=".csv,.xlsx,.xls,.json"
                  style={{ display: 'none' }}
                />
              </>
            ) : (
              <div className="file-selected">
                <svg className="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="file-info">
                  <p className="file-name">{selectedFile.name}</p>
                  <p className="file-size">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                </div>
                <button onClick={clearFile} className="remove-btn">Remove</button>
              </div>
            )}
          </div>

          {selectedFile && (
            <button onClick={handleUpload} className="upload-btn">
              Upload and Process File
            </button>
          )}

          <div className="import-tips">
            <h3>Tips for best results:</h3>
            <ul>
              <li>Ensure your file contains columns for date, description, and amount</li>
              <li>CSV files should be comma-separated</li>
              <li>Excel files should have data in the first sheet</li>
              <li>Remove any empty rows or headers before uploading</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FileImport;

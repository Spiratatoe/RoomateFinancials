import { Upload } from 'lucide-react';
import { useRef } from 'react';

export function CSVUpload({ onUpload }) {
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result;
      const rows = text.split('\n').filter(row => row.trim());

      if (rows.length < 2) {
        alert('CSV file is empty or invalid');
        return;
      }

      const headers = rows[0].split(',').map(h => h.trim());
      const data = rows.slice(1).map(row => {
        const values = row.split(',').map(v => v.trim());
        const obj = {};
        headers.forEach((header, index) => {
          obj[header] = values[index];
        });
        return obj;
      });

      onUpload(data);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="upload-zone">
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="csv-upload"
      />
      <label htmlFor="csv-upload" style={{ cursor: 'pointer' }}>
        <div className="upload-content">
          <Upload style={{ width: '3rem', height: '3rem', color: '#9CA3AF' }} />
          <div>
            <p className="upload-text-primary">Click to upload CSV</p>
            <p className="upload-text-secondary">
              Expected format: date, description, amount, category, roommate, type (personal/shared)
            </p>
          </div>
        </div>
      </label>
    </div>
  );
}

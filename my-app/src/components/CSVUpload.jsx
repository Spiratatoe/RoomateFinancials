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
    <div style={{ border: '2px dashed #D1D5DB', borderRadius: '0.5rem', padding: '2rem', textAlign: 'center', transition: 'border-color 0.2s' }}
         onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3B82F6'}
         onMouseLeave={(e) => e.currentTarget.style.borderColor = '#D1D5DB'}>
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="csv-upload"
      />
      <label htmlFor="csv-upload" style={{ cursor: 'pointer' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <Upload style={{ width: '3rem', height: '3rem', color: '#9CA3AF' }} />
          <div>
            <p style={{ color: '#2563EB', fontWeight: '500' }}>Click to upload CSV</p>
            <p style={{ fontSize: '0.875rem', color: '#6B7280', marginTop: '0.25rem' }}>
              Expected format: date, description, amount, category, roommate, type (personal/shared)
            </p>
          </div>
        </div>
      </label>
    </div>
  );
}

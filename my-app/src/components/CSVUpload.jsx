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
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="hidden"
        id="csv-upload"
      />
      <label htmlFor="csv-upload" className="cursor-pointer">
        <div className="flex flex-col items-center gap-3">
          <Upload className="w-12 h-12 text-gray-400" />
          <div>
            <p className="text-blue-600 font-medium">Click to upload CSV</p>
            <p className="text-sm text-gray-500 mt-1">
              Expected format: date, description, amount, category, roommate, type (personal/shared)
            </p>
          </div>
        </div>
      </label>
    </div>
  );
}

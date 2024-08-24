import React, { useState } from 'react';
import readXlsxFile from 'read-excel-file';
import InfiniteScroll from 'react-infinite-scroll-component';
import { assets } from '@/assests/assests';
import Image from 'next/image';
import Link from 'next/link';
export default function UploadPage() {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(0);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      readXlsxFile(file).then((rows) => {
        // Assuming the first row is the header
        const formattedData = rows.slice(1).map((row) => ({
          id: row[0],
          link: row[1],
          prefix: row[2],
          selectTags: row[3],
          selectedTags: row[4],
        }));
        setData(formattedData);
      });
    }
  };

  const loadMoreData = () => {
   
    const nextPage = page + 1;
    const pageSize = 20;
    const nextData = data.slice(nextPage * pageSize, (nextPage + 1) * pageSize);
    
    if (nextData.length === 0) {
      setHasMore(false); 
      return;
    }

    setPage(nextPage);
    setData((prevData) => [...prevData, ...nextData]);
  };

  return (
    <div className="p-8 text-white">
      <div className="flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">Upload CSV</div>
        <div className="flex items-center space-x-4">
       
           <Link 
  href="/api/auth/signout?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F"
  className="inline-block px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 focus:outline-none"
>
  Logout
</Link>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="hidden"
          id="upload-file"
        />
        <label
          htmlFor="upload-file"
          className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-4 rounded-lg cursor-pointer"
        >
            
          Upload Excel
        </label>
      </div>

      {data.length > 0 && (
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={<p>No more data</p>}
          className="overflow-auto"
        >
          <table className="table-auto w-full bg-gray-900 border border-gray-700 rounded-lg">
            <thead>
              <tr className="text-left border-b border-gray-700">
                <th className="p-4">Sl. No.</th>
                <th className="p-4">Links</th>
                <th className="p-4">Prefix</th>
                <th className="p-4">Add Tags</th>
                <th className="p-4">Selected Tags</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="p-4">{row.id}</td>
                  <td className="p-4">
                    <a
                      href={`https://${row.link}`}
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row.link}
                    </a>
                  </td>
                  <td className="p-4">{row.prefix}</td>
                  <td className="p-4">
                    <select className="bg-gray-800 border border-gray-600 rounded-md p-2">
                      {row.selectTags.split(', ').map((tag, idx) => (
                        <option key={idx}>{tag}</option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4">
                    {row.selectedTags.split(', ').map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-600 text-xs font-semibold text-white rounded-full px-2 py-1 mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </InfiniteScroll>
      )}
    </div>
  );
}

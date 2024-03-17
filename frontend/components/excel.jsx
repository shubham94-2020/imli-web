import React, { useState, useEffect } from "react";

const ExcelViewer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchGoogleSheetData = async () => {
      try {
        const response = await fetch(
          https://docs.google.com/spreadsheets/d/1uZvrEdV533oVUd60SS3n3r4th_x3aA7lao4EW1eaGbw/pub?output=xlsx
        );
        console.log("ashok");
        const json = await response.json();
        const entries = json.feed.entry;
        const parsedData = entries.map((entry) => ({
          name: entry.name.$t,
          
          branch: entry.branch.$t,
          address: entry.address.$t,
          phone: entry.phone.$t,
        }));
       console.log(parsedData);
        setData(parsedData);
      } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
      }
    };
    fetchGoogleSheetData();
  }, []);

  return (
    <div>
      <h2>College Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Branch</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.branch}</td>
              <td>{entry.address}</td>
              <td>{entry.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcelViewer;

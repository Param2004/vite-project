
import React from 'react';

const FileDownload = () => {
  const downloadFile = () => {
    // Replace 'your-file.ppt' with the actual file name and extension
    const fileName = '../build/NTPS_Online_Help.pptx';

    // Create a link element
    const downloadLink = document.createElement('a');

    // Set the download link's properties
    downloadLink.href = `/path/to/your/files/${fileName}`;
    downloadLink.download = fileName;

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger the click event on the link
    downloadLink.click();

    // Remove the link from the body
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <a href='NTPS_Online_Help.pptx' target='_blank'><button onClick={downloadFile}>Download PowerPoint File</button></a>
    </div>
  );
};

export default FileDownload;

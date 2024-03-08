
import './App.css'

function App() {

  const handleDownload = () => {
    // Replace 'example.txt' with the actual file name and extension
    const fileName = 'translated.jpeg';

    // Set the file path
    const filePath = '/' + fileName;

    // Create a link element
    const downloadLink = document.createElement('a');

    // Set the download link's properties
    downloadLink.href = filePath;
    downloadLink.download = fileName;

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger the click event on the link
    downloadLink.click();

    // Remove the link from the body
    document.body.removeChild(downloadLink);
  };

  return (
    <>
    <div>
      <a href='/img.pptx' target='_blank'><button onClick={handleDownload}>Download File</button></a>
    </div>
    </>
  )
}

export default App

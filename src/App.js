import { useState } from 'react'
import './App.css'
import UploadFile from './UploadFile'
import { DragTable } from './DragTable'
function App() {
    const [uploadedExcelData, setUploadedExcelData] = useState([])
    const uploadedExcelDataHandler = (data) => {
        setUploadedExcelData(data)
    }
    return (
        <>
            <div className="container">
                <UploadFile onUploadExcelFile={uploadedExcelDataHandler} />
            </div>
            <DragTable excelData={uploadedExcelData} />
        </>
    )
}

export default App

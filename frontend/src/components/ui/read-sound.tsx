import React,{useState } from 'react';
import useSound from 'use-sound';


export const FileUpload = () => {
    const [file, setFile] = useState(null);
        const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]);
            } else {
                setFile(undefined);
            }
        };
    
    const handleDragOver = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
            const file = e.target.files?.[0]
        console.log(file)
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
            if (e.dataTransfer.files) {
                setFile(Array.from(e.dataTransfer.files));
            }
    }
    return (
        <div>
            <input onChange={handleFileChange} name="file" type="file" />
            <input
                    type="file"
                    name="file1"
                    onChange={handleFileChange}
            />
            <input 
                onChange={handleFileChange} 
                name="file" 
                type="file2"
            />
        </div>
    );
};
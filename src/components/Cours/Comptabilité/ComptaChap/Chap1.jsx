import React from 'react';
import "./ComptaChap.css";
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFilePdf,
    faFileWord
} from "@fortawesome/free-solid-svg-icons";

function ComptaChap1() {
    return (
        <div>
            <img
                src="https://user-images.githubusercontent.com/57908921/82719553-180c7900-9cac-11ea-9f26-4edc202593d4.jpeg"
                alt=""
                className="ImgAll" />
            <img
                src="https://user-images.githubusercontent.com/57908921/82719557-2064b400-9cac-11ea-9ef5-a2bb596e584c.jpeg"
                alt=""
                className="ImgAll" />
            <img
                src="https://user-images.githubusercontent.com/57908921/82719559-265a9500-9cac-11ea-842e-4e37e4c8a9f6.jpeg"
                alt=""
                className="ImgAll" />
            <img
                src="https://user-images.githubusercontent.com/57908921/82719563-2e1a3980-9cac-11ea-9f0d-879988627664.jpeg"
                alt=""
                className="ImgAll" />
            <img
                src="https://user-images.githubusercontent.com/57908921/82719569-34101a80-9cac-11ea-8ca4-b9c8f7acc7fc.jpeg"
                alt=""
                className="ImgAll" />
            <div className="ButtonBottom">
                <a
                    href="https://github.com/CzerwonyV/CzerwonyV/files/4670961/Chap1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button>Télécharger format PDF <FontAwesomeIcon icon={faFilePdf}/></Button>
                </a>
                <a
                    href="https://github.com/CzerwonyV/CzerwonyV/files/4670970/Chap.1.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button>Télécharger format World <FontAwesomeIcon icon={faFileWord}/></Button>
                </a>
            </div>
        </div>
    );
}

export default ComptaChap1;

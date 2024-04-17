import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, FormGroup, Label } from 'reactstrap';
import { useDropzone } from 'react-dropzone';
import styles from './Modal.module.scss'
const AddNewsModal = ({ isOpen, toggle }) => {
    const [file, setFile] = useState(null);
    const [newsTitle, setNewsTitle] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [shortDescription, setShortDescription] = useState('');
    const [fullDescription, setFullDescription] = useState('');
    const [publishDate, setPublishDate] = useState('');

    const handleFileDrop = (acceptedFiles) => {
        const selectedFile = acceptedFiles[0];
        setFile(selectedFile);
    };

    const handleNewsTitleChange = (e) => {
        setNewsTitle(e.target.value);
    };

    const handleTagChange = (e) => {
        const selectedTag = e.target.value;
        setSelectedTags((prevTags) => [...prevTags, selectedTag]);
    };

    const handleShortDescriptionChange = (e) => {
        setShortDescription(e.target.value);
    };

    const handleFullDescriptionChange = (e) => {
        setFullDescription(e.target.value);
    };

    const handlePublishDateChange = (e) => {
        setPublishDate(e.target.value);
    };

    const handleAddNews = () => {
        // Здесь можно выполнить логику добавления новости
        console.log('Добавить новость:', {
            file,
            newsTitle,
            selectedTags,
            shortDescription,
            fullDescription,
            publishDate
        });
        // Дополнительная логика добавления новости...

        // Сброс полей и закрытие модального окна
        setFile(null);
        setNewsTitle('');
        setSelectedTags([]);
        setShortDescription('');
        setFullDescription('');
        setPublishDate('');
        toggle();
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleFileDrop });

    return (
        <>
            {isOpen && <div className="modalOverlay" onClick={toggle} />}
            <Modal isOpen={isOpen} toggle={toggle} className={styles.centeredModal}>
                <ModalHeader toggle={toggle}>Добавить новость</ModalHeader>
                <ModalBody>
                    <FormGroup className={styles.modalInput}>
                        <Label for="newsTitle">Название новости</Label>
                        <Input
                            type="text"
                            id="newsTitle"
                            value={newsTitle}
                            onChange={handleNewsTitleChange}
                        />
                    </FormGroup>
                    <FormGroup style={{marginTop: '10px'}}>
                        <Label for="tags">Выбор тегов</Label>
                        <Input
                                type="select"
                                name="serverSelect"
                                id="serverSelect"
                                onChange={handleTagChange} 
                                style={{marginLeft: '10px', backgroundColor: 'transparent', color: 'gray'}}
                            >
                                <option value="">Выбрать тег</option>
                                <option value="server1">Server 1</option>
                                <option value="server2">Server 2</option>
                            </Input>
                    </FormGroup>
                    <FormGroup className={styles.modalInput}>
                        <Label for="shortDescription">Краткое описание</Label>
                        <Input
                            type="text"
                            id="shortDescription"
                            value={shortDescription}
                            onChange={handleShortDescriptionChange}
                        />
                    </FormGroup>
                    <FormGroup  className={styles.modalInput}>
                        <Label for="fullDescription">Полное описание</Label>
                        <Input
                            type="text"
                            id="fullDescription"
                            value={fullDescription}
                            onChange={handleFullDescriptionChange}
                        />
                    </FormGroup>
                    <FormGroup  className={styles.modalInput}>
                        <Label for="publishDate">Дата публикации</Label>
                        <Input
                            type="date"
                            id="publishDate"
                            value={publishDate}
                            onChange={handlePublishDateChange}
                        />
                    </FormGroup>
                    <FormGroup  className={styles.modalInput}>
                        <Label for="file">Выбор фото</Label>
                        <div {...getRootProps()} className="dropzone" style={{marginTop: '10px', color: '#fff'}}>
                            <input {...getInputProps()} />
                            {
                                isDragActive ?
                                    <p>Перетащите сюда файл</p> :
                                    <p>Перетащите сюда файл или кликните для выбора файла</p>
                            }
                            {file && <p style={{marginTop: '10px'}}>Выбранный файл: {file.name}</p>}
                        </div>
                    </FormGroup>
                </ModalBody>
                <ModalFooter className={styles.modalFooter}>
                    <Button color="primary" onClick={handleAddNews}>
                        Добавить
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Отмена
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default AddNewsModal;

import React, { useState } from 'react';
import { Navbar } from './Navbar';
import '../styles/GalleryPage.css';

const galleryData = {
    2024: [
        {
            id: 1,
            title: "Inauguration",
            desc: "Revelations '24",
            image: "/rvlns_images/24/24_inaugration.JPG"
        },
        {
            id: 2,
            title: "Charades",
            desc: "Revelations '24",
            image: "/rvlns_images/24/24_charades.JPG"
        },
        {
            id: 3,
            title: "Coding & Debugging",
            desc: "Revelations '24",
            image: "/rvlns_images/24/24_coding_and_debugging.JPG"
        },
        {
            id: 4,
            title: "IT Manager",
            desc: "Revelations '24",
            image: "/rvlns_images/24/24_it_manager.JPG"
        },
        {
            id: 5,
            title: "IT Quiz",
            desc: "Revelations '24",
            image: "/rvlns_images/24/24_it_quiz.JPG"
        },
        {
            id: 6,
            title: "Pop Quiz",
            desc: "Revelations '24",
            image: "/rvlns_images/24/24_popquiz.JPG"
        },
        {
            id: 7,
            title: "Prompt Mania",
            desc: "Revelations '24",
            image: "/rvlns_images/24/24_promptmania.JPG"
        },
        {
            id: 8,
            title: "Sports",
            desc: "Revelations '24",
            image: "/rvlns_images/24/24_sports.JPG"
        },
        {
            id: 9,
            title: "UI/UX Design",
            desc: "Revelations '24",
            image: "/rvlns_images/24/24_uiux.JPG"
        },
        {
            id: 10,
            title: "Valedictory",
            desc: "Revelations '24",
            image: "/rvlns_images/24/24_valedictory.JPG"
        },
        {
            id: 11,
            title: "Weeb Wars",
            desc: "Revelations '24",
            image: "/rvlns_images/24/24_weebwars.JPG"
        }
    ],
    2025: [
        {
            id: 12,
            title: "Highlight Moment",
            desc: "Revelations '25",
            image: "/rvlns_images/25/25_1.jpg"
        },
        {
            id: 13,
            title: "Cosplay",
            desc: "Revelations '25",
            image: "/rvlns_images/25/25_cosplay_dance.JPG"
        },
        {
            id: 14,
            title: "Dream Team",
            desc: "Revelations '25",
            image: "/rvlns_images/25/25_dream_team.JPG"
        },
        {
            id: 15,
            title: "Emcee",
            desc: "Revelations '25",
            image: "/rvlns_images/25/25_emcee.JPG"
        },
        {
            id: 16,
            title: "Group Photo",
            desc: "Revelations '25",
            image: "/rvlns_images/25/25_group_photo.JPG"
        },
        {
            id: 17,
            title: "Guest of Honour",
            desc: "Revelations '25",
            image: "/rvlns_images/25/25_guest_of_honour.JPG"
        },
        {
            id: 18,
            title: "Inauguration",
            desc: "Revelations '25",
            image: "/rvlns_images/25/25_inaugration.JPG"
        },
        {
            id: 19,
            title: "Sports",
            desc: "Revelations '25",
            image: "/rvlns_images/25/25_sports.JPG"
        },
        {
            id: 20,
            title: "Website Demo",
            desc: "Revelations '25",
            image: "/rvlns_images/25/25_website_demonstration.JPG"
        },
        {
            id: 21,
            title: "Website Dev",
            desc: "Revelations '25",
            image: "/rvlns_images/25/25_website_dev.JPG"
        }
    ]
};

const GalleryPage = () => {
    const [selectedYear, setSelectedYear] = useState(2024);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="gallery-page">
            <Navbar />
            <div className="gallery-container">
                <header className="gallery-header">
                    <h1 className="gallery-title">TIMELESS MOMENTS</h1>
                    <p className="gallery-subtitle">Highlights from Revelations</p>

                    <div className="year-selector">
                        <button
                            className={`year-pill ${selectedYear === 2024 ? 'active' : ''}`}
                            onClick={() => setSelectedYear(2024)}
                        >
                            2024
                        </button>
                        <button
                            className={`year-pill ${selectedYear === 2025 ? 'active' : ''}`}
                            onClick={() => setSelectedYear(2025)}
                        >
                            2025
                        </button>
                    </div>
                </header>

                <div className="gallery-grid">
                    {galleryData[selectedYear]?.map((item, index) => (
                        <div
                            key={item.id}
                            className="gallery-card"
                            onClick={() => openModal(item)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="gallery-image-container">
                                <img src={item.image} alt={item.title} className="gallery-image" />
                                <div className="gallery-overlay">
                                    <span>View</span>
                                </div>
                            </div>
                            <div className="gallery-info">
                                <h3 className="gallery-item-title">{item.title}</h3>
                                <p className="gallery-item-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="gallery-modal" onClick={closeModal}>
                    <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={closeModal}>&times;</button>
                        <img src={selectedImage.image} alt={selectedImage.title} className="modal-image" />
                        <div className="modal-caption">
                            <h3>{selectedImage.title}</h3>
                            <p>{selectedImage.desc}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;

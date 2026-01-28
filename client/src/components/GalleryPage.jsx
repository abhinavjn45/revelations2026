import React, { useState } from 'react';
import { Navbar } from './Navbar';
import '../styles/GalleryPage.css';

// 2024 Images
import img24_inauguration from '../assets/images/rvlns_images/24/24_inaugration.JPG';
import img24_charades from '../assets/images/rvlns_images/24/24_charades.JPG';
import img24_coding from '../assets/images/rvlns_images/24/24_coding_and_debugging.JPG';
import img24_it_manager from '../assets/images/rvlns_images/24/24_it_manager.JPG';
import img24_it_quiz from '../assets/images/rvlns_images/24/24_it_quiz.JPG';
import img24_popquiz from '../assets/images/rvlns_images/24/24_popquiz.JPG';
import img24_promptmania from '../assets/images/rvlns_images/24/24_promptmania.JPG';
import img24_sports from '../assets/images/rvlns_images/24/24_sports.JPG';
import img24_uiux from '../assets/images/rvlns_images/24/24_uiux.JPG';
import img24_valedictory from '../assets/images/rvlns_images/24/24_valedictory.JPG';
import img24_weebwars from '../assets/images/rvlns_images/24/24_weebwars.JPG';

// 2025 Images
import img25_highlight from '../assets/images/rvlns_images/25/25_1.jpg';
import img25_cosplay from '../assets/images/rvlns_images/25/25_cosplay_dance.JPG';
import img25_dream_team from '../assets/images/rvlns_images/25/25_dream_team.JPG';
import img25_emcee from '../assets/images/rvlns_images/25/25_emcee.JPG';
import img25_group_photo from '../assets/images/rvlns_images/25/25_group_photo.JPG';
import img25_guest from '../assets/images/rvlns_images/25/25_guest_of_honour.JPG';
import img25_inauguration from '../assets/images/rvlns_images/25/25_inaugration.JPG';
import img25_sports from '../assets/images/rvlns_images/25/25_sports.JPG';
import img25_website_demonstration from '../assets/images/rvlns_images/25/25_website_demonstration.JPG';
import img25_website_dev from '../assets/images/rvlns_images/25/25_website_dev.JPG';

const galleryData = {
    2024: [
        {
            id: 1,
            title: "Inauguration",
            desc: "Revelations '24",
            image: img24_inauguration
        },
        {
            id: 2,
            title: "Charades",
            desc: "Revelations '24",
            image: img24_charades
        },
        {
            id: 3,
            title: "Coding & Debugging",
            desc: "Revelations '24",
            image: img24_coding
        },
        {
            id: 4,
            title: "IT Manager",
            desc: "Revelations '24",
            image: img24_it_manager
        },
        {
            id: 5,
            title: "IT Quiz",
            desc: "Revelations '24",
            image: img24_it_quiz
        },
        {
            id: 6,
            title: "Pop Quiz",
            desc: "Revelations '24",
            image: img24_popquiz
        },
        {
            id: 7,
            title: "Prompt Mania",
            desc: "Revelations '24",
            image: img24_promptmania
        },
        {
            id: 8,
            title: "Sports",
            desc: "Revelations '24",
            image: img24_sports
        },
        {
            id: 9,
            title: "UI/UX Design",
            desc: "Revelations '24",
            image: img24_uiux
        },
        {
            id: 10,
            title: "Valedictory",
            desc: "Revelations '24",
            image: img24_valedictory
        },
        {
            id: 11,
            title: "Weeb Wars",
            desc: "Revelations '24",
            image: img24_weebwars
        }
    ],
    2025: [
        {
            id: 12,
            title: "Highlight Moment",
            desc: "Revelations '25",
            image: img25_highlight
        },
        {
            id: 13,
            title: "Cosplay",
            desc: "Revelations '25",
            image: img25_cosplay
        },
        {
            id: 14,
            title: "Dream Team",
            desc: "Revelations '25",
            image: img25_dream_team
        },
        {
            id: 15,
            title: "Emcee",
            desc: "Revelations '25",
            image: img25_emcee
        },
        {
            id: 16,
            title: "Group Photo",
            desc: "Revelations '25",
            image: img25_group_photo
        },
        {
            id: 17,
            title: "Guest of Honour",
            desc: "Revelations '25",
            image: img25_guest
        },
        {
            id: 18,
            title: "Inauguration",
            desc: "Revelations '25",
            image: img25_inauguration
        },
        {
            id: 19,
            title: "Sports",
            desc: "Revelations '25",
            image: img25_sports
        },
        {
            id: 20,
            title: "Website Demo",
            desc: "Revelations '25",
            image: img25_website_demonstration
        },
        {
            id: 21,
            title: "Website Dev",
            desc: "Revelations '25",
            image: img25_website_dev
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
                    <h1 className="gallery-title">HAWKINS ARCHIVES</h1>
                    <p className="gallery-description">
                        RESTRICTED ACCESS. The following visual records document the strange occurrences and community gatherings observed within the Central Campus radius during 2024 and 2025. Authorized personnel only.
                    </p>

                    <div className="year-selector-container">
                        <div className="year-selector">
                            <button
                                className={`year-toggle-btn ${selectedYear === 2024 ? 'active' : ''}`}
                                onClick={() => setSelectedYear(2024)}
                            >
                                <span>2024</span>
                            </button>
                            <button
                                className={`year-toggle-btn ${selectedYear === 2025 ? 'active' : ''}`}
                                onClick={() => setSelectedYear(2025)}
                            >
                                <span>2025</span>
                            </button>
                        </div>
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

import React, { useState } from 'react';

const Tabs = ({ tabsData }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    // Inline styles for the tabs
    const styles = {
        container: {
            maxWidth: '600px',
            margin: '50px auto',
            fontFamily: 'Arial, sans-serif',
        },
        tabsWrapper: {
            display: 'flex',
            borderBottom: '2px solid #ddd',
        },
        tabHeader: {
            padding: '10px 20px',
            cursor: 'pointer',
            border: '1px solid #ddd',
            borderRadius: '5px 5px 0 0',
            transition: 'background-color 0.3s, color 0.3s',
            userSelect: 'none',
        },
        tabHeaderActive: {
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: 'bold',
        },
        tabContent: {
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '0 0 5px 5px',
            backgroundColor: '#f9f9f9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        contentItem: {
            opacity: 0,
            visibility: 'hidden',
            transition: 'opacity 0.5s ease, visibility 0s 0.5s',
        },
        contentItemActive: {
            opacity: 1,
            visibility: 'visible',
            transition: 'opacity 0.5s ease',
        },
    };

    // Handle tab click event
    const handleTabClick = (index, callback) => {
        setActiveTabIndex(index);
        if (callback) {
            callback(); // Execute callback if provided
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.tabsWrapper}>
                {tabsData.map((tab, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.tabHeader,
                            ...(index === activeTabIndex ? styles.tabHeaderActive : {}),
                        }}
                        onClick={() => handleTabClick(index, tab.callback)}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>
            <div style={styles.tabContent}>
                {tabsData.map((tab, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.contentItem,
                            ...(index === activeTabIndex ? styles.contentItemActive : {}),
                        }}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;

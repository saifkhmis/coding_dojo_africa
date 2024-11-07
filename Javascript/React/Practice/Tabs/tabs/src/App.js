import React from 'react';
import Tabs from './components/Tabs';

function App() {
    const tabsData = [
        {
            title: "Tab 1",
            content: "This is content for Tab 1.",
            callback: () => console.log("Tab 1 clicked!")
        },
        {
            title: "Tab 2",
            content: "This is content for Tab 2.",
            callback: () => console.log("Tab 2 clicked!")
        },
        {
            title: "Tab 3",
            content: "This is content for Tab 3.",
            callback: () => console.log("Tab 3 clicked!")
        }
    ];

    return (
        <div className="App">
            <h1>Tabs Example</h1>
            <Tabs tabsData={tabsData} />
        </div>
    );
}

export default App;

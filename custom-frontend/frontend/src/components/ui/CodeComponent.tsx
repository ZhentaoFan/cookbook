// import React, { useEffect } from 'react';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css'; // or any other theme you prefer

// const CodeComponent = ({ code }) => {
    // useEffect(() => {
    //     Prism.highlightAll();
    // }, [code]); // Run Prism when the `code` prop changes
// useEffect(() => {
//     const codeElements = document.querySelectorAll('pre code');

//     codeElements.forEach((block) => {
//         if (block.dataset.highlighted) {
//             // Remove the data-highlighted attribute
//             delete block.dataset.highlighted;
//         }

//         // Apply syntax highlighting
//         Prism.highlightElement(block);
//     });
// }, [code]); // Dependency array, re-run effect if `code` changes

//     return (
//         <pre><code className="language-python">{code}</code></pre>
//     );
// };

// export default CodeComponent;


import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';  // You can choose another style

const CodeComponent = ({ code }) => {
    useEffect(() => {
        const codeElements = document.querySelectorAll('pre code');

        codeElements.forEach((block) => {
            if (block.dataset.highlighted) {
                // Remove the data-highlighted attribute
                delete block.dataset.highlighted;
            }

            // Apply syntax highlighting
            hljs.highlightElement(block);
        });
    }, [code]); // Dependency array, re-run effect if `code` changes

    return (
        <pre><code className="language-python">{code}</code></pre>
    );
};

export default CodeComponent;

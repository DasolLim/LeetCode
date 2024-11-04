import React, { useState, useEffect } from 'react';
import problemsData from '../problemsData.json';
import './ProblemList.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

function ProblemList() {
    const [problems, setProblems] = useState(problemsData);

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem('comments') || '{}');
        const updatedProblems = problems.map(problem => ({
            ...problem,
            comments: Array.isArray(savedComments[problem.id]) ? savedComments[problem.id] : []
        }));
        setProblems(updatedProblems);
    }, []);

    const addComment = (id, newCommentText) => {
        const newComment = {
            text: newCommentText,
            timestamp: new Date().toLocaleString(),
            editing: false,
        };

        const updatedProblems = problems.map(problem => {
            if (problem.id === id) {
                return { ...problem, comments: [...problem.comments, newComment] };
            }
            return problem;
        });
        setProblems(updatedProblems);
        saveCommentsToLocalStorage(updatedProblems);
    };

    const saveCommentsToLocalStorage = (problems) => {
        const comments = problems.reduce((acc, problem) => {
            acc[problem.id] = problem.comments;
            return acc;
        }, {});
        localStorage.setItem('comments', JSON.stringify(comments));
    };

    const problemsByCategory = problems.reduce((acc, problem) => {
        acc[problem.category] = acc[problem.category] || [];
        acc[problem.category].push(problem);
        return acc;
    }, {});

    return (
        <div className="problem-list">
            {Object.keys(problemsByCategory).map(category => (
                <div key={category} className="category-section">
                    <h3 className="category-title">{category}</h3>
                    <ul>
                        {problemsByCategory[category].map(problem => (
                            <li key={problem.id} className="problem-item">
                                <h4>{problem.title}</h4>
                                <SyntaxHighlighter language="python" style={atomDark}>
                                    {problem.solution}
                                </SyntaxHighlighter>
                                <div className="add-comment-section">
                                    <textarea
                                        placeholder="Write a comment..."
                                        onBlur={(e) => {
                                            if (e.target.value) {
                                                addComment(problem.id, e.target.value);
                                                e.target.value = "";
                                            }
                                        }}
                                    />
                                    <button onClick={() => addComment(problem.id, "New comment")} className="add-comment-btn">Save Comment</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default ProblemList;
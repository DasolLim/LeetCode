import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProblemDetails.css';

const problems = [
    { id: 1, title: "Reverse Words in a String", description: "Reverse the order of words in a string.", solution: "function reverseWords(s) { return s.split(' ').reverse().join(' '); }" },
    { id: 2, title: "Number of Good Pairs", description: "Count pairs with equal elements in an array.", solution: "function numIdenticalPairs(nums) { /* solution code here */ }" },
    // Add more problem data as needed
];

function ProblemDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const problem = problems.find(p => p.id === parseInt(id));

    if (!problem) return <p>Problem not found</p>;

    return (
        <div className="problem-details-page">
            <h2>{problem.title}</h2>
            <p><strong>Description:</strong> {problem.description}</p>
            <h3>Solution:</h3>
            <pre>{problem.solution}</pre>
            <button className="back-button" onClick={() => navigate('/')}>Back</button>
        </div>
    );
}

export default ProblemDetails;
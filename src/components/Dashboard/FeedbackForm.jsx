import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = ({ supplierId }) => {
  const [feedback, setFeedback] = useState({
    rating: 0,
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/feedback`, { ...feedback, supplierId })
      .then((response) => {
        alert("Feedback submitted successfully!");
        setFeedback({ rating: 0, comment: "" });
      })
      .catch((error) => console.error("Error submitting feedback:", error));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Submit Feedback</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            min="1"
            max="5"
            value={feedback.rating}
            onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Comment</label>
          <textarea
            value={feedback.comment}
            onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition-all"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
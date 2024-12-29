import React, { useState } from "react";
import { Rating } from "@mantine/core";
import { createReview } from "../../BaseURL/Review";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const ReviewSubmit = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    title: "",
    commentText: "",
    rating: 0,
  });

  const { mutate: handleSubmitReview } = useMutation({
    mutationKey: ["createreview"],
    mutationFn: createReview,
    onSuccess: () => {
      toast.success("Review added successfully");
      queryClient.invalidateQueries({ queryKey: ["review"] });
      setFormData({ title: "", commentText: "", rating: 0 });
    },
    onError: (error) => {
      toast.error(`Failed to add review: ${error.message}`);
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (value) => {
    setFormData((prev) => ({ ...prev, rating: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.commentText || formData.rating === 0) {
      toast.error("All fields are required.");
      return;
    }

    handleSubmitReview(formData);
  };

  console.log("Submitting review data:", formData);

  return (
    <div className="pt-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg border border-gray-200"
      >
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Rating
          </label>
          <Rating
            value={formData.rating}
            onChange={handleRatingChange}
            fractions={2}
            size="md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Review Title"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="commentText"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Comment
          </label>
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <textarea
            id="commentText"
            name="commentText"
            value={formData.commentText}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Write your review here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-all"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewSubmit;

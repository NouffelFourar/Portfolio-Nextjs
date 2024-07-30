"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    quote: "",
  });
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    const savedTestimonials = localStorage.getItem("testimonials");
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    } else {
      const defaultTestimonials = [
        {
          id: 1,
          name: "John Doe",
          quote: "This product is amazing! It has changed my life.",
        },
        {
          id: 2,
          name: "Jane Smith",
          quote: "I highly recommend this service to everyone.",
        },
        {
          id: 3,
          name: "Bob Johnson",
          quote: "I'm so glad I found this company. They are the best.",
        },
      ];
      setTestimonials(defaultTestimonials);
      localStorage.setItem("testimonials", JSON.stringify(defaultTestimonials));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  const handleEdit = (index, quote) => {
    setEditingIndex(index);
    setEditValue(quote);
  };

  const handleSave = (index) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[index].quote = editValue;
    setTestimonials(updatedTestimonials);
    setEditingIndex(-1);
    setEditValue("");
  };

  const handleAddTestimonial = () => {
    if (newTestimonial.name && newTestimonial.quote) {
      const updatedTestimonials = [
        ...testimonials,
        { ...newTestimonial, id: testimonials.length + 1 },
      ];
      setTestimonials(updatedTestimonials);
      setNewTestimonial({ name: "", quote: "" });
    }
  };

  const handleDeleteTestimonial = (index) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials.splice(index, 1);
    setTestimonials(updatedTestimonials);
  };

  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#181818] rounded-lg p-6 cursor-pointer"
            >
              <h3 className="text-white font-bold text-xl mb-4">
                {testimonial.name}
              </h3>
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editValue}
                  className="bg-[#121212] text-white w-full p-2 rounded-lg mb-4"
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSave(index);
                    }
                  }}
                />
              ) : (
                <p className="text-[#ADB7BE] text-base">{testimonial.quote}</p>
              )}
              <div className="flex justify-between items-center">
                <button
                  className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-4 py-2 rounded-full"
                  onClick={() =>
                    editingIndex === index ? handleSave(index) : handleEdit(index, testimonial.quote)
                  }
                >
                  {editingIndex === index ? "Save" : "Edit"}
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full"
                  onClick={() => handleDeleteTestimonial(index)}
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-white mb-4">Add Testimonial</h3>
          <input
            type="text"
            placeholder="Name"
            value={newTestimonial.name}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, name: e.target.value })
            }
            className="bg-[#121212] text-white w-full p-2 rounded-lg mb-4"
          />
          <input
            type="text"
            placeholder="Quote"
            value={newTestimonial.quote}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, quote: e.target.value })
            }
            className="bg-[#121212] text-white w-full p-2 rounded-lg mb-4"
          />
          <button
            className="bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white px-4 py-2 rounded-full"
            onClick={handleAddTestimonial}
          >
            Add Testimonial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
"use client";

import React, { useState } from "react";
import { Card, CardBody, Avatar, Button } from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@gravity-ui/icons"; 
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Khan",
    handle: "@sarahk",
    role: "Student, Dhaka University",
    image: "/images/T1.jpg", 
    text: "This platform is a lifesaver! I've saved so much on textbooks and discovered amazing new reads. The interface is intuitive, and delivery is always on time.",
    rating: 5,
  },
  {
    name: "Rahim Ahmed",
    handle: "@rahim_a",
    role: "Avid Reader",
    image: "/images/T2.jpg",
    text: "I love the variety of books available. The borrowing process is seamless, and I can always find something interesting to read.",
    rating: 5,
  },
  {
    name: "Anika Rahman",
    handle: "@anika_r",
    role: "Book Enthusiast",
    image: "/images/T3.jpg",
    text: "Great customer service and a fantastic selection of books. Highly recommended for anyone looking to read more without buying every book.",
    rating: 4,
  },
  {
    name: "Karim Sheikh",
    handle: "@karim_s",
    role: "Library Member",
    image: "/images/T4.jpg",
    text: "Easy to use and reliable. I've been using this platform for months now and have had a great experience every time.",
    rating: 5,
  },
  {
    name: "Nusrat Jahan",
    handle: "@nusrat_j",
    role: "Student",
    image: "/images/T5.jpg",
    text: "A wide range of genres to choose from. The books are in great condition, and the delivery is always prompt.",
    rating: 4,
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <div className="max-w-7xl mx-auto">
        <div className="w-full max-w-4xl mx-auto py-16 px-4">
      
      <div className="flex items-center justify-between gap-4">
        
       
        <Button 
          isIconOnly 
          variant="flat" 
          radius="full" 
          className="bg-white shadow-lg border border-default-200 z-20 hover:bg-default-100 p-2 h-12 w-12"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

       
        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 border border-default-200 shadow-md rounded-3xl">
                <div className="flex flex-col items-center text-center gap-4">
                  <Image 
                    src={current.image} 
                    alt={"jhon"}
                    className="object-cover rounded-full shadow-md" 
                    width={96}
                    height={96}
                    color="primary"
                  />
                  <div>
                    <h3 className="text-xl font-bold">{current.name}</h3>
                    <p className="text-sm text-default-500">{current.handle}</p>
                  </div>
                  <p className="text-default-700 italic">“{current.text}”</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-warning fill-warning" />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

       
        <Button 
          isIconOnly 
          variant="flat" 
          radius="full" 
          className="bg-white shadow-lg border border-default-200 z-20 hover:bg-default-100 p-2 h-12 w-12"
          onClick={nextSlide}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
    </div>
  );
}
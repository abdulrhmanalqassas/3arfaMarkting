import { useState } from "react";

export default function TeamMembers() {
  const teamMembers = [
    {
      name: "Marvin McKinney",
      role: "Founder",
      image: "https://pagedone.io/asset/uploads/1698649968.png",
    },
    {
      name: "Kathryn Murphy",
      role: "CTO",
      image: "https://pagedone.io/asset/uploads/1698650000.png",
    },
    {
      name: "Jerome Bell",
      role: "CMO",
      image: "https://pagedone.io/asset/uploads/1698659360.png",
    },
    {
      name: "Wade Warren",
      role: "CEO",
      image: "https://pagedone.io/asset/uploads/1698650109.png",
    },
    {
      name: "Leslie Alexander",
      role: "Customer Support",
      image: "https://pagedone.io/asset/uploads/1698650146.png",
    },
    {
      name: "Guy Hawkins",
      role: "HR",
      image: "https://pagedone.io/asset/uploads/1698650184.png",
    },
    {
      name: "Ronald Richards",
      role: "CO-Founder",
      image: "https://pagedone.io/asset/uploads/1698650213.png",
    },
    {
      name: "Devon Lane",
      role: "UI Designer",
      image: "https://pagedone.io/asset/uploads/1698650242.png",
    },
    {
      name: "Dianne Russell",
      role: "Product Designer",
      image: "https://pagedone.io/asset/uploads/1698650271.png",
    },
  ];

  const TeamMember = ({ member }) => {
    return (
      <div className="group block text-center">
        <div className="relative mb-5">
          <img
            src={member.image}
            alt={`${member.name} image`}
            className="w-28 h-28 rounded-2xl object-cover mx-auto transition-all duration-500 border-2 border-solid border-transparent group-hover:border-indigo-600"
          />
        </div>
        <h4 className="text-xl text-yellow-900 font-semibold text-center mb-2 transition-all duration-500 group-hover:text-indigo-600">
          {member.name}
        </h4>
        <span className="text-yellow-500 text-center block transition-all duration-500 group-hover:text-yellow-900">
          {member.role}
        </span>
      </div>
    );
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold text-yellow-900 mb-6">
            Meet the brains
          </h2>
          <p className="text-lg text-yellow-500 text-center">
            These people work on making our product best.
          </p>
        </div>
        <div className="grid  md:grid-cols-4 lg:grid-cols-5 gap-8 gap-y-14 max-w-3xl mx-auto lg:max-w-full">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

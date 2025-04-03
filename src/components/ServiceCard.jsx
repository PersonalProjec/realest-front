import React from 'react';

const ServiceCard = ({ title, description, icon: IconComponent, link }) => {
  return (
    <div className="relative p-6 rounded-3xl bg-gradient-to-br from-teal-50 to-emerald-100 shadow-2xl hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="p-3 bg-white rounded-full">
          <IconComponent className="h-14 w-12 text-blue-500" />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold font-palanquin text-coral-red mb-2">
          {title}
        </h2>
        <p className="text-sm font-palanquin text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        {link && (
          <a
            href={link}
            className="text-blue-500 font-bold font-palanquin hover:text-emerald-700 transition-colors duration-200"
          >
            {link}
          </a>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
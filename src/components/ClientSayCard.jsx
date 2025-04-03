import React from 'react'

const ClientSayCard = ({name, role, avatarUrl, quote}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
      <div className="text-center mb-6">
        <img 
          src={avatarUrl} 
          alt="image" 
          className='-20 h-20 mx-auto border-4 rounded-full'
        />
        <h3 className="mt-4 text-xl font-semibold">{name}</h3>
        <p className="text-realestate-muted">{role}</p>
      </div >
      
        <p className="text-xl text-center italic mb-6">{quote}</p>

      
    </div>
  )
}

export default ClientSayCard
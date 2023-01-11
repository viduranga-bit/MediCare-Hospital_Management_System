import React from 'react';

const Header = ({ category, title }) => (
  <div className=" mb-8">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl align center font-extrabold tracking-tight text-slate-800">
      {title}
    </p>
  </div>
);

export default Header;

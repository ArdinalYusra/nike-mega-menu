import React from "react";

const MegaMenu = ({ product }: any) => {
  return (
    <div className="absolute top-20 left-0 w-full min-h-screen bg-black/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300">
      <div className="grid grid-cols-5 gap-5 px-40 py-10 bg-white">
        {product.map((item: any, i: number) => (
          <div key={i} className="font-semibold space-y-5">
            <h1 className="hover:opacity-50">{item.title}</h1>
            <div className="space-y-3">
              {item.items.map((item: any, i: number) => (
                <p key={i} className="text-sm opacity-70 hover:opacity-100">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;

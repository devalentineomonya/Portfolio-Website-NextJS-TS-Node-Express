import React from "react";
const ContactCard = ({
  icon,
  content,
}: {
  icon: React.ReactNode;
  content: string;
}) => {
  return (
    <div className="w-[26rem] aspect-video rounded-lg bg-gray-50 p-4 flex flex-col justify-between">
      <div className="w-14 aspect-square rounded-full bg-gray-100 text-2xl flex items-center justify-center">{icon}</div>
      <div className="text-xl font-light ">{content}</div>
    </div>
  );
};

export default ContactCard;

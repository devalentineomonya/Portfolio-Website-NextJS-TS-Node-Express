import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <h4 className="text-muted-foreground mb-8 max-w-2xl">{description}</h4>
    </div>
  );
};

export default PageHeader;

import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add any custom props here if needed
}

const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader: React.FC<CardHeaderProps> = ({ className, children, ...props }) => {
  return (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

interface CardTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardTitle: React.FC<CardTitleProps> = ({ className, children, ...props }) => {
  return (
    <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
      {children}
    </h3>
  );
};

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent: React.FC<CardContentProps> = ({ className, children, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardTitle, CardContent };
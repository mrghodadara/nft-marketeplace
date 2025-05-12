import React from 'react';

export const Spinner: React.FC<{ size?: string; color?: string }> = ({
  size = 'w-6 h-6',
  color = 'border-gray-300',
}) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`inline-block ${size} animate-spin rounded-full border-2 border-t-transparent ${color}`}
    />
  );
};

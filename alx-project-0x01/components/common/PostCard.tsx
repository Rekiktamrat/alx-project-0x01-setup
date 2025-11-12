import React from 'react';

interface PostCardProps {
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="p-4 border rounded-lg shadow hover:shadow-md transition">
      <h2 className="font-semibold text-xl mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default PostCard;

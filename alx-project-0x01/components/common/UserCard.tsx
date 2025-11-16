import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ 
  name, 
  username, 
  email, 
  address, 
  phone, 
  website, 
  company 
}) => {
  return (
    <div className="max-w-sm mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-center mb-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
          <span className="text-white font-bold text-lg">
            {name.charAt(0)}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>
      
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center">
          <span className="font-medium w-20">Email:</span>
          <span className="text-blue-500">{email}</span>
        </div>
        <div className="flex items-center">
          <span className="font-medium w-20">Phone:</span>
          <span>{phone}</span>
        </div>
        <div className="flex items-start">
          <span className="font-medium w-20">Address:</span>
          <span>
            {address.street}, {address.suite}<br />
            {address.city}, {address.zipcode}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-medium w-20">Website:</span>
          <a href={`http://${website}`} className="text-blue-500 hover:underline">
            {website}
          </a>
        </div>
        <div className="flex items-start">
          <span className="font-medium w-20">Company:</span>
          <span>
            <strong>{company.name}</strong><br />
            {company.catchPhrase}
          </span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <span className="text-xs text-gray-500">User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;
import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        console.log("Fetching contact messages...");
        const response = await axios.get("http://localhost:5000/api/contacts");
        console.log("Contact messages:", response.data);
        setMessages(response.data.contacts);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contacts:", err);
        setError("Failed to fetch contact messages");
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="p-4 text-white flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading contact messages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-white">
        <div className="bg-red-600 text-white p-4 rounded-lg text-center">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 text-white">
      <h2 className="text-2xl font-bold mb-6 flex justify-center">Contact Messages</h2>
      
      {messages.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400 text-lg">No contact messages yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-neutral-800 text-left border border-gray-600 text-sm">
            <thead>
              <tr className="bg-neutral-700 text-white">
                <th className="py-3 px-4 border-b">Name</th>
                <th className="py-3 px-4 border-b">Email</th>
                <th className="py-3 px-4 border-b">Phone</th>
                <th className="py-3 px-4 border-b">Message</th>
                <th className="py-3 px-4 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="border-b border-gray-700 hover:bg-neutral-700 transition-colors">
                  <td className="py-3 px-4">{msg.name}</td>
                  <td className="py-3 px-4">{msg.email}</td>
                  <td className="py-3 px-4">{msg.phone}</td>
                  <td className="py-3 px-4 max-w-xs truncate" title={msg.message}>
                    {msg.message}
                  </td>
                  <td className="py-3 px-4">
                    {new Date(msg.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-4 text-center text-gray-400">
        Total Messages: {messages.length}
      </div>
    </div>
  );
};

export default ContactForm;

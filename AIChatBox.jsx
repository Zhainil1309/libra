import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaComments, FaTimes } from "react-icons/fa";

const FloatingAIChat = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you with Libra Events today?" },
  ]);
  const [input, setInput] = useState("");

  // Knowledge base for Libra Events FAQs
  const knowledgeBase = [
    {
      keywords: ['libra', 'banquet', 'hall'],
      response:
        "Libra Banquet Hall offers a luxurious space with 500 guest capacity, valet parking, premium catering, and state-of-the-art facilities.",
    },
    {
      keywords: ['price', 'libra'],
      response: "The price for Libra Banquet Hall starts at ₹50,000 for 500 guests.",
    },
    {
      keywords: ['eva', 'banquet'],
      response:
        "Eva Banquet Hall is perfect for medium-sized gatherings with 300 guest capacity and custom menu options.",
    },
    {
      keywords: ['marigold', 'grandeur'],
      response:
        "Marigold Grandeur is a cozy venue ideal for intimate gatherings up to 200 guests.",
    },
    {
      keywords: ['contact', 'phone', 'number'],
      response:
        "You can contact Libra Events at +91 99092 54684 for bookings and inquiries.",
    },
    {
      keywords: ['capacity', 'guests'],
      response:
        "Our banquet halls offer capacities ranging from 200 to 500 guests, suitable for small to large events.",
    },
    {
      keywords: ['parking'],
      response:
        "We provide valet parking and free parking options at our venues depending on the hall selected.",
    },
    // Add more entries here as needed
  ];

  // Auto open chat after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => setOpen(!open);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    const userInput = input.toLowerCase();
    setInput("");

    // Search knowledge base for keywords in user input
    const matched = knowledgeBase.find((item) =>
      item.keywords.some((keyword) => userInput.includes(keyword))
    );

    const reply = matched
      ? matched.response
      : `Sorry, I don't have information on that. You can contact us at +91 99092 54684 for assistance.`;

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Icon */}
      {!open && (
        <button
          onClick={toggleChat}
          style={styles.floatingButton}
          aria-label="Open chat"
          title="Open chat"
        >
          <FaComments size={24} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div style={styles.chatContainer}>
          <div style={styles.header}>
            <span>AI Chat - Libra Events</span>
            <button onClick={toggleChat} style={styles.closeButton} aria-label="Close chat">
              <FaTimes />
            </button>
          </div>

          <div style={styles.messagesContainer}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.message,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor: msg.sender === "user" ? "#007bff" : "#e5e5ea",
                  color: msg.sender === "user" ? "white" : "black",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              style={styles.input}
            />
            <button onClick={handleSend} style={styles.sendButton} aria-label="Send Message">
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  floatingButton: {
    position: "fixed",
    bottom: "30px",
    right: "0px",
    marginRight: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  chatContainer: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    width: "350px",
    height: "500px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "white",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    zIndex: 1000,
  },
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    fontWeight: "bold",
    fontSize: "16px",
  },
  closeButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "18px",
  },
  messagesContainer: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    backgroundColor: "#f7f7f7",
  },
  message: {
    maxWidth: "70%",
    padding: "10px",
    borderRadius: "15px",
    wordBreak: "break-word",
  },
  inputContainer: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ccc",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "8px 12px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  sendButton: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default FloatingAIChat;

# InstaCook

**InstaCook** is a full-stack social media application designed to replicate the core user experience of Instagram. This project was built to demonstrate proficiency in building scalable CRUD operations, complex database relationships, and a modern, responsive user interface.

---

## Key Technical Features

- **Dynamic Social Feed:** Implemented a personalized home feed that fetches and displays posts from followed users in real-time.
- **Media Management:** Integrated Cloudinary for secure image uploads and optimized delivery.
- **Profile Update:** Added the feature to update user profile picture, bio, name and other details.
- **User Interaction Engine:**
  - Real-time **Likes** and **Comments** functionality.
  - Robust **Follow/Unfollow** system managing user relationships.
- **Instant UI Feedback:** Optimized user experience with optimistic updates and loading states.

---

## Technical Stack

| Layer              | Technology                    |
| :----------------- | :---------------------------- |
| **Frontend**       | React.js, Tailwind CSS, Redux |
| **Backend**        | Node.js, Express.js           |
| **Database**       | MongoDB                       |
| **Authentication** | JSON Web Token                |

---

## Engineering Challenges & Solutions

### **The "Following" Logic**

Managing the relationship between users (Followers/Following) required a deep dive into database indexing. I structured the data to ensure that fetching a user's feed is performant, even as the number of posts grows.

### **State Management**

To ensure the app feels "snappy", I used Redux to manage global state, ensuring that liking a post or following a user updates the UI instantly without requiring a full page reload.

---

## How to Run Locally

1. **Clone the repo:**

   ```bash
   git clone https://github.com/sanketagarwal27/InstaCook.git
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Environment Setup:**

   Create a .env file in your backend folder and write all the values of keys mentioned in .env.example.

4. **Start the server:**

   ```bash
   npm run dev
   ```

## Author

**Sanket Agarwal:**

- [LinkedIn](www.linkedin.com/in/sanket-agarwal-b7b7a731b)
- [Email](mailto:sanketagarwal314@gmail.com)

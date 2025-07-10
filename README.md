# 🚀 SniperThink — Business Automation Dashboard

A modern, responsive dashboard web application designed for small and micro businesses to make data-driven decisions using real-time insights.
Includes a hero carousel, feature showcase, pricing plans, dark mode toggle, and a functional contact form.

---

## 🛠 Tech Stack

* **Frontend:** React.js + Tailwind CSS
* **Backend (Optional):** Node.js + Express.js
* **State Management:** React Hooks (`useState`, `useEffect`)
* **Form Validation:** Vanilla JS + React
* **Styling:** Tailwind CSS (utility-first CSS framework)
* **Data Format:** JSON (used for mock API responses)

---

## 📦 Setup Instructions

### 🔧 Local Development Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/sniperthink.git
   cd sniperthink
   ```

2. **Install Frontend Dependencies**

   ```bash
   npm install
   ```

3. **(Optional) Set Up Backend API**

   ```bash
   cd backend
   npm install
   ```

4. **Start Development Servers**

   In one terminal (for React):

   ```bash
   npm start
   ```

   In another terminal (for backend, optional):

   ```bash
   node server.js
   ```

5. Open your browser at:
   📍 `http://localhost:3000`

---

## 🌐 API Endpoints (Backend - Optional)

| Method | Endpoint        | Description                      |
| ------ | --------------- | -------------------------------- |
| GET    | `/api/slides`   | Returns carousel slide data      |
| GET    | `/api/features` | Returns list of app features     |
| GET    | `/api/pricing`  | Returns pricing plans            |
| POST   | `/api/contact`  | Accepts contact form submissions |

### Example Contact Payload

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Excited to try SniperThink!"
}
```

> By default, submissions are logged to the console. You can configure file logging or connect a database.

---

## ✨ Features

* ✅ Fully responsive layout
* 🌙 Dark mode toggle with smooth transitions
* 🖼️ Auto-advancing hero image carousel
* 🧹 Feature showcase cards with emoji icons
* 💳 Pricing table with popular plan highlighting
* 📨 Contact form with client-side validation
* 🕓 Skeleton loading states
* 🔗 Footer with navigation and social links

---

## ⚠️ Known Issues & Limitations

* **🖼️ Carousel Images Not Loading**
  External images from `https://picsum.photos` may sometimes fail due to CORS/network issues.
  🔧 *Fix:* Use local assets or CDN-hosted images.

* **🧪 Mock Data Only**
  Data is currently hardcoded JSON (no database).
  ✅ *Planned:* Firebase or MongoDB integration.

* **📲 Mobile Navigation**
  Mobile menu not yet implemented.
  🕒 *Planned:* Upcoming UI update.

* **📤 Contact Form Submission**
  Simulated by default (no real backend/email service).
  ⭮️ Optional backend is available.

* **🎨 Fonts**
  Using system fonts. Google Fonts can be added easily.

---

## 🚀 Deployment Options

| Platform         | Description                        |
| ---------------- | ---------------------------------- |
| **Vercel**       | Great for static React apps        |
| **Netlify**      | Drag-and-drop deploy support       |
| **GitHub Pages** | Ideal for simple hosting           |
| **Render**       | Supports both frontend & backend   |
| **Railway**      | Great for backend APIs (free tier) |

---

## 📝 License

This project is licensed under the **MIT License** — see the `LICENSE` file for details.

---

## 🤝 Contributions

Contributions are welcome!
You can open issues or pull requests for:

* Adding TypeScript support
* Implementing user authentication
* Connecting to a real database
* Improving accessibility & UI

---

## 💬 Contact

Have questions or ideas? Feel free to reach out:

* 📧 Email: [hello@sniperthink.com](mailto:hello@sniperthink.com)
* 🕊️ Twitter: [@SniperThinkApp](https://twitter.com/SniperThinkApp)

---

> 🌟 Thank you for checking out **SniperThink**!
> Let’s automate smarter — together.

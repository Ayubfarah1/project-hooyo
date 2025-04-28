# 🌸 Project Hooyo Website

A modern, responsive web platform supporting survivors of domestic violence — with a focus on women of color and single mothers. Built using **Next.js**, **Tailwind CSS**, and **Framer Motion**, this site offers resources, community engagement, donation options, and more.

---

## 🚀 Live Demo
[https://project-hooyo.vercel.app](https://project-hooyo.vercel.app)  
*(Replace with your actual deployed link)*

---

## 📂 Project Structure

```
project-hooyo/
├── components/          # Reusable UI components (Navbar, Layout, etc.)
├── data/                # Static data for pages (blog posts, resources, etc.)
├── pages/               # Main Next.js pages (routing handled here)
│   ├── api/             # API routes (contact form, Stripe checkout)
│   ├── index.js         # Home page
│   ├── about-us.js
│   ├── resources.js
│   ├── for-survivors.js
│   ├── get-involved.js
│   ├── donate.js
│   ├── blog.js
│   └── contact.js
├── public/              # Static assets (images, logo)
├── styles/              # Global CSS (Tailwind config)
├── tailwind.config.js   # TailwindCSS customization
└── package.json         # Project metadata & dependencies
```

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (React-based, server-side rendering)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Custom Config
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Payments:** [Stripe API](https://stripe.com/) for donations
- **Email Handling:** Nodemailer with Gmail SMTP (Contact Form)
- **Deployment:** [Vercel](https://vercel.com/)

---

## ⚡ Getting Started

### 1️⃣ Clone the Repo
```bash
git clone https://github.com/your-username/project-hooyo.git
cd project-hooyo
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env.local` file in the root:

```ini
# Stripe
STRIPE_SECRET_KEY=sk_test_your_key_here

# SMTP Email (Gmail App Password)
SMTP_USER=your.email@gmail.com
SMTP_PASS=your_app_password
CONTACT_TO_EMAIL=contact@projecthooyo.org
```

> ⚠️ **Never commit `.env.local` to GitHub!**

---

### 4️⃣ Run Locally
```bash
npm run dev
```
Visit `http://localhost:3000`

---

## 🌐 Deployment

This project is optimized for **Vercel**:

1. Push to GitHub.
2. Connect your repo to Vercel.
3. Add environment variables in the Vercel dashboard.
4. Click Deploy!

---

## ✨ Key Features

- **Responsive Design:** Mobile-first, accessible layout.
- **Animated UI:** Smooth transitions using Framer Motion.
- **Dynamic Blog:** Easy to expand with static data or future CMS integration.
- **Donation System:** Integrated Stripe Checkout for one-time & recurring gifts.
- **Contact Form:** Secure email submissions via Nodemailer.
- **Social Media Integration:** Clean icon-based links.
- **Emergency Exit Button:** *(Recommended addition for user safety).*

---

## 📌 Pages Overview

| Page           | Path            | Description                                |
|----------------|-----------------|--------------------------------------------|
| Home           | `/`             | Mission statement, quick links             |
| About Us       | `/about-us`     | Story, vision, meet the team               |
| Resources      | `/resources`    | Helplines, legal aid, mental health        |
| For Survivors  | `/for-survivors`| Healing stories, peer support              |
| Get Involved   | `/get-involved` | Volunteer, partner, fundraise              |
| Donate         | `/donate`       | Donation options via Stripe                |
| Blog           | `/blog`         | Updates, articles, guest posts             |
| Contact Us     | `/contact`      | Secure form + social media links           |

---

## 🚧 Future Improvements

- Integrate a **Headless CMS** (e.g., Sanity) for blog & content management.
- Add a **Success Page** after donations & contact submissions.
- Implement **user authentication** for personalized features.
- Improve **SEO** with dynamic meta tags.
- Add a global **Emergency Exit Button**.
- Perform accessibility audits (**WCAG compliance**).

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes
4. Push and open a Pull Request

---

## 📬 Contact

For questions or collaborations:

- 📧 [contact@projecthooyo.org](mailto:contact@projecthooyo.org)
- 📸 [Instagram](https://instagram.com/yourprofile)
- 🔗 [LinkedIn](https://linkedin.com/company/yourprofile)

---

## ⚖️ License

This project is open-source and available under the **MIT License**.

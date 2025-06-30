# **Facebook Tools**

This is a repository of **Node.js-based application** that performs **Facebook access token verification**, **automated message sending** on Facebook Messenger, and **automated commenting** on Facebook Posts.

## **🚀 Features**

### **🔹 Access Token Verification**
- Users can **input their Facebook access token** through a simple form.
- The backend checks the token's **validity** using the **Facebook Graph API**.
- If valid, it displays **user details** (Name, ID & Profile URL); if invalid or expired, an **error message** is shown.

### **🔹 Automated Facebook Message Sender**
- Uses **Facebook Graph API** to send **automated messages** on Messenger.
- Supports **continuous message sending** with a custom **speed delay**.
- Upload **.txt files** containing messages (File limit 1MB).
- Implements **rate limit handling** to avoid API restrictions.
- **Process management** system with start/stop functionality using PID tracking.

### **🔹 Facebook Post Comment Automation** *(NEW)*
- **Automated commenting** on any Facebook post using Graph API.
- **Bulk comment posting** from uploaded .txt files (File limit 1MB).
- **Customizable speed control** with delay between comments.
- **Real-time process management** with server start/stop controls.

### **🔹 Built With**
- **Node.js & Express.js** - For handling backend requests.
- **EJS** - For rendering dynamic web pages.
- **Axios** - For making API calls to Facebook Graph API.
- **Multer** - For handling file uploads (.txt files).
- **CSS** - For styling the frontend with responsive design.
- **Font Awesome Library** - For displaying modern icons.

## **⚡ Key Features**
- **Token Validation** before any automation starts
- **Real-time Process Management** with PID tracking
- **File Upload Support** for bulk operations with size limit of 1MB
- **Rate Limiting Protection** to avoid API blocks
- **Responsive Design** that works on all devices
- **Error Handling** with user-friendly messages
- **Clean UI/UX** with intuitive navigation

## **📌 How to Use**

### **1️⃣ Start the Server**
- Clone this repository:
```sh
git clone https://github.com/sameer-siins/Fb-Tools.git
```
- Go to a directory (like Token-Checker):
```sh
cd Fb-Tools/Token-Checker
```
- Install dependencies:
```sh
npm install
```
- Run this command:
```sh
node app.js
```
- Make sure you already have installed **Node.js** latest version on your system.

### **2️⃣ Open the Web Interface**
- Go to **http://localhost:3000/** and see the interface.

## **🛠️ Deployment**
- Project is deployed on **Render.com**.
- Visit **https://fbtokencheckerbysameersiins-6i0m.onrender.com/** to see the **token checker**.
- Visit **https://fbmessengerbysameersiins.onrender.com/** to see the **messenger server**.
- Visit **https://fbpostserverbysameersiins-7ven.onrender.com/** to see the **post server**.

<br><br>

#### **💻 Created by Sameer Siins**
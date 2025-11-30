AI_LearnMate – Figma UI Version

A clean Expo-based mobile UI built using React Native, fully inspired by the provided Figma design.
This project includes Login, Register, Reset Password, Student Dashboard, Video Details, Profile & Upload Lecture screens — all UI-only (no backend).

🚀 Tech Stack

Expo SDK 54 (Expo Go compatible)

React Native

React Navigation v6

Expo Linear Gradient

Vector Icons (Expo Icons)

This project contains only UI as per your requirement and is ready for backend integration.

📁 Project Structure
AI_LearnMate/
│
├── App.js
├── README.md
│
├── assets/
│   ├── logo.png (placeholder)
│   ├── profile.png (placeholder)
│   └── figma_mock.jpg
│
├── components/
│   ├── BottomNav.js
│   ├── HeaderSmall.js
│   ├── VideoCard.js
│   └── InputField.js
│
└── screens/
    ├── LoginScreen.js
    ├── RegisterScreen.js
    ├── ResetPasswordScreen.js
    ├── PasswordSuccessScreen.js
    ├── StudentHomeScreen.js
    ├── VideoDetailScreen.js
    ├── ProfileScreen.js
    └── UploadLectureScreen.js

⚙️ Installation & Setup
1️⃣ Install dependencies

Run the following commands in your project directory:

npm install
npx expo install expo-linear-gradient react-native-safe-area-context react-native-screens react-native-gesture-handler @expo/vector-icons

2️⃣ Start the project
expo start -c


This clears the cache and prevents version mismatch issues.

3️⃣ Open in Expo Go

Scan the QR code using Expo Go v54 on Android.

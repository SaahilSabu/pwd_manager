# Password Manager Project

![Password Manager](./screenshot.png)

This project demonstrates the implementation of a secure password manager that uses advanced hashing and encryption strategies to ensure the safety of user data. The application is built using React.js for the frontend and TypeScript for type-safe coding. The backend server is set up to handle user registration, login, and vault management securely.

## Hashing vs Encryption

Hashing is a one-way process that transforms data into a fixed-size string of characters, while encryption is a two-way process that converts data into a format that can be decrypted back to its original state. This project uses SHA256 and Argon2 for hashing, and AES256 for encryption.

## Data Flow

![Data Flow Diagram](./diagram.png)

The data flow diagram illustrates the secure management of user data within the application. User passwords are hashed using suitable algorithms during registration and verified during login. The vault key is generated using pbkdf2, enabling the secure encryption and decryption of the user's password vault using AES256.

## How to Run

Follow these steps to run the project:

1. Clone the repository: `git clone https://github.com/your-username/password-manager.git`
2. Navigate to the project directory: `cd password-manager`
3. Install dependencies for the server: `cd server && npm install`
4. Start the server: `npm start`
5. Install dependencies for the client: `cd ../client && npm install`
6. Start the client: `npm start`

Make sure to configure the server and client settings properly before running.

## Conclusion

This project highlights the significance of secure password management using advanced hashing and encryption techniques. By exploring the code and following the video walkthrough, you'll gain valuable insights into creating a robust password manager application that prioritizes user data security.

Feel free to modify and adapt the code for your own projects, enhancing security practices and user data protection.

For a detailed explanation, check out the video content provided with this repository.
#   p w d _ m a n a g e r  
 
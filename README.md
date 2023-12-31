# Password Manager Project

This project demonstrates the implementation of a secure password manager that uses advanced hashing and encryption strategies to ensure the safety of user data. The application is built using React.js for the frontend and TypeScript for type-safe coding. The backend server is set up to handle user registration, login, and vault management securely.

## Hashing vs Encryption

Hashing is a one-way process that transforms data into a fixed-size string of characters, while encryption is a two-way process that converts data into a format that can be decrypted back to its original state. This project uses SHA256 and Argon2 for hashing, and AES256 for encryption.

## Data Flow

![Data Flow Diagram](./diagram.png)

The data flow diagram illustrates the secure management of user data within the application. User passwords are hashed using suitable algorithms during registration and verified during login. The vault key is generated using pbkdf2, enabling the secure encryption and decryption of the user's password vault using AES256.

## Getting Started

Follow these steps to run the project:

1. Clone the repository: `git clone https://github.com/your-username/password-manager.git`
2. Navigate to the project directory: `cd password-manager`
3. Install dependencies for the server: `cd server && npm install`
4. Start the server: `npm start`
5. Install dependencies for the client: `cd ../client && npm install`
6. Start the client: `npm start`

Make sure to configure the server and client settings properly before running.

## Features

- User registration and login with secure password hashing and verification.
- Vault management for storing encrypted passwords.
- Use of SHA256 and Argon2 for password hashing.
- AES256 encryption for secure password storage.
- Frontend built with React.js and TypeScript for type-safe development.

## Security Measures

- Passwords are hashed using SHA256 during registration and verified using Argon2 during login.
- User vault data is encrypted using AES256 encryption with a key derived from the user's password using pbkdf2.
- Communication between the client and server is secured with HTTPS.

## Future Enhancements

- Multi-factor authentication for added security.
- Improved password policy enforcement.
- Regular security audits and updates to address emerging threats.

## Contributions

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push the branch to your fork: `git push origin feature-name`.
5. Open a pull request on the main repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Special thanks to [List any libraries, frameworks, or resources you've used].

For a detailed explanation, check out the video content provided with this repository.

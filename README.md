# Scalable System with Task Handling and Queue Optimization

This repository showcases a scalable system architecture designed to handle both synchronous and asynchronous tasks efficiently. The system is built to differentiate between critical tasks, such as email services, which are handled synchronously, and less critical tasks, like payment processing, which are handled asynchronously using BullMQ, a powerful queuing service.

## Key Features

- **Task Differentiation:** Critical tasks are handled synchronously, ensuring immediate attention and seamless user experience.
- **Queue Optimization:** Leveraging the power of BullMQ, asynchronous tasks are efficiently queued and processed, optimizing system resources and performance.
- **Server Segmentation:** The system is divided into separate servers, with one dedicated to user logic and the other for processing queue responses. This segmentation enhances scalability and fault tolerance.
- **Rate Limiting:** A sophisticated rate limiter is implemented to manage queue responses, allowing for the handling of up to 10 responses simultaneously while maintaining system stability.

## Technologies Used

- Node.js
- Typescript
- Redis
- BullMQ
- Rate Limiting Strategies
- Scalability Architecture

## Usage

1. Clone the repository.
2. Install dependencies using npm or yarn.
3. Configure environment variables.
4. Start the servers and witness the scalable task handling in action.

## Contributions

Contributions and feedback are welcome! Feel free to open issues, suggest enhancements, or submit pull requests to improve the system's functionality and performance.

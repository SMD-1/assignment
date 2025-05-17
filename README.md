# Hypermart Checkout System

This assignment is a queue management system for a supermarket checkout, built with HTML, CSS, and Javascript.

## Features

- **Multiple Counters:** Simulates multiple checkout counters.
- **Smart Queueing:** New customers are assigned to the counter with the least total items.
- **Live Updates:** The UI updates in real-time as customers are added or removed.
- **Remove Functionality:** The first customer in each counter can be removed (showing checkout completion).

## How It Works

- Enter the number of items a customer has and click "Checkout Items".
- The system finds the counter with the smallest total number of items and adds the customer there.
- Each counter displays its customers and the total number of items.
- You can remove the first customer from any counter by clicking the minus icon.

## Time Complexity

- **Adding a Customer:**
  - Finding the counter with the minimum total items: O(k), where k is the number of counters.
  - Adding the customer: O(1).
  - Rendering all counters and items: O(n), where n is the total number of customers.
- **Removing a Customer:**
  - Removing the first customer: O(m), where m is the number of customers in that counter (due to array shift).
  - Rendering: O(n).
- **Overall:**
  - Each operation is dominated by the rendering step, so the effective time complexity per operation is **O(n)**.

## Space Complexity

- **O(n)**, where n is the total number of customers/items across all counters.

## Assumptions

- The number of counters is fixed (default is 3, but can be changed in the code).
- Input is expected to be a positive integer.
- Only the first customer in each counter can be removed (simulating FIFO checkout).
- No persistent storage; all data is in-memory and resets on page reload.

## How to Run

1. Clone the repository.
2. Open `index.html` in your browser.

---

**Developed as an assignment project.**

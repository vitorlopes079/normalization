# Normalization Project

## About
createEntityAdapter is a utility from Redux Toolkit that simplifies the management of entity collections (like lists of comments, users, posts, etc.) in your state. It provides a standardized way to store your data in a 'normalized' form and includes a set of reusable reducer functions and selectors.

Normalization
Normalization is a design practice where you structure your state such that each item is stored only once and is referenced by IDs elsewhere in your state. This approach is beneficial for handling complex state shapes, making updates more predictable, and improving performance.
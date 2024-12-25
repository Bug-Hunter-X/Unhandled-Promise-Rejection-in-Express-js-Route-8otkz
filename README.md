# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections within asynchronous route handlers.  The bug showcases an incomplete error handling mechanism which can lead to application crashes or unexpected behavior.  The solution provides a robust way to handle these rejections.

## Bug

The `bug.js` file contains an Express.js route that attempts to fetch user data.  If the user is not found, it returns a 404 status.  However, it does not handle potential errors during the database operation properly, causing a silent failure if the database query fails. 

## Solution

The `bugSolution.js` file demonstrates a corrected version, employing `try...catch` blocks to gracefully handle any exceptions that might occur during the database interaction.  It provides more informative error responses to the client.
# Shopping List App

## Overview

The Shopping List App is a simple web application that allows users to manage their shopping lists. Users can add items to the list and remove items as needed.

## Features

- **Add Items:** Users can enter new items into a form and add them to the list.
- **Remove Items:** Each item in the list has a remove button that allows users to delete the item.

## Testing

To ensure the quality of the application, the following tests have been implemented:

### Unit Tests

- **ItemInput:**
  - Tests that items are correctly added to the list.
- **ShoppingItem:**
  - Tests that the item name is displayed correctly and that the remove button functions as expected.

### Integration Tests

- **ShoppingList:**
  - Tests that the list displays and updates correctly when items are added or removed.
- **App:**
  - Tests that the entire application works correctly when all components are integrated.

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/toal13/shopping-list-testing.git
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Start server
   ```sh
   npm run dev
   ```

## Running tests

```sh
npm test
```

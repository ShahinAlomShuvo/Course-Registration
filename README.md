<h1 align='center'>My Project features</h1>

### 1. Course Selection and Cart Management

This Project allows users to select courses displayed on the website.
Each courses is presented with detailed information, including the course title, a banner image, course details,price and credit hours.

### 2. Cart Management

Users can conveniently add selected courses to a shopping cart for easy review and checkout.

### 3. Credit Limit and Remaining Credits

To ensure a balanced courses selection, there is a credit limit of 20 hours. Users are unable to select courses that would exceed this limit. The remaining credit hours are dynamically displayed to users and get updated as they add or removes courses from the cart.

### 4. Price Calculation

The system automatically calculates the total total prices of the selected courses and displays it to users.

### 5. Error Notification

To enhance the user experience, the project provides real-time error notifications through toast notifications. User will be promptly informed of any issues, such as:

- Attempting to select the same course multiple times.
- Having insufficient credit hours to select additional courses.
- Exceeding the established credit limit.

<h1 align='center'>How i managed the state in my assignment project</h1>

- ### App Component (App.jsx):

I have state variable like addCourse, credit, price, and remainingCredit declared using the useState hook. These variable are used to manage the cart items, the total credit, total price and the remaining credit.

- ### Courses Component (Courses.jsx):

I use the useState hook to manage the courses state variable, which is initialized as an empty array.
I fetch course data from an external JSON file using the useEffect hook, and when the data is loaded, i updated the courses state with the fetched data.

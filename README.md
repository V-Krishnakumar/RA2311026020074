# Backend Evaluation Submission

A production-oriented backend assessment submission focused on authenticated API integration, reusable middleware design, algorithmic optimization, and scalable backend system architecture.

---

## Repository Structure

```text
RA2311026020074/
├── logging middleware/
├── vehicle_maintence_scheduler/
├── notification_app_be/
│   ├── service.js
│   └── priorityInbox.js
├── notification_system_design.md
├── .gitignore
└── README.md
```

---

## Implemented Modules

### 1. Logging Middleware

Reusable logging utility integrated with protected evaluation APIs.

**Features**

* Centralized logging function
* Supports levels: debug, info, warn, error, fatal
* Backend package classification
* Secure token loading through `.env`
* Reusable across backend modules

---

### 2. Vehicle Maintenance Scheduler

Optimized scheduling engine for maximizing operational impact under mechanic-hour constraints.

**Approach**

* Dynamic Programming
* 0/1 Knapsack Optimization

**Capabilities**

* Authenticated API consumption
* Depot-wise optimization
* Efficient time-budget allocation
* Structured logging integration

---

### 3. Notification Backend Service

Minimal backend service for campus notification workflows.

**Features**

* Express server setup
* Health check route
* Expandable project structure
* Ready for future REST APIs

---

### 4. Notification System Design

Comprehensive backend architecture covering:

* REST API contracts
* Database schema design
* Query optimization
* Caching strategies
* Queue-based notifications
* Reliability improvements
* Scaling approaches
* Priority inbox architecture

Contained in:

```text
notification_system_design.md
```

---

### 5. Priority Inbox Engine

Implemented ranking logic for displaying the top unread notifications based on importance and recency.

**Logic Used**

* Placement > Result > Event
* Newer notifications receive higher priority
* Efficient Top 10 retrieval approach

Contained in:

```text
notification_app_be/priorityInbox.js
```

---

## Tech Stack

* Node.js
* JavaScript
* Express
* Axios
* Dotenv

---

## Environment Setup

Create a `.env` file in the root directory:

```env
TOKEN=your_access_token
```

---

## How to Run

### Logging Middleware Test

```bash
cd "logging middleware"
node test.js
```

### Vehicle Maintenance Scheduler

```bash
cd vehicle_maintence_scheduler
node index.js
```

### Notification Backend Service

```bash
cd notification_app_be
node service.js
```

Server URL:

```text
http://localhost:3000
```

### Priority Inbox Engine

```bash
cd notification_app_be
node priorityInbox.js
```

---

## Engineering Practices Followed

* Modular folder structure
* Reusable middleware design
* Environment-based secret management
* Frequent version control commits
* Screenshot-based execution proof
* Clear naming conventions
* Maintainable code structure
* Readable documentation

---

## Notes

* Protected APIs require a valid bearer token.
* Screenshots are included in relevant module folders.
* Submission is structured for evaluator readability and reproducibility.
* External secrets are excluded using `.gitignore`.

---

## Candidate ID

```text
RA2311026020074
```

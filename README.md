# Backend Evaluation Submission

A production-oriented backend assessment submission focused on authenticated API integration, reusable middleware design, algorithmic optimization, and backend system architecture.

---

## Repository Structure

```text
RA2311026020074/
├── logging middleware/
├── vehicle_maintence_scheduler/
├── notification_app_be/
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
* Secure token loading via `.env`

---

### 2. Vehicle Maintenance Scheduler

Optimized scheduling engine for maximizing operational impact under mechanic-hour constraints.

**Approach**

* Dynamic Programming
* 0/1 Knapsack Optimization

**Capabilities**

* Authenticated API consumption
* Depot-wise impact optimization
* Structured logging integration

---

### 3. Notification Backend Service

Minimal backend service for notification platform.

**Features**

* Express server setup
* Health route
* Expandable backend structure

---

### 4. Notification System Design

Comprehensive backend architecture covering:

* REST API contracts
* Database schema design
* Query optimization
* Scaling strategies
* Queue-based notifications
* Priority inbox design

Contained in:

```text
notification_system_design.md
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

Create `.env` in root directory:

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

Server:

```text
http://localhost:3000
```

---

## Engineering Practices Followed

* Modular folder structure
* Reusable middleware design
* Environment-based secret management
* Frequent version control commits
* Screenshot-based execution proof
* Clean and readable code structure

---

## Notes

* Protected APIs require valid bearer token.
* Screenshots are included in relevant folders.
* Submission intentionally structured for evaluator readability and reproducibility.

---

## Candidate ID

```text
RA2311026020074
```

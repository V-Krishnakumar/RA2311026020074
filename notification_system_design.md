# Stage 1

## REST APIs

### Get All Notifications

```http
GET /notifications
```

Returns all notifications for a student.

### Get Unread Notifications

```http
GET /notifications/unread
```

Returns only unread notifications.

### Create Notification

```http
POST /notifications
```

### Mark Notification as Read

```http
PATCH /notifications/:id/read
```

### Delete Notification

```http
DELETE /notifications/:id
```

## Sample Response

```json
{
  "id": 1,
  "type": "Placement",
  "message": "Company hiring",
  "isRead": false,
  "createdAt": "2026-04-22T10:00:00Z"
}
```

## Headers

```text
Authorization: Bearer token
Content-Type: application/json
```

## Real Time Notifications

Use WebSocket or Server Sent Events (SSE) for instant notification delivery.

---

# Stage 2

## Suggested Database

PostgreSQL

## Why PostgreSQL?

* Reliable and production ready
* ACID compliant
* Strong indexing support
* Good scaling capabilities
* Supports relational data well

## Schema

```sql
students(
  id PK,
  name,
  email
)

notifications(
  id PK,
  studentId FK,
  type,
  message,
  isRead,
  createdAt
)
```

## Growth Problems

* Slow read queries
* Large table scans
* High write traffic
* Storage growth

## Solutions

* Indexing
* Table partitioning
* Read replicas
* Archive old notifications

---

# Stage 3

## Why Existing Query Is Slow

```sql
SELECT * FROM notifications
WHERE studentId = 1042 AND isRead = false
ORDER BY createdAt DESC;
```

### Problems

* `SELECT *` fetches unnecessary columns
* No composite index
* Sorting becomes expensive on large data

## Better Index

```sql
(studentId, isRead, createdAt DESC)
```

## Better Query

```sql
SELECT id, type, message, createdAt
FROM notifications
WHERE studentId = 1042
AND isRead = false
ORDER BY createdAt DESC;
```

## Cost

* Without index = full table scan
* With index = logarithmic lookup

## Should We Add Indexes on Every Column?

No.

Too many indexes:

* Slow inserts
* Slow updates
* Increase storage usage
* Add maintenance overhead

## Students Who Got Placement Notification in Last 7 Days

```sql
SELECT *
FROM notifications
WHERE notificationType = 'Placement'
AND createdAt >= NOW() - INTERVAL '7 days';
```

---

# Stage 4

## Performance Improvements

1. Redis cache for unread notifications
2. Pagination
3. Lazy loading
4. Read replicas
5. WebSocket instead of repeated polling

## Tradeoffs

### Redis Cache

* Faster reads
* Extra infrastructure complexity

### Pagination

* Reduces payload size
* Requires multiple requests

### Read Replicas

* Scales reads
* Replication lag possible

### WebSocket

* Real-time updates
* Persistent connections needed

---

# Stage 5

## Problems in Current Design

* Sequential processing is slow
* Email failures interrupt flow
* No retry mechanism
* Poor scalability
* Long response times

## Better Design

Use queue-based architecture (RabbitMQ / Kafka)

### Flow

1. Save notification to DB
2. Push email job to queue
3. Worker retries failed emails
4. Push in-app notification asynchronously

## Why Save to DB Separately?

Database writes and email sending should be decoupled.

Benefits:

* Reliable storage
* Retry possible
* Faster response
* Better scalability

---

# Stage 6

## Priority Inbox Approach

Priority depends on:

* Weight of notification type
* Recency

## Weights

* Placement = 3
* Result = 2
* Event = 1

## Efficient Data Structure

Use Min Heap of size 10.

## How It Works

When a new notification arrives:

1. Compute priority score
2. Compare with heap minimum
3. Replace if higher priority
4. Keep only top 10 notifications

## Code Deliverable

Implemented code file:

```text
notification_app_be/priorityInbox.js
```

## Output Proof

Screenshot included in:

```text
notification_app_be/screenshot/
```

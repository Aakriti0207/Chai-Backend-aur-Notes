# HTTP Fundamentals

This README contains my notes on the basics of HTTP, including HTTP vs HTTPS, URLs, headers, HTTP methods, and status codes

---

## Learning Outcome

These notes includes:

- How HTTP communication works
- Difference between HTTP and HTTPS
- URL, URI, and URN
- Purpose of HTTP headers
- Common request/response headers
- CORS and security headers
- All major HTTP methods
- HTTP status code categories and commonly used status codes

---

# What is HTTP?

**HTTP (HyperText Transfer Protocol)** is an application-layer protocol used for communication between a client (browser/app) and a server

Example:
```
Client ----HTTP Request----> Server
Client <---HTTP Response---- Server
```

HTTP is **stateless**, meaning each request is independent and the server does not remember previous requests unless state is managed using cookies, sessions, or tokens

---

# HTTP vs HTTPS

| HTTP | HTTPS |
|------|-------|
| Data is transferred in plain text | Data is encrypted |
| Less secure | Secure |
| Uses port 80 | Uses port 443 |
| No SSL/TLS | Uses SSL/TLS certificates |

HTTPS simply adds an encryption layer over HTTP to protect data during transmission

---

# URL, URI and URN

## URL (Uniform Resource Locator)

A URL specifies **where** a resource is located

Example:
```
https://example.com/users
```

---

## URI (Uniform Resource Identifier)

A URI is a general identifier for a resource.

Every URL is a URI, but not every URI is a URL.

---

## URN (Uniform Resource Name)

A URN identifies a resource by its name rather than its location.

Example:
```
urn:isbn:9780131103627
```

---

# HTTP Headers

Headers are **metadata** sent along with requests and responses as **key-value pairs**.

Example:
```http
Content-Type: application/json
Authorization: Bearer token
```

Headers are commonly used for:

- Authentication
- Caching
- Content negotiation
- Managing application state
- Security

> Note: The `X-` prefix for custom headers used to be a norm but now has been deprecated

---

# Types of HTTP Headers

## 1. Request Headers

Sent by the client

Examples:
- Accept
- Authorization
- User-Agent
- Cookie

---

## 2. Response Headers

Sent by the server

Examples:
- Server
- Set-Cookie
- Location

---

## 3. Representation Headers

Describe how the resource is represented

Examples:
- Content-Type
- Content-Encoding
- Content-Language

---

## 4. Payload Headers

Describe the message body

Examples:
- Content-Length
- Content-Range

---

# Common HTTP Headers

## Accept

Tells the server what type of response the client expects

```http
Accept: application/json
```

---

## User-Agent

Identifies the client making the request

```http
User-Agent: Mozilla/5.0
```

---

## Authorization

Used to send authentication credentials

```http
Authorization: Bearer <token>
```

---

## Content-Type

Specifies the format of the request or response body

```http
Content-Type: application/json
```

---

## Cookie

Stores session-related information

```http
Cookie: sessionId=abc123
```

---

## Cache-Control

Controls browser and proxy caching

```http
Cache-Control: no-cache
```

---

# CORS Headers

CORS (Cross-Origin Resource Sharing) controls which origins can access server resources

Common headers:

```http
Access-Control-Allow-Origin
Access-Control-Allow-Credentials
Access-Control-Allow-Methods
```

---

# Security Headers

Security headers help protect web applications from common attacks

Some important ones are:

- Content-Security-Policy (CSP)
- Cross-Origin-Embedder-Policy (COEP)
- Cross-Origin-Opener-Policy (COOP)

---

# HTTP Methods

HTTP methods define the action to perform on a resource

## GET

Retrieve data from the server

```http
GET /users
```

---

## POST

Create a new resource

```http
POST /users
```

---

## PUT

Replace an existing resource

```http
PUT /users/1
```

---

## PATCH

Partially update a resource

```http
PATCH /users/1
```

---

## DELETE

Remove a resource

```http
DELETE /users/1
```

---

## HEAD

Similar to GET but returns only headers

Useful for checking if a resource exists

---

## OPTIONS

Returns the HTTP methods supported by the server

Often used in CORS preflight requests

---

## TRACE

Used mainly for debugging by echoing the received request

Rarely used in production

---

# HTTP Status Codes

HTTP responses contain status codes that indicate the result of a request

## 1xx – Informational

The request has been received

Examples:
- **100 Continue**
- **102 Processing**

---

## 2xx – Success

The request was successfully processed

Examples:
- **200 OK**
- **201 Created**
- **202 Accepted**
- **204 No Content**

---

## 3xx – Redirection

Further action is needed

Examples:
- **301 Moved Permanently**
- **302 Found**
- **307 Temporary Redirect**
- **308 Permanent Redirect**

---

## 4xx – Client Errors

The client made an invalid request

Examples:

| Code | Meaning |
|------|---------|
|400|Bad Request|
|401|Unauthorized|
|402|Payment Required (reserved)|
|403|Forbidden|
|404|Not Found|

---

## 5xx – Server Errors

The server failed to process a valid request

Examples:

| Code | Meaning |
|------|---------|
|500|Internal Server Error|
|502|Bad Gateway|
|503|Service Unavailable|
|504|Gateway Timeout|

---

# Quick Revision

### HTTP
- Protocol used for client-server communication

### HTTPS
- Secure version of HTTP using SSL/TLS

### URL
- Location of a resource

### URI
- Identifier of a resource

### URN
- Name of a resource

### Headers
- Metadata sent with requests and responses.

### Common Methods
- GET → Retrieve
- POST → Create
- PUT → Replace
- PATCH → Update partially
- DELETE → Remove
- HEAD → Headers only
- OPTIONS → Supported methods
- TRACE → Debugging

### Status Code Categories
- **1xx** → Informational
- **2xx** → Success
- **3xx** → Redirection
- **4xx** → Client Error
- **5xx** → Server Error

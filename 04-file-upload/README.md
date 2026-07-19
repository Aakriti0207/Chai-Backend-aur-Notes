# File Uploads

## Strategy

### Step 1

Use **Multer** to receive the file from the client and temporarily store it on the server.

```
Client
    ↓
Multer
    ↓
public/temp
```

---

### Step 2

Upload the temporary file to **Cloudinary**.

```
public/temp
      ↓
Cloudinary
      ↓
Image URL
```

---

### Step 3

Delete/unlink the temporary local file.

---

## Why not upload directly?

Temporarily storing the file allows us to:

- Validate uploads
- Retry failed uploads
- Process files before uploading
- Keep the upload pipeline reliable

This is a common backend pattern for handling media uploads.

---

## Files

### middleware/multer.js

Responsible for:

- Receiving files
- Saving them to `public/temp`

---

### utils/cloudinary.js

Responsible for:

- Uploading files to Cloudinary
- Returning the uploaded file URL
- Deleting temporary local files
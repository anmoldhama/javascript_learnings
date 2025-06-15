1–10: Social Media & Communication Systems
Design a URL shortening service like Bitly.

              +---------------------+
User →→→→→→→→ |   API Gateway       | ←→ Auth, Throttle
              +---------------------+
                       ↓
         +------------------------------+
         |     URL Shortener Service    |
         +------------------------------+
           ↓                     ↓
   [Write to DB]         [Read from Redis]
           ↓                     ↓
         MySQL              Redis Cache
                              ↓
                         On miss → DB
                              ↓
                     Redirect (HTTP 302)


Design a social media news feed (Facebook/Twitter feed).

      +---------+         +------------+        +-------------+
User →| API GW  | →→→→→→→→ | Feed Svc   | →→→→→→ | Redis Feed  |
      +---------+         +------------+        +-------------+
            ↑                         ↓                ↓
       +---------+            +------------+     +--------------+
       | Client  | ←←←←←←←←←←← | Post Svc   | ←←← | Post DB      |
                              +------------+     +--------------+
                                     ↓
                                 Kafka Bus
                                     ↓
                          +------------------+
                          | Fan-out Workers  |
                          +------------------+
                                     ↓
                            +-------------------+
                            | User Graph / Follows |
                            +-------------------+


Design a chat application (WhatsApp/Slack).

    +-----------+      +-------------+
    |  Client A | <--->| WebSocket GW|<----------------+
    +-----------+      +-------------+                 |
                            ↓                          |
                   +-----------------+                 |
                   |   Chat Service   |<---------+     |
                   +-----------------+          |     |
                      ↓     ↓     ↓             |     |
                  Kafka  Redis  Message DB      |     |
                      ↓     ↓     ↓             |     |
        +-------------+     |     +------------+|     |
        | Delivery/Notif    |     | User Svc   ||     |
        | Worker            +---> +------------+|     |
        +-------------+     |     |             |     |
              ↓             |     |             |     |
          Push Notif        +----> Presence     |     |
          (FCM/APNs)              |             |     |
                                 Multi-Device Sync    |
                                                     |
    +-----------+      +-------------+                |
    |  Client B | <--->| WebSocket GW|<---------------+
    +-----------+      +-------------+




Design a photo-sharing platform like Instagram.


 🎯 Functional Requirements
User can sign up, log in.

User can upload photos and view their feed.

User can like/comment on photos.

User can follow/unfollow other users.

User can see feed based on followed users.

Optional: Stories, tags, mentions, explore, reels, notifications.

+-------------------+       +------------------------+
|    Mobile/Web     | <---> |      API Gateway       |
+-------------------+       +------------------------+
                                      |
        +-----------------------------+-----------------------------+
        |                             |                             |
+-----------------+      +-----------------------+     +----------------------+
|  Auth Service   |      |   Photo Service       |     |   Feed Service       |
| (Login, Signup) |      | (Upload, View, Delete)|     | (Timeline generation)|
+-----------------+      +-----------------------+     +----------------------+
        |                             |                             |
+-----------------+      +-----------------------+     +----------------------+
|   User Service  |      |  Comment/Like Service |     |  Follow Service      |
+-----------------+      +-----------------------+     +----------------------+
        |                             |                             |
     +------------+             +------------+             +-----------------+
     |   DB/Cache |             |   DB/Cache |             |   DB/Cache      |
     +------------+             +------------+             +-----------------+

+------------------------------------------+
|              Media Storage (S3)          |
+------------------------------------------+

+--------------------+
|  Notification Svc  |
+--------------------+


🗃️ Schema Design

1. Users

User(id, username, email, password_hash, name, bio, profile_pic_url, created_at)

2. Photos

Photo(id, user_id, caption, photo_url, created_at)

3. Follows

Follow(follower_id, followee_id, followed_at)

4. Likes

Like(id, user_id, photo_id, liked_at)

5. Comments

Comment(id, user_id, photo_id, text, created_at)

6. Feed (Denormalized for performance)

Feed(user_id, photo_id, created_at)

7. Stories (Optional)

Story(id, user_id, media_url, created_at, expires_at)


🏗️ Key Design Considerations
Media Storage: Use AWS S3 or a CDN to store images and videos.

Feed Generation: Either pull model (generate on-the-fly) or push model (precompute and store).

Scalability:

Shard user data by user_id.

Use Redis for feed caching.

Use Kafka for async tasks like feed update, notifications.

Rate Limiting & Spam Protection

Search: ElasticSearch for username/hashtag search.

Notification Service: For likes, comments, follows.



1. Why do we need a separate Feed table if we already have Photos and Follow relationships?
➡️ For performance. Recomputing the feed by querying followers' photos is slow and expensive. A Feed table stores precomputed feed items, allowing for fast retrieval, especially when a user follows hundreds or thousands of accounts.

2. How would you scale the Comments table if a celebrity receives millions of comments?
➡️ Use sharding on photo_id, pagination for retrieval (created_at based), and optionally, store hot comments separately (e.g., most-liked). Also, consider offloading to a comment service with caching (e.g., Redis) and async write-behind to DB.

3. How can we ensure uniqueness in Follow relationships?
➡️ Add a composite unique constraint on (follower_id, followee_id) in the Follow table. This prevents duplicate follows at the DB level.

4. What kind of indexing would you apply on the Like table?
➡️ - Index on photo_id for fast like counts.
➡️ - Composite index on (user_id, photo_id) to quickly check if a user liked a post (and to prevent duplicate likes).

5. Why are stories modeled separately from photos? Could we unify them?
➡️ Stories have different lifetimes, privacy settings, and UI behavior (e.g., expiry in 24 hrs).
➡️ You could unify with a media_type and expires_at field, but separating helps isolate logic.

🚀 6–10: Scalability & Performance
6. How would you design the system to support 10M DAUs posting 1 photo/day?
➡️ Horizontally scale:

Use CDN and S3 for media.

Partition DBs by user_id.

Use Kafka for async processing (e.g., feed fan-out, notification).

Shard likes/comments by photo ID.

Cache hot feeds and profiles.

7. Would you use pull or push model for feed generation and why?
➡️ Use push model for average users (fan-out on write), and pull model for celebrities (fan-out on read).
This hybrid model balances storage cost and query latency.

8. How can you reduce load on the database when users frequently open their feed?
➡️ Use Redis to cache the latest feed per user. Also paginate feeds and implement infinite scroll using cursor-based pagination (e.g., created_at < x).

9. How do you handle uploading large media files from mobile clients?
➡️ Use pre-signed URLs from S3:

Client requests upload URL.

Backend returns a secure pre-signed URL.

Client uploads directly to S3.
This offloads the backend from file handling.

10. What will you do if the S3 upload fails mid-way?
➡️ Use multipart uploads with resume support.
Also implement:

Timeouts/retries.

A cleanup job for incomplete uploads.

⚙️ 11–15: System Behavior & Edge Cases
11. What happens when a user deletes their account?
➡️ Options:

Soft delete (mark user as deleted).

Hard delete (remove user, photos, comments).
Best practice is to archive data for compliance before deleting.

12. How do you handle media that violates community guidelines?
➡️ Implement a reporting system + moderation queue.
Also use image classification models (ML) to auto-detect nudity/violence.
Flagged content can be auto-hidden or reviewed by moderators.

13. How do you design a system that supports both private and public accounts?
➡️ Add a is_private flag in the User table.

For private accounts, gate access to content unless the requester is a follower (enforced at the app and API level).

14. What happens to a user’s photos and comments if they change their username?
➡️ Since the user_id is the foreign key, changing the username doesn’t affect the data.
Ensure all external references use user_id, not username.

15. How do you prevent duplicate likes/comments (race condition)?
➡️ At DB level:

Use a unique constraint on (user_id, photo_id) in the Likes table.
At app level:

Use mutex/semaphore, or rely on idempotent APIs.

🔐 16–20: Security, Reliability, Extensibility
16. How do you ensure users can’t upload malicious files disguised as photos?
➡️ - Validate MIME type and file headers.
➡️ - Use antivirus scanning (e.g., ClamAV).
➡️ - Serve media via signed URLs from CDN/S3 (never expose raw S3 URLs).

17. How would you implement role-based access (admin/moderator)?
➡️ Add a role column in the User table (enum: user, admin, moderator).
➡️ Use middleware or policy checks in your service layer.

18. What if a user uploads 1000 photos in a minute? How do you rate-limit?
➡️ Use:

API Gateway rate limiting (e.g., 60 requests/min).

Redis token bucket or leaky bucket algorithm.

Also, throttle upload endpoint on client.

19. How would you support features like hashtags or mentions?
➡️ Parse captions on upload using regex.
Store hashtags and mentions in separate tables:



Hashtag(id, tag)
PhotoHashtag(photo_id, hashtag_id)

Mention(id, user_id, photo_id)
Use ElasticSearch for searching tags.

20. What changes would be needed to support video reels in the future?
➡️ Extend the Photo table to a Media table:



Media(id, user_id, type, url, caption, thumbnail, duration, created_at)
Also integrate:

Transcoding pipeline (e.g., AWS Elastic Transcoder).

CDN with adaptive bitrate streaming (HLS).

Separate feed service (e.g., ReelsFeedService).





Design a system to handle real-time notifications.

Design a video streaming service like YouTube.

Design a blogging platform.

Design an online collaborative document editor (Google Docs).

Design a tweet system with retweets, likes, and comments.

Design a comments system for a website.

11–20: E-commerce & Payment Systems
Design an online marketplace like Amazon or eBay.

Design a payment gateway system (Stripe/PayPal).

Design a recommendation system for e-commerce.

Design a shopping cart service.

Design an order processing system.

Design a price comparison service.

Design a flash sale system with high concurrency.

Design an inventory management system.

Design a loyalty/reward points system.

Design a coupon and discount management system.

21–30: Search & Data Processing Systems
Design a search engine autocomplete feature.

Design a distributed caching system (like Redis).

Design a distributed file storage system (like Google Drive/Dropbox).

Design a real-time analytics dashboard.

Design a web crawler.

Design a log aggregation system.

Design a time-series database.

Design a big data processing system (MapReduce).

Design a rate limiter.

Design an event streaming platform like Kafka.

31–40: Infrastructure & Messaging Systems
Design a load balancer.

Design a CDN (Content Delivery Network).

Design an email service.

Design a notification system (email, SMS, push).

Design a queueing system (like RabbitMQ or SQS).

Design a metrics collection and monitoring system.

Design a feature flag system.

Design an API rate limiting service.

Design a system to handle file uploads.

Design a DNS service.

41–50: Miscellaneous & Emerging Systems
Design a video conferencing system (Zoom/Google Meet).

Design a multiplayer online game server architecture.

Design a parking lot management system.

Design an online exam proctoring system.

Design a travel booking system (flights, hotels).

Design a health record management system.

Design a distributed transaction system.

Design a blockchain-based ledger system.

Design a ride-sharing service like Uber.

Design a chatbot platform.
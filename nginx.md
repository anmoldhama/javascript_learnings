🚀 What is NGINX?
NGINX is a high-performance, open-source web server, reverse proxy, load balancer, and HTTP cache.


🔄 Load Balancer Basics
A load balancer distributes incoming client traffic across multiple backend servers to:

Improve availability

Increase scalability

Ensure fault tolerance


🧠 Types of Load Balancing in NGINX:

| Type                  | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| **Round Robin**       | Default. Sends requests to servers one by one in rotation.           |
| **Least Connections** | Sends to the server with the fewest active connections.              |
| **IP Hash**           | Routes clients based on their IP (for sticky sessions).              |
| **Weighted**          | Assign weights to servers (e.g., 80% traffic to one, 20% to another) |


🛠️ Key Concepts
Upstream block: Defines backend servers (Node.js apps).

Proxy_pass: Forwards incoming requests to upstream servers.

Health checks: Can be added manually or via external tools.


 # nginx.conf

http {
    upstream node_app {
        server 127.0.0.1:3001;
        server 127.0.0.1:3002;
        server 127.0.0.1:3003;
    }

    server {
        listen 80;

        location / {
            proxy_pass http://node_app;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
}

 # curl http://localhost



🧠 Advanced Concepts You Can Explore


| Feature                    | How to Use                                                                    |
| -------------------------- | ----------------------------------------------------------------------------- |
| Sticky Sessions            | Use `ip_hash;` in `upstream` block                                            |
| Least Connections Strategy | `least_conn;` before server list                                              |
| SSL Termination            | Add `listen 443 ssl;` and configure `ssl_certificate` & `ssl_certificate_key` |
| Health Checks              | Use 3rd party like NGINX Plus or `ngx_http_healthcheck_module`                |
| Caching                    | Add `proxy_cache_path`, `proxy_cache`, etc.                                   |
| Rate Limiting              | Use `limit_req_zone`, `limit_req`                                             |



1xx - Informational Responses *(4)

These codes indicate that the request was received and understood. They are provisional responses and require the client to take further action.

100 Continue: The server acknowledges a part of the request and advises the client to continue sending the rest.

101 Switching Protocols: The server is switching protocols as requested by the client (e.g., HTTP to WebSocket).

102 Processing (WebDAV): The server has received and is processing the request but no response is available yet.

103 Early Hints: Used to return some headers before the final HTTP message.



2xx - Success(7)

Indicates that the client's request was successfully received, understood, and accepted.

*200 OK: The request succeeded. The meaning depends on the HTTP method (GET, POST, etc.).

*201 Created: The request succeeded, and a new resource was created as a result.

*202 Accepted: The request has been accepted for processing, but processing is not complete.

*203 Non-Authoritative Information: The request was successful, but the information comes from a third party.

*204 No Content: The request succeeded, but there is no content to send in the response.

*205 Reset Content: Tells the client to reset the document view.

*206 Partial Content: Partial response to a range request.



207 Multi-Status (WebDAV): Returns multiple status codes for various sub-requests.

208 Already Reported (WebDAV): Elements already reported.

226 IM Used: Server has fulfilled the request using instance manipulations.





3xx - Redirection(6)

Further action needs to be taken by the client to complete the request.

*300 Multiple Choices: There are multiple options for the resource.

*301 Moved Permanently: The resource has been moved to a new permanent URI.

*302 Found: Temporary redirection to a different URI.

*303 See Other: The response can be found under a different URI using GET.

*304 Not Modified: Indicates that the resource has not been modified since the last request.

*305 Use Proxy: Deprecated. Resource must be accessed through a proxy.

306 Switch Proxy: No longer used.

*307 Temporary Redirect: Temporary redirect; request method should not change.

*308 Permanent Redirect: Permanent redirect; request method should not change.





4xx - Client Errors

Indicates an error on the client's side.

*400 Bad Request: Malformed request syntax.

*401 Unauthorized: Authentication is required.

*402 Payment Required: Reserved for future use.

*403 Forbidden: Server understood request but refuses to authorize it.

*404 Not Found: The resource could not be found.

*405 Method Not Allowed: The method is not allowed for the requested resource.

*406 Not Acceptable: The server cannot produce a response matching the Accept headers.

*407 Proxy Authentication Required: Client must authenticate with a proxy.

*408 Request Timeout: The client took too long to send the request.

*409 Conflict: Request conflicts with the current state of the resource.

*410 Gone: The resource is no longer available.

*411 Length Required: Content-Length header is required.

*412 Precondition Failed: Preconditions given in headers are not met.

*413 Payload Too Large: The request entity is too large.

*414 URI Too Long: The URI requested is too long.

*415 Unsupported Media Type: Media format not supported.

*416 Range Not Satisfiable: Range specified can't be fulfilled.

*417 Expectation Failed: Expectation in request-header could not be met.

418 I'm a Teapot: April Fool's joke; server refuses to brew coffee.

*421 Misdirected Request: Request was directed to a server that cannot produce a response.

422 Unprocessable Entity (WebDAV): Semantic errors in the request.

423 Locked (WebDAV): Resource is locked.

424 Failed Dependency (WebDAV): Request failed due to dependency on another request.

*425 Too Early: Server is unwilling to risk processing a request that might be replayed.

*426 Upgrade Required: Client should switch to a different protocol.

428 Precondition Required: Server requires request to be conditional.

*429 Too Many Requests: Rate limit exceeded.

*431 Request Header Fields Too Large: Header fields are too large.

*451 Unavailable For Legal Reasons: Content blocked due to legal reasons.






5xx - Server Errors

The server failed to fulfill a valid request.

*500 Internal Server Error: Generic server error.

*501 Not Implemented: Server does not support the functionality.

*502 Bad Gateway: Invalid response from upstream server.

*503 Service Unavailable: Server is down or overloaded.

*504 Gateway Timeout: Server did not receive a timely response from upstream.

*505 HTTP Version Not Supported: The HTTP version used is not supported.

506 Variant Also Negotiates: Server error in content negotiation.

507 Insufficient Storage (WebDAV): Not enough storage to complete request.

508 Loop Detected (WebDAV): Infinite loop detected in processing request.

*510 Not Extended: Further extensions to the request are required.

*511 Network Authentication Required: Client needs to authenticate to gain network access.
# The Full Story of How DNS Works (With Internals)

## 1. The Moment You Type a URL

You open your browser and type:

```
www.google.com
```

At this exact moment, your system does **not know the IP address**. It only knows it needs one.

So the question becomes:

> “How do I find the IP address for this domain?”

This kicks off the **DNS resolution process**.

---

# 2. Step Zero: Local Checks (Fast Path)

Before going to the internet, your system tries to **avoid DNS queries**.

### 2.1 Browser Cache

- Browsers store recently resolved domain → IP mappings
- If found → request goes directly to the server

### 2.2 OS Cache

- The operating system maintains its own DNS cache

### 2.3 Hosts File

A special file on your system:

- Windows: `C:\Windows\System32\drivers\etc\hosts`
- Linux/Mac: `/etc/hosts`

Example:

```
127.0.0.1   localhost
```

If the domain exists here → **DNS is completely skipped**

---

If none of these work → the real DNS journey begins.

---

# 3. The DNS Resolver (Your First External Step)

Your system contacts a **DNS Resolver**.

This is usually provided by:

- Your ISP
- Or public DNS like:
  - Google DNS: `8.8.8.8`
  - Cloudflare: `1.1.1.1`

### What Resolver Does

It acts like a **middleman**:

- You ask: “What is IP of [www.google.com?”](http://www.google.com?”)
- It goes and finds the answer for you

---

# 4. Recursive vs Iterative Queries

This is a key internal concept.

### Recursive Query

You → Resolver:

> “Give me the final answer. Don’t come back without it.”

### Iterative Query

Resolver → DNS Servers:

> “If you don’t know, tell me who might know.”

---

# 5. The Hierarchical Journey Begins

Now the resolver starts walking the DNS hierarchy.

---

## 5.1 Step 1: Root Server

The resolver asks a **Root DNS Server**:

> “Where can I find `.com`?”

Root server replies:

> “I don’t know the IP, but ask these TLD servers.”

So it returns:

- List of `.com` TLD servers

---

## 5.2 Step 2: TLD Server (.com)

Resolver asks the `.com` TLD server:

> “Where is `google.com`?”

TLD server replies:

> “I don’t know the IP, but here are the **authoritative servers** for google.com”

---

## 5.3 Step 3: Authoritative Name Server

Resolver now asks:

> “What is IP of `www.google.com`?”

This time, the authoritative server responds with:

```
142.250.xxx.xxx
```

This is the **final answer**.

---

# 6. What is Inside DNS Records?

DNS does not just store IPs. It stores **records**.

### Common Record Types

| Record | Purpose                            |
| ------ | ---------------------------------- |
| A      | Domain → IPv4                      |
| AAAA   | Domain → IPv6                      |
| CNAME  | Alias to another domain            |
| MX     | Mail server                        |
| NS     | Name servers                       |
| TXT    | Metadata (SPF, verification, etc.) |

---

### Example

```
www.google.com → CNAME → google.com
google.com → A → 142.250.xxx.xxx
```

---

# 7. Caching (Critical for Performance)

DNS is heavily optimized using caching.

### TTL (Time To Live)

Each DNS record has a TTL:

```
TTL = 300 seconds
```

Meaning:

- Resolver can cache the result for 5 minutes
- Future requests are faster

---

### Cache Layers

- Browser cache
- OS cache
- Resolver cache

This is why:

> First request is slow, next ones are fast

---

# 8. DNS Packet Internals

DNS uses:

- **UDP (port 53)** for speed
- Sometimes **TCP** for large responses

---

### DNS Query Structure

A DNS packet contains:

- Header
- Question section
- Answer section
- Authority section
- Additional section

---

### Example Query

```
Query:
Name: www.google.com
Type: A
```

---

### Example Response

```
Answer:
www.google.com → 142.250.xxx.xxx
TTL: 300
```

---

# 9. Recursive Resolver Optimization

Resolvers don’t start from root every time.

They cache:

- Root servers
- TLD servers
- Previous queries

So future queries skip steps.

---

# 10. Anycast Routing (Hidden Magic)

DNS servers use **Anycast**:

- Same IP address exists in multiple locations worldwide
- Your request goes to the **nearest server**

This makes DNS:

- Fast
- Scalable
- Fault-tolerant

---

# 11. DNS Security (DNSSEC)

DNS was originally **not secure**.

Problem:

- Attackers could spoof responses

Solution:

- **DNSSEC (DNS Security Extensions)**

It adds:

- Digital signatures
- Verification chain

So you can trust:

> “This IP is genuinely from the domain owner”

---

# 12. Full Flow Summary (End-to-End)

Here’s the entire story in one flow:

```
User types www.google.com
        ↓
Browser cache
        ↓
OS cache
        ↓
Hosts file
        ↓
DNS Resolver
        ↓
Root Server (.)
        ↓
TLD Server (.com)
        ↓
Authoritative Server (google.com)
        ↓
IP Address returned
        ↓
Browser connects to server
```

---

# 13. What Happens After DNS?

Once IP is known:

- Browser opens TCP connection
- TLS handshake (HTTPS)
- Sends HTTP request
- Server responds with webpage

DNS is just the **first step of the internet journey**

---

# Final Insight

Think of DNS like:

> A global, distributed, cached, hierarchical database
> that converts names into addresses in milliseconds.

# 🌐 Network Address Translation (NAT)

---

## 1. What is NAT?

> **Network Address Translation (NAT)** is a technique used to map private IP addresses to a public IP address (and vice versa).

### Definition:

NAT allows multiple devices in a private network to access the internet using a **single public IP address**.

---

## 2. Why NAT is Needed

### Problem:

- IPv4 provides ~4.29 billion IP addresses
- Not enough for all devices worldwide

### Solution:

- Use **private IP addresses** inside local networks
- Use **public IP address** for external communication
- Translate between them using NAT

---

## 3. How NAT Works (Step-by-Step)

### Example Setup:

- Device IP: `192.168.1.10` (private)
- Router Public IP: `49.36.x.x`

---

### Flow:

1. Device sends request:

   ```
   Source IP: 192.168.1.10
   Destination: External server
   ```

2. Router modifies request:

   ```
   Source IP becomes: 49.36.x.x
   ```

3. Request travels over the internet

4. Response returns to router:

   ```
   Destination IP: 49.36.x.x
   ```

5. Router checks NAT table and maps it back:

   ```
   49.36.x.x → 192.168.1.10
   ```

6. Response is delivered to the correct device

---

## 4. NAT Table

> Router maintains a mapping table to track connections.

### Example:

| Private IP   | Public IP | Port |
| ------------ | --------- | ---- |
| 192.168.1.10 | 49.36.x.x | 5001 |
| 192.168.1.11 | 49.36.x.x | 5002 |

### Purpose:

- Ensures responses reach the correct device
- Tracks active connections

---

## 5. Types of NAT

---

### 5.1 Static NAT

> One-to-one mapping between private and public IP

- Fixed mapping
- Used in servers needing constant public access

Example:

```
192.168.1.10 → 49.36.x.x
```

---

### 5.2 Dynamic NAT

> Maps private IPs to a pool of public IPs

- Public IP is assigned dynamically
- Limited pool of addresses

---

### 5.3 PAT (Port Address Translation) / NAT Overload

> Multiple private IPs share a single public IP using different ports

Example:

```
192.168.1.10 → 49.36.x.x:5001
192.168.1.11 → 49.36.x.x:5002
```

### Key Idea:

- Same public IP
- Different port numbers distinguish connections

---

## 6. Advantages of NAT

### 6.1 IP Address Conservation

- Reduces need for public IP addresses

---

### 6.2 Basic Security

- Internal IP addresses are hidden from the internet

---

### 6.3 Cost Efficiency

- Fewer public IPs required from ISP

---

## 7. Limitations of NAT

### 7.1 Breaks End-to-End Connectivity

- Direct communication between devices becomes difficult

---

### 7.2 Issues with Some Applications

- Peer-to-peer applications
- Online gaming
- VoIP systems

---

### 7.3 Requires Additional Techniques

- Port forwarding
- NAT traversal (STUN, TURN)

---

## 8. NAT and Backend Development

### Important Insight:

When running a local server:

```
localhost:3000
```

- Accessible only within local network
- Not reachable from internet directly

---

### To expose it publicly:

- Configure **port forwarding**
- Use **public IP**
- Deploy to **cloud server**

---

## 9. Key Concept

> External networks see only the **public IP of the router**, not individual devices.

---

## 10. Summary

- NAT translates private IPs to public IPs
- Enables multiple devices to share one public IP
- Uses a NAT table to track mappings
- Most common type: **PAT (Port Address Translation)**
- Essential for IPv4-based networking

---

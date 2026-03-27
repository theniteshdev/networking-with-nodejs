# 🌐 IP Addressing & IPv4 (Detailed Notes)

---

## 1. What is an IP Address?

> An **IP (Internet Protocol) Address** is a unique identifier assigned to every device connected to a network.

- It allows devices to **identify and communicate** with each other.
- Works like a **digital address** for sending and receiving data.

### Key Points:

- Every device on a network must have an IP address.
- Used by routers to **route packets to the correct destination**.

---

## 2. What is IPv4?

> **IPv4 (Internet Protocol version 4)** is the most widely used version of IP addressing.

- It uses a **32-bit address space**.
- Represented in **decimal format**, divided into 4 parts.

### Format:

```
192.168.0.1
```

- Each part is called an **octet (8 bits)**.
- Total = **4 octets × 8 bits = 32 bits**

---

## 3. Binary Representation of IPv4

Each octet is 8 bits:

```
192.168.0.1
=
11000000.10101000.00000000.00000001
```

---

## 4. Range of IPv4 Addresses

- **Minimum:** `0.0.0.0`
- **Maximum:** `255.255.255.255`

Each octet ranges from:

```
0 → 255 (8-bit range)
```

---

## 5. Total Number of IPv4 Addresses

Since IPv4 is 32-bit:

```
2^32 = 4,294,967,296
```

So, approximately **4.29 billion unique IP addresses** can exist.

---

## 6. What is a Subnet Mask?

> A **subnet mask** is used to divide an IP address into:

- **Network part**
- **Host part**

### Example:

```
IP Address:     192.168.1.10
Subnet Mask:    255.255.255.0
```

---

### How it works:

Subnet mask in binary:

```
11111111.11111111.11111111.00000000
```

- `1` → Network portion
- `0` → Host portion

So:

- First 24 bits → Network
- Last 8 bits → Hosts

---

### Purpose of Subnet Mask:

- Identifies which part of IP is:
  - Network ID
  - Host ID

- Helps in **network segmentation**
- Improves **routing efficiency**

---

## 7. What is CIDR Notation?

> **CIDR (Classless Inter-Domain Routing)** is a compact way to represent IP + subnet mask.

### Format:

```
192.168.1.1/24
```

- `/24` means:
  - First **24 bits are network bits**

---

### Example:

```
/24 → 255.255.255.0
/16 → 255.255.0.0
/8  → 255.0.0.0
```

---

### Why CIDR is used:

- More flexible than old class-based system
- Efficient allocation of IP addresses
- Reduces IP wastage

---

## 8. Network and Host Calculation (Important Concept)

For:

```
192.168.1.0/24
```

- Total bits = 32
- Network bits = 24
- Host bits = 8

### Number of hosts:

```
2^8 = 256 addresses
```

But:

- 1 → Network address
- 1 → Broadcast address

👉 Usable hosts:

```
256 - 2 = 254
```

---

## 9. Special IP Addresses

---

### 🔁 Loopback Address

> Used by a device to communicate with itself.

### Range:

```
127.0.0.0 → 127.255.255.255
```

### Common:

```
127.0.0.1 → localhost
```

---

### 🌐 Other Important Ones

#### 1. Network Address

- First address in a subnet
- Identifies the network

#### 2. Broadcast Address

- Last address in subnet
- Used to send data to all devices

#### 3. Private IP Ranges

Used inside local networks (not on internet):

- `10.0.0.0 – 10.255.255.255`
- `172.16.0.0 – 172.31.255.255`
- `192.168.0.0 – 192.168.255.255`

---

## 10. Key Summary

- IPv4 = 32-bit addressing system
- Written as 4 octets (decimal format)
- Total addresses ≈ 4.29 billion
- Subnet mask splits network & host
- CIDR simplifies subnet representation
- Special addresses include loopback, private, broadcast

---

## 11. Important Corrections from Your Notes

- “Min- 255.255.255.255” → ❌
  → This is **maximum**, not minimum

- “octas” → ❌
  → Correct term: **octets**

- Subnet mask explanation → now properly defined

---

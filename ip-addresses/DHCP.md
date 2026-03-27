# 🌐 DHCP (Dynamic Host Configuration Protocol)

---

## 1. What does DHCP do?

> **DHCP automatically assigns IP addresses and network configuration to devices connected to a network.**

### Simple idea:

> When a device connects to a network, DHCP gives it an IP address so it can communicate.

---

## 2. Why DHCP is Needed

Without DHCP:

- You would have to manually assign IP addresses to every device
- High chance of:
  - IP conflicts (same IP assigned twice)
  - Misconfiguration

---

### With DHCP:

- Automatic IP assignment
- No manual work
- Efficient management of large networks

---

## 3. What Information DHCP Provides

DHCP does not only assign IP addresses.

It also provides:

- **IP Address** → Identity of the device
- **Subnet Mask** → Network/host separation
- **Default Gateway** → Router address
- **DNS Server** → Domain name resolution

---

## 4. How DHCP Works (DORA Process)

DHCP follows a **4-step process** called **DORA**:

---

### 1. Discover

> Device broadcasts a request:

```id="m3d2k9"
"Is there any DHCP server available?"
```

---

### 2. Offer

> DHCP server responds with an available IP:

```id="p5w8k1"
"I can give you 192.168.1.10"
```

---

### 3. Request

> Device accepts the offer:

```id="q9z2x7"
"I want to use 192.168.1.10"
```

---

### 4. Acknowledge

> Server confirms assignment:

```id="r4v6y3"
"IP assigned successfully"
```

---

## 5. DHCP Lease

> IP addresses are assigned for a limited time (lease time).

### Example:

- Lease time: 24 hours

After expiration:

- Device must renew the IP
- Or a new IP may be assigned

---

## 6. DHCP Server

> A **DHCP server** is responsible for managing and assigning IP addresses.

### Can be:

- Router (home networks)
- Dedicated server (enterprise networks)

---

## 7. Types of IP Assignment in DHCP

---

### 7.1 Dynamic Allocation

- IP assigned temporarily
- Changes over time

---

### 7.2 Automatic Allocation

- IP assigned permanently
- Given once and reused

---

### 7.3 Manual (Static) Allocation

- Admin assigns fixed IP via DHCP
- Based on device MAC address

---

## 8. Advantages of DHCP

- Eliminates manual configuration
- Prevents IP conflicts
- Scales easily for large networks
- Centralized control

---

## 9. Limitations of DHCP

- Depends on DHCP server availability
- If server fails → devices may not get IP
- Security risks if unauthorized DHCP server exists

---

## 10. Key Insight

> Without DHCP, devices cannot automatically join a network.

---

## 11. Summary

- DHCP = automatic IP configuration system
- Uses **DORA process**
- Assigns IP + network settings
- Works using a central DHCP server
- Essential for modern networking

---

## 12. Short Definition (for revision)

> **DHCP is a protocol that automatically assigns IP addresses and network configuration to devices on a network.**

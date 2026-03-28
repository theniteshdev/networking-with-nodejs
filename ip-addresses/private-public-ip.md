# 🌐 Private IP vs Public IP (Detailed Notes)

## 🧠 Background: Why IP addresses matter

Every device connected to the internet needs an **IP address** (like a home address) so data knows where to go.

Originally:

- Every device was supposed to have a **unique IP address**

But then something big happened…

---

## 📅 What changed after the 1990s?

- In the early internet days, very few people used it
- Around the mid-1990s (when the **World Wide Web** became popular), internet usage exploded 🌍
- Suddenly:
  - Millions → then billions of devices came online
  - But IPv4 addresses are limited (~4.3 billion total)

👉 This created a problem:
**Not enough IP addresses for every device**

---

## 💡 Solution: Private IP + Public IP (defined by IETF)

The Internet Engineering Task Force introduced a system:

- Use **Private IPs** inside local networks
- Use **Public IPs** to communicate over the internet

This way:
👉 One public IP can serve many devices

---

# 🏠 Private IP Address

## 📌 Definition

A **Private IP** is used **inside a local network** (home, school, office).

- Not accessible directly from the internet ❌
- Used for internal communication ✔️

## 📊 Common Private IP Ranges

There are actually **3 main ranges** (not just one):

| Range                         | Size       | Use                     |
| ----------------------------- | ---------- | ----------------------- |
| 10.0.0.0 – 10.255.255.255     | Very large | Big companies           |
| 172.16.0.0 – 172.31.255.255   | Medium     | Enterprises             |
| 192.168.0.0 – 192.168.255.255 | Small      | Homes, small businesses |

👉 Your note included only the last one (most common for Wi-Fi routers)

---

## 🧩 Example

Your home network:

- Phone → 192.168.1.2
- Laptop → 192.168.1.3
- Router → 192.168.1.1

These devices talk to each other using private IPs.

---

# 🌍 Public IP Address

## 📌 Definition

A **Public IP** is:

- Globally unique 🌐
- Assigned by your ISP (Internet Service Provider)
- Used to communicate on the internet

## 📊 Range

Public IPs are:

- Any IP **not reserved for private use**
- Example: `8.8.8.8` (Google DNS)

---

## 🧩 Example

When you open YouTube:

- Your device (private IP) sends request → router
- Router sends request using **public IP**
- Internet responds back to your public IP

---

# 🔄 How Private & Public IP Work Together (NAT)

This is the magic part ✨

## 🔧 NAT (Network Address Translation)

Your router uses NAT to:

- Convert **private IP → public IP** when sending data
- Convert **public IP → private IP** when receiving data

👉 This allows:
**Many devices → share one public IP**

---

# 🚀 What is CG-NAT?

## 📌 Full Form:

**Carrier-Grade NAT (CGNAT)**

## 🧠 Simple Idea:

Even **one public IP is shared by many users** (not just devices in one home)

---

## 🧩 Why CG-NAT is used

Because:

- IPv4 addresses are still limited 😬
- ISPs don’t have enough public IPs

👉 So they do:

- Many customers → share **one public IP**

---

## 🔄 How it works

Normal NAT:

- Home devices → 1 public IP

CG-NAT:

- Many homes → 1 public IP

---

## ⚠️ Downsides of CG-NAT

| Problem                      | Why                         |
| ---------------------------- | --------------------------- |
| Port forwarding doesn’t work | You don’t control public IP |
| Hosting server is hard       | Not directly reachable      |
| Gaming issues                | NAT restrictions            |
| Less privacy control         | Shared IP                   |

---

## 🧩 Example

- You and 100 other users share:
  → `49.x.x.x` public IP

But internally:

- You → 100.64.x.x (CGNAT range)
- Others → different internal IPs

---

# 🧠 Quick Summary

- **Private IP** → inside network (not public)
- **Public IP** → used on internet
- **NAT** → connects private to public
- **CG-NAT** → ISP shares public IP among many users

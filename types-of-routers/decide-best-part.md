# 🌍 How routers decide the “best path”

> A router chooses the best path based on **routing algorithms + metrics (cost values)**.

Think of it like **Google Maps for data** 🗺️
But instead of distance, routers care about things like speed, congestion, reliability.

---

# 🧠 Step 1: Routers don’t guess — they use **Routing Tables**

Every router maintains a table like:

| Destination IP | Next Hop | Cost |
| -------------- | -------- | ---- |
| 192.168.1.0    | Router A | 5    |
| 10.0.0.0       | Router B | 2    |

👉 When a packet arrives:

* Router checks destination IP
* Looks into table
* Forwards to **best next hop**

---

# ⚖️ Step 2: What defines “best”?

Routers don’t always choose the shortest path.

They use **metrics**:

* 📏 Hop count (number of routers)
* ⏱️ Latency (time delay)
* 📶 Bandwidth (capacity)
* ❌ Packet loss
* 💰 Cost (admin-defined)

👉 The path with **lowest cost** = best path

---

# 🔀 Step 3: Routing Algorithms (the real magic)

There are **two main types** you must understand deeply:

---

## 1. 📍 Distance Vector Algorithm

> “Ask your neighbors what they know”

### How it works:

* Each router shares its routing table with neighbors
* Updates its table based on neighbors’ info

### Example protocol:

* RIP (Routing Information Protocol)

### 🧠 Simple idea:

> “My friend says he can reach destination in 2 steps → I’ll go through him in 3 steps”

---

### ⚠️ Problems:

* Slow updates
* Can create loops (bad routes)

---

## 2. 🗺️ Link State Algorithm

> “Build a full map of the network”

### How it works:

* Each router:

  * Discovers all neighbors
  * Shares network state
  * Builds full topology
* Then calculates best path using an algorithm

---

### ⭐ Key algorithm used:

👉 **Dijkstra’s Algorithm (Shortest Path)**

Router calculates shortest path from itself to all nodes.

---

### Example protocol:

* OSPF (Open Shortest Path First)

---

### 🧠 Simple idea:

> “I know the whole map → I’ll choose the fastest route”

---

# ⚡ Distance Vector vs Link State

| Feature    | Distance Vector | Link State   |
| ---------- | --------------- | ------------ |
| Knowledge  | Neighbor only   | Full network |
| Speed      | Slow            | Fast         |
| Complexity | Simple          | Complex      |
| Example    | RIP             | OSPF         |

---

# 🔥 Real-world routing (Internet level)

The internet uses:

## 🌐 BGP (Border Gateway Protocol)

> “Routing between different organizations (ISPs)”

### What makes it special:

* Doesn’t just care about shortest path
* Uses:

  * Policies
  * Business rules
  * Security

👉 Example:
One ISP may choose a longer route because it's **cheaper or more trusted**

---

# 🧠 Final Flow (What actually happens)

When you send a request:

1. Router receives packet
2. Checks routing table
3. If unknown → learns via routing protocol
4. Calculates best path
5. Forwards to next router
6. Repeat until destination

---

# 💡 Important mindset shift

> Routers don’t “find a path” every time.

They:

* **Pre-learn paths**
* Store them
* Use them instantly

👉 That’s why the internet feels fast.

---

# 🚀 One-line summary

> **Routers use routing algorithms and metrics to compute and store the most efficient path, then forward packets accordingly.**

---

# 🔥 Backend Engineer Insight

When your API is slow:

It might NOT be your code.

It could be:

* Bad routing path
* Congested network
* ISP-level routing issue

👉 This is where networking knowledge makes you **dangerous (in a good way 😄)**

---
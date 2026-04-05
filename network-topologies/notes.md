# 🌐 Network Topologies

## 📌 What is Network Topology?

A **network topology** refers to the **arrangement (layout)** of devices (nodes) and connections in a network.

👉 It defines:

- How devices are connected
- How data flows
- How reliable and scalable the network is

---

## 🧠 Types of Network Topologies

There are **two main categories**:

### 🔹 1. Physical Topology

- Actual physical layout (cables, hardware)

### 🔹 2. Logical Topology

- How data flows regardless of physical design

---

# 🔷 1. Bus Topology

## 📌 Structure

- All devices connected to a **single central cable (backbone)**

```
PC ── PC ── PC ── PC
        |
     Backbone
```

## ⚙️ How it works

- Data travels in **both directions**
- Only the intended device accepts the data

---

## ✅ Advantages

- Simple and low cost 💰
- Easy to install

## ❌ Disadvantages

- Backbone failure = whole network down 💥
- Collision chances are high
- Difficult to troubleshoot

---

## 📍 Use Case

- Small or temporary networks

---

# ⭐ 2. Star Topology

## 📌 Structure

- All devices connect to a **central device** (like a switch or hub)

```
       PC
        |
PC — Switch — PC
        |
       PC
```

---

## ⚙️ How it works

- All communication passes through central device

---

## ✅ Advantages

- Easy to install and manage 👍
- Failure of one node doesn’t affect others
- Easy troubleshooting

## ❌ Disadvantages

- Central device failure = entire network down ❌
- More cable required

---

## 📍 Use Case

- Most modern LANs (schools, offices)

---

# 🔵 3. Ring Topology

## 📌 Structure

- Devices connected in a **circular loop**

```
PC — PC — PC
|           |
PC — PC — PC
```

---

## ⚙️ How it works

- Data travels in **one direction** (or both in dual ring)
- Uses **token passing**

👉 Only device with token can send data

---

## ✅ Advantages

- No collisions
- Equal access to all nodes

## ❌ Disadvantages

- Failure of one node can break network
- Hard to troubleshoot

---

## 📍 Use Case

- Older networks, some fiber networks

---

# 🟢 4. Mesh Topology

## 📌 Structure

- Every device is connected to **every other device**

```
Fully connected network
```

---

## ⚙️ Types

- **Full Mesh** → All nodes connected
- **Partial Mesh** → Some nodes connected

---

## ✅ Advantages

- Highly reliable 🔥
- No single point of failure
- Fast data transmission

## ❌ Disadvantages

- Expensive 💸
- Complex setup
- Too many connections

---

## 📍 Use Case

- Military networks
- Critical systems

---

# 🟡 5. Tree Topology

## 📌 Structure

- Combination of **Star + Bus**
- Hierarchical structure

```
        Root
       /   \
     Hub   Hub
    /  \   /  \
  PC  PC PC  PC
```

---

## ⚙️ How it works

- Data flows from top to bottom

---

## ✅ Advantages

- Scalable 📈
- Easy to manage large networks

## ❌ Disadvantages

- Backbone failure affects many nodes
- Complex wiring

---

## 📍 Use Case

- Large organizations

---

# 🟣 6. Hybrid Topology

## 📌 Structure

- Combination of **multiple topologies**

👉 Example:

- Star + Mesh
- Star + Bus

---

## ⚙️ How it works

- Depends on combined structures

---

## ✅ Advantages

- Flexible 💡
- Scalable
- Reliable

## ❌ Disadvantages

- Expensive
- Complex design

---

## 📍 Use Case

- Modern enterprise networks

---

# 📊 Comparison Table

| Topology | Cost   | Reliability | Complexity | Scalability |
| -------- | ------ | ----------- | ---------- | ----------- |
| Bus      | Low    | Low         | Simple     | Poor        |
| Star     | Medium | Medium      | Easy       | Good        |
| Ring     | Medium | Medium      | Moderate   | Limited     |
| Mesh     | High   | Very High   | Complex    | Good        |
| Tree     | Medium | High        | Moderate   | Very Good   |
| Hybrid   | High   | Very High   | Complex    | Excellent   |

---

# 🔄 Real-World Understanding

👉 Your home Wi-Fi network:

- Usually **Star topology**
- Router acts as central node

👉 Internet:

- Uses **Mesh + Hybrid topology**
- Ensures high reliability

---

# 🧠 Key Concepts to Remember

### 🔹 1. Single Point of Failure

- Star → central device
- Bus → backbone
- Mesh → none (best reliability)

---

### 🔹 2. Scalability

- Tree & Hybrid → best for growth
- Bus → worst

---

### 🔹 3. Cost vs Reliability Tradeoff

- Cheap → less reliable
- Expensive → more reliable

---

# 🎯 Final Summary

- **Topology = structure of network**
- Different designs → different performance
- Modern networks mostly use:
  - **Star (LANs)**
  - **Mesh/Hybrid (Internet)**

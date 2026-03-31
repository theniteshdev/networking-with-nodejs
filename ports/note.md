## 🌐 What is a Port Number in Computers?

A **port number** is a logical identifier used in networking that helps a computer manage multiple connections at the same time.

Think of it like this:

* Your **IP address** = your house address 🏠
* **Port number** = different doors inside your house 🚪

Each door (port) is used by a different service or application.

---

## 🔧 Why Do We Need Ports?

A single machine can:

* Run multiple servers/services at the same time
* Communicate with many devices simultaneously

Ports help the system:

* Identify **which application** should send/receive data
* Allow multiple services to run on the **same IP address**

👉 Example:

* Website server → Port **80** (HTTP)
* Secure website → Port **443** (HTTPS)
* Database → Port **3306** (MySQL)

---

## 🔁 How Ports Work

When data is sent over the internet:

* It contains:

  * **IP address** (which machine)
  * **Port number** (which service)

So the system knows exactly:

> “Send this data to THIS app on THAT machine.”

---

## 🔢 Total Number of Ports

* There are **65,536 ports** in total
* Range: **0 to 65,535**

### 📊 Categories of Ports:

* **0 – 1023** → Well-known ports (used by common services)
* **1024 – 49151** → Registered ports
* **49152 – 65535** → Dynamic/private ports

---

## ⚡ Important Notes

* A port is **not a physical thing**—it’s just a number used by software
* Ports must be **unique per service on a machine at a time**
* Same port can be reused by different machines (because IP is different)

---

## 💡 Short Definition (for revision)

> A port number is a logical communication endpoint that allows multiple services to run on a single computer and exchange data over a network.

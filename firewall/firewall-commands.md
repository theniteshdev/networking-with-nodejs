# 💻 1. Firewall Commands in Linux (Using `iptables`)

`iptables` is a very powerful firewall tool in Linux.

## 🚫 Block an IP Address

```bash
sudo iptables -A INPUT -s 192.168.1.10 -j DROP
```

👉 Blocks all traffic from this IP

---

## ✅ Allow an IP Address

```bash
sudo iptables -A INPUT -s 192.168.1.10 -j ACCEPT
```

---

## 🔒 Block a Port (e.g., Port 80 - HTTP)

```bash
sudo iptables -A INPUT -p tcp --dport 80 -j DROP
```

---

## 🔓 Allow a Port

```bash
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

👉 Allows SSH access

---

## 📋 List All Rules

```bash
sudo iptables -L
```

---

## ❌ Delete a Rule

```bash
sudo iptables -D INPUT -s 192.168.1.10 -j DROP
```

---

## 🔄 Flush (Remove All Rules)

```bash
sudo iptables -F
```

---

# 🧰 2. Firewall Commands Using `ufw` (Easy Linux Firewall)

`ufw` = **Uncomplicated Firewall** (beginner-friendly 👍)

---

## ▶️ Enable Firewall

```bash
sudo ufw enable
```

---

## ⛔ Block an IP

```bash
sudo ufw deny from 192.168.1.10
```

---

## ✅ Allow an IP

```bash
sudo ufw allow from 192.168.1.10
```

---

## 🔒 Block a Port

```bash
sudo ufw deny 80
```

---

## 🔓 Allow a Port

```bash
sudo ufw allow 22
```

---

## 🌐 Allow Specific Service (like HTTP)

```bash
sudo ufw allow http
```

---

## 📋 Check Status

```bash
sudo ufw status
```

---

## ❌ Delete Rule

```bash
sudo ufw delete deny 80
```

---

# 🪟 3. Firewall Commands in Windows

Using Command Prompt (Admin) or PowerShell:

---

## 🚫 Block an IP

```powershell
netsh advfirewall firewall add rule name="BlockIP" dir=in action=block remoteip=192.168.1.10
```

---

## ✅ Allow a Port

```powershell
netsh advfirewall firewall add rule name="AllowPort80" dir=in action=allow protocol=TCP localport=80
```

---

## 📋 Show Rules

```powershell
netsh advfirewall firewall show rule name=all
```

---

## ❌ Delete Rule

```powershell
netsh advfirewall firewall delete rule name="BlockIP"
```

---

# 🧠 4. Important Concepts Behind Commands

### 🔹 INPUT vs OUTPUT

* `INPUT` → Incoming traffic
* `OUTPUT` → Outgoing traffic

---

### 🔹 Actions

* `ACCEPT` → Allow
* `DROP` → Block silently
* `REJECT` → Block + send response

---

### 🔹 Protocols

* TCP → Web, SSH
* UDP → Streaming, DNS

---

# ⚡ 5. Real Example Scenario

👉 Suppose you want:

* Block hacker IP → `192.168.1.50`
* Allow SSH (port 22)

Commands:

```bash
sudo iptables -A INPUT -s 192.168.1.50 -j DROP
sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
```

---

# 🚨 6. Important Tips

* ⚠️ Always allow SSH before enabling firewall (or you can lock yourself out!)
* 🧪 Test rules carefully
* 💾 Save rules (iptables rules reset after reboot unless saved)

---

# 🚀 Quick Summary

* `iptables` → powerful but complex
* `ufw` → beginner-friendly
* Windows → uses `netsh` or PowerShell
* Common tasks:

  * Block IP ✅
  * Allow port ✅
  * View rules ✅
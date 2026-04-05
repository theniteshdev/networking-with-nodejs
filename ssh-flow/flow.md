# 🔐 SSH Key Login – Complete Flowchart

```
[ START ]
    |
    v
[ Tumhara Computer (Client) ]
    |
    | 1. Generate SSH Keys
    |    ssh-keygen
    v
[ Keys Created ]
    |
    |-- Private Key (id_ed25519) ---> ❌ NEVER SHARE (stays in your PC)
    |
    |-- Public Key (id_ed25519.pub) ---> ✅ Share allowed
    |
    v
[ Public Key Copy to Server ]
    |
    | (ssh-copy-id OR manual paste)
    v
[ Server ]
    |
    | Store public key in:
    | ~/.ssh/authorized_keys
    v
[ Login Attempt ]
    |
    | ssh username@server_ip
    v
[ Server Checks ]
    |
    | "Does client have matching private key?"
    |
    |------ YES -------> ✅ Login Success (No password)
    |
    |------ NO --------> ❌ Access Denied
    |
    v
[ END ]
```

---

# 🧠 Internal Working (Deep Understanding)

```
Client (Your PC)                    Server
------------------                ------------------
Private Key 🔑                    Public Key 🔓
     |                                  |
     |---- Encrypted Proof ------------>|
     |                                  |
     |<--- Verification Result ---------|
```

👉 Server kabhi private key nahi dekhta
👉 Sirf verify karta hai ki tumhare paas correct private key hai

---

# ⚡ Ultra Simple Memory Trick

```
Generate → Share → Store → Connect → Verify → Login
```

---

# Common Mistakes

❌ Server pe ssh-keygen chalana
❌ Private key ko server pe bhejna
❌ authorized_keys file galat jagah banana

---
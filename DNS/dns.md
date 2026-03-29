# Domain Name System (DNS)

## 1. What is DNS?

The **Domain Name System (DNS)** is a hierarchical and distributed system used to translate human-readable domain names (like `www.google.com`) into machine-readable IP addresses (like `142.250.183.36`).

Computers on the internet communicate using IP addresses, but humans find it easier to remember names. DNS acts as a **translator** between these two.

### Example

```
www.google.com.
```

This is a **Fully Qualified Domain Name (FQDN)**.

- The trailing dot (`.`) is usually hidden by browsers but is **implicitly present**
- It represents the **root of the DNS hierarchy**

---

## 2. Structure of a Domain Name

A domain name is divided into parts separated by dots (`.`). Each part represents a level in the DNS hierarchy.

### Breakdown of:

```
www.google.com.
```

| Part     | Name                      | Description                     |
| -------- | ------------------------- | ------------------------------- |
| `.`      | Root Level Domain (RLD)   | Topmost level in DNS hierarchy  |
| `com`    | Top Level Domain (TLD)    | Generic or country-based domain |
| `google` | Second Level Domain (SLD) | Organization or brand name      |
| `www`    | Subdomain (Third Level)   | Optional prefix for services    |

---

## 3. Important Notes About Dots (`.`)

- Dots (`.`) act as **separators** between domain levels
- The **last dot** represents the **root level domain**
- Browsers usually **omit the final dot**, but DNS internally uses it

---

## 4. DNS Hierarchy

DNS follows a strict hierarchical structure:

```
Root Level Domain (.)
   ↓
Top Level Domain (TLD)
   ↓
Second Level Domain (SLD)
   ↓
Subdomains (Third Level and beyond)
```

### Levels Explained

1. **Root Level Domain (RLD)**
   - Represented by a dot (`.`)
   - Highest level in DNS
   - Managed globally

2. **Top Level Domain (TLD)**
   - Examples: `.com`, `.org`, `.net`, `.in`
   - Can be:
     - **Generic (gTLD)** → `.com`, `.net`
     - **Country Code (ccTLD)** → `.in`, `.us`

3. **Second Level Domain (SLD)**
   - Usually the main name (e.g., `google`)
   - Registered by individuals or organizations

4. **Subdomains (Third Level and beyond)**
   - Example: `www`, `mail`, `api`
   - Used to organize services within a domain

---

## 5. Organizations Behind DNS

### 5.1 ICANN

- Full form: **Internet Corporation for Assigned Names and Numbers**
- Role:
  - Governs and coordinates the global DNS system
  - Manages allocation of IP addresses and domain names
  - Oversees Top Level Domains (TLDs)

### 5.2 Registry Operators

These organizations manage specific TLDs.

- **Verisign**
  - Manages `.com` and `.net` domains
  - Maintains their DNS infrastructure

- **PIR (Public Interest Registry)**
  - Manages `.org` domains

---

## 6. Domain Registrars

Companies like **GoDaddy** act as **registrars**.

- They allow users to **purchase and register domain names**
- They do **not own TLDs**, but they are authorized to sell them

### Relationship:

```
ICANN → Oversees everything
   ↓
Registry (e.g., Verisign, PIR) → Manages TLDs
   ↓
Registrar (e.g., GoDaddy) → Sells domains to users
```

---

## 7. How DNS Resolution Works (Simplified)

When you enter `www.google.com` in a browser:

1. Browser checks local cache
2. If not found, query goes to a DNS resolver
3. Resolver contacts:
   - Root server → points to TLD server
   - TLD server → points to domain server
   - Domain server → returns IP address

4. Browser connects to the server using IP

---

## 8. Key Takeaways

- DNS translates domain names into IP addresses
- It follows a hierarchical structure starting from the root (`.`)
- The trailing dot represents the root but is usually hidden
- ICANN manages the global DNS system
- Registries manage TLDs, and registrars sell domains

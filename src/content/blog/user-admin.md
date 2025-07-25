---
title: 'The Security Desk of SAP: Mastering User Admin with SU01'
description: 'Think of your SAP system as a high-security building. SU01 is the front desk, and you are the head of security. Let’s issue some access cards.'
pubDate: 2025-07-26
heroImage: '../../assets/user-admin-01.jpg'
tags: ['administration', 'security', 'su01']
---

Every secure building needs a security desk to manage who comes and goes. In the world of SAP, that desk is the powerful transaction code **SU01** (User Maintenance), and as a Basis administrator, you're the one in charge.

`SU01` is where you create, manage, and control the digital keycards—the user accounts—that grant access to your SAP system. Let's break down the most common tasks.

**### Creating a New User (Issuing a New Keycard)**

When a new employee joins, they need access.

1.  Go to transaction `SU01`.
2.  Enter the desired User ID (e.g., `JSMITH`) and click the "Create" button (the blank page icon).
3.  **Address Tab:** Fill in their personal details like first name, last name, and email.
4.  **Logon Data Tab:** This is crucial.
    * Set the **User Type**. For regular human users, this is typically `Dialog`.
    * Set an **initial password** and repeat it. The user will be forced to change this on their first login.
5.  **Roles Tab:** Assign the PFCG roles that define what this user is allowed to do. This is like programming the keycard to only open certain doors.
6.  Click **Save**. You've just created a new user.

**### Locking & Unlocking Users (Activating/Deactivating a Keycard)**

If an employee goes on a long vacation or a security concern arises, you don't delete their keycard—you just deactivate it.

* In `SU01`, enter the User ID and click the **Lock/Unlock** button (the icon with the open and closed padlock).
* You can see the lock status and choose to lock the user globally or unlock them.

**### Resetting a Password (Issuing a Temporary Key)**

One of the most common helpdesk requests is "I forgot my password!"

* In `SU01`, enter the User ID and click the "Change Password" button (the key icon).
* You can set a new initial password. The user will be prompted to create their own new password upon their next login.

Mastering these simple `SU01` functions is a fundamental skill for any Basis administrator. You are the gatekeeper of the system, ensuring the right people have the right access at the right time.
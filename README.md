# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## GitHub Pages
- [expose.html](https://andrewphamcode.github.io/Lab5_Starter/expose.html)
- [explore.html](https://andrewphamcode.github.io/Lab5_Starter/explore.html)

Andrew Pham
Ivan Del Rio

## Check Your Understanding

**1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.** I would not use a unit test to test the message feature.Sending a message involves multiple components interacting together such as the UI, the network, and another user receiving the message. A better way to test this is end-to-end testing or integration testing.

**2)Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**

 Yes I would use a unit test to test the max message length feature. It's a small piece of logic so you can simply pass in a string and check if it's blocked at 80 characters. It doesn't have any other dependencies on the other parts of the app.
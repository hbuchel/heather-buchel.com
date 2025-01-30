---
title: Accessibility tooling and good intentions
description: Your accessibility tooling deserves the same first class treatment as the rest of your stack.
date: 2025-01-30
tags: [accessibility, tooling]
socialImage: https://heather-buchel.com/social-images/accessibility-tooling.png
blueskyPostId: 3lgy2e23v6k2x
mastodonPostId: "113918572897263186"
---

<div class="aside">
<p><b>TLDR</b>: Get your accessibility tooling off from your developers' machines and into the CI. This is one of those pieces I would share with folks who are new to advocating for automated accessibility testing in their engineering orgs; especially if you feel stuck at that phase of "I know all the tools we should be using, but now what?"
</div>

Since I [recently joined a new team (and a new company!)](https://bsky.app/profile/heather-buchel.com/post/3ldgsskjmkc2y), I've been thinking about the churn that many teams (ok, maybe most) go through regarding their accessibility tooling. I feel like it usually goes like this:

- *The stage is set with engineering teams fragmented across the company, each owning a different part of the UI. Some using their own unique tech stacks.*
- **Engineer**: Hey, we should probably be testing all of our changes for accessibility, right?
- **Accessibility advocate**: Yes! I know some tools we can use! I'll show you how to use them locally then maybe you can integrate into your own team's pipelines?

And there the tool sits. In the good intention pile*. Maybe they were used for a little while at first, but then abandoned after that initial push.

<div class="aside">
*I love talking about good intention piles. They always start off as something that should make you feel good, but the longer they sit in the pile they ultimately become a source of shame or frustration.
</div>

It's a great start, and it's a position I've been in countless times, playing the part of the accessibility advocate. This happens for a number of reasons but usually it is a result of two things:

1) The accessibility advocate or team is too far removed from engineering. They can't give guidance or give better technical advice if they are too far removed; they need to be familiar with the technical details of the stack to know where tooling can actually be added.
2) The tooling suggested isn't actually made mandatory, it's a nice to have that they run if they remember or have time.

## Often, accessibility engineers are too far removed from the tech stack

#1 can be helped by having engineers that are focused on accessibility as part of your actual team. Hiring full-stack engineers often doesn't tick that box and it's silly to expect it might. Sure you can get lucky, but the spectrum of front-end engineering is far too vast now. If you're a manager, aim for more well rounded teams. If you're the accessibility engineer yourself, and you're not directly on the team, ask if you can have access to the existing tools and tech stack. You'll need to know what they are already working with.

## Elevate your tooling to CI and make them mandatory

#2 is really the clincher here. Teams have to treat accessibility tooling as they would the rest of their stack. Would you block a PR if it was riddled with broken types? Would you turn off all of your linting rules to let a PR pass through with sloppy code? **Would you trust that your engineers all ran their unit tests locally before merging their PR?**

In my experience, to make real longlasting progress, accessibility needs to become baked into the engineering process. Lunch and learns will only go so far. It needs at least the same status as the complex type system that your entire codebase relies on. It requires the same thoughtfulness as the end to end tests you run automatically to feel the warm fuzzies before releasing a new package.

At best, some form of continous integration (CI) is the perfect place to add automated accessibility testing. Right alongside your other end-to-end tests you're already running. It's something that can fail and block; and it's probably one of the more important things to block a user-interface related pull request on.

## How to dig your team out of the good intention pile

The difficulty with digging your team out of the good intention pile has to be overcome by earning trust with the team, even moreso if you're not directly _on_ the team. Some things I've found helpful are:

- Prototype your accessibility tooling as part of a Github Action (or whatever CI tool you are using) and demonstrate the expected outcomes. It goes a long way to show potentially how many violations you could be finding. Also, people like seeing green checkmarks.
- Write a technical design doc, something you can socialize and ask for feedback on.
- Integrate piece-meal. Maybe you can't have testing on every component or feature at the beginning, but developing a plan to iterate and improve on that as you go can take away the big "scaries" that engineering teams might have. Additionally, starting smaller can help you find any missing gaps from your prototype.
- Sometimes, having the tooling and tests implemented but **not blocking** is a gentle introduction for the engineering teams and a helpful way for you to identify gaps. This way you can monitor what types of violations are commonly occurring, what other changes might need to be made, and you can allow a grace period for the engineers to become accustomed to the tests without introducing a frustration point. Obviously, they should be made blocking sooner rather than later.
- Demonstrate to the team how they can unblock themselves. If your tool finds a violation in a piece of code that's actually in use, it'd be great to fix it. But we all have codebases that have that page or component that is either on it's way out or headed towards refactoring. Realistically, you'll need a method or process for determining when it's OK to skip a test.

Accessibility tooling requires the same level of support and maintenance from your team that other major technical decisions merit. Without that support, it will easily fall behind or become a point of frustration for your engineers. Learning to work within your existing technical systems, or at least learning why they exist the way they do, is a great way to make progress for your advocacy.

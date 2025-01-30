---
title: Accessibility tooling and good intentions
description: Your accessibility tooling deserves the same first class treatment as the rest of your stack.
date: 2025-01-29
tags: [accessibility, tooling]
socialImage: https://heather-buchel.com/social-images/a-letter-to-myself.png
blueskyPostId: 3kno2z52sck2x
mastodonPostId: "112085245694658753"
---

<div class="aside">
<p><b>TLDR</b>: Get your accessibility tooling off from your developers' machines and into the CI. This is one of those pieces I would share with folks who are new to advocating for automated accessibility testing in their engineering orgs; especially if you feel stuck at that phase of "I know all the tools we should be using, but now what?"
</div>

Since I [recently joined a new team (and a new company!)](https://bsky.app/profile/heather-buchel.com/post/3ldgsskjmkc2y), I've been thinking about the churn that many teams (ok, maybe most) go through regarding their accessibility tooling. I feel like it usually goes like this:

- *The stage is set with engineering teams fragmented across the company, each owning a different part of the UI. Some using their own unique tech stacks.*
- **Engineer**: Hey, we should probably be testing all of our changes for accessibility, right?
- **Accessibility advocate**: Yes! I know some tools we can use! I'll show you how to use them locally then maybe you can integrate into your own team's pipelines?

And there the tool sits. In the good intention pile*. Maybe they were used for a little while at first, but then abandoned after the shiny coat wore off.

<div class="aside">
*I love talking about good intention piles. They always start off as something that should make you feel good, but the longer they sit in the pile they ultimately become a source of shame or frustration.
</div>

It's a great start, and it's a position I've been in countless times, playing the part of the accessibility advocate. This happens for a number of reasons but usually it is a result of two things:

1) The accessibility advocate or team is too far removed from engineering. They can't give guidance or give better technical advice if they are too far removed.
2) The tooling suggested isn't actually made mandatory, it's a nice to have that they run if they remember or have time.

#2 is really the clincher here. Teams have to treat accessibility tooling as they would the rest of their stack. Would you block a PR if it was riddled with broken types? Would you turn off all of your linting rules to let a PR pass through with sloppy code? Would you trust that your engineers all ran their unit tests locally before merging their PR?

In my experience, to make real longlasting progress, accessibility needs to become baked into the engineering process. Lunch and learns will only go so far. It needs at least the same status as the complex type system that your entire codebase relies on. It requires the same thoughtfulness as the end to end tests you run automatically to feel the warm fuzzies before releasing a new package.

At best, some form of continous integration (CI) is the perfect place to add automated accessibility testing. Right alongside your other end-to-end tests you're already running. It's something that can fail and block; and it's probably one of the more important things to block a user-interface related pull request on.

## How to dig your team out of the good intention pile

The difficulty getting to that point has to be overcome by earning trust with the team, even moreso if you're not directly on the team. Some things I've found helpful are:
- Prototype your accessibility tooling as part of a Github Action (or whatever CI tool you are using) and demonstrate the expected outcomes. It goes a long way to show potentially how many violations you could be finding. Also, people like seeing green checkmarks.
- Write a technical design doc, something you can socialize and ask for feedback on.
- Integrate piece-meal. Maybe you can't have testing on every component or feature at the beginning, but developing a plan to iterate and improve on that as you go can take away the big "scaries" that engineering teams might have. Additionally, starting smaller can help you find any missing gaps from your prototype.
- Demonstrate to the team how they can unblock themselves. Obviously if your tool finds a violation in a piece of code that's actually in use, it'd be great to fix it. But we all have codebases that have that page or component that is either on it's way out or headed towards refactoring. Realistically, you'll need a method or process for determining when it's OK to skip a test.

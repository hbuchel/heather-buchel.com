---
title: Carving your space
description: Doing the work you love is hard when teams don't hire for it.
date: 2024-11-12
tags: [the front-end space]
socialImage: https://heather-buchel.com/social-images/carving-your-space.png
---

As I'm currently looking for my next role, I've had to do serious reflection on the work I actually want to do. My conclusion from this reflection is that teams generally **don't** hire for the work I really like, with some rare exceptions. This is why I almost always end up carving out my own space.

Whenever I join a team, regardless of what the job description said, I fall into filling the gaps between design and engineering. It's always where I've loved working. It's the space I seek out even if no one asked me to. The [front-of-the-front end work](https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/) (I'll probably never stop referencing this article) that is always neglected but never hired for specifically to solve. Even when it's painfully obvious it's missing. This usually includes accessibility, UI design, some basic UX consulting, and of course, actual UI development; you know, writing HTML, CSS and JS.

I've [written before about why teams don't hire for this role](/blog/2023/10/why-your-web-design-sucks/), or at least some of my musings of what's led us here, so I won't rehash all of that now. But I do want to talk about how I try to carve my space on a team to do this work that I deem both important to the web and our users as a whole.

## Front-end job descriptions suck

The first thing you notice if you live in this space, that void between design and engineering, is that job descriptions will gloss over their need for someone that actually knows HTML and CSS. It's often accepted as a given that if you call yourself a front-end developer or front-end engineer that you *just know* these things. My experience is that the spectrum of front-end development is so vast now, that it's certainly not a given anymore. Which is fine! It means we can specialize. And that specialization is still very vast in the amount of knowledge you can obtain. I would argue it doesn't even feel like a specialization, but it's own role. It also means that when teams that don't specifically seek out these people, and they assume it's a given skill that all developers know, they inadvertently create a huge gap in skillsets on their team.

So, when browsing through job descriptions, try to sus out the roles that look like they'll closely align with the gaps. Design technologist, UX engineer, and design engineer are roles that almost always align with these and maybe even mention those gaps in their description. Otherwise, I look for any that mention building components, working on design systems, or building interfaces.

## Be honest in the interview

Let's say you've applied and gotten that first introduction phone-call setup. This is definitely a great time for the recruiter, who hopefully is familiar enough with the role, to see if you're a good fit. But it's also your chance to start talking about the space you want to work in. I always mention that I like to do front-of-the-front end work, that I like to work between design and engineering, and that I want to work on teams that acknowledge accessibility is important. I hammer away with that every chance I get. I've found that most teams/managers/recruiters will at least give lip service at this point that they like that. They'll usually say, of course, they care about accessibility, and that it all fits into the role you've applied for.

## Sometimes, it is lip service.

Now, I've done this in the past and have joined teams that, during those initial interviews, told me that they really value those gaps. At that point, I'm so excited because I think they've hired me because they want me to do those things. Then, **surprise**! You're configuring build systems and writing TypeScript every sprint. Those accessibility bugs and layout issues you found? They're backlog items. Forever. Sorry, but you have lambdas to fix and alarms in AWS consoles to configure. That component they wanted you to quickly prototype? It's going into production without being finished, accessibility issues and all.

Leave. If you can. It's not going to change.

## At best, you find a role adjacent _enough_ to shine a light on the gaps

Unless you strike gold and you find a role that is exactly what you're looking for, sometimes the role ends up being just close enough that you're working on things adjacent to those gaps. That's when you can really shine a light on them. Some examples:

- Were you tasked with building or designing a new component? This is when I gather accessibility requirements and neatly list them in a doc. You can start a new step in your component lifecycle that includes this piece before moving forward.
- Did a customer point out a button has poor contrast? Cool. Find the other components that have poor contrast.
- Program manager is annoyed the page loads images too slow? Great, let's find more performance issues.
- Did you need to add or update some markup to a component? Neat. Point out any of the unsemantic HTML that currently exists in it. Make the case for including that in your update. 

These things might be easier said than done. And, there is often some trust gaining needed first before you might have the time allowed to do them. But they are all examples where you can take a task, and start carving it into the actual thing that fills those gaps. If you have one component that ships to production with poor color contrast, that alone would shine the light on various issues:

- whoever designed it didn't check contrast, are they missing the tools for that? Is that something you can help with? What other friction points do designers have in their hand off to engineering?
- no end to end test caught it, do you have tools to automatically test for color contrast? Is that a test you can add to your CI?
- nobody knew to even look for it; is this an opportunity to teach? An opportunity to turn other engineers into accessibility advocates so you're not an island of one?

This is how you carve out the space. Assuming it's not just one of those "lip service" roles, having a good enough base will give you some leeway to fill in the gaps and work on the things you think are important.
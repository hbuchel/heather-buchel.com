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

<hr />

How do you carve out your own space? I posted this on [Mastodon](https://hachyderm.io/@hbuchel/113471479894806395) and [Bluesky](https://bsky.app/profile/heather-buchel.com/post/3lariuf5u4k2p).

<blockquote class="mastodon-embed" data-embed-url="https://hachyderm.io/@hbuchel/113471479894806395/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://hachyderm.io/@hbuchel/113471479894806395" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M74.7135 16.6043C73.6199 8.54587 66.5351 2.19527 58.1366 0.964691C56.7196 0.756754 51.351 0 38.9148 0H38.822C26.3824 0 23.7135 0.756754 22.2966 0.964691C14.1319 2.16118 6.67571 7.86752 4.86669 16.0214C3.99657 20.0369 3.90371 24.4888 4.06535 28.5726C4.29578 34.4289 4.34049 40.275 4.877 46.1075C5.24791 49.9817 5.89495 53.8251 6.81328 57.6088C8.53288 64.5968 15.4938 70.4122 22.3138 72.7848C29.6155 75.259 37.468 75.6697 44.9919 73.971C45.8196 73.7801 46.6381 73.5586 47.4475 73.3063C49.2737 72.7302 51.4164 72.086 52.9915 70.9542C53.0131 70.9384 53.0308 70.9178 53.0433 70.8942C53.0558 70.8706 53.0628 70.8445 53.0637 70.8179V65.1661C53.0634 65.1412 53.0574 65.1167 53.0462 65.0944C53.035 65.0721 53.0189 65.0525 52.9992 65.0371C52.9794 65.0218 52.9564 65.011 52.9318 65.0056C52.9073 65.0002 52.8819 65.0003 52.8574 65.0059C48.0369 66.1472 43.0971 66.7193 38.141 66.7103C29.6118 66.7103 27.3178 62.6981 26.6609 61.0278C26.1329 59.5842 25.7976 58.0784 25.6636 56.5486C25.6622 56.5229 25.667 56.4973 25.6775 56.4738C25.688 56.4502 25.7039 56.4295 25.724 56.4132C25.7441 56.397 25.7678 56.3856 25.7931 56.3801C25.8185 56.3746 25.8448 56.3751 25.8699 56.3816C30.6101 57.5151 35.4693 58.0873 40.3455 58.086C41.5183 58.086 42.6876 58.086 43.8604 58.0553C48.7647 57.919 53.9339 57.6701 58.7591 56.7361C58.8794 56.7123 58.9998 56.6918 59.103 56.6611C66.7139 55.2124 73.9569 50.665 74.6929 39.1501C74.7204 38.6967 74.7892 34.4016 74.7892 33.9312C74.7926 32.3325 75.3085 22.5901 74.7135 16.6043ZM62.9996 45.3371H54.9966V25.9069C54.9966 21.8163 53.277 19.7302 49.7793 19.7302C45.9343 19.7302 44.0083 22.1981 44.0083 27.0727V37.7082H36.0534V27.0727C36.0534 22.1981 34.124 19.7302 30.279 19.7302C26.8019 19.7302 25.0651 21.8163 25.0617 25.9069V45.3371H17.0656V25.3172C17.0656 21.2266 18.1191 17.9769 20.2262 15.568C22.3998 13.1648 25.2509 11.9308 28.7898 11.9308C32.8859 11.9308 35.9812 13.492 38.0447 16.6111L40.036 19.9245L42.0308 16.6111C44.0943 13.492 47.1896 11.9308 51.2788 11.9308C54.8143 11.9308 57.6654 13.1648 59.8459 15.568C61.9529 17.9746 63.0065 21.2243 63.0065 25.3172L62.9996 45.3371Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @hbuchel@hachyderm.io</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://hachyderm.io/" async src="https://hachyderm.io/embed.js"></script>


<blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:7ak4uy7ivjro7hyyylzydi7r/app.bsky.feed.post/3lariuf5u4k2p" data-bluesky-cid="bafyreiee4icq56crnobo76ihbn5ubem6qvmibhturpnlepsvxy4go2lr4u"><p lang="en">I jotted down some quick notes on something that&#x27;s been top of mind while on the job hunt: carving out the space to do the work I want.

It&#x27;s difficult to find roles that exactly align with the front of the front end work I like to do, so here is how I handle it.

heather-buchel.com/blog/2024/11...<br><br><a href="https://bsky.app/profile/did:plc:7ak4uy7ivjro7hyyylzydi7r/post/3lariuf5u4k2p?ref_src=embed">[image or embed]</a></p>&mdash; Heather Buchel (<a href="https://bsky.app/profile/did:plc:7ak4uy7ivjro7hyyylzydi7r?ref_src=embed">@heather-buchel.com</a>) <a href="https://bsky.app/profile/did:plc:7ak4uy7ivjro7hyyylzydi7r/post/3lariuf5u4k2p?ref_src=embed">November 12, 2024 at 1:51 PM</a></blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>

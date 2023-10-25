---
title: It's 2023, here is why your web design sucks.
description: Exploring the reasons why we no longer have web designers.
date: 2023-10-24
tags: [design]
socialImage: https://heather-buchel.com/social-images/here-is-why-your-design-sucks.png
---

**TLDR:** At some point, we told design they couldn't sit with us anymore, and surprise! It backfired! Now, not only has the field and profession of web design suffered, but also, we build shitty websites.

<aside class="aside">
As I was writing this, I noticed how weird it felt using the term web designer. Isn't that weird? Also, <a href="https://hachyderm.io/@hbuchel/111292191087036667">I considered titling this "How the men folk ruined web design"</a> and just hear me out, I am going to explain that.
</aside>

## Web designers

<blockquote class="bq bq--right">
...the boys in the industry at this time made it known that we were not "real" developers.
</blockquote>

When I was first considering going into web development as a job, well before 2010, I didn't know what title to use. I spent countless hours in Photoshop, the design tool at the time, and equal amounts of time writing HTML, CSS, and JS. I didn't feel like a programmer; even though I took some Java, SQL, and C++ classes in college. And, the boys in the industry at this time made it known that we were not "real" developers. More on this later.

So, I called myself a web designer. It worked at that time; people generally knew I could mockup a static design to review and also make their website "look nice". This is, of course, a gross simplification of the work we, the people who used this title, were actually doing. We weren't just designing websites to look nice, we were also using our understanding of the web to design things that worked well on the web platform. Using our deeply technical knowledge; something that both designers and engineers do.

### The evolution of the front-end developer

At some point, loosely around 2010*, it started to become more acceptable to adopt the title of "developer" if you primarily worked on the front-end. I rarely had to explain myself when I said "web developer" or "front-end developer". But, what I found to be lost, is that I now had to explain that I could also _design_ websites.

<aside class="aside">
2010 is definitely not the year this happened for everyone. For some, they experienced this change sooner. This is just an estimate based on my experience and my career evolution. And it tracks, because it was very near the emergence of a particular front-end framework. You can guess which one. Interesting how this all lines up, huh?
</aside>

## Where did all the web designers go?

I don't know how else to answer this, besides: the gendering of design as women's work is why people don't use the title "web designer" anymore. It's been belittled and othered away. It's why we've split that web design role into two; now you're either a UX designer and you can sit at that table _over there_ or you're a front-end developer and you can sit at the table with the people that build websites.

<blockquote class="bq bq--right">the gendering of design as women's work is why people don't use the title "web designer" anymore.</blockquote>
 
What happened around that time, in 2010 or so, that I mentioned? Well, the area of front-end work, which has been heavily gendered as "feminine" work, was finally being viewed as "serious" or "real" programming* because, to no one's surprise, something that is designed well is good for business. As a "real" career option for developers, now men are interested. You're welcome.

<aside class="aside">
*Cue that tweet that shows up every 6 months or so that tries to stir the pot by boldly claiming HTML is or is not a real programming language.</aside>

### Sorry, building websites is for us serious manly man engineers now who can do very difficult things like making the computers go beep boop.

So at this point, if you were a web designer, you've probably switched over to calling yourself a front-end developer because:

- You write code. So it feels natural to adapt this title.
- You still want to influence the front-end side of the product.
- You want to be able to apply your deeply technical web design knowledge as you were before, in the building of software for the web platform.

This is what I did. I felt that all of my accessibility and knowledge of the UI side of the web platform was going to be lost if I had to trust other engineers to build the website. I learned to write code in the first place because I wanted the thing I designed to also be the thing that was built. And, I learned to design websites, because I wanted to build the right things.

Since the "design" piece of web design is still viewed as a feminine role, that part of being a web designer was largely cut off from the front-end development role, now that men were all in on that role. In a lot of orgs, the people that do design are now UX designers. It's a completely different role with a different budget for head count. They sit on a different team. They're loaned and rotated out to other product teams. They're essentially cut off from their engineering partners.

## We all lost when the web design role was split in two

Design is highly technical. Some will view this as a demand that designers who design for the web should learn to code, but I don't necessarily think that's true.* What I think this means is that design requires a deep understanding of a subject. 

<aside class="aside">*Maybe I think this is somewhat true. But I'm biased. I was a web designer who codes. But, I learned web design in an era when it was acceptable and normal to do both. Now, these roles are often seen as unicorns or that you're lucky to find someone that can do both. I think we'd find more people that can do both if we made the space for it. Instead, we fill teams with JS engineers and expect they'll just figure out the front-end as they go. Anyways...</aside>

But, if our design partners are now at a different table, how do we expect them to acquire the deeply technical knowledge they need to know? I think the design role has suffered greatly since the evolution of the front-end role. The people we task with designing websites, I've found, often have huge gaps in their understanding of the technical details of designing for the web. Things like:

- An understanding of the DOM and how the positioning of elements visually can be impacted by their position in the DOM (or vice versa)
- Accessibility in general, from the basics of color contrast, which has grown more nuanced with the introduction of the [APCA](https://git.apcacontrast.com/documentation/APCAeasyIntro) to an understanding of common ARIA patterns.
- An understanding of native browser controls. It's important to understand when you're designing something that should use a native browser control and is just styled differently, or when you're designing something that requires a completely custom control which can greatly impact engineering complexity. "Just put it in a tooltip" is not always a simple remedy.
- An understanding of design systems. How to maintain visual consistency, and create patterns, and when it's ok to break those rules.

These are some, not all, of the core concepts of web design. We don't call it that, anymore, but that's what it is.  These are all things I would sum up as deeply technical knowledge and **someone** needs to know it if you're going to build a good website. If you're a front-end developer, you've probably experienced one of these gaps in a design you've been given. And if you're unfortunate to work in an org that throws design over the wall, you've probably experienced quite a bit of churn trying to rectify those gaps. So now the thing that is built is based on a poor design.


On the other hand, if your engineering team has no front-of-the-front-end engineers, who are more likely to know about these things, those gaps never get pointed out, and they never get fixed. Or, let's say your designer *does* have this deeply technical knowledge, but the engineer doesn't, then the thing that is built, is just plainly built wrong. We now live in a world where our designers aren't allowed to embed with the product they're building so that they can acquire the technical design knowledge they need to actually do their job and our engineers never learn about the technical design knowledge that they need to build the thing correctly.

## Design decisions can only be pushed so far to the left before we realize the system is broken

<blockquote class="bq bq--right">At what point do we stop and realize that we often set our design teams up for failure?</blockquote>

We often talk about decisions that need to be made further left in the product development cycle. If only we could address accessibility, sooner. If only we could have understood how the API was going to work, sooner. I often feel like I'm ping ponging between these two scenarios:

- "We would have caught this sooner if engineering was more involved in the design process".
- "We would have designed this differently if we knew engineering couldn't handle it"

At what point do we stop and realize that we are setting our design teams up for failure?

## How do we fix it?

Some of the issues I acknowledged are education gaps. We don't teach web design anymore. We rarely even use that term, even though that's explicitly what it is that we're missing. We don't have designers that have the deeply technical knowledge they need to design for the web. We give them a role of UX designer and make do with them having a vague understanding of how the platform works and how to design for it.

But why is there this education gap? I think that's a larger systemic question. I would love to hear folks who have a formal education in UX design chime in; because I think their role is largely misunderstood and misapplied. Having a formal education in neither design nor development, I don't have a great answer to this. On the engineering side, I do know that the recent trend of bootcamps for front-end development largely fail their students; they don't equip them with the technical design knowledge needed for building websites and, instead, often jettison them straight to scaffolding a website via a popular framework.

There is also the larger issue of who we hire for. This is something I think about often when I think about moving teams or companies. Am I going to find a place that will allow me to actually utilize all of this web design knowledge I have? Or, am I going to just be a JS engineer who spends most of my time configuring pipelines or doing ops work? I would say that most larger organizations favor the latter and live with the gaps in design. So, if you're a front-end developer, where do you spend your time developing yourself? To get the roles that companies actually hire for and pay more for?

Anyways, that's why your design sucks.

Here are some other articles that this topic always makes me think of:

- [Tailwind and the Femininity of CSS](https://thoughtbot.com/blog/tailwind-and-the-femininity-of-css) by Elaina Natario
- [front-of-the-front-end and back-of-the-front-end web development](https://bradfrost.com/blog/post/front-of-the-front-end-and-back-of-the-front-end-web-development/) by Brad Frost

[Yell at me very politely on Mastodon about all of this!](https://hachyderm.io/@hbuchel/111293064526647885) 

<iframe src="https://hachyderm.io/@hbuchel/111293064526647885/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://hachyderm.io/embed.js" async="async"></script>
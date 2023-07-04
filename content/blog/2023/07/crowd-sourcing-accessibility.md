---
title: Thoughts on crowd sourcing your accessibility feedback.
description: Summarizing my thoughts on why crowd sourcing your accessibility feedback isn't always a great idea.
date: 2023-07-04
tags: second tag
---

Some recent discourse regarding accessibility on BlueSky left me with some feelings about crowd sourcing your accessibility feedback. I'll copy that post here since BlueSky is still invite-only:

<blockquote class="blockquote">
I really hope BlueSky is paying the people spending time to collect and relay accessibility feedback that they've reached out to for guidance. Like this isn't just a cute little open source library. You're bankrolled.
<span class="blockquote-attr">me, <a href="https://staging.bsky.app/profile/hbuchel.bsky.social/post/3jyz2mqyled2x">posted on Bluesky</a></span>
</blockquote>

There are two things I've noticed on BlueSky since I joined: **1.** BlueSky _seems_ to largely be gathering their feedback on accessibility issues via crowdsourcing. **2.** People were excusing why the app and website launched with <a href="https://staging.bsky.app/profile/hbuchel.bsky.social/post/3jucw63ncnx2e">glaring accessibility issues</a> (this is a link to Bluesky discussing some of the issues; my apologies if you can't access it, it's not really necessary for this discussion).

<aside>
In BlueSky's defense, they <strong>have</strong> been releasing a ton of accessibility improvements to the app, which is great to see. I pick on them in this article because, well, they have leadership that could have done better and I believe the responsibility they have is greater than most open-source projects.
</aside>

## Relying solely on crowdsourcing for accessibility feedback leads to inconsistent results and is exclusionary

Accessibility consulting is a whole job. Even as a developer who refers to themselves as an advocate and not a full time accessibility engineer, it is work that easily and often leads to burnout. It's worth paying someone to do this work just as much as you think it is to pay someone to re-write your application in Typescript; or whatever other tech problem someone might think is absolutely essential, you get the idea. 

When you don't treat it as a job worth paying someone for, you'll get inconsistent results and will probably make poor progress on fixing anything. Crowdsourcing your accessibility work often only attracts people that "have time". That is, they:
- Can afford giving up their time to someone else for free 
- Have fewer responsibilities to other people (spouse, partner, children, family)
- have the ability to work extra hours, i.e. after work or on weekends.

This likely excludes parents or caregivers, people who financially cannot afford to work for free, and/or people who may not have the "<a href="https://butyoudontlooksick.com/articles/written-by-christine/the-spoon-theory/">spoons</a>" to do extra work. You're essentially accepting, by only seeking crowd sourced feedback, that most of your feedback will probably come from folks that are more than financially secure, probably young or lacking responsibilities to other people, and do not have a disability. This excludes so many people. 

Additionally, a lot of accessibility issues that are found in a product, are usually not one-offs; they are often systemic. This is where inconsistency comes into play. If you don't have a plan for someone to address issues in an ongoing basis, you're likely to have regressions.

## The excuses

There is always this slew of replies given when you bring up that a product opened its door to users in a poor state regarding accessibility. These replies often look like:
- "But it's a small team!"
- "Gee, it's only in beta. It hasn't even launched yet."
- "Well it's open source, why don't you fork it and fix it or make your own client."

**Please stop doing this**. 

### But it's a small team!
<blockquote class="blockquote blockquote--right">If you're doing something so ambitious, like creating a product to replace Twitter, it's your responsibility to find the right people.</blockquote>

If you're mantaining an open source product that includes a UI that people use, you need to attract people that build UI to your product. Invite them. Seek them out. Hire them. Show them how they can contribute if they are not code writers or if they don't use your specific framework/tech stack/etc. If you're doing something so ambitious, like creating a product to replace Twitter, it's your responsibility to find the right people.

<aside>
I have a whole list of ideas for how to attract people to your project that don't write code or don't come from a heavy engineering background. Hopefully I can get to writing it and update this space with a link to it!
</aside>

Twitter and Reddit are examples of apps where open source platforms are springing up to replace them. But it should not be overlooked that these platforms were used for community building. For mutual aid. For activism and raising awareness. We're not talking about replacing your go-to linting library or image minification tool. We're talking about services that some have argued should be a public utility; that is how important they have become.

<blockquote class="blockquote blockquote--right">R.I.P. to the Twitter accessibility team.</blockquote>

This excuse has even less weight for a product like BlueSky, which is funded by Jack Dorsey. They are bankrolled. Hire disabled people. 

As a side note, R.I.P to the Twitter accessibility team. From the outside, it looked like they were putting in the work and coming up with creative solutions that were rooted in accessibility. Did Jack learn nothing from the very smart people that worked at Twitter? Maybe it's just me, but if I'm <a href="https://twitter.com/bluesky/status/1518707604750430208">fronting $13M</a> for a product where at least the UX largely mimics an existing product I previously owned, I'd probably look to recreate what worked well there.

### It's only in beta.

Stop treating accessibility as features or line items that can be tacked onto products at a later date. When you launch a product, or open the door to users, and there are glaring accessibility issues that cause the app to be completely unusable, that says a few things quite loudly:
- You didn't consider disabled people using your product.
- You don't work with any disabled people.
- You haven't hired anyone that focus on accessibility.

If you start with accessibility-driven development, you can launch a mininum viable product that is actually viable for people to use.

### It's open source, you do it.

This is another excuse that says a couple things loudly:
- You're making an assumption your users are programmers? And that's the only way to have an accessibility issue fixed? Not a great look.
- You don't see accessibility as being crucial to your product.

## Accepting feedback

The "excuses" discussed in this article are usually the result of someone feeling very defensive. I get it. It feels different to get feedback related to people's frustration using your product than it does for something like a weird browser issue or a critique on how you decided to write a bit of JavaScript. People tend to get very defensive when it comes to accessibility feedback.

One of the best things you can do, especially if you run communication for an open source product, is to learn how to take this feedback. Most of the time people are just happy to hear that you have a plan to address the issue; they don't necessarily think you are a terrible person because you missed labelling a button. Increased frustration comes when this becomes a repeated pattern that goes unacknowledged. Or if, you know, you're funded by a billionaire. 
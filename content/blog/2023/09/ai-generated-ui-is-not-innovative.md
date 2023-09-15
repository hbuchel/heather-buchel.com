---
title: We're still not innovating with AI-generated UI.
description: We continue to not solve the same problems that we largely conjured out of no where.
date: 2023-09-14
tags: [ai, web platform, accessibility]
socialImage: https://heather-buchel.com/social-images/ai-generated-ui-is-not-innovative.png
---

No tool that asserts you can build production-grade UI code from their AI is innovative if it's not driven by accessibility. It's also not production-grade if the code it generates is inaccessible. That is the short and sweet of it. 

Not everyone is claiming that their AI tool is particularly innovative. But like most things involving AI right now, we are seeing some pretty wild claims.

## We've been here before.

<blockquote class="bq bq--right" style="--offset: 2">We've been in this same scenario with design tools prior to this current AI craze</blockquote>

This is where we are and it's where we've been before. We've been in this same scenario with design tools prior to this current AI craze; tools that claimed designers could build responsive, accessible websites straight from the design or WYSIWYG editor. And maybe we got a little close to that, as long as your website was mostly text, images, and links to other pages that were just text and images. Even in those "close" scenarios, you'd probably still be left with out of order headings and unlabelled navigation elements. 

And, your developer would wonder how on earth are they going to keep design-generated code maintained and on par with what they actually end up shipping in production.

So here we are again.

<div>
<img src="/img/ai-gen-tweet.png" class="img img--center img--medium" alt="a tweet from @rauchg that reads: v0.dev produces the kind of production-grade code that we'd want to ship in our own @vercel products. That was the bar we set for ourselves. At the moment it can output HTML with @tailwindcss and React w/ @shadcn UI." />
<p class="source"><a href="https://twitter.com/rauchg/status/1702355455362912595">tweet source</a></p>
</div>

I'm not even mad at what it _does_. It looks like it will be a great tool for prototyping. A tool to help developers that don't have experience with CSS and layout to have a starting point. As someone who spent some time building smoke and mirrors prototypes for UX research, I welcome tools like this.

What concerns me is the assertion that this is production-grade code when it simply is not. I won't dig into all of the issues. Lucky for us, amidst all of the blockchain and AI fans foaming at the mouth to use this new toy, senior software engineer Ashlee M Boyer has graciously highlighted <a href="https://twitter.com/AshleeMBoyer/status/1702367107130720534">some of the accessibility and HTML issues of the generated code</a>. Unlabeled buttons, form elements, and assuming someone will use `<button>` elements for page navigation, are just some of the very foundational things it gets wrong.

<blockquote class="bq bq--right" style="--span: 1; --offset: 9">Code that generates an inaccessible UI is not production-grade.</blockquote>

Code that generates an inaccessible UI is not production-grade. Until our tools capture context of what the UI is meant to do, and not just what it should look like, and until it can "know" about other elements in the UI, we are not doing anything innovative with generating UI code. In the end, all we've built is a really high fidelity mockup of what the UI might look like.

## How do these AI tools actually fit in the front-end space?

<aside class="aside">This is where I try and fail to not be too cynical, I am sorry.</aside>

I've mentioned prototyping. But even then, I'd hesitate to put it in the hands of an engineer that doesn't know UI development. It's the same with handing off a design mockup in Figma or Sketch that doesn't spell out the required accessibility needs and interaction states; like focus, disabled, etc. There are a lot of gaps to fill in.

Sometimes, however, tools like this can be yet another tool in the arsenal for design teams to help translate ideas to engineering teams. We don't always speak the same language. It's nice to have things to point at and go "See, like this" and tools that overlap the design and engineering worlds are useful. Why can't this be good enough, a pre-development tool? Is it because it's now a tool that can cater to the UX/design crowd?

### Ok, here is the cynical part.

I'm cynical about the web industry these days. I generally feel like companies with poor leadership who make bad business decisions will view these tools as a cost-cutting opportunity. Why hire a UI focused engineer, when we can get the JS engineer with no accessibility experience to throw it in at the end from some generated code?

<blockquote class="bq bq--right"> I would rather, however, spend my time actually building innovative UIs, and that starts with accessibility at its core, not AI</blockquote>

This isn't a totally new experience for us on the UI side; we're used to getting pulled in at the wrong times to fix interfaces and to address accessibility after it's become a risk. A risk, because customers are frustrated with the clunky UI that didn't take into account keyboard navigation or other <a href="https://heather-buchel.com/blog/2023/07/just-normal-web-things/">normal web things</a>. Or, potentially, a risk, because now they are being sued for not offering an accessible interface. A lot of us have found quite a bit of job security in fixing problems that we created. I would rather, however, spend my time actually building innovative UIs, and that starts with accessibility at its core, not AI.

If we review the past ten years or so of thought leadership (ew) in the web community, we can also see how a very vocal few have had a large sphere of influence. That's why it "feels" like everyone is building single page apps, when that's not true. And that is why I take issue with CEOs like Guillermo Rauch announcing to their fanbase* what is really just an illusion; it's disingenuous to everyone involved.

*Let's be honest, that's really what the web community feels like on Twitter these days. The days of really engaging discussions on that platform seem to be over.

It bothers me to see yet another burden put on the shoulders of people who already spend a lot of time and energy laboring in the areas of accessibility and UI development. We are already left to plead for our space while watching bad things get decided for products we work on. Now, we have to add "talk the stakeholder out of using a text prompt to build the new UI feature" to the list?

### This is new technology!

I've seen a number of excuses for these tools being new or in an alpha/beta state and that is the reason why the code generated isn't accessible; which apparently is some magical separate state of being production-ready that is OK to skip over before releasing to people /sarcasm. <a href="https://heather-buchel.com/blog/2023/07/crowd-sourcing-accessibility/#it-s-only-in-beta">I've written about this excuse before</a> but heres the gist of what I think this excuse really says:

- You didn't consider disabled people using your product.
- You don't work with any disabled people.
- You haven't hired anyone that focus on accessibility.

## Wrapping up, I guess

Honestly, I'm tired. We create problems like good UI being difficult to build because we won't hire people who can build good UI. It's boring and predictable, and nothing new.

---
title: Just normal web things.
description: A plea for us to get back to building websites that can do normal website things.
date: 2023-07-06
tags: [web platform]
---

We've let ourselves get away from building websites that can do normal web things. I've noticed this a lot recently due to a surge in new social media platforms springing up. Everyone is building new clients, apps, and in some cases, like React Native, attempting to share code across platforms. It's definitely exciting, and I'm actually thrilled that people are building these things.

<blockquote class="bq bq--right" style="--offset: 2"> In the end, it's usually because we've JavaScript'ed our way out of these things.</blockquote>

What is less thrilling is that, nevermind the basic accessibility requirements that are often missing like alt text on images, we stopped letting people do very normal web things. There are a number of avenues to route the blame to: rushing to release something midly usable for testing protocols in the wild, not having a UI engineer on the project, building things in a mobile "touch first" experience and ignoring other inputs or devices; the list goes on. In the end, it's usually because we've JavaScript'ed our way out of these things.

Here are some things I wish people allowed to continue to work in their web projects:

- **Let me copy text so I can paste it.** Please. This is often cause by removing pointer-events or layering elements on eachother that are meant to be clickable. This happens a lot with clickable "card" components.
- **If something navigates like a link, let me do link things.** Let me right click on the link without it navigating so I can open the context menu that lets me do other link things (like copying link text, copying link address, etc.) Let me use usual link keyboard shortcuts (like `ctrl + click` on Windows) to open in a new tab. Just normal link things. This is that dreaded thing that us front-end folks are always harping on about: using a div with an on-click to navigate instead of an anchor element.
- **Let me zoom in on my browser without the website getting all out of whack**. I just want to be able to read.
- **Do responsive things** I didn't spend most of my early career convincing clients to let us do a responsive website just for you to serve me up a boring layout that kicks down to your mobile layout as soon as you are less than 1200px. I actually think Mastodon and Twitter do a good job at this. The UI feels familiar if you drag your browser down to a small narrow viewport. The space mostly gets used.
- **Let me have hover styles** I've seen too many React Native ports to the web that have zero :hover or :focus styles beause "you can't hover or tab on mobile, right?" (wrong) or weird disabled looking :active styles. Do normal interaction state things for the web in your web app. This issue in particular almost always makes it glaringly obvious when some poor soul ported their RN app to the web to save time.
- **If the UI completely changes when I click on something, as if I've navigated to a new page, give me a browser history update and a new url** It's annoying not being able to link to a state in the UI that appears to be it's own page and that is lost to the void if I navigate away.
- **Let me see scroll bars** Please don't hide them for the sake of your "slick" ui. Sometimes I want to click on the scrollbar and drag it. Just a normal web thing.
- **Stop hijacking my typical browser shortcuts for use in your own app** I've seen this happen with `ctrl + f` for opening a custom in-app search bar. I don't want that. It doesn't always search the page as usual.

I stopped myself from adding a lot of things that would usually fall under accessibility violations though there is definitely a lot of crossover in the list above. What did I miss? 
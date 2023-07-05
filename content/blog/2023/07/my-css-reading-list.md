---
title: My CSS reading list roundup (July 2023)
description: A roundup of some recent CSS related things I want to learn more about.
date: 2023-07-05
tags: [css, reading list]
---

Recently, I took the <a href="https://stateofcss.com/en-us/">State of CSS survey</a> and they have this handy feature for each question where you can add that topic to a reading list. After you finish the survey, they send you an e-mail with links to articles about each topic. Wonderful!

The last several years I've felt further and further pulled from the tech I really love: CSS and UI building. So, in addition to gently nudging myself to work on more side projects, I've been trying to get back into looking up new topics. Here is a round up of things I'm looking forward to tinkering with that are new or new-ish to me:

## Subgrid

To be honest, I've worked without subgrid for so long now and have typically found some sort of workaround that I'm not sure what immediate use I'll have for this. Still, it will be interesting to see if I can find ways to uncomplicate or remove some div-soup from layouts.

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid">Subgrid on MDN</a>

## Container queries

I feel like this is the star item I want to delve into right now. One thing I found working with engineers who consumed design systems is that they often struggled with piecing together responsive layouts from components. If we can bundle more of the "responsiveness" to the component itself, since we don't always know the context they'll be used in (i.e. in a sidebar, in a large content area, in a small popup, etc), that's a win.

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries">Container queries on MDN</a>

## Viewport units

I've been using viewport units like `vw` and `vh` for sometime now, but I'm excited to revisit some layout quirks that might now be readily addressed by using dynamic viewport units like `dvh` that take into account things like browser toolbars on mobile; you know, when 100% height gets jumpy or cutoff once the toolbar scrolls away.

<a href="https://web.dev/viewport-units/">Viewport units on web.dev</a>

## Anchor position

Wow. I'm so excited to see CSS features that tackle some of the really complex parts of UI development. If, like me, you've ever had to anchor a popup or tooltip to an item and found it incredibly complex or annoying, this is for us. Anchor position will allow you to, essentially, tether an element to another.

<a href="https://developer.chrome.com/blog/tether-elements-to-each-other-with-css-anchor-positioning/">Tether elements to each other with CSS anchor positioning</a>

## prefers-contrast

This is cool. I've already been testing how some of my work fairs in Window's high contrast mode, but it's neat that there are more options for possible themes to serve users besides just light and dark.

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast">prefers-contrast on MDN</a>
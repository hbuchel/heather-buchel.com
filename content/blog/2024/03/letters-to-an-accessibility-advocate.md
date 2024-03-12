---
title: A letter to my younger self, as an accessibility advocate 
description: All of the things I get to say "I told you so" about, now.
date: 2024-03-12
tags: [accessibility]
socialImage: https://heather-buchel.com/social-images/a-letter-to-myself.png
---

I thought I'd make a list of things I wish I could go back and tell my younger self as a web developer who was just beginning to lean into web accessibility as part of her career path.

For some context, I was a self taught web developer. I learned what I could from the internet. And my early career had me working more with back-end developers than other senior front-end developers. It was a lot of muddling through and finding my way. I think that's not actually that rare, even today, given how common it is to find front-end developers who have little web accessibility experience. So, hopefully this might help someone else. Maybe you, and I really hope you do, can speed run some of my learnings.

I'll also caveat the tone of this post. I probably come off as a little cynical. That's a habit of mine. I think ask anyone that's worked in this space for a long time, and they might be understanding of that. Some of these are even reasons why people retire from this space. At some point, it's exhausting. For me, the cynical parts are still fueling me to do the work.

So here are some things that I wish I knew when I was first starting out:

## Blog posts and articles are great, but seek out the experience and opinions of Disabled users.

<blockquote class="bq bq--right">
I'm still surprised at how many developers have never watched someone use a screen reader on the thing they've created. 
</blockquote>

I first started getting into HTML and building things on the web when web standards were still becoming A Thing. I didn't have any mentors besides the people I looked up to online. But I gobbled up any articles and guides I could find on how to go about making an accessible website.

Advocates are great. I call myself that. I do my best. But I, and the articles you find online, are not going to be a replacement for getting your product in the hands of actual Disabled users and having them test your application.

I will never forget when I watched for the first time a Blind user navigate around a piece of software I made. It was essentially a life changing experience for me as far as my career went. I'm still surprised at how many developers have never watched someone use a screen reader with the thing they've created. 

Seek out this experience. You'll probably feel uncomfortable depending on your relationship and experience with disabilities or the Disability community; you might even feel a little ashamed at how well you discover your software can actually be used. But it is the only way things will improve.

## Don't fall into the "Well they did it, so its ok if we do, too" trap.

<blockquote class="bq bq--right">
...given the general erosion in tech we're experiencing now, especially from Big Tech with AI type of places, they might be the worst examples to follow.
</blockquote>

I remember when I first started out in this career thinking anyone that worked at [INSERT FAANG OR BIG TECH COMPANY HERE] had to be the smartest and the best. The most knowledgeable. Truly, the most examplary work. 

Wow, I was so wrong. And so naive. Hey, I mean, they hired me. This is so laughable now. None of us know what we're doing. We're all figuring it out. They were *really* just figuring it out back when I started and we all still are. 

If anyone tries to tell you "well they did it this way so it must be accessible", they are looking for an easy way out of doing the work. That's not how accessibility work is validated. And, given the general erosion in tech we're experiencing now, especially from Big Tech with AI type of places, they might be the worst examples to follow.

## The "technical" reasons why something can't be accessible are almost always "people" reasons, actually

It might seem like a technical reason on the surface level. It requires a code change. But somewhere along the lines of those code changes being made are the people getting in the way. The people saying the deadline can't move. The people saying "well it was like this before so we're not changing it." The people with no imagination. The people who value the short term over the long.

You'll hear that excuse a lot and it's amazing how quickly those technical challenges can vanish when the people in change change.

## You're going to spend a lot of time trying to influence people.

Ugh. And I hate leading meetings. That never changes. But, it's generally easy to find the accessibility gaps. It's the getting people to understand the organizational changes needed to address them that is the hard part. It's a lot of time convincing people of things that have been documented for years. It's a lot of time spent educating people on things you learned 1, 5, 10 year(s) ago. It's a lot of losing battles and "I told you so's". You'll spend some time fixing actual accessibility defects. You'll spend more time trying to figure out how to get organizations to work in a way that would have let you avoid the defects (or the fallouts from them) in the first place.

## The "I told you so" moments are actually going to sting a little.

<blockquote class="bq bq--right">
For whatever reason, someone else is going to make the decision that they know better or that whatever analysis they've done has concluded the thing you've asked for isn't needed or isn't a priority.
</blockquote>

At some point you're going to make a recommendation for an accessibility requirement, and you're going to get shot down. For whatever reason, someone else is going to make the decision that they know better or that whatever analysis they've done has concluded the thing you've asked for isn't needed or isn't a priority.

And then it's going to backfire. Sometimes spectacularly so. That thing that wasn't a priority is now suddenly deemed very broken and a problem. Higher up people are mad. The word escalation is being used. You're going to be frustrated at the time lost and at the frustrations that were caused to your users because you weren't listened to in the first place.

Maybe keep those in your pocket. Reflect on how you documented the ask; actually, make sure you're documenting accessibility  requirements if you're not already because it might protect you. Off hand or informal conversations in person or over Slack aren't as easy to point to as a requirements doc with big red text that says "BLOCKER". See how you can use it to give yourself the advantage next time when trying to influence change. At this point, you can likely just hope to use it as a learning experience.

## I'm sorry, but you're going to spend a lot of time teaching people about alt text on images.

<blockquote class="bq bq--right">
I often think about all of the time for creativity and innovation in the accessibility space that has been squandered...
</blockquote>


Oh, boy. The time I wish I could save from starting back at what always feels like square one with every new team. Unfortunately, this is the state of web development education. People will have senior titles as a front-end engineer, their realm of responsibility will be in the building of user-interfaces, and you'll still be pleading with them to do the basics. 

I often think about all of the time for creativity and innovation in the accessibility space that has been squandered by putting our best and brightest on tasks like hounding their fellow developers to use a button instead of a div with an onClick.

I don't have a solution for this, besides to ask a lot of questions during your interview about how accessibility-driven the development practices are on the team you'll be joining.

## The business doesn't care about what you think is morally good for society.

Early on, I thought I could get people to care about making our software accessible by appealing to what I thought they would agree felt morally right to do. I was (and am still!) one of those grossly optimistic people who saw the web as this great medium that **everyone** could utilize and take advantage of for the betterment of our society. I know, disgusting.

That doesn't work. Stakeholders, or whoever it is you need to convince that this work needs to be done, don't hold themselves to the same level of empathy that you might, and will end up spinning on unhelpful questions and conclusions, such as:

- Well how many of our users actually use a screen reader?
- But how are we supposed to know if anyone has a cognitive impairment?
- Well, they can just use a mouse, right?
- Well, most of us can see it just fine so that's ok.

The most progress I've felt a team make regarding accessibility is when we hit a really sweet spot of demonstrating a decrease in risk for the business based on changes we made that were rooted in accessibility. It might sound like a robotic methodology, but what I found, is that it forces stakeholders who don't know anything about accessibility or who have not addressed their own bias, to acknowledge the actual improvements or decrease in risk that are the outcome. They don't get caught up in those unhelpful questions, many of which are impossible to know the answers to. It reduces the opportunity they have to become defensive and waste time. It saves you the time of pleading with people to just not be a shit person, because often, that is what you'll feel like you're spending your time doing.

If you can, document accessibility violations before and after work is done. Count issues that could be seen as an accessibility improvement if they were made. Run experiments on accessibility related UI changes. Identify the gaps between your product and competitors. That *is* data you can provide.

## Related to un-caring stakeholders, people are going to get defensive with you and sometimes outright nasty.

The things I've seen in reply to me asking for improvements that are accessibility related have been all over the place. The nicest will be when they give you lip service of "Yes, this is so important!" and then that work sits in a backlog until you leave the team. A little up from that will be people gaslighting you and telling you it's not that big of a deal. Somewhere in the middle will be someone calling you overly sensitive.  The worst will be people that say things basically along the lines of "Eugenics is good and chill, actually, I don't see a problem." or that some people just shouldn't be accommodated for. 

I can't say this part gets any easier, but I have gotten better at telling people to fuck off and moving on when needed.

## The greatest improvements won't come without organizational buy-in

This one sucks, because I really like squirelling away and doing a really good job on my own on a task, then emerging with my shiny results and saying "Look! I fixed it!". You can't move mountains on your own. Start with your team. If they're on board for improving the accessibility of your work, fantastic. You have a start. If not? If you can't even get your manager to prioritize it? Your manager's manager if you have that connection? Is building accessible software important to you? Look for a new job. Unfortunately, some things don't change. If you hit a wall too many times, it's probably time to move on.

## Ok, I have to add some things that are more positive, because jfc, Heather. This is a little depressing. My bad.

- You'll learn to be a better person because of this work. Just, in general. Because it will force you to look at your own bias. It will force you to acknowledge the things you don't know and need to get better at.
- You'll become a life-long learner and be happier for it.
- You'll meet a lot of great people along the way. People that make you want to stick around.
- You'll finally find value in your work.
- You'll shed your imposter syndrome. The work you do is great, and needed, and important, and you belong there doing it.
- You'll develop a toolset that you'll still think can be used to stop the bastards from keeping us down.

<hr />

I genuinely want anything and everything that I've struggled with to come easier to developers that are just entering this space. Anything that you would tell them or your younger self? [Let me know on Mastodon.](https://hachyderm.io/@hbuchel/112085245694658753)

<iframe src="https://hachyderm.io/@hbuchel/112085245694658753/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://hachyderm.io/embed.js" async="async"></script>
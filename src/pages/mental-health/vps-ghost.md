---
layout: ../../layouts/MarkdownPostLayout.astro
title: "A Patient's Record of Setting Up a VPS and Battling Ghost During Protective Hospitalisation"
pubDate: 2025-12-11
description: "This is my account of setting up a VPS and writing a blog using Ghost whilst undergoing involuntary hospitalisation. It touches upon my mental state during admission and the technical challenges involved."
author: "Nao"
image:
    url: "/images/vps-ghost.webp"
    alt: "Photograph from involuntary hospitalisation"
tags: ["Mental-Health", "Metacognition", "Experiences"]
---

<div class="box2">
<p><small><u class="orange">※ This article is a record based on personal experience.</u> <br>
While I have written frankly about my condition and hospital experiences from my perspective and emotions at the time, this is solely one individual's experience and does not apply to all cases. Furthermore, while some expressions incorporate humour or metaphor, this is intended to lighten the seriousness and is not meant to mock the illness or those involved. </small></p>
</div>

## Regarding the Hospitalisation Situation at the Time

I experienced involuntary hospitalisation from 19th May 2025 until 9th September 2025, a period of approximately four months.

In fact,

I had been hospitalised previously in March 2022, August 2023, and May 2024, making this my fourth admission.

At the time,

I was admitted under protective measures due to delusions associated with schizophrenia, though.

I was not in a delusional state and there were also suspicions of bipolar disorder.

The following symptoms were particularly prominent during that period:

<ul class="list">
<li>Symptoms of mental instability</li>
<li>Waking up earlier than the designated wake-up time</li>
<li>Anxiety about the hospital stay becoming prolonged</li>
<li>Fear of cognitive decline</li>
</ul>

---

<div class="note">
  <strong>Note:</strong> Compulsory hospitalisation is a form of admission conducted without the patient's consent, aimed at treating mental illness.<br>

It is primarily applied when there is a risk of the patient harming themselves or others, or when treatment is deemed necessary.<br>
  Under this admission type, procedures based on law are followed to ensure the patient's rights and safety.
</div>

### Symptoms of Mental Instability

At the time, I recorded passages like this:

> I always push myself too hard, leading to mental exhaustion. I suppose I can't be of any use to society unless I keep striving.
> I've sometimes felt anxious, wondering if it's acceptable for someone like me to exist.

During my hospitalisation,

I recall these feelings frequently overwhelming me, leaving me in a state of profound mental instability.

Moreover, as the prolonged hospital stay continued, rumination increased, making me more susceptible to negative thought patterns.

---

### Waking Before the Set Wake-Up Time

During my hospital stay, I often found myself waking before the designated wake-up time.

During periods of unstable mental symptoms, this wasn't a problem as my sleep was recovering.

However, it's also true that once my mental symptoms stabilised, I frequently woke in the early hours.

The hospital rule was to wake at 6:30am, with bedtime at 9pm.

Yet I often woke before that. As doctors considered this within normal limits and didn't prescribe sleeping pills, I recall the constant struggle of being unable to fall back asleep in the early morning, which was very difficult.

---

### Anxiety about prolonged hospitalisation

Around this time, my main worry was the anxiety over the hospital stay becoming prolonged.

Even after recovery, if the environment for discharge isn't settled, prolonged stays are common in psychiatric hospitals.

Things like not securing a group home placement, or for those living alone, even if symptoms improve,
prolonged admission to a closed ward is exhausting every single time.

For some, financial hardship becomes an issue, but with involuntary admission, patients cannot discharge themselves at will.

---

### Fear of Cognitive Decline

At the time of admission, my greatest fear was cognitive decline.

During my first hospitalisation for schizophrenia,
cognitive decline led to impaired memory.

I forgot my consultant's name and experienced sudden lapses in memory.

This time, too, I felt anxious and impatient, worrying that the same might happen.

Consequently, when permission to visit the shop was granted, I bought a notebook and experimented with compiling a thought log,
hoping to prevent cognitive decline.

Below is a photograph showing the contents of that notebook from that period.

<p><img src="/images/note.webp" alt="Photograph of notebook cover: Emotion Log, Monday 26th May"></p>
<p><img src="/images/note2.webp" alt="Notebook note: On whether verbal abuse and violence in childhood affect adults"></p>

---

However, whether this proved effective or not, no cognitive decline occurred.

As a result, permission to use smartphones and computers was granted within a month, and my recovery may have accelerated.

## Record of Setting Up a VPS and Battling Ghost

For some reason, as soon as I was granted permission to use a computer, I started writing on Hatena Blog.

I thought that by recording my own experiences, I might be able to prevent cognitive decline.

However, customising Hatena Blog's templates proved tedious,

<p class="pink">so for some reason, I decided to set up a VPS, install Ghost, and write my blog there instead. </p>

I present my records from that time exactly as they were.

---

### The nurse call bell might ring, but no one notices the computer's error (scream).

Well, normally, when you hear about involuntary admission to a psychiatric hospital, you imagine quiet recuperation, right?

But me? I was fully utilising my own mobile WiFi in the hospital, setting up a VPS on my laptop, and completely absorbed in customising my Ghost blog.

That was probably the case (manic, you see. Complicated).

Whenever the nurses spotted me, they'd think ‘What on earth is this person doing...?’ but would always say ‘**That's amazing!**’, so I suppose <font color="#60b86b">I must be a normal patient</font> (probably, or maybe not?).

I was admitted on 19th May, and on 2nd July, during a dermatology appointment, I popped home and brought my computer back. The doctor gave permission that very same day.

<strong class="big">What a brilliant doctor. </strong>

With delusions and all, a computer is essential. I get it.

(<font color="#60b86b">What on earth is this person talking about?</font>)

Incidentally, internet use wasn't permitted for about a month, so apologies for that.

---

### The Epic Battle with Ghost (VPS Setup, Ghost Installation, DB Errors)

Ghost, you see, is this open-source blog platform.

It's simple and rather smart, but customising themes is bloody hard work.
Whilst fiddling with CSS, I had moments where I thought, ‘<font color="#b492db">This is my blog, right?</font>’ – I got lost so many times.

Honestly, there were countless moments when I thought it'd be quicker to just throw it at an AI and have it make a mock-up.

<b class="pink">(You're probably thinking “former designer? Yeah right”, right? Well, yes, haha)</b>

When MySQL was unstable and the database nearly crashed, my heart rate genuinely shot up. Backups? I hadn't made any (laughs).
But somehow I managed to recover it, and the sense of achievement when I got the latest posts perfectly lined up on the homepage was immense.

Also, custom pagination was tricky and there wasn't much info available,
so for that customisation and the table of contents issue – where it wouldn't jump unless the heading was in English –
I wrote some JS to insert sequential numbers into the heading ID attributes and used Todbot to handle it.

**My improvisational skills really shine through here, don't they?**

---

### The Meaning of Blogging in Hospital

Why am I blogging in this environment?

Simply put, if I don't get the ideas out of my head, I feel like I'll explode.

Writing about social themes on Ghost, technical topics on Qiita, or tweeting about music on X.

All of it is like my ‘proof of life’.

Even during hospitalisation, this time spent creating something makes me feel a sense of freedom.

…It’s rather ironic that the frustration of being confined to a private room sparks creativity, isn’t it? lol

### Finally

Here I am, even in hospital, setting up a VPS, wrestling with Ghost, writing this blog.

But **I reckon it’s a problem everyone faces.**

This time, it might have felt a bit heavy – probably too relatable for the average reader to find interesting.

Why? Because neither doctors, patients, nor nurses find it strange. (**Scary, lol.**

**It's probably just too ordinary, haha**

I'd be chuffed if you could take it as just an everyday diary entry.

As of 30th July 2025, I'm now on voluntary admission.

My Ghost struggles are documented here. (Technical details are covered here.)

> [The story of trying to set up a server using Ghost and Conoha VPS, but giving up and paying for Ghost PRO instead
](https://qiita.com/naomina121/items/8bcdaf5a550a77ec2dc6)

---

## Summary

This time, I shared my record of setting up a VPS and wrestling with Ghost during my involuntary hospitalisation.
There's no doubt my mood was off,
but as part of my metacognition, I was able to objectively observe and record my own actions.

**I was reminded that programming is an extremely effective means of training metacognition. However, as it can induce a sustained flow state, it can sometimes create a sensation akin to mania, which I feel requires caution.**

---

<div class="note">
  <strong>Note:</strong> A VPS (Virtual Private Server) refers to a dedicated server that is virtually partitioned.

Ghost is an open-source blog platform characterised by its simple, modern design. <br>
  Combining these allows you to build your own dedicated blog environment.
</div>

## Preview of Next Time [‘Hold on, is that really true?’ – Cultivating ‘Metacognition’ to Avoid Being Swept Away by Information](/info-literacy/metacognition-mental-health/)

↑ Click the title to view

[Next time](/info-literacy/metacognition-mental-health/), we'll explore the importance of metacognition, linking it to information literacy.

I'll also touch on why I focus on cognitive functions and metacognition, so do take a look.
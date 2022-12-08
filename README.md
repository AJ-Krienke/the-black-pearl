# The Black Pearl Fine Dining Restaurant

#### \*\* Update - It was originally intended to use Redux for state and NextJs for routing and pre-rendering but I decided to keep this a React project. I figured it better to have a separate project to showcase nextjs or I can work on migrating to NextJs later on.

## Concept

This will be a multifunctional website to showcase the various skills and concepts I understand as well as to show my process for building a website.

The website will be multifunctional in the following way:

### Landing Page

The landing page will be the page a user will arrive on when not logged in. The purpose of this page is to provide any visitors with the information they would be looking for on first contact with the site. The secondary purpose of the landing page is to encourage users to sign up and become members of the website to further improve marketing campaigns. To further incentivize users to sign up, there will be several member only benefts and events that are exclusively for members.

### Member Page

The member page will be to provide exclusive access to certain benefits and events and also offer wine or cocktail recommendations to members (based either on a menu item or to customer tastes based on a series of questions).

### Crew Page

The crew page will be where a crew member will manage their tables, print checks, ring items up, and remove items from the checks. It will be a simple interface with large button and be optimized for speed of use so that the crew members will be able to waste little time on the point of sale.

## Design

The website will be upscale to reflect the high quality product and services the restaurant offers. The restaurant is of course completely fictional. This style of website was chosen because it is very challenging to make a website that is both creative, and upmarket.

## Build Methodology

A website of this complexity can quickly become heavy and weighed down with code bloat. The quickest way to deliver in keeping with agile methodology will be to start with one section at a time, filter down to the smallest possible components and then build backup until the page is complete, section by section. This will ensure maximum code re-use in keeping with the DRY methodology. CSS pre-processors won't be used but global styles will be provided by plain old CSS and local stylingto each component will be provided by JavaScript style imports.

Web acessability is maintained in this website by using semantic html to build the individual components as well as the page layouts. Some components may not seem semantically pure but they are built with the overall layout in mind so that the final rendered page is as acessible as it can be and doesn't suffer from overly complicated tree structures. Ultimately it will be the final page structure that will be read by screen readers and not the individual components themselves.

Minimal libraries will be used in order to keep the site as lean as possible and a strong emphasis is placed on reactivity (otherwise what would the point of using React be...).

So, without further ado, it's time to get on with it.

# StartGatsby

## Features
1. Write your blog in markdown.
2. Filter with category
3. Multiple Pages

## Preview
![Blog Preview](https://github.com/nnnkit/gatsby-theme/blob/master/packages/gatsby-theme-startgatsby/blog-preview.jpg)

## Steps

1. Create a folder

2. `npm init -y`

3. `npm install react react-dom gatsby gatsby-theme-startgatsby`

4. create a file called `gatsby.config.js` and change the below information with you own details.

```js
module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-startgatsby",
      options: {
        name: "Nova Blog",
        title: "Easiest way to create a blog!",
        description: "Gatsby blog starter ...",
        social: {
          facebook: "altcampus",
          twitter: "altcampus",
          github: "altcampus",
          email: "sample@example.com"
        }
      }
    }
  ]
};
```
5. In your root directory run this command `mkdir -p posts/01`

6. Create a post file `cd posts/01 && touch learn-react.md`

7. Add a smaple post in `learn-react.md` it will look something like this

```md
---
slug: /firstpost
date: 2019-05-08
title: Sample Post For Blog
description: MDX Example Description ...
categories: ["react", "node"]
published: true
banner: "./images/banner.jpeg"
---

Showcasing how MDX for Gatsby.js works ... The Counter component is imported explicitly, but since we are using MDXProvider, we can also define global components which don't need to be imported (e.g. Link, YouTube).

## A React component in Markdown (imported component):

## Code Snippet

```jsx{1,4-6}
import React from "react";

const Counter = initialCounter => {
  const [counter, setCounter] = React.useState(initialCounter);

  const onIncrement = () => {
    setCounter(c => c + 1);
  };

  const onIncrement = () => {
    setCounter(c => c - 1);
  };

  return (
    <div>
      {counter}

      <div>
        <button onClick={onIncrement} type="button">
          Increment
        </button>
        <button onClick={onDecrement} type="button">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

```

7. Add any image and update the `learn-react.md` with the image location.

8. Run `gatsby develop`

9. Congrats 🤗 you can deploy your website now.

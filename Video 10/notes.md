# Audio, Video and media Elements in HTML

## Attributes for <video> Tag
- src: Specifies the path to the video file.
- controls: Adds video controls, like play, pause, and volume.
- autoplay: Automatically starts playing the video when the page loads.
- loop: Repeats the video once it ends.
- muted: Mutes the video by default.
- poster: Specifies an image to be displayed before the video starts playing.
- width and height: Specifies the dimensions of the video.

## Attributes for <audio> Tag
- src: Specifies the path to the audio file.
- controls: Adds audio controls, like play, pause, and volume.
- autoplay: Automatically starts playing the audio when the page loads.
- loop: Repeats the audio once it ends.
- muted: Mutes the audio by default.
- preload: Specifies if and how the audio should be loaded when the page loads ('auto', 'metadata', 'none').
 

The "preload" attribute can have the following values:

- none: This is the default value. It indicates that the browser should not preload the audio file at all. The audio file will only start downloading when the user initiates playback.

- metadata: This value tells the browser to preload only the metadata of the audio file, such as its duration and basic information about the audio. This can be useful if you want to display the audio duration to the user without fully loading the audio data.

- auto: This value instructs the browser to preload the entire audio file as much as possible without delaying the loading of other important page content. The browser will try to load the audio file in the background so that it's ready to play when the user decides to start it.


## SVG in HTML
- Scalable Vector Graphics (SVG) has become an indispensable part of modern web development. SVG enables developers to create high-quality, scalable graphics that look crisp at any size or resolution. In this blog post, we'll explore the basics of using SVG in HTML, its benefits, and some practical examples.

### What is SVG?
- SVG stands for Scalable Vector Graphics. Unlike raster images like PNGs or JPGs, SVGs are not pixel-based. They're composed of vectors—mathematical formulas that describe shapes, paths, and fills. This means SVGs can be resized without losing quality.

### Why Use SVG?
- Scalability
SVG images can be scaled indefinitely without losing quality, which is ideal for responsive web design.

- File Size
SVG files are often smaller than their raster counterparts, especially for simple shapes and icons.

- Flexibility
SVGs can be styled, animated, and manipulated using CSS and JavaScript.

### How to Embed SVG in HTML
SVG can be embedded in HTML in several ways:

- Inline SVG: Directly writing the SVG XML code within HTML.
- Using an <img> tag: Point the src attribute to an SVG file.
- Using CSS: Setting SVG as a background image in a CSS file.


## iFrames in HTML
iFrames, or Inline Frames, are an integral part of modern web development. They allow you to embed another HTML page within your current page. In this blog, we'll delve into the utility of iFrames, their attributes, and some use-cases.

### What is an iFrame?
An iFrame is an HTML element that enables an inline frame for the embedding of external content. Essentially, you can load another web page within a designated area of your current webpage.

### Why Use iFrames?
iFrames offer a variety of use-cases:

- Content Isolation: iFrames allow you to isolate third-party content, which can improve security.
- Modularity: Easily embed external plugins, widgets, or content.
- Resource Separation: Content within an iFrame can load separately from the rest of the page.
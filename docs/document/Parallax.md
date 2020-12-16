# 视差动画

Demo

<ClientOnly>
  <Parallax/>
</ClientOnly>


``` javascript
const a = new Totalizer();
a.add({
    el: document.getElementById('a'),
    props: {
    translateX: ["50px", "-50px"],
    },
});
const b = new Totalizer();
b.add({
    el: document.getElementById('b'),
    props: {
    translateX: ["-50px", "50px"],
    },
});
const c = new Totalizer();
c.add({
    el: document.getElementById('c'),
    props: {
    translateX: ["50px", "-50px"],
    },
});
const content = document.getElementById('content');
content.addEventListener("mousemove", (e) => {
    const process = (e.clientX - content.offsetLeft)/ content.offsetWidth;
    a.process(process);
    b.process(process);
    c.process(process);
});
```